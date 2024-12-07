// 1. Скрыть элемент по нажатию кнопки
const btn = document.getElementById('hider');
const text = document.getElementById('text');
btn.addEventListener('click', () => {
    text.style.display = 'none';
});
// 2. Какой обработчик запустится?
button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);
/*
Ответ кажется простым: 1 и 2. Решение даётся легко просто нужно понять как работает JavaScript. 
Он выполняет код последовательно, проверяя каждую строку и выдавая результат.

Ещё один важный момент это различие между addEventListener и onclick. 
removeEventListener не влияет на onclick и onclick работают независимо.

На данный момент понятно почему выводится 2 и частично понятно почему выводится 1. '
removeEventListener задаётся после того как addEventListener сработал и по времени не успевает предотвратить вывод 1.
*/
// 3. Добавить кнопку закрытия
let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
  const btn = document.createElement('button');
  btn.textContent = '[x]';
  btn.className = 'remove-button';

  pane.prepend(btn);

  btn.onclick = () => pane.remove();
}
/*
CSS File
.remove-button {
  position: absolute;
  top: 0;
  right: 8px;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  color: red;
}
*/