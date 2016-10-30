import fastdom from '../libs/fastdom';
import resizilla from '../libs/resizilla';

// export default (function(){



console.log(fastdom)

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
      marginArr = [],
      paddingArr = [],
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
      while (i < propArr[iterI].length) {

        tempPropVal.push(parseFloat(designWidthRatio * propArr[iterI][i]).toFixed(2) + 'rem');
        if (i === propArr[iterI].length - 1) {
          return tempPropVal.join(' ');
        }
        i++;
      }

    }



    function processElements() {
      var remove = options.excludeTags;
      var cleanElements = allElementsArr.filter(function(element, i) {
        return remove.every(function(excludeValue) {
          return excludeValue !== element.nodeName.toLowerCase();
        });
      });

      cleanElements.forEach(function(element) {

        marginArr.push(
          sanitizeShorthand(
            computedStyle(
              element, 'margin')
          )
        );

        paddingArr.push(
          sanitizeShorthand(
            computedStyle(
              element, 'padding')
          )
        );
      });

      return cleanElements;
    }



    function mimeticScale() {
      var cleanElements = processElements();
      var winWidth = window.innerWidth;
      var body = document.body;
      var bodyStyle;
      var bodyStyeFontWithPX;
      var bodyFontSize;
      var designWidthRatio;


      if (winWidth > options.designWidth) {
        designWidthRatio = winWidth / options.designWidth;

        console.log('font-size body', designWidthRatio)
          // FONT SIZE
        body.style.fontSize = designWidthRatio + 'rem';
      }
window.requestAnimationFrame(function(){


      for (var i = 0; i < cleanElements.length; i++) {
        if (winWidth > options.designWidth) {
          // MARGIN
          cleanElements[i].style.margin = setBoundaryProp(tmpMgVal, marginArr, i, designWidthRatio);
          // PADDING
          cleanElements[i].style.padding = setBoundaryProp(tmpPdVal, paddingArr, i, designWidthRatio);
        } else {
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
        }
      }

})

    }


    mimeticScale();
    resizilla(mimeticScale, options.delay || 180, options.incept || false);
  }

  window.addEventListener("DOMContentLoaded", function() {
    mimeticFn(options, CSSUnits, CSSFixedUnits);
  });
// }());