

var intervalID
var nations = data
              // All look ok with black text apart from navy: #"#001f3f"
var colours = ["#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00"];

window.onload = function() {

 getRandomNation();
 //uncomment for testing
 intervalID = setInterval(function (){getRandomNation()}, 5000);

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

 