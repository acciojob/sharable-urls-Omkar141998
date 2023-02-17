// your code here
// accesss the element
var form = document.querySelector("form");
var h3Element = document.querySelector("h3");
var nameElement = document.querySelector("#name");
var yearElement = document.querySelector("#year");
var btn = document.querySelector("#button");

//Create Function 
function handleSubmitForm (event) {
    event.preventDefault() 
      var h3Value = "https://localhost:8080/";
      var name = nameElement.value;
      var year = yearElement.value; 

      if(name && year){
        h3Value += '?name=' + name + '&year=' + year;
      }
      else if (name && !year){
        h3Value += '?name=' + name;
      }
      else if (!name && year){
        h3Value += '?year=' + year;
      }
      h3Element.textContent = h3Value;
}
form.addEventListener('submit', handleSubmitForm);
