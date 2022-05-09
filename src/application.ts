import { log } from "console";
import e from "express";
import Control from "./control";
import './keyboard.scss'

class Application extends Control {
    constructor(parentNode: HTMLElement, layout: Array<Array<string>>) {
        super(parentNode, 'div', 'background')
        const output = new Control(this.node, 'div', 'screen');
        const keyboard = new Control(this.node, 'div', 'keyboard');
        const titleWrapper = new Control(this.node, 'div', 'title_name_wrapper');
        const steampunkTitle = new Control(this.node, 'div', 'title_name');
        const dividingLine = new Control(this.node, 'div', 'dividing_line');              
        //const about = new Control(this.node, 'div', 'about');
        layout.forEach(row => {
            const rowView = new Control(keyboard.node, 'div');
            row.forEach(value => {
                const button = new Button(rowView.node, value);
                button.node.onclick = () => {
                    output.node.textContent += value;                
                } 
            }) 
        })

    }    
}

class Button extends Control {
    constructor(parentNode: HTMLElement, textContent: string) {
        super(parentNode, 'div', 'keyboard_key', textContent)        
    }    
}



/*const button = document.getElementById('button');
        document.addEventListener('keydown', detectKey);

            function detectKey(e: any) {
            button.textContent += `$(e.code)`;



            input.onkeydown = detectKey;
            function detectKey(e: any) {
                log.textContent += `$(e.code)`;
            }
        }*/

/*
class eventHandlers {
    static RegisterKeyPress(input: string){
        document.getElementById(input).addEventListener('keydown', (e: KeyboardEvent) =>{
            const a = document.createElement('a');
            a.textContent = `KeyboardEvent: key='${e.key}' | code = '${e.code}'`;
            document.getElementById('output').appendChild(a);
        }, true);
            //you have your keycode here
            console.log(e.keyCode: 65);
        }),
    }
};

/*screen.addEventListener('keydown', function(e) => {
    if (!e.repeat)
    logKey(`Key "${e.key}" pressed [event: keydown]`);
    else
    logKey(`Key "${e.key}" repeating [event: keydown]`);

});
*/
  
/*class EventHandler {
    static RegisterKeyPress(input: string) {
        document.getElementById(input).addEventListener('keydown', (e: KeyboardEvent) => {
            //you have your key code here
            console.log(e.keyCode);
        })
    }
}*/

/*window.addEventListener('keydown', function(event)) {
    const p = document.createElement('p');
    p.textContent = `KeyboardEvent: key='${e.key}' | code='${e.code}'`;
    document.getElementById('output').appendChild(p);
}, true);*/


const keyLayout = [
    ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
    ['~ ё', '! 1', '" 2', '№ 3', '; 4', '% 5', ': 6', '? 7', '* 8', '( 9', ') 0', '- _', '+ =', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '| \\', 'Enter'], 
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ', .', 'Shift'], 
    ['Ctrl', 'windows', 'Alt', 'Space', 'windows', 'Alt', 'Space', 'windows', 'rmb', 'Ctrl']                    
];

/*'Insert', 'Home', 'Page Up', 'Delete', 'End',
                    'Page Down', '\', '/', '*', '-', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0',
                    '. ,', '+ =', 'Enter'*/

new Application(document.body, keyLayout);




