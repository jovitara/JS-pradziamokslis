//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [0, "Labas lietuva", 2, 3, [1, 2, 3]];

//console.log( petras[1] );

//var = variable (angl.) kintamasis

//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = "Labas lietuva!";

document.getElementById("kvietejas").addEventListener("click", ikrepseli);

function ikrepseli() {
  var kiekis = document.getElementById("kiekis").value;
  var zodis = "prekes";
  var zinute = "Jūs sėkmingai pridėjote " + kiekis + " prekę į savo krepšelį!";

  if (kiekis % 10 == 1) {
    zodis = "prekę";
  }

  if ((kiekis > 10 && kiekis < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }

  if (kiekis < 1) {
    zinute = "Pasirinktas per mažas kiekis.";
    
  }
  if (kiekis > 100) {
    zinute = "Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.";
   
  }
  document.getElementById("messages").innerHTML = zinute;

  //kaunasLietuva(petras);
}
