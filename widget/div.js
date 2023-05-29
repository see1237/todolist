import { addControl } from "./core";
import { widget } from "./baseWidget";

export function _createDiv(id) {
  var el = document.createElement("div");

  var control = {
    id: id,
    el: el,
    append: function (control) {
      el.append(control.el);
    },
  };
  addControl(control);
  return control;
}

export var createDiv = widget(_createDiv);
