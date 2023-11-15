var x = document.getElementById("intro1");
x.innerHTML = 'The h1 tag is accessed using ID attribute';


var y = document.getElementsByClassName("intro");
y[0].innerHTML = 'The first h1 tag is accessed using CLASS attribute';
y[1].innerHTML = 'The second h1 tag is accessed using CLASS attribute';

y[0].style.color = 'red'
y[1].style.color = 'green'
 
var z = document.getElementsByTagName("h1");
z[3].innerHTML = 'The h1 tag is accessed using TAG attribute'