import { widget } from "./baseWidget";
import { removeControl } from "./core";


export function _createSpan(id, option) {
    var el = document.createElement("span");
    el.textContent = option.content;

    return {
        el: el,
        id: id,
        dispose: function () {
            el.remove();
            removeControl(id);
          },
    }
}

export var createSpan = widget(_createSpan);