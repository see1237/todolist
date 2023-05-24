
var todolist = [];

var div = Widget.div("container");
document.body.append(div.el);

div.append(Widget.input("todo-contents"));
div.append(
  Widget.button("todo-input", {
    label: "입력",
    onClick: function () {
      var contentsControl = Widget.getControl("todo-contents");
      var value = contentsControl.getValue();

      if (!value) {
        alert("할일을 입력해 주세요");
        return;
      }

      todolist.push({
        id: crypto.randomUUID(),
        contents: value,
        done: false,
      });
      Widget.getControl("todo-list").reload(getSortedTodoList({ done: false })); 
      Widget.getControl("done-list").reload(getSortedTodoList({ done: true })); 

      contentsControl.clear();
      contentsControl.focus();
    },
  })
);

div.append(Widget.list("todo-list", {
  datas: getSortedTodoList({ done: false }),
  columns: [
    { id: "done", render: renderColumnDone },
    { id: "todo", render: renderColumnTodo },
    { id: "delete", render: renderColumnDelete },
],
}))

div.append(Widget.list("done-list", {
  datas: getSortedTodoList({ done: true }),
  columns: [
    { id: "done", render: renderColumnDone },
    { id: "todo", render: renderColumnTodo },
    { id: "delete", render: renderColumnDelete },
],
}))

function renderColumnDone(data) {
  var checkControl = Widget.checkbox("checkbox-" + data.id, {
    label: "체크박스",

    done: data.done,
    onChange: function (e) {
    data.done = e.target.checked; 
    Widget.getControl("todo-list").reload(getSortedTodoList({ done: false })); 
    Widget.getControl("done-list").reload(getSortedTodoList({ done: true }));      
    },
  });
 return checkControl;
}

function renderColumnTodo(data) {
  var spanControl = Widget.span("span-" + data.id, {
    label: "span",
    content: data.contents,
  });
  return spanControl;
}

function renderColumnDelete(data) {
  var delBtnContrl = Widget.button("delbtn-" + data.id, {
    label: "삭제",
    onClick: function () {
      todolist.splice(todolist.indexOf(data), 1);
      Widget.getControl("todo-list").reload(getSortedTodoList({ done: false })); 
      Widget.getControl("done-list").reload(getSortedTodoList({ done: true })); 
    },
  });
  return delBtnContrl;
}


Widget.getControl("todo-list").reload(todolist);


function getSortedTodoList(option) {
  return todolist.filter(item => item.done === option.done) // true > done
}