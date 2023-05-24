import { addControl, removeControl } from "./core";

export function createList(id, option) {
  var childs = [];
  var el = document.createElement("ul");
  el.style.listStyle = "none";
  el.style.padding = "0";
  render(option.datas, option.columns);

  var control = {
    id: id,
    el: el,
    reload: function (datas) {
      render(datas, option.columns);
    },
    getValue: function () {
      return el.value;
    },
    dispose: function () {
      el.remove();
      removeControl(id);

      childs.forEach(function (child) {
        child.dispose();
      });
    },
  };
  addControl(control);
  return control;

  function render(datas, columns) {
    childs.forEach(function (child) {
      child.dispose();
    });
    childs = [];

    datas.forEach(function (data) {
      var liEl = document.createElement("li");

      columns.forEach(function (column) {
        var control = column.render(data);
        childs.push(control);
        liEl.append(control.el);
      });

      el.append(liEl);
    });
  }
}
