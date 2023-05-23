import { createButton } from "./button";
import { createList } from "./list";
import { createInput } from "./input";
import { createDiv } from "./div";
import { createSpan } from "./span";

window.Widget = {
    button: createButton,
    list: createList,
    input: createInput,
    div: createDiv,
    span: createSpan,
    getControl: function(id) {
        var el = document.getElementById(id);
        el.focus();
        return el.value;
    }
  };



  