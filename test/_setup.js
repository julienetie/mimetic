import jsdom from 'jsdom';
import { expect } from 'chai';

global.expect = expect;
global.document = jsdom.jsdom('<html></html>');
global.window = document.defaultView;
global.Element = global.window.Element;
window.isNode = true;
