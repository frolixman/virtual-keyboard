const main = document.createElement("main");                          //main
main.className = "main";
document.body.append(main);

main.style.height = "100vh";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";



const mainContainer = document.createElement("div");                  //main container
mainContainer.className = "main-container";
main.append(mainContainer);

mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "space-between";
mainContainer.style.width = "1000px";
mainContainer.style.height = "700px";



const textArea = document.createElement("textarea");                  //text area
textArea.className = "textarea";
mainContainer.append(textArea);

textArea.style.width = "100%"
textArea.style.height = "38%"
textArea.style.boxSizing = "border-box";
textArea.style.fontSize = "30px"
textArea.placeholder = "Не успеваю доделать работу(( Буду благодарен, если сможете глянуть на нее в финальный день кроссчека! Зарнее спасибо!"



const virtualKeyboardContainer = document.createElement("div");       //keyboard container
virtualKeyboardContainer.className = "virtual-keyboard-container";
mainContainer.append(virtualKeyboardContainer);

virtualKeyboardContainer.style.display = "flex";
virtualKeyboardContainer.style.flexWrap = "wrap";
virtualKeyboardContainer.style.justifyContent = "space-between";
virtualKeyboardContainer.style.rowGap = "10px";
virtualKeyboardContainer.style.columnGap = "10px";
virtualKeyboardContainer.style.justifyContent = "space-between";
// virtualKeyboardContainer.style.width = "1030px";
// virtualKeyboardContainer.style.height = "360px";
virtualKeyboardContainer.style.padding = "10px";
virtualKeyboardContainer.style.boxSizing = "border-box";
virtualKeyboardContainer.style.border = "1px solid black";
virtualKeyboardContainer.style.backgroundColor = "#4e4e4e";



const keyboardArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
                    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 
                    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter',
                    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 
                    'Control', 'Meta', 'Alt', 'Space', 'Alt', 'Control', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];

// const keyboardCodedArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 
//                     'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 
//                     'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 
//                     'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 
//                     'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];



document.onkeydown = function(event) {
  console.log(event);
  // keyboardArr.push(event.key)
  // console.log(keyboardArr)
}

function initKeyboard() {

  for(i = 0; i < keyboardArr.length; i++){
    if(i === 14 || i === 28 || i === 42 || i === 56) {
      const keyboardBreak = document.createElement("div");                    //keyboard button
      keyboardBreak.className = "break";
      virtualKeyboardContainer.append(keyboardBreak);
      keyboardBreak.style.flexBasis = "100%";
      keyboardBreak.style.height = "0";
    }

    const keyboardBtn = document.createElement("div");                    //keyboard button
    keyboardBtn.className = "keyboard-btn";
    keyboardBtn.innerText = keyboardArr[i];
    virtualKeyboardContainer.append(keyboardBtn);
    
    keyboardBtn.style.boxSizing = "border-box";
    keyboardBtn.style.display = "flex";
    keyboardBtn.style.justifyContent = "center";
    keyboardBtn.style.alignItems = "center";
    // keyboardBtn.style.margin = "10px";
    keyboardBtn.style.padding = "10px";
    keyboardBtn.style.minWidth = "50px";
    keyboardBtn.style.height = "50px";
    keyboardBtn.style.color = "white";
    keyboardBtn.style.fontSize = "20px"
    keyboardBtn.style.border = "2px solid black";
    keyboardBtn.style.cursor = "pointer";

    if(i === 54) {keyboardBtn.innerText = "▲";};                                  //стрелки клавиатуры
    if(i === 62) {keyboardBtn.innerText = "◀";};      
    if(i === 63) {keyboardBtn.innerText = "▼"};
    if(i === 64) {keyboardBtn.innerText = "▶";};

    if(i === 56 || i === 61) {keyboardBtn.innerText = "Ctrl";};                    //кнопка CTRL
    if(i === 57) {keyboardBtn.innerText = "Win"};                                  //кнопка Win
    if(i === 59) {keyboardBtn.style.width = "394px"};                              //кнопка Space

    keyboardBtn.addEventListener("mouseover", function() {
      keyboardBtn.style.backgroundColor = "#a1a3a2";
    })
    keyboardBtn.addEventListener("mouseout", function() {
      keyboardBtn.style.backgroundColor = "";
    })
   
  }

}

initKeyboard();