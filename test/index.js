import mimetic from '../src/index';


const { expect } = chai;
const { kill, revive } = mimetic();


after(() => {
    kill();
    console.log('MIMETIC has been killed for index.js');
    // document.documentElement.style.fontSize = '10px';
});


describe('mimetic', () => {
    it('Should exist', () => {
        expect(mimetic).to.be.a('function');
    });

    it('Should contain a kill method', () => {
        expect(kill).to.be.a('function');
    });

    it('Should contain a revive method', () => {
        expect(revive).to.be.a('function');
    });
});
