let contactname = document.getElementById("name")
let contactnum = document.getElementById("num")
let myform = document.querySelector(".container")

function addc() {  
  let container = document.createElement("div")
myform.appendChild(container)
let mylist = document.createElement("p")
mylist.setAttribute("class","info")
mylist.innerText="Name: " + contactname.value;
container.appendChild(mylist)
let mynum = document.createElement("p")
mynum.setAttribute("class","info")
mynum.innerText="Number: " + contactnum.value;
container.appendChild(mynum)
let remove = document.createElement("button")
remove.innerText="X"
container.appendChild(remove)
remove.addEventListener('click',()=>{
  container.remove();
})
return false;
}
