import { widget } from "./baseWidget";
import { removeControl } from "./core";

export function _createCheckbox(id, option) {
    var el = document.createElement("input");
    el.type = "checkbox";
    el.checked = option.done;

    el.onchange = option.onChange; 
    
    return{
        el: el,
        id: id,
        dispose: function () {
            el.remove();
            removeControl(id);
          },
    }   
}

export var createCheckbox = widget(_createCheckbox);