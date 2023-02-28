// Examine the DOM

// Console.dir(document)

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123456

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.images);
console.log(document.forms);

// SELECTORS

let headerTitle = document.getElementById("header-title");
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";

let classes = document.getElementsByClassName("selected"); // Gives us a collection of elements
for (item of classes) {
  item.style.backgroundColor = "grey";
}
