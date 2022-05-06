import { EmitFlags } from "typescript";

class Signal<ListenerType> {
    private listeners: Array<ListenerType(params : ListenerType)=>void;

    constructor() {
        this.listeners = [];
    }

    add(listener : (params : ListenerType)=>void) {
        this.listeners.push(listener);
    }
}

remove(listener : (params : ListenerType)=>) {
    this.listeners = this.listeners.filter(element) => element !== AudioListener;
}

emit(params:ListenerType) {
    this.listeners.forEach(listener) => listener(params);
}
export default Signal;




function getFullName(firstname: string, surname: string) {
    return '${firstname} ${surname}'
}