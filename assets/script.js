
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

const container = document.querySelector(".card-container");

function domCreateCard(teamMembers){

  const {name,role,email,img} = teamMembers;

  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const cardImageSrc = document.createElement("img");
  cardImageSrc.src = img;

  cardImage.appendChild(cardImageSrc);

  const cardName = document.createElement("div");
  cardName.classList.add("card-name");
  const cardNameP = document.createElement("p");
  cardNameP.innerHTML = name;

  cardName.appendChild(cardNameP);

  
  const cardRole = document.createElement("div");
  cardRole.classList.add("card-role");
  const cardRolep = document.createElement("p");
  cardRolep.innerHTML = role;

  cardRole.appendChild(cardRolep);

  const cardEmail = document.createElement("div");
  cardEmail.classList.add("card-email");
  const cardEmailP = document.createElement("p");
  cardEmailP.innerHTML = email;

  cardEmail.appendChild(cardEmailP);

  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardRole)
  cardInfo.appendChild(cardEmail)
  
  card.appendChild(cardImage);
  card.appendChild(cardInfo);

  container.appendChild(card);
}


function domCreateAllCard(){
  for (let index = 0; index < teamMembers.length; index++) {
    domCreateCard(teamMembers[index]);
  }
}

domCreateAllCard();

const button = document.querySelector(".aggiungi-membro");
const fieldNewName = document.querySelector(".new-name");
const fieldNewRole = document.querySelector(".new-role");
const fieldNewEmail = document.querySelector(".new-email");


button.addEventListener('click',(event) =>{
  event.preventDefault();

  const newName = fieldNewName.value;
  const newRole = fieldNewRole.value;
  const newEmail = fieldNewEmail.value;

  console.log(newName + newRole + newEmail);
  
  const newMeber = {
    name : newName,
    role : newRole,
    email : newEmail,
    img : "assets/img/female3.png"
  }

  teamMembers.push(newMeber);
  domCreateCard(newMeber);
})


