import './keyboard.scss'

class Main<NodeType extends HTMLElement = HTMLElement>{
    public node: NodeType;

    constructor(parentNode: HTMLElement | null, tagName = 'div', className = '', content = '') {
        const element = document.createElement(tagName);
        element.className = className;
        element.textContent = content;
        if (parentNode) {
            parentNode.append(element);
        }
        this.node = element as NodeType;
    }

    destroy(): void {
        this.node.remove();
    }
}

export default Main;






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
