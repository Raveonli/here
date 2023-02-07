import { User } from "./module/User.js";

const main = document.querySelector("main");

const getInformation = async () => {
  try {
    const randomUser = "https://randomuser.me/api/?results=20";
    const dataAPI = await fetch(randomUser);
    const resApi = await dataAPI.json();
    const dataClean = parseData(resApi);
    console.log(dataClean);
    dataClean.forEach((element) => {
      new User(element).render(main);
    });
  } catch (err) {
    console.error(err.message);
  }
};
getInformation();

const parseData = (rawData) => {
  const { results } = rawData;
  //console.log(results);
  const infoVoulu = results.map((el) => {
    const titre = el.name.title;
    const prenom = el.name.first;
    const nom = el.name.last;
    const ville = el.location.city;
    const pays = el.location.country;
    const age = el.dob.age;
    const email = el.email;
    const photo = el.picture.large;
    return {
      titre: titre,
      prenom: prenom,
      nom: nom,
      ville: ville,
      pays: pays,
      age: age,
      email: email,
      photo: photo,
    };
  });
  return infoVoulu;
};
const handleClick = (e) => {
  const etat = e.target.closest(".user").dataset.present;
  console.log(etat);
  if (!etat) {
    e.target.present();
  }
};
main.addEventListener("click", handleClick);
