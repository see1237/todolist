import { widget } from "./baseWidget";
import { removeControl } from "./core";

function _createButton(id, option) {
  var el = document.createElement("button");
  el.textContent = option.label;
  el.onclick = option.onClick;

  return {
    id: id,
    el: el,
    dispose: function () {
      el.remove();
      removeControl(id);
    },
  };
}

export var createButton = widget(_createButton);
