import { addControl } from "./core";

export function createDiv(id) {
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
