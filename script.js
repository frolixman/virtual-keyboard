/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import { keyboardArr, keyboardCodedArr } from './assets/keyboard-container.js';

const main = document.createElement('main');                                                      // main
main.className = 'main';
document.body.append(main);

main.style.height = '100vh';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';




const mainContainer = document.createElement('div');                                             // main container
mainContainer.className = 'main-container';
main.append(mainContainer);

mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.justifyContent = 'space-between';
mainContainer.style.maxWidth = '890px';
mainContainer.style.height = '700px';




const textArea = document.createElement('textarea');                                             // text area
textArea.className = 'textarea';
textArea.id = 'textareaID';
mainContainer.append(textArea);

const textAreaForFocus = document.createElement('textarea'); // необходимо для удержания фокуса на первом поле
mainContainer.append(textAreaForFocus);
textAreaForFocus.style.position = 'absolute';
textAreaForFocus.style.left = '-100%';

textareaID.focus(); // фокус на textarea и удерживать там несмотря на TAB
textareaID.onblur = () => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    textareaID.focus();
  }
};

textArea.style.width = '100%';
textArea.style.height = '38%';
textArea.style.boxSizing = 'border-box';
textArea.style.fontSize = '30px';
textArea.placeholder = 'Не успеваю доделать работу(( Буду благодарен, если сможете глянуть на нее в финальный день кроссчека! Зарнее спасибо!';




const virtualKeyboardContainer = document.createElement('div');                                  // keyboard container
virtualKeyboardContainer.className = 'virtual-keyboard-container';
mainContainer.append(virtualKeyboardContainer);

virtualKeyboardContainer.style.display = 'flex';
virtualKeyboardContainer.style.flexWrap = 'wrap';
virtualKeyboardContainer.style.justifyContent = 'space-between';
virtualKeyboardContainer.style.rowGap = '5px';
virtualKeyboardContainer.style.padding = '10px';
virtualKeyboardContainer.style.boxSizing = 'border-box';
virtualKeyboardContainer.style.border = '1px solid black';
virtualKeyboardContainer.style.backgroundColor = '#4e4e4e';



let keyboardCase = 'lowercase';
function initKeyboard() {
  for (let i = 0; i < keyboardArr.length; i++) {
    if (i === 14 || i === 28 || i === 42 || i === 56) {
      const keyboardBreak = document.createElement('div');                                        // keyboard button
      keyboardBreak.className = 'break';
      virtualKeyboardContainer.append(keyboardBreak);
      keyboardBreak.style.flexBasis = '100%';
      keyboardBreak.style.height = '0';
    }

    const keyboardBtn = document.createElement('div'); // keyboard button
    keyboardBtn.className = 'keyboard-btn';
    if(keyboardCase === 'uppercase'){
      if(keyboardArr[i].length === 1) {
          keyboardBtn.innerText = keyboardArr[i].toUpperCase();
      } else {keyboardBtn.innerText = keyboardArr[i];}

    } else {
      keyboardBtn.innerText = keyboardArr[i];
    }
    virtualKeyboardContainer.append(keyboardBtn);

    keyboardBtn.style.boxSizing = 'border-box';
    keyboardBtn.style.display = 'flex';
    keyboardBtn.style.justifyContent = 'center';
    keyboardBtn.style.alignItems = 'center';
    keyboardBtn.style.padding = '10px';
    keyboardBtn.style.minWidth = '50px';
    keyboardBtn.style.height = '50px';
    keyboardBtn.style.color = 'white';
    keyboardBtn.style.fontSize = '20px';
    keyboardBtn.style.border = '2px solid black';
    keyboardBtn.style.borderRadius = "5px"
    keyboardBtn.style.cursor = 'pointer';
    keyboardBtn.setAttribute('code', keyboardCodedArr[i]);

    if (i === 54) { keyboardBtn.innerText = '▲'; }                                                        // стрелки клавиатуры
    if (i === 62) { keyboardBtn.innerText = '◀'; }
    if (i === 63) { keyboardBtn.innerText = '▼'; }
    if (i === 64) { keyboardBtn.innerText = '▶'; }

    if (i === 56 || i === 61) { keyboardBtn.innerText = 'Ctrl'; }                                         // кнопка CTRL
    if (i === 57) { keyboardBtn.innerText = 'Win'; }                                                      // кнопка Win
    if (i === 59) { keyboardBtn.style.width = '280px'; }                                                  // кнопка Space

    keyboardBtn.addEventListener('mouseover', () => {                                     // эффект от наведения мыши
      keyboardBtn.style.backgroundColor = '#a1a3a2';
    });
    keyboardBtn.addEventListener('mouseout', () => {
      keyboardBtn.style.backgroundColor = '';
    });
  }
}

initKeyboard();

function switchKeyboardCase() {
  // console.log('caps')
  virtualKeyboardContainer.innerHTML = '';

  if(keyboardCase === 'lowercase') {
    keyboardCase = 'uppercase';
  } else {
    keyboardCase = 'lowercase'
  }

  initKeyboard();
}




document.onkeydown = function (event) {
  const targetBtn = document.querySelector(`.keyboard-btn[code = ${event.code}]`);              // анимация при нажатии на физическую клавиатуру
  targetBtn.style.borderRadius = '45px';
  targetBtn.style.backgroundColor = '#2e2e2e';
  targetBtn.style.transition = '0.1s';
  if(event.code === 'Tab') {
    const str = textArea.value;
    const cursorLocation = textArea.selectionStart;
    textArea.value = str.slice(0, textArea.selectionStart) + '    ' + str.slice(textArea.selectionStart);      //физический Tab
    textArea.selectionStart = textArea.selectionEnd = cursorLocation + 4;
  }

  if(event.code === 'CapsLock') {
    switchKeyboardCase();
  }
};
document.onkeyup = function (event) {
  const targetBtn = document.querySelector(`.keyboard-btn[code = ${event.code}]`);
  targetBtn.style.borderRadius = '5px';
  targetBtn.style.backgroundColor = '#4e4e4e';
};

virtualKeyboardContainer.onmousedown = function (event) {
  if (event.target.className === 'keyboard-btn') {
    const targetBtn = document.querySelector(`.keyboard-btn[code = ${event.target.getAttribute('code')}]`); // анимация при нажатии мышью на виртуальную клавиатуру
    targetBtn.style.borderRadius = '45px';
    targetBtn.style.backgroundColor = '#2e2e2e';
    targetBtn.style.transition = '0.15s';
  }
};
virtualKeyboardContainer.onmouseup = function (event) {
  if (event.target.className === 'keyboard-btn') {
    const targetBtn = document.querySelector(`.keyboard-btn[code = ${event.target.getAttribute('code')}]`);
    targetBtn.style.borderRadius = '5px';
    targetBtn.style.backgroundColor = '#a1a3a2';
  }
};




virtualKeyboardContainer.addEventListener('click', (event) => {                                        // ввод букв в textarea по нажатию мыщью по виртуальной клавиатуре
  if (event.target.className === 'keyboard-btn' && event.target.getAttribute('code') !== 'Backspace'
                                                && event.target.getAttribute('code') !== 'Tab'
                                                && event.target.getAttribute('code') !== 'CapsLock'
                                                && event.target.getAttribute('code') !== 'ShiftLeft'
                                                && event.target.getAttribute('code') !== 'ControlLeft'
                                                && event.target.getAttribute('code') !== 'MetaLeft'
                                                && event.target.getAttribute('code') !== 'AltLeft'
                                                && event.target.getAttribute('code') !== 'Space'
                                                && event.target.getAttribute('code') !== 'AltRight'
                                                && event.target.getAttribute('code') !== 'ControlRight'
                                                && event.target.getAttribute('code') !== 'ShiftRight'
                                                && event.target.getAttribute('code') !== 'Enter'
                                                && event.target.getAttribute('code') !== 'Delete'
                                                && event.target.getAttribute('code') !== 'Backspace') {
    // console.log('textArea.value: ' + textArea.value);
    // console.log('event.target: ' + event.target.getAttribute('code'));
    let str = textArea.value;
    str += event.target.innerText;
    // console.log('str: ' + str)
    textArea.value = str;
    // console.log("new textArea.value: " + textArea.value);
    // console.log('---------------');
  }
});

virtualKeyboardContainer.addEventListener('click', (event) => {
  if (event.target.className === 'keyboard-btn') {
    const str = textArea.value;
    const cursorLocation = textArea.selectionStart;
    switch (event.target.getAttribute('code')) {
      case 'Backspace':                                                                                                           //виртуальный Backspace                                                                                                         
        textArea.value = str.slice(0, textArea.selectionStart - 1) + str.slice(textArea.selectionStart);
        break;

      case 'Delete':
        textArea.value = str.slice(0, textArea.selectionStart) + str.slice(textArea.selectionStart + 1);      //виртуальный Delete
        break;

      case 'Tab':
        textArea.value = str.slice(0, textArea.selectionStart) + '    ' + str.slice(textArea.selectionStart);      //виртуальный Tab
        textArea.selectionStart = textArea.selectionEnd = cursorLocation + 4;
        break;

      case 'Space':
        textArea.value = str.slice(0, textArea.selectionStart) + ' ' + str.slice(textArea.selectionStart);      //виртуальный Tab
        textArea.selectionStart = textArea.selectionEnd = cursorLocation + 1;
        break;

      case 'Enter':
        textArea.value = str.slice(0, textArea.selectionStart) + '\n' + str.slice(textArea.selectionStart);      //виртуальный Tab
        textArea.selectionStart = textArea.selectionEnd = cursorLocation + 1;
        break;

      case 'CapsLock':                                                                                                                //виртуальный CapsLock  
        switchKeyboardCase();
        break;
      default:
        console.log('default');
    }
  }
});