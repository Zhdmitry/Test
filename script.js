let arr = [];

async function getData() {
  let response = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  let result = await response.json();

  result.forEach((element) => {
    if (element.price <= 5.0) {
      arr.push(element);
    }
  });
}
getData();

let qoutes = [
  {
    text: "Blandit et augue nulla suscipit ut ut quis ad feugiat ut luptatum, consequat, lobortis, aliquip dolore, iriure veniam te dolor aliquip.",
    author: "— Emerson Hawkins",
  },
  {
    text: "Hendrerit aliquam odio accumsan ea commodo augue dolore zzril commodo facilisis in tation nulla iriure dolore feugait facilisis praesent.",
    author: "— Terry Matthews",
  },
  {
    text: "Consequat aliquip lobortis consectetuer adipiscing volutpat ad autem veniam hendrerit consequat te quis suscipit dolor consequat in. Duis ex, diam hendrerit.",
    author: "— Reggie Henry",
  },
];

let right = document.querySelector(".right");
let left = document.querySelector(".left");
let qouteText = document.querySelector(".qoutes-text");
let qouteAuthor = document.querySelector(".qoutes-author");

let dotes = document.querySelectorAll(".dote");
dotes.forEach((elem) => {
  elem.addEventListener("click", () => {
    dotes.forEach((el) => {
      el.classList.remove("dote-active");
    });
    elem.classList.add("dote-active");

    qouteText.textContent = `${arr[elem.id].name}`;
    qouteAuthor.textContent = `${arr[elem.id].price}`;
    if (elem.id == 0) {
      left.classList.add("hide");
    }
    if (elem.id != 0) {
      left.classList.remove("hide");
    }

    if (elem.id == 2) {
      right.classList.add("hide");
    }
    if (elem.id != 2) {
      right.classList.remove("hide");
    }
  });
});


right.addEventListener('click', ()=>{
    let activeDote = document.querySelector('.dote-active')
    
    let next = +activeDote.id + 1
    if(activeDote.id == 0){
        qouteText.textContent = `${arr[next].name}`;
        qouteAuthor.textContent = `${arr[next].price}`;
        activeDote.classList.remove('dote-active')
        dotes[next].classList.add('dote-active')
        left.classList.remove("hide")
    }
    if(activeDote.id == 1){
        qouteText.textContent = `${arr[next].name}`;
        qouteAuthor.textContent = `${arr[next].price}`;
        activeDote.classList.remove('dote-active')
        dotes[next].classList.add('dote-active')
        right.classList.add("hide");
    }
})

left.addEventListener('click', ()=>{
    let activeDote = document.querySelector('.dote-active')
    
    let prev = +activeDote.id - 1
    if(activeDote.id == 2){
        qouteText.textContent = `${arr[prev].name}`;
        qouteAuthor.textContent = `${arr[prev].price}`;
        activeDote.classList.remove('dote-active')
        dotes[prev].classList.add('dote-active')
        right.classList.remove("hide")
    }
    if(activeDote.id == 1){
        qouteText.textContent = `${arr[prev].name}`;
        qouteAuthor.textContent = `${arr[prev].price}`;
        activeDote.classList.remove('dote-active')
        dotes[prev].classList.add('dote-active')
        left.classList.add("hide");
    }
})


let arrow = document.querySelector('.arrow')
let store = document.querySelector('.store')
let storeMenu = document.querySelector('.store-menu')
store.addEventListener('click', () =>{
    if(storeMenu.classList.contains('hide')){
        storeMenu.classList.remove('hide')
        arrow.src = 'assets/arrowUp.png'
    }else{
        storeMenu.classList.add('hide')
        arrow.src = 'assets/arrow.png'
    }
})