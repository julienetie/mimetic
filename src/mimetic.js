import fastdomMain from '../libs/fastdom';
import fastdomPromised from '../libs/fastdom-promised';
import resizilla from '../libs/resizilla';

const fastdom = fastdomMain.extend(fastdomPromised);

// unit  name  equivalence
// cm  centimeters 1cm = 96px/2.54
// mm  millimeters 1mm = 1/10th of 1cm
// q quarter-millimeters 1q = 1/40th of 1cm
// in  inches  1in = 2.54cm = 96px
// pc  picas 1pc = 1/6th of 1in
// pt  points  1pt = 1/72th of 1in
// px  pixels  1px = 1/96th of 1in

var options = {};

// Design to this width
options.designWidth = 1024;

// Add tags to exclude here
options.excludeTags = ['script', 'canvas'];

// Interpolate tags to preserve animation state
options.interpolateTags = []

// Scale font-size
options.mimeticFonts = true;

// Scale line-height 
options.mimeticLineHt = true;

// Scale margin 
options.mimeticMargin = true;

// Scale padding  
options.mimeticPadding = true;

// For designs that exceed the overflow of the initial contiaining block.
options.infinateCanvas = false;

// Performance {0} vs cosmetic accuracy {4}
options.fidelity = 3;

options.delay = 17;

var CSSUnits = [{
  unit: 'px',
  //  1 / 16
  REMFactor: 0.0625
}, {
  unit: 'pt',
  // 96 / 72 / 16
  REMFactor: 0.08333333333
}, {
  unit: 'em',
  // 1
  REMFactor: 1
}, {
  unit: 'rem',
  // 1
  REMFactor: 1
}, {
  unit: 'cm',
  // ???
  REMFactor: 1
}, {
  unit: 'q',
  // ???
  REMFactor: 1
}, {
  unit: 'in',
  // ???
  REMFactor: 1
}, {
  unit: 'pc',
  // 96 / 72 / 12 / 16
  REMFactor: 0.00694444444
}, {
  unit: 'ex',
  // ???
  REMFactor: 1
}, {
  unit: 'ch',
  // ???
  REMFactor: 1
}, {
  unit: 'vw',
  // Needs override.
  REMFactor: 1
}, {
  unit: 'vh',
  // Needs override.
  REMFactor: 1
}, {
  unit: 'vmin',
  // Needs override.
  REMFactor: 1
}, {
  unit: 'vmax',
  // Needs override.
  REMFactor: 1
}];


var CSSFixedUnits = [{
  unit: 'xx-small',
  // 9 / 16
  REMValue: 0.5625
}, {
  unit: 'x-small',
  // 10 / 16
  REMValue: 0.625
}, {
  unit: 'small',
  // 13 / 16
  REMValue: 0.8125
}, {
  unit: 'normal',
  // 16 / 16
  REMValue: 1
}, {
  unit: 'medium',
  // 16 / 16
  REMValue: 1
}, {
  unit: 'large',
  // 18 / 16
  REMValue: 1.125
}, {
  unit: 'x-large',
  // 24 / 16
  REMValue: 1.5
}, {
  unit: 'xx-large',
  // 32 / 16
  REMValue: 2
}];


function mimeticFn(options, CSSUnits, CSSFixedUnits) {

  var
    i,
    designWidthRatio,
    tagNames = [],
    fontSizeArr = [],
    lineHtArr = [],
    tmpMgVal = [],
    tmpPdVal = [];


  var allElements = document.getElementsByTagName('body')[0].getElementsByTagName('*');
  var allElementsArr = [].slice.call(allElements);


  function aliasValueToREM(value) {
    return CSSFixedUnits.filter(function(metricInfo) {
      return value === metricInfo.unit;
    }).shift().REMValue;
  }


  function unitsToREM(value) {
    var suffix = value.replace(/[^a-z]+/gi, '');
    var numberValue = value.replace(/[^\d\.]*/g, '');
    var remValue;

    var metricInfo = CSSUnits.filter(function(metricInfo) {
        return suffix === metricInfo.unit;
      })
      .shift();

    remValue = metricInfo ? numberValue * metricInfo.REMFactor : aliasValueToREM(value);
    return remValue;
  }


  function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
  }

  function sanitizeShorthand(value) {

    var propValDef = value.split(' ');

    var newShorthandArr = propValDef.map(function(val) {

      return unitsToREM(val);
    });

    return newShorthandArr;
  }

  function setBoundaryProp(tempPropVal, propArr, iterI, designWidthRatio) {
    tempPropVal = [];
    i = 0;

    let cleanVal;
    let partVal;
    let propArrIteriLength;

    while (i < propArr[iterI].length) {
      cleanVal = designWidthRatio * propArr[iterI][i];
      cleanVal = !cleanVal ? 0 : cleanVal.toFixed(2);
      tempPropVal.push(cleanVal + 'rem');


      propArrIteriLength = propArr[iterI].length;

      if (i === propArrIteriLength - 1) {
        console.log(tempPropVal)
        return tempPropVal.join(' ');
      }
      i++;
    }

  }



  function processElements() {
    const marginArr = [];
    const paddingArr = [];
    /**
     * Remove all elements to be ignored.
     */
    const remove = options.excludeTags;
    const cleanElements = allElementsArr.filter(function(element, i) {
      return remove.every(function(excludeValue) {
        return excludeValue !== element.nodeName.toLowerCase();
      });
    });

    const cleanElementsLength = cleanElements.length;

    let sanMarg;
    let sanPad;

    for (let i = 0; i < cleanElementsLength; i++) {
      sanMarg = sanitizeShorthand(
        computedStyle(
          cleanElements[i], 'margin')
      )
      marginArr.push(sanMarg);

      sanPad = sanitizeShorthand(
        computedStyle(
          cleanElements[i], 'padding')
      )
      paddingArr.push(sanPad);
    }


    return { cleanElements, marginArr, paddingArr };
  }

  const cleaned = processElements();

  function mimeticScale() {


    const cleanElementsLength = cleaned.cleanElements.length;
    const winWidth = window.innerWidth;
    const body = document.body;
    const optionsDesignWidth = options.designWidth;

    let designWidthRatio;
    let cleanedEl;
    let marginVal;
    let paddingVal;

    // console.log(tmpMgVal, marginArr)


    const windowExceedsDesignWidth = winWidth > optionsDesignWidth;
    // Set design width ratio.
    if (windowExceedsDesignWidth) {
      designWidthRatio = winWidth / options.designWidth;
    } else {
      designWidthRatio = optionsDesignWidth;
    }


    if (windowExceedsDesignWidth) {
      fastdom.mutate(() => {
        body.style.fontSize = designWidthRatio + 'rem';


        for (var i = 0; i < cleanElementsLength; i++) {
          // if (windowExceedsDesignWidth) {
          cleanedEl = cleaned.cleanElements[i];

          marginVal = setBoundaryProp(tmpMgVal, cleaned.marginArr, i, designWidthRatio);
          paddingVal = setBoundaryProp(tmpMgVal, cleaned.paddingArr, i, designWidthRatio);

          cleanedEl.style.margin = marginVal;
          cleanedEl.style.padding = paddingVal;

        }
      });
    }

  }


  mimeticScale();
  resizilla(mimeticScale, options.delay || 180, options.incept || false);
}

window.addEventListener("DOMContentLoaded", function() {
  mimeticFn(options, CSSUnits, CSSFixedUnits);
});
// }());





/// clean style
// else{
// // When below 1025 the font-size property is removed from the style attribute
// // preventing rendering issues for downsizing. 
// var inlineStyle = cleanElements[i].getAttribute('style');
// var inlineStyleAsArray;
// if (inlineStyle) {
//   var test = inlineStyle
//     .split('; ')
//     .filter(function(style) {
//       // 1) exclude elements from being modified when within 1024, 
//       // 2) animate using classes only, 
//       // 3) Ideally you should not be animating margins and padding, use transform and translate. 
//       return !['margin', 'padding'].some(function(property) {
//         return style.indexOf(property) >= 0;
//       });
//     }).join('; ');
//   cleanElements[i].setAttribute('style', test);
// }
//}
