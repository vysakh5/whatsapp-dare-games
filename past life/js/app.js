
var details = [
  ['ഡ്രൈവർ', "ധർമേന്ദ്രയെ "],
  [' സമർഥനായ പൈലറ്റ് ', "ഇയാളെ  "],
  [' പലിശക്കാരൻ ', "പിള്ളേച്ചനെ "],
  ['വകീൽ  ', " അഡ്വക്കേറ്റ് മുകുന്ദനുണ്ണിിയെ "],
  ['സിനിമ നടൻ ', " ഭദ്രനെ "],
  ['ഗായകൻ ', "ഇദ്ദേഹത്തെ "],
  ['ഡാൻസർ', "ഇദ്ദേഹത്തെ "],
  [' തീവ്രവാദി  ', "ഇയാളെ  "],
  [' ഇലക്ട്രോണിക്സ് കട നടത്തുന്നയാൾ  ', "നാരായണൻകുട്ടിയെ "],
  ['ഗുണ്ടാ   ', " ലീഫ് വാസുവിനെ  "],
  ['ഷെഫ് ', " അഹമ്മദ് കുട്ടിയെ  "],
  ['ശാസ്ത്രഞ്ജൻ  ', "ഇദ്ദേഹത്തെ "],
  ['അണ്ടർവേൾഡ് ഡോൺ ', "ചന്ദ്രൻ വളഞ്ഞവഴിയെ "],
  [' പള്ളിയിലെ അച്ഛൻ   ', "വിശുദ്ധനെ "],
  [' ഡയറക്ടർ ', "വിജയനെ "],
  ['കള്ളൻ ', " മാർട്ടിനെ "],
  ['പട്ടാളക്കാരൻ  ', " പുരുഷുവിനെ "],
  [' ബസ് ഡ്രൈവർ  ', "സുകുവിനെ  "],
  ['കോളേജ് പ്രൊഫെസർ  ', "വിമൽ സാറിനെ "],
  [' ഗുസ്തികാരൻ  ', "പാമ്പ് ചാക്കോയെ  "],
  [' പടക്ക കടക്കാരൻ  ', "പടക്കം ബഷീറിനെ "],
  ['ഭിക്ഷക്കാരി  ', " ഇതിനെ "],
  ['ജോലിയും ഇല്ലാത്തവൻ  ', " ഉമേഷിനെ "],
  [' ഗൾഫ് കാരൻ', " കമലാസനനെ "]


];

var text1 = "നിങ്ങൾ കഴിഞ്ഞ ജന്മത്തിൽ " ;
var text2 = " പോലെ ഒരു ";
var text3 = " ആയിരുന്നു ";

function msg(){
 alert("Hello Javatpoint");
}

function change(){
  var rand = Math.floor(Math.random() * 24)  ;
  var img_name = "img/".concat(rand).concat(".jpeg");
  document.getElementById('Image').src=img_name ;
  //document.getElementById("start").disabled = true;
  //document.getElementById("nameText").disabled = true;
  var finalText = text1.concat(details[rand][1]).concat(text2).concat(details[rand][0]).concat(text3);
  document.getElementById('job').innerHTML=finalText ;

//document.getElementById('disc').innerHTML=details[rand-1][1] ;
}
