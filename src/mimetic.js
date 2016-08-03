(function(window, document, undefined) {
    'use strict';

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


    function mimeticFn() {

      var options = {}; // **Only the first two are working on this release**

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
              var preSfx = propDef[iter].slice(-2),
                cleanPropDef = parseInt(propDef[iter], 10),
                suffix = {
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


            sanitizeShorthand: function(propVal) {
              var propValDef = propVal.split(' ');
              for (var i = 0; i < propValDef.length; i++) {
                this.convertUnits(propValDef, i);
              }
              return propValDef;

            },


            setBoundaryProp: function(propType, tempPropVal, propArr, iterI) {
              tempPropVal = [];
              i = 0;
              while (i < propArr[iterI].length) {
                tempPropVal.push(Math.round(designWidthRatio * (propArr[iterI][i] / 10)) + 'px');
                if (i === propArr[iterI].length - 1) {
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

              // console.log('font-size', computedStyle(allElements[i], 'line-height'))

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
              if (winWidth > 1024) {

                designWidthRatio = winWidth / options.designWidth * 0.1;
                for (var i = 0; i < cleanArr.length; i++) {

                  if (tempArr[i] !== undefined) {
                    allElements[i].style.fontSize = Math.round(designWidthRatio * (fontSizeArr[i] / 10)) + 'rem';
                    allElements[i].style.lineHeight = Math.round(designWidthRatio * (lineHtArr[i] / 10)) + 'rem';
                    util.setBoundaryProp('margin', tmpMgVal, marginArr, i);
                    util.setBoundaryProp('padding', tmpPdVal, paddingArr, i);

                  }
                }
              }
            }
          };

        mimetic.scale();
        resizilla(mimetic.scale, 180, false);
      }

      window.addEventListener("load", function() {
        mimeticFn();
      });
    }(window, document, undefined));
