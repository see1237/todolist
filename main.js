var todolist = [];


var inputValue = Widget.getControl("todoInput");

var onClickSave = function () {
    if (!inputValue()) {
      alert("할 일을 입력해 주세요");
      return;
    }
    todolist.push({
      id: crypto.randomUUID(),
      contents: input.getValue(),
      done: false,
    });
  };

function renderColumnDone(id, option) {
    var checkboxEl = Widget.input(id, option);
    checkboxEl.el.type = "checkbox";

    return checkboxEl
}

function renderColumnTodo(id, option) {
    var spanEl = Widget.span(id, option);

    parentEl.append(spanEl.el);
}

function renderColumnDelete(id, option){
    var delBtn = Widget.button(id, option);

    parentEl.append(delBtn.el);
}


function render() {
    var root = document.getElementById("contents");
    var div = Widget.div("container", { parent: root });

    div.append(Widget.input("todoInput"));
    div.append(Widget.button("btnSave", { content: "입력", onClick: onClickSave }));
    div.append(
        Widget.list("todoList", {
            datas: todolist.filter(function(item) {return !item.done}),
            columns: [
                { id: "done", render: renderColumnDone },
                { id: "todo", render: renderColumnTodo },
                { id: "delete", render: renderColumnDelete },
            ],
        })
    );
    div.append(
        Widget.list("todoListDone", {
            datas: todolist.filter(function(item) {return item.done}),
            columns: [
                { id: "done", render: renderColumnDone },
                { id: "todo", render: renderColumnTodo },
                { id: "delete", render: renderColumnDelete },
            ],
        })
    );
}



render();

