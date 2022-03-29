let container = document.querySelector(".container");
let h1 = document.createElement("h1");
container.append(h1);
let form = document.createElement("form");
container.append(form);
let ul = document.createElement("ul");
container.append(ul);
let mass = {
  name: "rrr",
  done: true,
};

function create_all(text, q) {
  createAppTitle();
  const inp = createTodoItemForm();

  createTodoList();
  const btn = document.querySelector(".btn");
  console.log(inp);
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
  function create_new({name, done}) {
    inp.value = ""
    console.log(name)
    if(name == ""){
        return
    };
    const li = document.createElement("li");
    li.className = "li";
    li.textContent = name;
    let btn1 = document.createElement("button");
    btn1.textContent = "done";
    li.append(btn1);
    btn1.className = "btn1";
    

    let btn2 = document.createElement("button");
    btn2.textContent = "delete";
    li.append(btn2);
    btn2.className = "btn2";
    btn2.addEventListener(`click`, function () {
      li.remove();
    });
    if (done) {
      li.style.backgroundColor = "#ffd7bf";
    }
    btn1.addEventListener(`click`, function (event) {
      event.preventDefault();

      li.style.backgroundColor = "#ffd7bf";

    
    });

    return li;
  }
  function createTodoList() {
    for (const todo of q) {
      ul.append(create_new(todo));
    }
  }

  inp.addEventListener("input", () => {
      
    if (inp.value == "") {
        
      btn.disabled = true;
    } else {
      btn.removeAttribute("disabled");
      
    }

  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = create_new({ name: inp.value })
    if(li){
        ul.append(li)
    btn.disabled = true;
        
    };


  });
}
myStorage = window.localStorage;
let me_die = JSON.stringify(q)  
localStorage.setItem("11",me_die );
