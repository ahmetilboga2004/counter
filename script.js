let sayac = document.querySelector("#counter");
let arttir = document.querySelector("#increment");
let azalt = document.querySelector("#decrement");
let sifirla = document.querySelector("#reset");

let count = 0;

arttir.addEventListener("click", function(){
    count ++;
    sayac.textContent = count;
});

azalt.addEventListener("click", function(){
    count --;
    sayac.textContent = count;
});

sifirla.addEventListener("click", function(){
    count = 0;
    sayac.textContent = count;
})
