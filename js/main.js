var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraf = document.getElementById('joke')

document.onload = getJoke();

button.addEventListener("click", function(){
   getJoke(); 
});

function getJoke () {
  var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
       var response = JSON.parse(xhr.response);
        paragraf.innerHTML = response.value.joke;
    });
    xhr.send();
};