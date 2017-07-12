

var intervalID
var nations = data


window.onload = function() {
 getRandomNation();
 //uncomment for testing
 // intervalID = setInterval(function (){getRandomNation()}, 5000);

}





  // body...
function getRandomNation() {

  var randomNumber = Math.floor(Math.random()*(nations.length));
  document.getElementById('nation').innerHTML = nations[randomNumber].nativeName + ' <br><i> ' + nations[randomNumber].name +'</i>'
  document.getElementById('capital').innerHTML= nations[randomNumber].capital 
  document.getElementById('pop').innerHTML= nations[randomNumber].population

  var langList = ""
  for (var i = 0; i < nations[randomNumber].languages.length; i++) {
    console.log(nations[randomNumber])
    langList += '<li>'+nations[randomNumber].languages[i].nativeName+'</li>'
    langList += '<li>'+nations[randomNumber].languages[i].name+'</li>'

  }
  document.getElementById('lang').innerHTML = langList
}

 