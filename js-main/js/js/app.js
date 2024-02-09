// zadanie 1
// console.log("Hello World");
// /*zadanie 2*/
// zmienna=12
// console.log(typeof zmienna)
// console.log("Język Java Script")
// console.log(typeof "Język Java Script")
// /*zadanie 3*/
// a=21;
// b=17;
// alert(a+b)
// /*zadanie 4*/
// cos=prompt("Podaj liczbe")
// console.log(parseInt(cos))
/*zadanie 5*/
/*
var a=15;
var b=5;
var c=a+b;
document.getElementById('wynik').innerHTML=c;
*/
/*zadanie6*/
/*
 var a=73
var b=123
document.getElementById('wynik').innerHTML="<h1>"+ (a+b) +"</h1>";
*/

/*zadanie7*/

//  var a=73
// var b=123
// document.getElementById('wynik').innerHTML=`<h1> ${(a+b)}</h1>`;

/*zadanie 8*/
// var przypisz="";
// for (i=1;i<101;i++)
// {
//   przypisz+=`${i},`;
// }
// document.getElementById('wynik').innerHTML=przypisz
// zadanie 9
// a=prompt("Wyswietl jakaś liczba");
// a=parseInt(a);
// const coss= a>0? `${a} jest dodadania`:`${a} jest ujemna`;
// document.getElementById('opis').innerHTML=coss;
// zadanie 11

        //
        //
        // let liczba=-3;
        //
        //
        // (liczba>0) ? opis.innerHTML ='dodatnia' : opis.innerHTML='0/ujemna';
        //

// zadanie 12
//  a=prompt("Wyswietl jakaś liczba");
//  a=parseInt(a);
//  if (a>0) {
//
//    document.getElementById('opis').innerHTML = `${a} jest dodadania`;
//  }
//  else if (a===0){
//    document.getElementById('opis').innerHTML = `${a} jest zerem`;
//  }
//  else{
//    document.getElementById('opis').innerHTML = `${a} jest ujemna`;
//  }
// zadanie 13
// function wyswietl(){
//   document.getElementById('opis').innerHTML="Witaj świecie!";
//   document.getElementById('przycisk').style.display= "none";
// }
// zadanie 14
//
// document.getElementById('wynikkk').innerHTML=0;
//  function  zmieniaj() {
//      var dd= document.getElementById('cosss').value;
//  console.log(dd);
//  document.getElementById('wynikkk').innerHTML=dd;
// }
//  zadanie 15
//  function klikniecie_na_przycisk()
//  {
//   alert("klikniecie na przycisk");
//  }
// zadanie 16
// const opis=document.querySelector('#opis');
// 		const elementy=document.querySelectorAll('.elementy');
// 		for(const element of elementy) {
// 			element.addEventListener("click",function() {
// 				opis.innerHTML=this.id;
// 			});
//

// zadanie 17

// function przepisz()
// {
//     var liczba=document.getElementById("liczba").value;
//     document.getElementById("wynikk").innerHTML=`<h1>${liczba}</h1>`;
// }

// zadanie 18
// const div=document.querySelector('div');
// 		const elementyRadio=document.querySelectorAll('input');
// 		for(const radio of elementyRadio) {
//             radio.addEventListener("click", function () {
//                 div.innerHTML = radio.value
//             });
//         }

//zadanie 19
// function zmien_tlo()
// {
//     document.bgColor="yellow";
// }
// zadanie 20

    // function zmien_kolor(kolor) {
    //     document.getElementById('divek').style.backgroundColor=kolor;
    //
    // }

// zadanie 21
// var wyrazenie=""
// var tab=[5,12,17,23,123,45,54];
// for (liczba in tab)
// {
//
//     wyrazenie+=`${tab[this.liczba]}, `;
//
// }
// document.getElementById("tablica").innerHTML=wyrazenie;

// zadanie 22

// const imiona = ['Zenek','Tomasz','Adam','Ewa','Krzysztof'];
//
//         imiona.forEach(function(element,indeks,tablica) {
//             console.log(element.toUpperCase());
//             console.log(indeks);
//             console.log(tablica);
//         });
// zadanie 23
// const osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"];
// for (osoba in osoby)
// {
//     console.log("aaa bbb");
// }
// zadanie 24
//  const samochody=["Fiat","Skoda","Volvo","Mercedes","Kia","Opel","Citroen"];
//  for (samochod in samochody)
//  {
//      if (samochod==3 || samochod==2)
//      {
//          continue;
//      }
//      console.log(samochody[samochod]);
//  }

// zadanie 25

// function f() {
//     console.log("Funkcja działa");
// }


// zadanie 26
// function pole_kola(liczba) {
//     console.log(liczba*liczba*3.14)
// }

// zadanie 27
// function poleProstokąta(liczba1=0,liczba2=0) {
//     liczba1=liczba1*10;
//     liczba2=liczba2*10;
//     var wynik=liczba1*liczba2;
//
//     console.log(`Pole prostokąta o bokach: ${liczba1} i ${liczba2} wynosi: ${wynik}`)
// }


//zadanie 28
// const car = {marka : "Mitshubishi", model : "Lancer", cena : 6000,
// koszty: function koszt100km() {
//     return "37zł"
// }};