var intervalID;
var nations = data;
var colours = ["#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00"];
var TIME = 8000;


window.onload = function() {
  loadHidden();
  transition();
  changeColours();
  intervalID = setInterval(function (){ 
    main(); }, TIME);

};

function changeColours() {
  var randomColour = colours[Math.floor(Math.random()*(colours.length))];
  if(randomColour == document.body.style.background){
    changeColours();
  }else{
    document.body.style.background = randomColour;
  }
}

function transition(){
  var y = document.getElementsByClassName("y");
  var x = document.getElementsByClassName("x");

  for (var i = y.length - 1; i >= 0; i--) {
    y[i].classList.toggle('hidden');
    x[i].classList.toggle('hidden');     
  }
}

function loadHidden() {
  var hiddenEls = document.getElementsByClassName("hidden");
  var randomNumber = Math.floor(Math.random()*(nations.length));
  var flag = document.getElementById("flag")
  flag.style.backgroundImage = "url("+nations[randomNumber].flag+")";
  setNationData(hiddenEls, randomNumber) 
}

function setNationData(elements, index) {
    for (var i = elements.length - 1; i >= 0; i--) {
    if(elements[i].classList.contains("nation")){ 
        setElement(elements[i], nations[index].nativeName);
    }
    
    if(elements[i].classList.contains("engNation")){ 
      setElement(elements[i], nations[index].name);
    }
    if(elements[i].classList.contains("capital")){ 
        setElement(elements[i], nations[index].capital);
    }
    if(elements[i].classList.contains("pop")){ 
        setElement(elements[i], nations[index].population.toLocaleString());
      }
    if(elements[i].classList.contains("lang")){ 
      var langList = "";
      for (var j = 0; j < nations[index].languages.length; j++) {
        langList += '<li>'+nations[index].languages[j].nativeName+' | <i>'+nations[index].languages[j].name+'</i></li>';
      }
      setElement(elements[i], langList);
    }
  }
}

function setElement(domEl,data) {
  domEl.innerHTML = data
}

function main() {
  loadHidden();
  changeColours();
  transition();
}

