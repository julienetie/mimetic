import resizeRootFontSize from '../src/resize-root-font-size';
import mimetic from '../src/index';

const { expect } = chai;

const preCalculatedValues = {
    "innerWidth": 1024,
    "outerWidth": 1024,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1,
    "calculatedDPR": 1,
    "rootFontSize": 1.5, // Root font size exagerated to x1.5 = '24px' 
    "enableScale": true,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 1024,
    "defaultDPR": 1
}


const emulated1080P = {
  "innerWidth": 1920,
  "outerWidth": 1920,
  "isDevicePixelRatioDefault": true,
  "relativeDesignWidth": 1024,
  "cutOff": 640,
  "rootElement": document.documentElement,
  "designWidthRatio": 1.875,
  "calculatedDPR": 1,
  "rootFontSize": 1,
  "enableScale": true,
  "preserveDevicePixelRatio": false,
  "viewportWidth": 1920,
  "defaultDPR": 1
}


const getRootFontsize = (rootElement) => window.getComputedStyle(rootElement).getPropertyValue('font-size');

let rootFontSize;
describe('resizeRootFontSize', function() {

    it('Should exist', () => {
        expect(resizeRootFontSize).to.be.a('function');
    });

    it('Should have a root font size of 24px given the preCalculatedValues for XGA', function() {
        resizeRootFontSize(preCalculatedValues);
        rootFontSize = getRootFontsize(document.documentElement);
       	console.log(rootFontSize)
      	expect(rootFontSize).to.equal('24px');
    });

    it('Should have a root font size of 30px given the preCalculatedValues for 1080p', function() {
        resizeRootFontSize(emulated1080P);
        rootFontSize = getRootFontsize(document.documentElement);
       	console.log(rootFontSize)
      	expect(rootFontSize).to.equal('30px');
    });
});
