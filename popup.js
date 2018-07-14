var a = document.getElementById('login1');
var b = document.getElementById('login2');
var c = document.getElementById('login3');
var d = document.getElementById('login4');
var e = document.getElementById('login5');
var f = document.getElementById('login6');
var g = document.getElementById('login7');
var h = document.getElementById('login8');
var i = document.getElementById('login9');
var j = document.getElementById('login10');
var k = document.getElementById('login11');
var l = document.getElementById('login12');
var m = document.getElementById('login13');
var n = document.getElementById('login14');
var o = document.getElementById('login15');
var p = document.getElementById('login16');
var q = document.getElementById('login17');
var r = document.getElementById('login18');
var s = document.getElementById('login19');
var t = document.getElementById('login20');
var u = document.getElementById('login21');
var v = document.getElementById('login22');
var w = document.getElementById('login23');
var x = document.getElementById('login24');
var y = document.getElementById('login25');
var z = document.getElementById('login26');

a.onclick = function(){loginfun('hello1',this)};
b.onclick = function(){loginfun('hello2',this)};
c.onclick = function(){loginfun('hello3',this)};
d.onclick = function(){loginfun('hello4',this)};
e.onclick = function(){loginfun('hello5',this)};
f.onclick = function(){loginfun('hello6',this)};
g.onclick = function(){loginfun('hello7',this)};
h.onclick = function(){loginfun('hello8',this)};
i.onclick = function(){loginfun('hello9',this)};
j.onclick = function(){loginfun('hello10',this)};
k.onclick = function(){loginfun('hello11',this)};
l.onclick = function(){loginfun('hello12',this)};
m.onclick = function(){loginfun('hello13',this)};
n.onclick = function(){loginfun('hello14',this)};
o.onclick = function(){loginfun('hello15',this)};
p.onclick = function(){loginfun('hello16',this)};
q.onclick = function(){loginfun('hello17',this)};
r.onclick = function(){loginfun('hello18',this)};
s.onclick = function(){loginfun('hello19',this)};
t.onclick = function(){loginfun('hello20',this)};
u.onclick = function(){loginfun('hello21',this)};
v.onclick = function(){loginfun('hello22',this)};
w.onclick = function(){loginfun('hello23',this)};
x.onclick = function(){loginfun('hello24',this)};
y.onclick = function(){loginfun('hello25',this)};
z.onclick = function(){loginfun('hello26',this)};


var item=localStorage.getItem('which');
document.getElementById(item).style="border:2px solid #f00";

function loginfun(msg,the){
	chrome.tabs.getSelected(null, function(tab) {
		the.style="border:2px solid #f00";
		localStorage.setItem('which',the.id);
	  chrome.tabs.sendRequest(tab.id, {greeting: msg}, function(response) {
	    console.log("---->"+response);
	  });
	});
}
