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


const mobile = {
    "innerWidth": 300,
    "outerWidth": 300,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 0.2929, // innerWidth / relativeDesignWidth.
    "calculatedDPR": 1,
    "rootFontSize": 1,
    "enableScale": true,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 300,
    "defaultDPR": 1
}

const noScale = {
    "innerWidth": 1920,
    "outerWidth": 1920,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1.875,
    "calculatedDPR": 1,
    "rootFontSize": 1,
    "enableScale": false,
    "preserveDevicePixelRatio": false,
    "viewportWidth": 1920,
    "defaultDPR": 1
}

const iPadPro = {
    "innerWidth": 1024,
    "outerWidth": 1024,
    "isDevicePixelRatioDefault": true,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1,
    "calculatedDPR": 2,
    "rootFontSize": 1,
    "enableScale": true,
    "preserveDevicePixelRatio": true,
    "viewportWidth": 2048,
    "defaultDPR": 2
};

const getRootFontsize = (rootElement) => window.getComputedStyle(rootElement).getPropertyValue('font-size');

after(() => {
    document.documentElement.removeAttribute('style');	
});


let rootFontSize;
describe('resizeRootFontSize', () => {

    it('Should exist', () => {
        expect(resizeRootFontSize).to.be.a('function');
    });

    it('Should set a root font size of 24px given the preCalculatedValues for XGA', () => {
        resizeRootFontSize(preCalculatedValues);
        rootFontSize = getRootFontsize(document.documentElement);
        // console.log(rootFontSize)
        expect(rootFontSize).to.equal('24px');
    });

    it('Should set a root font size of 30px given the preCalculatedValues for 1080p', () => {
        resizeRootFontSize(emulated1080P);
        rootFontSize = getRootFontsize(document.documentElement);
        // console.log(rootFontSize)
        expect(rootFontSize).to.equal('30px');
    });

    it('Should set a root font size of 16px when below the cutOff threshold', () => {
        resizeRootFontSize(mobile);
        rootFontSize = getRootFontsize(document.documentElement);
        // console.log(rootFontSize)
        expect(rootFontSize).to.equal('16px');
    });

    it('Should not set the root font size to 30px as enableScale is disabled', () => {
        resizeRootFontSize(noScale);
        rootFontSize = getRootFontsize(document.documentElement);
        // console.log(rootFontSize)
        expect(rootFontSize).to.equal('16px');
    });

    it('Should preserve the original devicePixelRatio when preserveDevicePixelRatio is enabled', () => {
        resizeRootFontSize(iPadPro);
        rootFontSize = getRootFontsize(document.documentElement);
        // console.log(rootFontSize)
        expect(rootFontSize).to.equal('32px');
    });
});
