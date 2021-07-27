//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [0, 15, 2, 3];

//console.log( petras[1] );

//var = variable (angl.) kintamasis

//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = "Labas lietuva!";

document.getElementById("kvietejas").addEventListener("click", ikrepseli);

function ikrepseli() {
  var kiekis = document.getElementById("kiekis").value;
  var zodis = "prekes";

  if (kiekis % 10 == 1) {
    zodis = "prekę";
  }

  if ((kiekis > 10 && kiekis < 20) || kiekis % 10 == 0) {
    zodis = "prekių";
  }

  var zinute =
    "Jūs sėkmingai pridėjote " + kiekis + " " + zodis + "  į savo krepšelį!";

  if (kiekis > 100)
    zinute = "Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.";

  if (kiekis < 1) zinute = "Pasirinktas per mažas kiekis.";

  document.getElementById("messages").innerHTML = "";

  //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');
}

//kaunasLietuva(petras);

document.getElementById("reset").addEventListener("click", atnaujinti);

function atnaujinti() {
  location.reload();
}

var i = 0;

while (i < 10) {
  //console.log(i);
  i++;
}

i = 0;

do {
  //console.log('Skaicius yra: ' + i);
  i++;
} while (i < 10);

var petras = [5, 6, 7, 8, 9];

//console.log(petras[0]);

/*for(let i = 0; i < petras.length; i++) {
    console.log('Masyvo petras indeksas: ' + petras[i]);
}*/

const duomenys = [
  {
    miestas: "Kaunas",
    adresas: "Jonavos 56",
    data: "2020-07-01",
    kiekis: "10",
  },
  {
    miestas: "Vilnius",
    adresas: "Gelezinio vilko 20",
    data: "2020-07-01",
    kiekis: "15",
  },
  {
    miestas: "Klaipeda",
    adresas: "Ligonines 20",
    data: "2020-07-01",
    kiekis: "25",
  },
];

duomenys[0]["miestas"] = "Kazlų Rūda";
duomenys[1]["miestas"] = "Ariogala";
duomenys[2]["miestas"] = "Marijampolė";

console.log(duomenys);

let html = "";
let ending = "";

for (let indeksas in duomenys) {
  html += "<tr>";

  for (let indeksas2 in duomenys[indeksas]) {
    html += "<td>" + duomenys[indeksas][indeksas2] + "</td>";
  }

  html += "</tr>";

  //console.log(eilute);
}

document.getElementById("lentelesVidus").innerHTML = html;

function testineFunkcija() {}

let reiksme = 0;

switch (reiksme) {
  case 0:
    testineFunkcija();
    break;

  case 1:
    alert("Reiksme yra 1");
    break;

  default:
    alert("Reiksmes nera");
}

document.getElementById("rodyti").onclick = function () {
  var lentele = document.getElementById("lentele");

  lentele.classList.toggle("show");

  if (lentele.classList.contains("show") == false) {
    document.getElementById("rodyti").innerText = "Rodyti";
  } else {
    document.getElementById("rodyti").innerText = "Slėpti";
  }
};

document.getElementById("skaiciuoti").onclick = function () {
  var skaiciuokles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  var total = 0;

  for (let i = 0; i < skaiciuokles.length; i++) {
    total += skaiciuokles[i];
  }

  document.getElementById("total").innerHTML = total;
};

document.getElementById("submit").onclick = function () {
  var el = document.getElementById("pasirinkimas");

  var tekstas = "";

  switch (el.value) {
    case "volvo":
      tekstas = "Volvo geriausias.";
      break;

    case "saab":
      tekstas = "Keista mašina...";
      break;

    case "opel":
      tekstas = "Lauželis";
      break;

    case "audi":
      tekstas = "Kažkas tokio!";
      break;

    default:
      tekstas = "Velniop tą mašiną";
  }

  alert(tekstas);
};

jQuery(document).ready(function () {
  jQuery(".kitas").addClass("klase");
  jQuery("#kitas").removeClass("klase");
  jQuery(".kitas").click(function () {
    alert("Naujas paspaudiams");
  });
});

//Lentele su EACH

jQuery(document).ready(function () {
  jQuery(".kitas").addClass("klase");
  jQuery("#kitas").removeClass("klase");
  jQuery(".kitas").click(function () {
    alert("Naujas paspaudiams");
  });
});

jQuery(".pasirinkimasjq").change(function () {
  var el = jQuery(this);

  var tekstasjq = "";

  switch (el.val()) {
    case "volvo":
      tekstasjq = "Volvo geriausias.";
      break;

    case "saab":
      tekstasjq = "Keista mašina...";
      break;

    case "opel":
      tekstasjq = "Lauželis";
      break;

    case "audi":
      tekstasjq = "Kažkas tokio!";
      break;

    default:
      tekstasjq = "Velniop tą mašiną";
  }
  //console.log(tekstasjq);
  alert(tekstasjq);

  jQuery(".responseMessage").html(tekstasjq);
  //rodys tik vieną var reikšmę
  //jQuery('.responseMessage').append(tekstasjq);
  //rodys visas parinktas reikšmes, rikiuojant naujausią galę
  //jQuery('.responseMessage').prepend(tekstasjq);
  //rodys visas parinktas reikšmes, rikiuojant naujausią priekyje
});

jQuery(document).ready(function () {
  jQuery(duomenys).each(function (indeksas, reiksme) {
    jQuery(reiksme).each(function (indeksas, reiksme) {
      console.log(reiksme["adresas"]);
    });
  });
});

//lentele su jq

// const duomenysnew = [
//   {
//     klientas: "Adomavičiaus įmonė",
//     kodas: "1000",
//     data: "2021-07-01",
//     produktas: "Kompiuteris",
//     kaina: "1499",
//     papildoma_informacija: "",
//   },
//   {
//     klientas: "UAB KESKO SENUKAI",
//     kodas: "1001",
//     data: "2021-07-02",
//     produktas: "Televizorius",
//     kaina: "1299",
//     papildoma_informacija: "Reikalingas pristatymas",
//   },
//   {
//     klientas: "UAB SIMPLEA",
//     kodas: "1002",
//     data: "2021-07-03",
//     produktas: "Planšetė",
//     kaina: "499",
//     papildoma_informacija: "",
//   },
//   {
//     klientas: "UAB 5 kontinentai",
//     kodas: "1003",
//     data: "2021-07-04",
//     produktas: "Telefonas",
//     kaina: "700",
//     papildoma_informacija: "",
//   },
// ];

// var tbody = $("#newlentele tbody"),
// reiksmes = ["klientas", "kodas", "data", "produktas", "kaina", "papildoma_informacija"]
// jQuery(duomenysnew).each(function(indeksas, reiksme){
//   var tr = jQuery("<tr>");
//   jQuery(reiksmes).each(function(indeksas, kintamas){
//     jQuery("<td>").html(reiksme[kintamas]).appendTo(tr);
//   });
//   tbody.append(tr);
//   });
// });

const info = {
  vardas:"Vardenis ", 
  pavarde:"Pavardenis ", 
  data:"2021-01-01."
};

// Change a property:
//car.color = "red";

// Add a property:
vardas = "Vardenis ";
pavarde = "Pavardenis ";
data = "2020-01-01.";


// Display the property:

//1 uzduotis
document.getElementById("info").innerHTML = "Аš esu " + vardas + pavarde + "gimęs " + data; 


//2 uzduotis
jQuery(document).ready(function() {

  
    document.getElementById("skaicius1").innerHTML = Math.round(125.6);
    document.getElementById("skaicius2").innerHTML = Math.ceil(126.6);
    document.getElementById("skaicius3").innerHTML = Math.floor(127.6);
  });

//3 uzduotis
jQuery(document).ready(function randomSkaicius(min, max) { 
 
min = 100;
max = 150;
  document.getElementById("randomskaicius").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
});


//4 uzduotis
 jQuery(document).ready(function randomSkaicius(min, max) { 
 
   min = 0;
   max = 4;

     document.getElementById("1kintamasis").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
     document.getElementById("2kintamasis").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);

     let a = document.getElementById("1kintamasis").innerText;
    let b = document.getElementById("2kintamasis").innerText;
    console.log(b);

    document.getElementById("suskaiciuota").innerHTML = Math.floor(a/b);
    
    if(b == 0)     
    document.getElementById("suskaiciuota").innerHTML = 'Dalyba negalima';
   });

   //5 užduotis
   jQuery(document).ready(function randomSkaicius(min, max) { 
 
    min = 0;
    max = 25;
 
      document.getElementById("1kintamas").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
      document.getElementById("2kintamas").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
      document.getElementById("3kintamas").innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
 
      let a1 = document.getElementById("1kintamas").innerText;
     let b1 = document.getElementById("2kintamas").innerText;
     let c1 = document.getElementById("3kintamas").innerText;

     let mediana = Math.max( 
      Math.min( a1, b1 ), 
      Math.min( Math.max( a1, b1), 
      c1)
  );
  document.getElementById("vidurinis").innerHTML = mediana;
   });

   //07-20 užduotys
   //1 užduotis 07-20

   jQuery(document).ready(function() {
   let text = "";
   let counter = 0;

for (let i = 0; i < 400; i++) {

  if (counter == 50) {
    text += '<br/>';
    counter = 0;
  }

  text += "*";
  counter++
}


document.getElementById("zvaigzdutes").innerHTML = text;

});

// 2 uzduotis 07-20

jQuery(document).ready(function () { 
  let atsitiktinis = 0;
  let atsitiktiniai = '';
  let virs = 0;
  
 
  min = 0;
  max = 300;
  for (let i=0; i < 300; i++){

    atsitiktinis = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(atsitiktinis);

    if (atsitiktinis >150) {
  
      virs++;
    };
    if (atsitiktinis > 275){
      atsitiktiniai += '<span style="color:red;">' + atsitiktinis + '</span>';
    } else{
      atsitiktiniai += atsitiktinis;
    }
    if (i !=299){
      atsitiktiniai += ' '
    }
    
    
  }

document.getElementById("300skaiciu").innerHTML =  atsitiktiniai;

document.getElementById("virs150").innerHTML = 'Skaiciai didesni uz 150:' + virs;

 });

//  3 uzduotis 2021-07-20

 jQuery(document).ready(function () { 
  let x = 0;
  let xeile = '';
  let kablelis = ', ';
  daliklis = 77;
  
 

  for (let i=1; i < 3000; i++){

   x = i/daliklis;
   if (Number.isInteger(x)){
     if(i!=daliklis){
            xeile += kablelis;
     }
  
   xeile += i;
    }
    if (i == 3000)
    xeile += '.';
  }

document.getElementById("77eile").innerHTML =  xeile;

 });

jQuery(document).ready(function(){
  let kvadratas = "";

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if(i == j || 99-i==j) {
        kvadratas += '<span style = "color:red";>*</span>';
      } else {
        kvadratas += "*";
      }
    }
    kvadratas += "<br>";
  }
  document.getElementById("zvaigzdziu_kvadratas").innerHTML =  kvadratas;

});

function randomSkaicius(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


jQuery(document).ready(function(){
  let benas = 0;
  let jovita = 0;
  let final = 222;
  let string = '';
  let ended = false;

  for (let i = 0; i < 1000; i++){
    if (ended)
        break;

        benas += randomSkaicius(10, 20);
        jovita += randomSkaicius(5, 25);

        if(benas >= final || jovita >= final){
          ended = true;
          if(benas >= final){
            string = 'Benas , nes surinko' + benas;
          } else{
            string = 'Jovita , nes surinko' + jovita;
          }
        }
 



document.getElementById("rezultatas").innerHTML = 'Partiją laimėjo'+ string;
}

});


document.querySelector('.naujos_uzduotys').innerHTML += '<h2>2021 07 26 UŽDUOTYS</h2>';
document.querySelector('.naujos_uzduotys').innerHTML += '<h2>1 užduotis</h2>';

let aktoriaus_vardas = 'Sandra'
let aktoriaus_pavarde = 'Bullock'

if(aktoriaus_vardas.length < aktoriaus_pavarde.length){
      string = 'Sandra - trumpesnis žodis';
  } else{
    string = 'Bullock - trumpesnis žodis';
  }

document.querySelector('.naujos_uzduotys').innerHTML += string;

document.querySelector('.naujos_uzduotys').innerHTML += '<h2>2 užduotis</h2>';

didziosios = aktoriaus_vardas.toUpperCase();
mazosios = aktoriaus_pavarde.toLowerCase();


document.querySelector('.naujos_uzduotys').innerHTML += didziosios +' '+ mazosios;

document.querySelector('.naujos_uzduotys').innerHTML += '<h2>3 užduotis</h2>';

vardo_raide = aktoriaus_vardas.charAt(0);
pavardes_raide = aktoriaus_pavarde.charAt(0);

let inicialai = vardo_raide + ' ' + pavardes_raide

document.querySelector('.naujos_uzduotys').innerHTML += inicialai;

document.querySelector('.naujos_uzduotys').innerHTML += '<h2>4 užduotis</h2>';

vardo_raides = aktoriaus_vardas.substr(3,5);
pavardes_raides = aktoriaus_pavarde.substr(4,6);

let junginys = vardo_raides + ' ' + pavardes_raides

document.querySelector('.naujos_uzduotys').innerHTML += junginys;

document.querySelector('.naujos_uzduotys').innerHTML += '<h2>5 užduotis</h2>';

let sakinys = 'Once upon a time in hollywood'

let pakeitimas = ''


  pakeitimas = (sakinys.replaceAll('o','*'));
  pakeitimas2 = (pakeitimas.replaceAll('O', '*'))

document.querySelector('.naujos_uzduotys').innerHTML += pakeitimas2;


document.querySelector('.naujos_uzduotys').innerHTML += '<h2>6 užduotis</h2>';

let visos_o = 'Once upon a time in hollywood'

tik_o = visos_o.match(/o/gi);

document.querySelector('.naujos_uzduotys').innerHTML += tik_o.length;

document.querySelector('.naujos_uzduotys').innerHTML += '<h2>7 užduotis</h2>';
let stringas1 = 'An American in Paris'
let stringas2 = "Breakfast at Tiffany's"
let stringas3 = '2001: A Space Odyssey'
let stringas4 = "It's a Wonderful Life"

be_a1 = (stringas1.replaceAll(/a/gi, ''))
be_e1 = (be_a1.replaceAll(/e/gi, ''))
be_balsiu1 = (be_e1.replaceAll(/i/gi, ''))

be_a2 = (stringas2.replaceAll(/a/gi, ''))
be_e2 = (be_a2.replaceAll(/e/gi, ''))
be_y2 = (be_e2.replaceAll(/y/gi, ''))
be_balsiu2 = (be_y2.replaceAll(/i/gi, ''))

document.querySelector('.naujos_uzduotys').innerHTML += be_balsiu1 + '<br>';

document.querySelector('.naujos_uzduotys').innerHTML += be_balsiu2 + '<br>';