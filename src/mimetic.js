(function(window, document, undefined) {
  'use strict';

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
      tempArr = [],
      cleanArr = [],
      fontSizeArr = [],
      lineHtArr = [],
      marginArr = [],
      paddingArr = [],
      tmpMgVal = [],
      tmpPdVal = [];


    var allElements = document.getElementsByTagName('body')[0].getElementsByTagName('*');


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




    var util = {
        convertUnits: function(propDef, iter) {
          var preSfx = propDef[iter].slice(-2);
          var cleanPropDef = parseInt(propDef[iter], 10);
          var suffix = {
            'px': cleanPropDef,
            'em': cleanPropDef * 16,
            '%': 1024 / cleanPropDef,
            'pt': cleanPropDef * 96 / 72,
            cutSuffix: function(suffixType) {
              propDef[iter] = this[suffixType];
              return propDef;
            }
          }.cutSuffix(preSfx);
        },

        sanitizeShorthand: function(value) {
          var propValDef = value.split(' ');

          var newShorthandArr = propValDef.map(function(val) {
            return unitsToREM(val);
          });

          return newShorthandArr;
        },


        setBoundaryProp: function(propType, tempPropVal, propArr, iterI, designWidthRatio) {
          tempPropVal = [];
          i = 0;
          while (i < propArr[iterI].length) {
            // console.log(designWidthRatio)
            tempPropVal.push(parseFloat(designWidthRatio * propArr[iterI][i]).toFixed(3) + 'rem');
            if (i === propArr[iterI].length - 1) {
              console.log(tempPropVal)
              allElements[iterI].style[propType] = tempPropVal.join(' ');
            }
            i++;
          }
        },
      },


      elemLoop = (function() {

        var remove = options.excludeTags;
        for (var i = 0; i < allElements.length; i++) {
          tempArr.push(allElements[i].tagName);
          for (var j = 0; j < remove.length; j++) {
            if (tempArr[i] === remove[j].toUpperCase())
              tempArr[i] = undefined;
          }

          fontSizeArr.push(
            unitsToREM(
              computedStyle(
                allElements[i], 'font-size')
            )
          );

          lineHtArr.push(
            unitsToREM(
              computedStyle(
                allElements[i], 'line-height')
            )
          );

          marginArr.push(
            util.sanitizeShorthand(
              computedStyle(
                allElements[i], 'margin')
            )
          );

          paddingArr.push(
            util.sanitizeShorthand(
              computedStyle(
                allElements[i], 'padding')
            )
          );

        }

        cleanArr = tempArr;

      }()),


      mimetic = {
        scale: function() {
          var winWidth = window.innerWidth;



          for (var i = 0; i < cleanArr.length; i++) {
            if (winWidth > 1024) {
              var designWidthRatio = winWidth / options.designWidth;
              if (tempArr[i]) {
                // FONT SIZE
                allElements[i].style.fontSize = parseFloat(designWidthRatio * fontSizeArr[i]).toFixed(3) + 'rem';
                // LINE HEIGHT
                allElements[i].style.lineHeight = parseFloat(designWidthRatio * lineHtArr[i]).toFixed(3) + 'rem';
                // MARGIN
                util.setBoundaryProp('margin', tmpMgVal, marginArr, i, designWidthRatio);
                // PADDING
                util.setBoundaryProp('padding', tmpPdVal, paddingArr, i, designWidthRatio);
              }
            } else {
              // When below 1025 the font-size property is removed from the style attribute
              // preventing rendering issues for downsizing. 
              var inlineStyle = allElements[i].getAttribute('style');
              var inlineStyleAsArray;
              if(inlineStyle){
                var test = inlineStyle
                .split('; ')
                .filter(function(style){
                  return style.indexOf('font-size') == -1;
                }).join('; ');
                allElements[i].setAttribute('style', test)
              }
            }
          }

        }
      };

    mimetic.scale();
    resizilla(mimetic.scale, 150, false);
  }

  window.addEventListener("DOMContentLoaded", function() {
    mimeticFn(options, CSSUnits, CSSFixedUnits);
  });
}(window, document, undefined));
