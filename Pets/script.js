let sortButton = document.createElement("button");
sortButton.textContent = "Sort by Age";
sortButton.addEventListener("click", sortAge);

//let heading = document.querySelector("h1");
//heading.insertAdjacentElement("afterend", sortButton);
document.body.appendChild(sortButton);

let pets = [
  { name: "Garfield", type: "cat", age: 3, adopted: false },
  { name: "Gar", type: "dog", age: 1, adopted: false },
  { name: "Field", type: "bird", age: 2, adopted: false },
  { name: "Fifi", type: "cat", age: 1, adopted: false },
];


function displayPet(pet) {
  let cssClass = pet.adopted ? "pet adopted" : "pet available";
  let bntAdopt = pet.adopted ? `<button type "button" id=${pet.name}>adopted</button>` : `<button type="button" id=${pet.name}>adopt</button>`;

  let html = `<div class="${cssClass}">
  
  Pet name is ${pet.name} ${pet.type} ${pet.age} ${pet.adopted}
  ${bntAdopt}
  </div>`;



  return html;
}

function showAllPets() {
  let container = document.getElementById("pet-list");
  container.innerHTML = "";

  pets.forEach((pet) => {
    container.innerHTML += displayPet(pet);
  });

  pets.forEach((pet) => {
    let btn = document.getElementById(pet.name);
    if (btn) {
      btn.addEventListener("click", () => adoptPet(pet.name));
    }
  });

}



function adoptPet(petName) {

  for (let pet of pets) {
    if (pet.name === petName) {
      pet.adopted = !pet.adopted;
      break;
    }

  }
  showAllPets();
}

function sortAge()
{
  pets.sort((a, b) => a.age - b.age);
  showAllPets();
}

showAllPets();