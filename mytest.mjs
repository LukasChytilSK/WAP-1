'use strict'
/**
 * \brief Testy WAP projekt 1
 * \author Lukas Chytil
 */
console.log("Forma testu: ocakavana hodnota / ziskana hodnota  - OK/FAIL");


console.log("------------test 1------------");
console.log("Nacitat generator a vypisat jednu aminokyselinu");

let passed = 0;
let failed = 0;


function printResult(expected, result)
{
    if(expected === result)
    {
        console.log(expected + "/" + result + " - OK");
        passed++;
        return true;
    }
    else
    {
        console.log(expected + "/" + result + " - FAIL");
        failed++;
        return false;
    }
}

import { translate } from "./translation.mjs";
import { TranslationError } from "./translation.mjs";
import { BaseAminoAcid } from "./translation.mjs";








// test 1
let aminoAcid = translate("AUG")
var result = aminoAcid.next().value.name;
printResult("Methionin", result);
console.log("\n");






// test 2
console.log("------------test 2------------");
console.log("Nacitat generator a vypisat vsetky aminokyseliny");

var all_amino_acids = [
    'Fenylalanin', 'Fenylalanin', 'Leucin', 'Leucin', 'Leucin', 'Leucin',
    'Leucin', 'Leucin', 'Isoleucin', 'Isoleucin', 'Isoleucin', 'Methionin',
    'Valin', 'Valin', 'Valin', 'Valin', 'Serin', 'Serin', 'Serin', 'Serin',
    'Prolin', 'Prolin', 'Prolin', 'Prolin', 'Threonin', 'Threonin', 'Threonin',
    'Threonin', 'Alanin', 'Alanin', 'Alanin', 'Alanin', 'Tyrosin', 'Tyrosin',
    'STOP', 'STOP', 'Histidin', 'Histidin', 'Glutamin', 'Glutamin', 'Asparagin',
    'Asparagin', 'Lysin', 'Lysin', 'Kyselina asparagová', 'Kyselina asparagová',
    'Kyselina glutamová', 'Kyselina glutamová', 'Cystein', 'Cystein', 'STOP',
    'Tryptofan', 'Arginin', 'Arginin', 'Arginin', 'Arginin', 'Serin', 'Serin',
    'Arginin', 'Arginin', 'Glycin', 'Glycin', 'Glycin', 'Glycin'
  ];
for (let aminoAcid of translate("UUUUUCUUAUUGCUUCUCCUACUGAUUAUCAUAAUGGUUGUCGUAGUGUCUUCCUCAUCGCCUCCCCCACCGACUACCACAACGGCUGCCGCAGCGUAUUACUAAUAGCAUCACCAACAGAAUAACAAAAAGGAUGACGAAGAGUGUUGCUGAUGGCGUCGCCGACGGAGUAGCAGAAGGGGUGGCGGAGGG")) {
	var everything_ok = printResult(all_amino_acids.shift(), aminoAcid.name);
}
console.log("\n");




// test 3
console.log("------------test 3------------");
console.log("Nepodporovany retazec");
try {
	for (let aminoAcid of translate("FIT")) {}
}
catch (e) {
    printResult("TranslationError", e.name);
}
console.log("\n");



//test 4
console.log("------------test 4------------");
console.log("Nevalidny retazec na zaciatku");
try {
	for (let aminoAcid of translate("FITUUU")) {}
}
catch (e) {
    printResult("TranslationError", e.name);
}
console.log("\n");



//test 5
console.log("------------test 5------------");
console.log("Nevalidny retazec na konci");
try {
    for (let aminoAcid of translate("UUUUUUFIT")) {}
}
catch (e) {
    printResult("TranslationError", e.name);
}
console.log("\n");



//test 6
console.log("------------test 6------------");
console.log("Nevalidny retazec v strede");
try {
    for (let aminoAcid of translate("UUUUUUFITUUU")) {}
}
catch (e) {
    printResult("TranslationError", e.name);
}
console.log("\n");



//test 7
console.log("------------test 7------------");
console.log("mRNA dlzka nie je modulo 3");
try {
    for (let aminoAcid of translate("UUUUU")) {}
}
catch (e) {
    printResult("TranslationError", e.name);
}
console.log("\n");


//test 8
console.log("------------test 8------------");
console.log("Kratky kodon");
try {
    for (let aminoAcid of translate("FI")) {}
}
catch (e) {
    printResult("TranslationError", e.name);
}
console.log("\n");


//test 9
console.log("------------test 9------------");
result = translate("")
printResult(result.next().done, true);
printResult(undefined, result.next().value );
console.log("\n");


//test 10
console.log("------------test 10------------");
console.log("Stop kodon");
let it24 = translate("AUGUAAUGUAAUG");
let aminoAcids24 = [];
for (let aminoAcid of it24) {
    aminoAcids24.push(aminoAcid.name);
}
console.log("Ocakavana dlzka pola:");
printResult(1, aminoAcids24.length);
console.log("Prvok pola:");
printResult("Methionin", aminoAcids24[0]);


//test 11
console.log("------------test 11------------");
console.log("Nezavisle iteratory");
let it1 = translate("CCGGAUGAA")
printResult("Prolin", it1.next().value.name);
printResult("Kyselina asparagová", it1.next().value.name);
let it2 = translate("CCGGAUGAA")
printResult("Prolin", it2.next().value.name);
printResult("Kyselina asparagová", it2.next().value.name);
printResult("Kyselina glutamová", it1.next().value.name);
console.log("\n");


//test 12
console.log("------------test 12------------");
console.log("Nezavisle objekty");
let it3 = translate("GAUGAUGAUGAUGAUGAU");
let acid1 = it3.next().value;
let acid2 = it3.next().value
printResult(false, acid1 === acid2 );


//test 13
console.log("------------test 13------------");
console.log("Rovnaky prototyp");
let it4 = translate("CUUCUU");
let acid3 = it4.next().value;
let acid4 = it4.next().value;
printResult(true, acid3.__proto__ === acid4.__proto__);


//test 14
console.log("------------test 14------------");
console.log("Spravovany objekt je aminokyselina");
let it5 = translate("CUUAUUGUU");
let acid5 = it5.next().value;
printResult(true, acid5 instanceof BaseAminoAcid);


//test 15
console.log("------------test 15------------");
console.log("Rozdielny prototyp");
printResult(true, it5.next().value.__proto__ !== acid5.__proto__);


//test 16
console.log("------------test 16------------");
console.log("Meno kyseleliny neni sucastou kazdeho objektu");
printResult(false, acid5.hasOwnProperty("name"));
printResult(true, acid5.__proto__.hasOwnProperty("name"));



//summary
console.log("\n");
console.log("------------SUMMARY------------");
console.log("OK + FAILD: " + (passed + failed));
console.log("Pocet OK vysledkov: " + passed);
console.log("Pocet FAILD vysledkov: " + failed);