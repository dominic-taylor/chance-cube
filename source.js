
var nations = [{name: "New Zealand", capital: "Wellington", facts:["i live here", "never rains"]},
               {name: "Iran", capital: "Tehran", facts:["great", "polite"]},
               {name: "France", capital: "Paris", facts:["80 m"]},
               {name: "Portugal", capital: "Lisbon", facts:["All drugs decriminlasied"]},
               {name: "USA", capital: "Washington, DC", facts:["fucked"]},
               {name: "Spain", capital: "Madrid", facts:["meah", "never rains"]},
               {name: "China", capital: "Beijing", facts:["good", "rains"]},
               {name: "Brazil", capital: "Brasila", facts:["Language: Portguesuse", "Pop: heaps"]}

]
// {name: "Whatever" capital: "Cap Sity" facts:"population", "offical languages", ""]

var randomNumber = Math.floor(Math.random()*(nations.length));


window.onload = function() {

  document.getElementById('heading').innerHTML = nations[randomNumber].name
  document.getElementById('sub').innerHTML= nations[randomNumber].capital
  var factList = ""
  for (var i = 0; i < nations[randomNumber].facts.length; i++) {
    factList += '<li>'+nations[randomNumber].facts[i]+'</li>'
  }
  document.getElementById('facts').innerHTML = factList

}
