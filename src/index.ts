import './keyboard.scss'


class Main {
    constructor(parent: HTMLElement){
        const Keyboard = {
            elements: {
                main: null,
                keysContainer: null'
                keys: []
            },

            eventHandlers: {
                oninput: null,
                onclose: null
            },

            properties: {
                value: '',
                capsLock: false
            },

            init() {
                //create main elements
                this.element.main = document.createElement('div');
                this.element.keysContainer = document.createElement('div');

                //setup main elements
                this.elements.main.classList.add('keyboard');
                this.elements.keysContainer.classList.add('keyboard_keys');
                this.elements.keysContainer.appendChild(this.createKeys());

                this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard_key');

                //add to DOM
                this.elements.main.appendChild(this.elements.keysContainer);
                document.body.appendChild(this.element.main);
            },

            createKeys() {
                const fragment = document.createDocumentFragment();
                const keyLayout = [
                    'Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
                    '~ ё', '! 1', '" 2', '№ 3', '; 4', '% 5', ': 6', '? 7', '* 8', '( 9', ') 0', '- _', '+ =', 'Backspace',
                    'Tab', 'Й', 'Ц', 'У', 'К, 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ',
                    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '| \', 'Enter', 
                    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ', .', 'Shift', 
                    'Ctrl', 'windows', 'Alt', 'Space', 'windows', 'Alt', 'Space', 'windows', 'rmb', 'Ctrl'                    
                ];

                //creates HTML for an icon
                const createIconHTML = (icon_name) => {
                    return `<i class="material-icons">`${}`</i>`;
                };

                keyLayout.forEach(key => {

                });

                return fragment;

            },

                keyLayout.forEach(key => {
                    const keyElement = document.createElement('button');
                    const insertLineBreak = ['Backspace', 'Enter', '\', 'Shift', 'Ctrl'].indexOf(key) !== -1;

                    //add attributes/classes
                    keyElement.setAttribute('type', 'button');
                    keyElement.classList.add('keyboard_key');

                    switch (key) {
                        case 'backspace':
                            keyElement.classList.add('keyboard_key_wide');
                            keyElement.innerHTML = createIconHTML('backspace');

                            keyElement.addEventListener('click', () => {
                                this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                                this.triggerEvent('oninput');
                            });

                            break;
                    }

                    case 'caps':                        
                        keyElement.classList.add('keyboard_key_caps');
                        keyElement.innerHTML = createIconHTML('keyboard_capslock');

                        keyElement.addEventListener('click', () => {
                            this.toggleCapsLock();
                            keyElement.classList.toggle('keyboard_key:active', this.properties.capsLock);
                        });

                        break;
                    }

                    case 'caps':                        
                        keyElement.classList.add('keyboard_key_widest');
                        keyElement.innerHTML = createIconHTML('keyboard_return');

                        keyElement.addEventListener('click', () => {
                            this.toggleCapsLock();
                            keyElement.classList.toggle('keyboard_key:active', this.properties.capsLock);
                        });

                        break;
                    }

                    case 'enter':                        
                        keyElement.classList.add('keyboard_key_wide');
                        keyElement.innerHTML = createIconHTML('keyboard_return');

                        keyElement.addEventListener('click', () => {
                            this.toggleCapsLock += '\n';
                            this.triggerEvent('oninput');
                        });

                        break;
                    }

                    case 'space':                        
                        keyElement.classList.add('keyboard_key_widest');
                        keyElement.innerHTML = createIconHTML('space_bar');

                        keyElement.addEventListener('click', () => {
                            this.toggleCapsLock += ' ';
                            this.triggerEvent('oninput');
                        });

                        break;
                    }

                    case 'done':                        
                        keyElement.classList.add('keyboard_key_wide');
                        keyElement.innerHTML = createIconHTML('check_circle');

                        keyElement.addEventListener('click', () => {
                            this.properties.value += this.properties.capsLock ? KeyboardEvent.toUpperCase() : KeyboardEvent.toLowerCase();
                            this.triggerEvent('oninput');
                        });

                        break;
                    }

                    default:                        
                        keyElement.textContent = key.toLowerCase();

                        keyElement.addEventListener('click', () => {
                            this.close();
                            this.triggerEvent('onclose');
                        });

                        break;
                    }

                    fragment.appendChild(keyElement);

                    if (insertLineBreak) {
                        fragment.appendChild(document.createElement('br'));
                    }
                });
            },

            triggerEvent(handlerName) {
                console.log("Event Triggered! Event Name: " + handlerName);
            },

            toggleCapsLock() {
                this.properties.capsLock = !this.properties.capsLock;

                for (const key of this.elements.keys) {
                    if (key.childElementCount === 0) {
                        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContet.toLowerCase();
                    }
                }
            },

            open(initialValue, oninput, onclose) {

            },

            close() {

            },
        }
    }
};

window.addEventListener('DOMContentLoaded', function() {
    Keyboard.init();
});  





/*'Insert', 'Home', 'Page Up', 'Delete', 'End',
                    'Page Down', '\', '/', '*', '-', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0',
                    '. ,', '+ =', 'Enter'*/





/* class name
text SVGTextContentElement
appendFile

append
createattribute
массив с буковками
прогнать по массиву циклом
onclick = function
onmouse
e.key - то что выдаёт буквами название кнопки

класс это существительное
он не может обрабатывать
а его метод или функция внутри него может

кнопка класс
клавитура класс */
