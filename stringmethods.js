var a="        India is";
var b="my Country       ";                                   // 1st 
var strconcat=a.trim().concat(" ",b.trim())
console.log(strconcat.toUpperCase());

var b="Hope EvryOne is fine";
var exstr=b.slice(5,13);                                      //2nd
console.log(exstr.indexOf("e"));
console.log(exstr.toLowerCase());

var c="I";
var str="am Bindu";
var conc=c.concat(" ",str).toUpperCase(); 
exchar=conc[conc.length-2];                                     //3rd
console.log(exchar);

var d="vennela";                                                
var e="Binela";
var conct=d.slice(0,3).concat(e.slice(-3))                                                                    //4th
var upcase=conct.charAt(0).toUpperCase() + conct.slice(1,length-1) + conct.charAt(5).toUpperCase();
console.log(upcase);

var f="   everyone   ";
var upcase=f.trim().charAt(0).toUpperCase() + f.trim().slice(1,length-1) + f.trim().charAt(7).toUpperCase();           //5th
var extstr=upcase.slice(5);
var str="Life";
var conct = extstr.concat(" ",str);
console.log(conct);

var g="hello there , how are you";
h=g.split(" ");                                                                      //6th
console.log(h.indexOf("are"));