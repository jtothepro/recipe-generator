function generateRecipe(event) {
  event.preventDefault();

  //let recipePlace = document.querySelector("#recipe-placeholder");
  //recipePlace.innerHTML = "JS Test";

  new Typewriter("#recipe-placeholder", {
    strings: ["Generating Recipe..."],
    autoStart: true,
    cursor: "",
  });
}
let recipeFormElement = document.querySelector("#form");
recipeFormElement.addEventListener("submit", generateRecipe);
