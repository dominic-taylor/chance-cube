

var intervalID
var nations = data
var colours = ["#001f3f","#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00"];

window.onload = function() {

 getRandomNation();
 //uncomment for testing
 intervalID = setInterval(function (){getRandomNation()}, 5000);

}


function changeColours() {
  // console.log(body[0])
  // body.style.background = "blue"
  var randomNumber = Math.floor(Math.random()*(colours.length));
  document.body.style.background = colours[randomNumber];

}



  // body...
function getRandomNation() {
  changeColours()
  var randomNumber = Math.floor(Math.random()*(nations.length));
  document.getElementById('nation').innerHTML = nations[randomNumber].nativeName + ' <br><i> ' + nations[randomNumber].name +'</i>'
  document.getElementById('capital').innerHTML= nations[randomNumber].capital 
  document.getElementById('pop').innerHTML= nations[randomNumber].population

  var langList = ""
  for (var i = 0; i < nations[randomNumber].languages.length; i++) {
    // console.log(nations[randomNumber])
    langList += '<li>'+nations[randomNumber].languages[i].nativeName+'</li>'
    langList += '<li>'+nations[randomNumber].languages[i].name+'</li>'

  }
  document.getElementById('lang').innerHTML = langList
}

 