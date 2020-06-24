var movie=document.querySelectorAll(".movie")
var year=document.querySelectorAll(".year")
var type=document.querySelectorAll(".type")
var image=document.querySelectorAll(".image")
var content=document.querySelector("#content")
var submitBtn = document.querySelector("#submit")
var inputBox=document.querySelector("#userInput")
var userInput =inputBox.value
var buttons=document.querySelector("#buttons")
var again=document.querySelector("#again")



function fetchingData(userInput) {
    var userInput =document.querySelector("#userInput").value
    fetch('http://www.omdbapi.com/?apikey=56d64f03&s=' + userInput)
    .then((response) => { 
        response.json().then((data) => {
        if((data.Response)!== "False"){
        for(var i=0;i<data.Search.length;i++){
            movie[i].textContent = data.Search[i].Title
            image[i].src=data.Search[i].Poster
            year[i].textContent = data.Search[i].Year
            type[i].textContent = data.Search[i].Type
        }
      }else{
        content.classList.add("hide")
        again.innerHTML= "No Results Found!<br><b>Search Again</b>"
      }
           
        }).catch((err) => {
            console.log(err);
        })
    });
}

submitBtn.addEventListener("click", function(){
    fetchingData()
    content.classList.remove("hide")
    buttons.classList.add("hide")
    again.classList.remove("hide")

})

again.addEventListener("click",function(){
    buttons.classList.remove("hide")
    again.classList.add("hide")
    content.classList.add("hide")
    inputBox.value=""
})