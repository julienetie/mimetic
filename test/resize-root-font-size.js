import resizeRootFontSize from '../src/resize-root-font-size';


const { expect } = chai;


const preCalculatedValues = {
    "windowWidth": 1283,
    "windowOuterWidth": 1920,
    "isDevicePixelRatioDefault": false,
    "relativeDesignWidth": 1024,
    "cutOff": 640,
    "rootElement": document.documentElement,
    "designWidthRatio": 1.2529296875,
    "devicePixelRatioRound": 1.49649,
    "rootFontSize": 1,
    "enableScale": true,
    "preserveDevicePixelRatio": false,
    "clientWidth": 1919,
    "defaultDevicePixelRatio": 1
}

const getRootFontsize = (rootElement) => window.getComputedStyle(rootElement).getPropertyValue('font-size');


describe('resizeRootFontSize', () => {
    it('Should exist', () => {
        expect(resizeRootFontSize).to.be.a('function');
    })

    //@TODO Test is failing as resizeRootFontSize is impure, should contain no DOM APIs.
    it('Should have a root font size of 1.875rem when given the preCalculatedValues', () => {
        resizeRootFontSize(preCalculatedValues);
        const rootFontSize = getRootFontsize(document.documentElement);
        console.log('RootFontSize', rootFontSize);

        // Will incorrectly pass if window width is 1920.
        expect(rootFontSize).to.equal('30px');
        expect(true).to.equal(false);
    })
});
