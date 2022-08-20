function Meal() {
    var searchText = document.getElementById("search").value ; 
    
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`; 
  
    fetch (url)
    .then(res => res.json()   )
    .then(data => display(data)   ); 
   
     document.getElementById("search").value = " "; 
     document.getElementById("container").textContent = " ";
  
  }
  
  function display (data){
  
   var Content = document.getElementById("container")
   var userLimit = document.getElementById("limit").value ;
    userLimit=parseInt(userLimit);
    document.getElementById("limit").value = " "; 
     document.getElementById("container").textContent = " ";
   for (var a=0; a<userLimit; a++){
    
     var newDiv = document.createElement("div");
     newDiv.innerHTML = `
     <div class="card h-100" style="width: 18rem;">
    <img src="${data.meals[a].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[a].strMeal}</h5>
      <p class="card-text">
      <h4>Informations:</h4>
      ${data.meals[a].strInstructions}
      </p>
      <a href="https://www.themealdb.com/" class="btn btn-primary">Visit Site</a>
    </div>
  </div> ` ;
  
      Content.appendChild(newDiv);
  
   }
  
  }