// Targeting Nodes with selectors

const container = document.querySelector("#container");
// selects the #container div

// console.dir(container.firstElementChild);
// // Selects the first child of #container => .display

// const controls = document.querySelector(".controls");
// // Selects the controls div

// console.dir(controls.previousElementSibling);
// // selects the prior sibling => .display

// // Element creation

// const div = document.createElement("div");

// controls.appendChild(div);

// // adding inline styles

// div.style.color = "blue";

// div.style.cssText = "color: blue; background:white;";

// div.setAttribute("style", "color: blue; background: white;");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const red = document.createElement("p");
red.style.color = "red";
red.textContent = "I am red!";
container.appendChild(red);

const heading = document.createElement("h3");
heading.style.color = "skyblue";
heading.textContent = "I'm a blue h3!";
container.appendChild(heading);

const section2 = document.createElement("div");
section2.style.cssText = "border: 1px solid black; background: pink;";
container.appendChild(section2);

const header2 = document.createElement("h1");
header2.textContent = "I'm in a div";
section2.appendChild(header2);

const meToo = document.createElement("p");
meToo.textContent = "Me too";
section2.appendChild(meToo);
