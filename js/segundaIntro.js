window.addEventListener("load", () =>{
    const loader = document.querySelector(".container");

    const header = document.querySelector("#header");
    const main = document.querySelector("#main");
    const footer = document.querySelector("#footer");

   loader.addEventListener("click", () =>{
        loader.classList.add("container-hidden");
        header.classList.add("hidden");
        main.classList.add("hidden");
        footer.classList.add("hidden");
   })
});