export function getData(datas) {
  console.log("All data called");
  console.table(datas);
  datas.forEach((character) => {
    const main = document.getElementById("main");
    const cardSection = document.createElement("section");
    cardSection.setAttribute("class", "card");
    main.appendChild(cardSection);

    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card__img");
    cardSection.appendChild(cardImg);

    const cardImgTag = document.createElement("img");
    cardImgTag.setAttribute("class", "card__img__tag");
    cardImgTag.src = character.image;
    cardImg.appendChild(cardImgTag);

    const cardProperties = document.createElement("h3");
    cardProperties.setAttribute("class", "card__properties");
    cardProperties.textContent = "Properties";
    cardSection.appendChild(cardProperties);

    const cardPropertiesTag = document.createElement("div");
    cardPropertiesTag.setAttribute("class", "card_propertiesTag");
    cardSection.appendChild(cardPropertiesTag);

    const cardName = document.createElement("h4");
    cardName.setAttribute("class", "card__name");
    cardName.textContent = "Character's Name : " + character.name;
    cardPropertiesTag.appendChild(cardName);

    const cardActor = document.createElement("h6");
    cardActor.setAttribute("class", "card__actor");
    cardActor.textContent = "Actor's Name : " + character.actor;
    cardPropertiesTag.appendChild(cardActor);

    const cardBirth = document.createElement("h6");
    cardBirth.setAttribute("class", "card__birth");
    cardBirth.textContent = "Actor's Birthday : " + character.dateOfBirth;
    cardPropertiesTag.appendChild(cardBirth);

    const cardGander = document.createElement("h6");
    cardGander.setAttribute("class", "card__gender");
    cardGander.textContent = "Actor's Gender : " + character.gender;
    cardPropertiesTag.appendChild(cardGander);
  });
}
