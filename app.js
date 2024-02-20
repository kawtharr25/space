const container = document.getElementById("spase-container")

const title = document.createElement('h2')

title.textContent = 'our planet'
title.style.color = 'blue'

container.appendChild(title);
let planetsContainer = document.createElement('div')
let planetsListTitle = document.createElement('h3')
let planetsList = document.createElement('ul')
planetsListTitle.textContent = "the univers"
planetsListTitle.textContent = "our planets"
planetsContainer.setAttribute('style', 'background-color:gray', 'width:100', 'border: 20px', 'padding:50px')
planetsList.innerHTML = "<li>ear<li><li>moon<li><li>eris<li>"
let img = document.createElement('img')
img.src = "https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg?auto=compress&cs=tinysrgb&w=800"
container.appendChild(planetsContainer);
container.appendChild(planetsListTitle);
container.appendChild(planetsList);
container.appendChild(img);





