export class User {
  #infos = [];
  #present = false;
  #element;
  constructor(infos) {
    this.#infos = infos;
    this.#present = false;
    this.#element = this.#generateElement();
  }
  present() {
    this.#present = true;
    return this.#present;
  }

  #generateElement() {
    const div = document.createElement("div");
    div.classList.add("user");
    div.dataset.present = this.#present;
    const childHTML = `
		<img src="${this.#infos.photo}">
		<div class="user--info">
				<h1>${this.#infos.titre} ${this.#infos.prenom} ${this.#infos.nom}</h1>
				<p>${this.#infos.age} years old</p>
				<p>${this.#infos.ville}, ${this.#infos.pays}</p>
		</div>
		<a href="mailto:${this.#infos.email}">
				<span class="mail">✉️</span>
		</a>
`;

    div.insertAdjacentHTML("afterbegin", childHTML);
    return div;
  }

  render(parentElement) {
    parentElement.appendChild(this.#element);
  }
}
