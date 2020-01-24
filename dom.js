
// 使用者行為： 點擊按鈕時， span 中的數字會 +1。
const span = document.querySelector('span');
const button = document.querySelector('button');
let i = 0;
button.addEventListener('click', increment);
function increment() {
  i++;
  span.textContent = i;
}