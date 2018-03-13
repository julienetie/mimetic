import mimetic from '../src/index';

const { kill, revive } = mimetic();

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