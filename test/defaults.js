import defaults from '../src/defaults';
const { expect } = chai;
const defaultsKeys = Object.keys(defaults);


describe('defaults', () => {
    it('Should consist of properties', () => {
        expect(defaultsKeys).to.have.length.above(1);
    });
});