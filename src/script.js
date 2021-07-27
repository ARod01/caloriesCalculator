import "./style/style.css"

const description = document.getElementById("description");
const calories = document.getElementById("calories");
const carbs = document.getElementById("carbs");
const protein = document.getElementById("proteins");

const totalCal = document.getElementById("totalCalories");
const totalCar = document.getElementById("totalCarbs");
const totalPro = document.getElementById("totalProtein");

const tabla = document.getElementById("main");
const elementos = document.createDocumentFragment();

let list = [];

description.addEventListener("keydown", () => {
  description.classList.remove("is-invalid");
})

calories.addEventListener("keydown", () => {
  calories.classList.remove("is-invalid");
})
carbs.addEventListener("keydown", () => {
  carbs.classList.remove("is-invalid");
})
protein.addEventListener("keydown", () => {
  protein.classList.remove("is-invalid");
})

const calcular = () =>{
  description.value ? "" : description.classList.add("is-invalid");
  calories.value  ? "" :calories.classList.add("is-invalid")
  carbs.value ? "" : carbs.classList.add("is-invalid")
  protein.value  ? "" : protein.classList.add("is-invalid")

  if( description.value && calories.value  && carbs.value && protein.value ){
    console.log("OK");
    add();
    cleanInput();
    renderItem(list);
    sumaTotal(list);
  }
}

const add = () =>{
  const newItem = {
    description: description.value,
    calories: calories.value,
    carbs: carbs.value,
    protein: protein.value
  }
  list.push(newItem);
}

const cleanInput = () =>{
  description.value = '';
  calories.value = '';
  carbs.value = '';
  protein.value = '';
}

const renderItem=(lista)=>{
  tabla.innerHTML = '';
  for(let i = 0; i < list.length; i++){
    const renglon = document.createElement("TR");
    const desc = document.createElement("TD");
    const calorie = document.createElement("TD");
    const carbs = document.createElement("TD");
    const protein = document.createElement("TD");
    const delButton = document.createElement("TD");
    renglon.classList.add("table__title");
    desc.classList.add("table__title-item");
    calorie.classList.add("table__title-item");
    carbs.classList.add("table__title-item");
    protein.classList.add("table__title-item");
    delButton.classList.add("table__title-item");

    desc.textContent = lista[i].description;
    calorie.textContent = lista[i].calories;
    carbs.textContent = lista[i].carbs;
    protein.textContent = lista[i].protein;

    delButton.classList.add("delButton");
    delButton.setAttribute("onclick", `removeItem(${i})`);
    delButton.textContent = "Borrar"; 
    renglon.appendChild(desc);
    renglon.appendChild(calorie);
    renglon.appendChild(carbs);
    renglon.appendChild(protein);
    renglon.appendChild(delButton);
    elementos.appendChild(renglon);
    tabla.appendChild(elementos);
  }
}

const sumaTotal = (lista) =>{
  let calTotal = 0;
  let carTotal = 0;
  let proTotal = 0;
  for(let i = 0; i < lista.length; i++){
    calTotal += parseInt(lista[i].calories);
    carTotal += parseInt(lista[i].carbs);
    proTotal += parseInt(lista[i].protein);
  }
  totalCal.textContent = calTotal;
  totalCar.textContent = carTotal;
  totalPro.textContent = proTotal;
}


const removeItem =(index)=>{
  list.splice(index,1)
  tabla.innerHTML = '';
  sumaTotal(list);
  renderItem(list);
}