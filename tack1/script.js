// Bir neçə finKod saxladığınız array olsun. Layihəni açdıqda user-dən finKod daxil edilsin. 
// Əgər həmin finKod-un formatı yalnış olarsa, regex-də yoxlasın və alert (wrong format) çıxarıb yenidən daxil edilməsini istəsin, 
// əgər format düzgün olarsa ancaq həmin array-də olmazsa o zaman alert çıxarıb(finCode not found) yenidən istəsin. 
// Əgər finKod-un formatı düzgün olarsa və həmin array-də olarsa o zaman user found alert-ı çıxarıb həmin finKodun 
// indeksini ekrana yazdırıb layihəni dayandırsın.

const finCodes=['7ZVH08Q','5HFV6H4','7DKNY5S'];   //finkodlar olan array
var finCode= prompt("Zəhmət olmasa finkodu daxil edin:"); // userden finkod daxil edilsin
const regex=/^[A-HJ-NP-Z0-9^I,O]{7}$/;
while(!regex.test(finCode)){
    alert("Wrong format!")  // eger format duzgun deyilse 
    finCode= prompt("Zəhmət olmasa finkodu daxil edin:"); 
}

const index = finCodes.indexOf(finCode); // array'in icindeki elementin yerini mueyyen edir

if (index === -1) {
    alert("FinCode not found!"); //eger array'de yoxdusa
    finCode = prompt("Zəhmət olmasa bir daha fin kodunuzu daxil edin:");
  } else {
    alert("User found!"); // Eger finkod varsa
    console.log("Girilən fin kodunun indeksi:"+ index);
}
