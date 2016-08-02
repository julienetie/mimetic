(function(window, document, undefined) {
  'use strict';

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
      pxVal,
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


    var util = {
        computedStyle: function(el, prop) {
          var getComputedStyle = window.getComputedStyle;
          var style = getComputedStyle ? getComputedStyle(el) : el.currentStyle;
          if (style) {
            return style[prop.replace(/-(\w)/gi, function(word, letter) {
              return letter.toUpperCase();
            })];
          }
        },


        getPixelVal: function(prop) {
          if (prop.indexOf("pt") > -1) {
            prop = parseInt(prop, 10) * 96 / 72;
          } else {
            prop = parseInt(prop, 10);
          }
          return prop;
        },


        toArray: function(x) {
          for (var i = 0, a = []; i < x.length; i++) a.push(x[i]);
          return a;
        },


        nameValTopx: function(val) {

          if (val.indexOf('px') > -1) {
            pxVal = parseInt(val, 10);
          } else if (val.indexOf('pt') > -1) {
            pxVal = parseInt(val, 10) * 96 / 72;
          } else if (val.indexOf('em') > -1) {
            pxVal = parseInt(val, 10) * 16;
          } else {

            switch (val) {
              case 'xx-small':
                pxVal = 9;
                break;
              case 'x-small':
                pxVal = 10;
                break;
              case 'small':
                pxVal = 13;
                break;
              case 'normal':
                pxVal = 16;
                break;
              case 'medium':
                pxVal = 16;
                break;
              case 'large':
                pxVal = 18;
                break;
              case 'x-large':
                pxVal = 24;
                break;
              case 'xx-large':
                pxVal = 32;
                break;
              case 'larger':
                console.log('font-size: "larger" is not supported');
                pxVal = 16;
                break;
              case 'smaller':
                console.log('font-size: "smaller" is not supported');
                pxVal = 16;
                break;
            }
          }
          return pxVal;

        },


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

          fontSizeArr.push(
            util.nameValTopx(
              util.computedStyle(
                allElements[i], 'font-size')
            )
          );

          lineHtArr.push(
            util.nameValTopx(
              util.computedStyle(
                allElements[i], 'line-height')
            )
          );

          marginArr.push(
            util.sanitizeShorthand(
              util.computedStyle(
                allElements[i], 'margin')
            )
          );

          paddingArr.push(
            util.sanitizeShorthand(
              util.computedStyle(
                allElements[i], 'padding')
            )
          );

        }

        cleanArr = tempArr;

      }()),


      mimetic = {
        scale: function() {

          var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if (winWidth > 1024) {

            designWidthRatio = (winWidth / (options.designWidth * 0.1));
            for (var i = 0; i < cleanArr.length; i++) {

              if (tempArr[i] !== undefined) {
                allElements[i].style.fontSize = Math.round(designWidthRatio * (fontSizeArr[i] / 10)) + 'px';
                allElements[i].style.lineHeight = Math.round(designWidthRatio * (lineHtArr[i] / 10)) + 'px';
                util.setBoundaryProp('margin', tmpMgVal, marginArr, i);
                util.setBoundaryProp('padding', tmpPdVal, paddingArr, i);

              } else {
                // 
              }
            }
          }
        }
      };

    mimetic.scale();
    resizilla(mimetic.scale, 180, false);
  }

  window.addEventListener("load", function(){
      mimeticFn();
  });
}(window, document, undefined));
