function oramegjelenito() {
  //kérünk egy aktuális dátum-időt
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  if (second < 10) {
    //ha kissebb 10-nél, 0-val töltjük az elejét a számnak
    second = '0' + second;
  }
  if (hours < 10) {
    //ha kissebb 10-nél, 0-val töltjük az elejét a számnak
    hours = '0' + hours;
  }
  if (minutes < 10) {
    //ha kissebb 10-nél, 0-val töltjük az elejét a számnak
    minutes = '0' + minutes;
  }
  //összerakjuk az időt egy string-be
  var ora = hours + ':' + minutes + ':' + second;
  //beállítjuk a string-et clock element innerHTML-jébe, azaz elcseréljük az 'üres div' értéket
  document.getElementById('clock').innerHTML = ora;

  //változik a háttérszín, ahogy változik az idő
  var szin = '#' + hours + minutes + second;
  //beállítjuk a színt háttérszínnek
  document.body.style.background = szin;

  //a setTimeout egy javascript-es beépített időzítő, hogy mikor fusson le a megadott függvény
  setTimeout(function () {
    //1000 milisecundum UTÁN lefut EGYSZER, azaz egy másodperc után meghívja az oramegjelenito függvényt. 
    oramegjelenito();
  }, 1000);
}

//ezzel indul az óra megjelenítése
oramegjelenito();

//kettő másodpercenként fontFamily-t vált
//a setInterval egy javascript-es beépített időzítő, hogy MILYEN IDŐKÖZÖNKÉNT fusson le a megadott függvény
setInterval(changeFont, 2000);

//négy másik font nevét betesszük egy constans tömbbe
const fonts = ["Courier New", "Arial", "Fantasy", "Copperplate"];
//egy számláló, hogy melyik font legyen kiválsztva
var counter = 0;

function changeFont(indexOfFonts) {
  document.getElementById('clock').style.fontFamily = fonts[counter];
  document.getElementById('fontName').style.fontFamily = fonts[counter];
  document.getElementById('fontName').innerHTML = fonts[counter];
  counter++;
  //ha a számláló nagyobb, mint a tömb mérete, állítsuk vissza 0-ra
  if (counter > 3) counter = 0;
}