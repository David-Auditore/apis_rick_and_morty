const txtCharacter = document.getElementById('txt-character');
const containerCards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    // Array
    return data.results;
}

// Funcion que crea las cards
const createCards = ( character ) => {
    const card = document.createElement('div');
    card.classList.add('card-character');

    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender: "+character.gender;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(imgCard);
    card.appendChild(containerDescription);

    containerCards.appendChild(card);

}

const generateAllCharecters = async () => {
    const data = await getApi(URL1);
    data.map(character => createCards(character));
}

const getCharacterByName = async (event) => {
    containerCards.innerHTML = "";
    const data = await getApi(URL2+event.target.value);
    data.map(character => createCards(character));
}


window.addEventListener('DOMContentLoaded', generateAllCharecters);
txtCharacter.addEventListener('keyup',getCharacterByName);

{/* 
<div class="card-character">
    <img src="/img/ram_preview.webp" alt="img-card">
        <div class="description-card">
            <h2>Rick and Morty</h2>
            <p>Genger: Male</p>
        </div>
    </div> 
*/}