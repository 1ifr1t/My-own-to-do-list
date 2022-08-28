const app = document.querySelector(".app");
const inputIn = document.querySelector(".input");
const buttonAdd = document.querySelector(".buttonAdd");
let num = 0;

buttonAdd.addEventListener("click", () => {
	let a = inputIn.value;
	let b = document.createElement("p");
	num += 1;
	b.innerHTML = num + "." + a;
	app.append(b);
});
