import mimetic from '../src';

const { kill, revive } = mimetic();

describe('Mimetic', () => {
    it('Should be a function', () => {
        expect(mimetic).to.be.a('function');
    });

    it('Should return a kill method', () => {
        expect(kill).to.be.a('function');
    });

    it('Should return a revive method', () => {
        expect(revive).to.be.a('function');
    });
});
