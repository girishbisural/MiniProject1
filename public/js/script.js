let btn1 = document.getElementById("getFetch");
let btn2 = document.getElementById("getAsync");

function sayHi() {
alert ("Hi");
}
btn1.addEventListener('click',sayHi);

btn2.addEventListener('click', getData);
async function getData( ){
try {

let response = await fetch('http://localhost:3000/colors');
let data = await response.json();
console.log(data);

 let ulContent = "<ul>";
        for (const element of data) {

 ulContent += "<li>" + element.color + ": " + element.value + "</li>";
        }
        ulContent += "</ul>";

        document.getElementById("data").innerHTML = ulContent;
        
 } catch (error) {
alert("Unable to get data!" + error);
 }
}