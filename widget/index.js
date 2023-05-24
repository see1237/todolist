import { createButton } from "./button";
import { getControl } from "./core";
import { createDiv } from "./div";
import { createInput } from "./input";
import { createList } from "./list";
import { createSpan } from "./span";
import { createCheckbox } from "./checkbox";

window.Widget = {
  button: createButton,
  list: createList,
  input: createInput,
  div: createDiv,
  span: createSpan,
  checkbox: createCheckbox,
  getControl: getControl,
};
