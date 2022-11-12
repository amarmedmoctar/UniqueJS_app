/* Setup Variables */

var productBtn = document.getElementById("product_btn");
var productContainer = document.getElementById("product_container");

var data = [
  { id: 1, name: "product 1", desc: "Bla bla bla" },
  { id: 2, name: "product 2", desc: "Bla bla bla" },
  { id: 3, name: "product 3", desc: "Bla bla bla" },
  { id: 4, name: "product 4", desc: "Bla bla bla" },
];

//Draw UI
function drawUi(items) {
  items.forEach(function (ele) {
    productContainer.innerHTML += `
    <div onclick='deletItem(${ele.id})'>
    ${ele.name}
    </div>
    `;
  });
}
//Load Data
window.onload = function () {
  drawUi(data);
};

//Add Item
productBtn.addEventListener("click", addItem);
function addItem() {
  var productinput = document.getElementById("product_input");
  //Simple Validation
  if (product_input.value == "") alert("You Should Enter");

  var lastid = data.length ? data[data.length - 1].id : 1;
  //Add to array
  data.push({ id: ++lastid, name: productinput.value, desc: "Bla bla bla" });

  var addedItem = data[data.length - 1];

  productContainer.innerHTML += `
  <div onclick='deletItem(${addedItem.id})'>
  ${addedItem.name}
  </div>
  `;

  productinput.value = "";
}

function deletItem(id) {
  var index = data
    .map(function (i) {
      return i.id;
    })
    .indexOf(id);

  if (index !== -1) {
    data.splice(index, 1);
  }
}
