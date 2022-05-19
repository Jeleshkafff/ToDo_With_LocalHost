let container = document.querySelector(".container");
let h1 = document.createElement("h1");
container.append(h1);
let form = document.createElement("form");
container.append(form);
let ul = document.createElement("ul");
container.append(ul);
function create_all(text) {
  let idGlobal = JSON.parse(localStorage.getItem(`${text} id`)) || 1; // localStorage.getItem(key), JSON.parse
  let new_el_dead = JSON.parse(localStorage.getItem(text)) || [];
  createAppTitle();
  const inp = createTodoItemForm();
  createStartList(new_el_dead);
  function createStartList(arr) {
    for (let i = 0; i < idGlobal - 1; i++) {
      if (arr[i] != undefined) {
        const el = create_new(arr[i].name, arr[i].done, arr[i].id);
        ul.append(el);
      }
    }
  }

  const btn = document.querySelector(".btn");
  function createAppTitle() {
    h1.textContent = text;
    h1.className = "h1";
  }

  function createTodoItemForm() {
    let inp = document.createElement("input");
    form.append(inp);
    inp.className = "input";
    let btn = document.createElement("button");
    btn.textContent = "Create task";
    form.append(btn);
    btn.className = "btn";
    btn.disabled = true;

    return inp;
  }
  function create_new(content = "", doneTODO = false, id = idGlobal) {
    if (content == "") return;

    const li = document.createElement("li");
    li.className = "li";
    li.textContent = content;
    let btn1 = document.createElement("button");
    btn1.textContent = "done";
    li.append(btn1);
    btn1.className = "btn1";
    li.setAttribute("id", id);

    let btn2 = document.createElement("button");
    btn2.textContent = "delete";
    li.append(btn2);
    btn2.className = "btn2";
    btn2.addEventListener(`click`, function () {
      for (let i = 0; i < idGlobal - 1; i++) {
        if (new_el_dead[i] != undefined) {
          if (new_el_dead[i].id == li.id) {
            delete new_el_dead[i];
            localStorage.setItem(text, JSON.stringify(new_el_dead));
            break;
          }
        }
      }

      li.remove();
    });
    if (doneTODO) {
      li.style.backgroundColor = "#ffd7bf";
    }
    btn1.addEventListener(`click`, function (event) {
      event.preventDefault();

      for (let i = 0; i < idGlobal - 1; i++) {
        if (new_el_dead[i] != undefined) {
          if (new_el_dead[i].id == li.id) {
            new_el_dead[i].done = true;
            localStorage.setItem(text, JSON.stringify(new_el_dead));
            break;
          }
        }
      }
      li.style.backgroundColor = "#ffd7bf";
    });

    return li;
  }

  inp.addEventListener("input", () => {
    if (inp.value.trim() == "") {
      btn.disabled = true;
    } else {
      btn.removeAttribute("disabled");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = create_new(inp.value, false, idGlobal);
    if (li) {
      ul.append(li);
      btn.disabled = true;
      new_el_dead.push({ name: inp.value, done: false, id: idGlobal });
      idGlobal++;
      localStorage.setItem(text, JSON.stringify(new_el_dead));
      localStorage.setItem(`${text} id`, JSON.stringify(idGlobal));
    }
    inp.value = "";
  });
}
window.create_all = create_all;
