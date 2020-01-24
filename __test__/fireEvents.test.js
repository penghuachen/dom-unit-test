const { fireEvent, getByTestId } = require('@testing-library/dom');
/*
  測試情境: 點擊按鈕時， span 中的數字會 +1。
*/
function domExample() {
  let i = 0;
  const div = document.createElement('DIV');
  div.innerHTML = `
    <span data-testid="span">${ i }</span>
    <button data-testid="submit">Submit</button>
  `;

  const button = div.querySelector('button');
  const span = div.querySelector('span');
  button.addEventListener('click', function () {
    i++;
    span.textContent = i;
  })
  return div;
}

test('Increase number equal to 1', () => {
  const container = domExample();
  
  // 透過 getByTestId 方式找到 dom 中的 button
  const submit = getByTestId(container, 'submit');
  
  // 透過 fireEvent 觸發 dom 中的 event
  fireEvent.click(submit);
  
  expect(getByTestId(container, 'span').textContent).toBe('1');
})


test('Increase number equal to 1', () => {
  const container = domExample();
  
  // 另一種透過 fireEvent 觸發 dom 中 event 的方式
  fireEvent(
    getByTestId(container, 'submit'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0
    })
  );
  
  expect(getByTestId(container, 'span').textContent).toBe('1');
})