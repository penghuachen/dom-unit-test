// const  sum  = require('../dom');

const { getByLabelText } = require('@testing-library/dom');

function domExample() {
  // return dom => here is div 
  const div = document.createElement('DIV');
  const exampleHTML = `
    <label for="example" data-testid="label">Example</label>
    <input id="example" />
  `;
  div.innerHTML = exampleHTML;
  return div;
}

test('Check input id equal to example.', () => {
  // execute domExample function to obtain div.
  const container = domExample();
  
  // use getByLabelText method to query text: Example.
  // (Note: Here label and input need to work together.)
  // see the reason in github : https://github.com/testing-library/dom-testing-library/blob/master/src/__tests__/element-queries.js#L147
  const exampleInput = getByLabelText(container, 'Example');
  
  // use Jest matchers to test.
  expect(exampleInput.id).toBe('example');
})