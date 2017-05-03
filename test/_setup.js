import jsdom from 'jsdom';
import { expect } from 'chai';

global.expect = expect;
global.document = jsdom.jsdom('<html></html>');
global.window = document.defaultView;
global.Element = global.window.Element;
window.isNode = true;
window.matchMedia = function(){
	return {matches: true};
}
window.screen.width = 1920;
window.screen.height = 1080;