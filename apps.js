//Object literal
var saloon={
    name:"The Fashion Pet",
    address:{
        state:"Baja California",
        city:"Tijuana",
        street:"Unversity 1234",
        zip:"12345"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 pm"
    },
    pets:[]
}

//name,age,gender,breed,service,owner,phone


/*function displayPetInfo(){
    document.getElementById("petinfo").innerHTML=("you have" + saloon.pets.length + "pets");

}
displayPetInfo();

function displayPetName(){
for (let i=0; i < saloon.pets.length; i++){document.getElementById("petname").innerHTML+=`<p>${saloon.pets[i].name}</p>`;
}
}
displayPetName();

//for (let i = 0; i < saloon.pets.lenth; i++) {document.getElementById("petinfo").innerHTML;}

class Task {
    constructor(description, prrority) {
        this.d = description;
        this.p = prrority;

    }
}
var task1=new Task("Play","High");
console.log(task1);
var task2=new Task("Do HW", "low");
console.log(task2);
var task3 = new Task("Running","Medium");
console.log(task3);*/
var counter=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,phone){this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.id=counter++;

    }
}
//create pets
var scooby=new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-5555");
saloon.pets.push(scooby);
var scrappy=new Pet("Scrappy",50,"Male","Dane","Nails cut","Shaggy","555-555-5555");
saloon.pets.push(scrappy);
var koda=new Pet("Koda",2,"Male","Goldendoodle","Grooming","Krystle","333-222-5555");
saloon.pets.push(koda);
//getting the values from the inputs
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');

function register(){

    if(txtName.value!="" && txtPhone.value!=""){
        var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value)
        console.log(thePet);
        saloon.pets.push(thePet);
        clear();
        displayTable();
        var alertElement=document.getElementById("alert");
        alertElement.classList.remove("hide");
        setTimeout(function(){
            alertElement.classList.add("hide");
        },3000);
    }else{
        alert("Please enter the required fields.");
    }    
}

//clearing the input
function clear(){
   txtName.value="";
   txtAge.value="";
   txtGender.value="";
   txtBreed.value="";
   txtService.valuce="";
   txtOwner.value="";
   txtPhone.value="";
}

function display(){
   const petSection=document.getElementById('pets');
    var tmp="";
    for(var i=0;i<saloon.pets.length;i++){
        tmp+=`<div class="pet">
                <h3> 🐾${saloon.pets[i].name} </h3>
                <p>Age:${saloon.pets[i].age}</p>
                <p>Gender:${saloon.pets[i].gender}</p>
                <p>Breed:${saloon.pets[i].breed}</p>
                <p>Services:${saloon.pets[i].service}</p>
                <p>Owner:${saloon.pets[i].owner}</p>
                <p>Phone:${saloon.pets[i].phone}</p>
              </div>`;
    }
    petSection.innerHTML=tmp;
}
function displayTable(){
    var table=document.getElementById("pets");
    var tr="";
    for(var i=0;i<saloon.pets.length;i++){
        tr+=`
        <tr id=${saloon.pets[i].id}>
                <td> 🐾${saloon.pets[i].name} </td>
                <td>${saloon.pets[i].age}</td>
                <td>${saloon.pets[i].gender}</td>
                <td>${saloon.pets[i].breed}</td>
                <td>${saloon.pets[i].service}</td>
                <td>${saloon.pets[i].owner}</td>
                <td>${saloon.pets[i].phone}</td>
                <td onclick="deletePet(${saloon.pets[i].id})">🗑️</td>
              </tr>`;
    }
    table.innerHTML=tr;
}
function deletePet(id){
    var row=document.getElementById(id);
    row.remove(); //remove the element from the html
    for(var i=0;i<saloon.pets.length;i++){
        var indexDelete; //variable to store the position
        if(saloon.pets[i].id===id){ //search for the id
            indexDelete=i;//update the position
        }
    }
    saloon.pets.splice(indexDelete,1); //delete the element from the array
}
function searchPet(){//by name
    //create a var, get the element, use .value
    var searchString = document.getElementById("searchInput").value;
    //travel the array to search the string
    saloon.pets.forEach(pet=>{
         //compare the txtsearch with all the pet names
        if(pet.name.toLowerCase()===searchString){
               //highlight the results
            document.getElementById(pet.id).classList.add('highlight');
        }else{
            document.getElementById(pet.id).classList.remove('highlight');
        }
    });
}
function init(){
    console.log("app.js");
    displayTable();
    //hook events
    document.querySelector(".btn-register").addEventListener("click",register);
    document.querySelector(".btn-search").addEventListener("click",searchPet);
}
window.onload=init;



document.getElementById("submit").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("submit").innerHTML = "Your Contact Form Was Submitted!";
}