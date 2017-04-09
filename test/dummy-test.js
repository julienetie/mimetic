import { expect } from 'chai';

describe('test', () => {
    it('Should be true', () => {
        expect(true).to.be.true;
    });

    it('Should be false', () => {
    	expect(false).to.be.false;
    })

    it('Should fail', ()=>{
    	expect(false).to.be.true;
    })
});
