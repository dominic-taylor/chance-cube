

var intervalID
var nations = data
              // All look ok with black text apart from navy: "#001f3f"
var colours = ["#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00"];
  
window.onload = function() {
  changeColours()
  loadHidden();
  loadVisible();

 //uncomment below for testing
 intervalID = setInterval(function (){ 
    main() }, 2500);

}


function changeColours() {
  // console.log(body[0])
  // body.style.background = "blue"
  var randomColour = colours[Math.floor(Math.random()*(colours.length))]
  if(randomColour == document.body.style.background){
    changeColours()
  }else{
  document.body.style.background = randomColour;
  }
}

function transition(){
  console.log('transitioning');
    var x = document.getElementById("nextData");
    var y = document.getElementById("currentData");

    // var visibleEls = document.getElementsByClassName("visible");
    x.classList.toggle("hidden");
    y.classList.toggle('hidden');
} 

  function getNation() {
     return nations[Math.floor(Math.random()*(nations.length))];
  }
function loadHidden() {

  var langList = ""
  var randomNumber = Math.floor(Math.random()*(nations.length));

  document.getElementById('nNation').innerHTML = nations[randomNumber].nativeName + ' <br><i> ' + nations[randomNumber].name +'</i>'
  document.getElementById('nCapital').innerHTML= nations[randomNumber].capital 
  document.getElementById('nPop').innerHTML= nations[randomNumber].population
  for (var i = 0; i < nations[randomNumber].languages.length; i++) {
    langList += 
      '<li>'+nations[randomNumber].languages[i].nativeName+' | <i>'+nations[randomNumber].languages[i].name+'</i></li>'
  }
    document.getElementById('nLang').innerHTML = langList


}
function loadVisible() {
  var langList = ""
  var randomNumber = Math.floor(Math.random()*(nations.length));
  var test = 'cNation'
  document.getElementById(test).innerHTML = nations[randomNumber].nativeName + ' <br><i> ' + nations[randomNumber].name +'</i>'
  document.getElementById('cCapital').innerHTML = nations[randomNumber].capital 
  document.getElementById('cPop').innerHTML= nations[randomNumber].population
  for (var i = 0; i < nations[randomNumber].languages.length; i++) {
    langList += 
      '<li>'+nations[randomNumber].languages[i].nativeName+' | <i>'+nations[randomNumber].languages[i].name+'</i></li>'
  }
    document.getElementById('cLang').innerHTML = langList

}

function main() {
  changeColours()
  loadHidden()
  loadVisible()
  
  transition()

}

 