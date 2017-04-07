const element = (tag) => document.createElement(tag);

describe('create-element element(tagName)', ()=> {
  it('Should be have the specified tagName', ()=> {
    let img = element('div');
    expect(img.tagName === 'DIV');
  });
});