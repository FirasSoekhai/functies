let recept = [
      "Spaghetti met ham en kaas",
      "Macaroni met ham en kaas",
      "Tagliatelli met ham en kaas",
      "Spaghetti met spinazie en room",
      "Macaroni met spinazie en room",
      "Tagliatelli met spinazie en room",
      "Spaghetti met gehakt-tomatensaus en kaas",
      "Macaroni met gehakt-tomatensaus en kaas",
      "Tagliatelli met gehakt-tomatensaus en kaas ",
      "Spaghetti met spekjes, spinazie en room",
      "Macaroni met spekjes, spinazie en room",
      "Tagliatelli met spekjes, spinazie en room",
      "Spaghetti met courgette en tomatensaus",
      "Macaroni met courgette en tomatensaus",
      "Tagliatelli met courgette en tomatensaus",
      "Lasagne met courgette en tomatensaus",
      "Lasagne met room, doperwten en tomatensaus",
      "Lasagne met spinazie en tomatensaus en kaas"
      ];




function showArray() {
  for (let i = 0; i < recept.length; i++) {
      document.write(recept[i]);
  }
}
showArray();

function dingen(nigga) {
  if (recept[nigga]) {
      document.write(recept[nigga]);
  }
}
dingen(1);

function poephoofd(){
  return recept[2];
}
let geenhoofd = poephoofd()
document.write(geenhoofd);



function harry(from, to) {
  for (var i = 0; i <recept.length; i++) {
      if (i=> from && i <= to) {
          document.write (recept[i])
      }
  }
}
harry(4, 8)