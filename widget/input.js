import { widget } from "./baseWidget";
import { addControl } from "./core";

function _createInput(id) {
  var el = document.createElement("input");

  return {
    id: id,
    el: el,
    getValue: function () {
      return el.value;
    },
    clear: function () {
      el.value = "";
    },
    focus: function () {
      el.focus();
    },
  };
}

export var createInput = widget(_createInput);
