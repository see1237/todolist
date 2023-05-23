export function createButton(id, option) {
    var el = document.createElement("button");
    el.id = id;
    el.textContent = option.content;
    el.onclick = option.onClick;

    return {     
        el: el,
    };
}




  
