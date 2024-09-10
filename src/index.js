function displayRecipe(response) {
  console.log("Recipe generated");
  console.log(response);
  new Typewriter("#recipe-placeholder", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: "0.8",
  });
  //let recipePlace = document.querySelector("#recipe-placeholder");
  //recipePlace.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredient = document.querySelector("#ingredient");
  let apiKey = "85be9c7bad2eb4fafc3fe0e35t2o0c3e";
  let aiContext =
    "Dear AI, you are a professional cook and have many recipes in your rexipe book. Please deliver one recipe with the added ingredient to the user. Display the ingredients each in seperate lines using <br />. Seperate the instructions also with <br /> after each step. Include an <br /> after Ingredients: and after Instructions:";
  let aiPrompt = `Generate one recipe with ${ingredient.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${aiContext}&key=${apiKey}`;

  console.log("Generating recipe");

  axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#form");
recipeFormElement.addEventListener("submit", generateRecipe);
