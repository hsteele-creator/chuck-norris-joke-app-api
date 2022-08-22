const body = document.querySelector("body");
const button = document.querySelector("button");
const jokeContainer = document.querySelector(".joke-container");

async function getJoke() {

    jokeContainer.innerHTML = "";

   const result = await axios.get(`https://api.chucknorris.io/jokes/random`, {params: {}});
   
   const newH1 = document.createElement("h1");
   newH1.innerText = result.data.value;
   jokeContainer.prepend(newH1);

}

button.addEventListener("click", getJoke);