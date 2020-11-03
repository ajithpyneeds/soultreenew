var serenityBHKS = 1
var serenityFACES = 'east'
var serenityBLOCKS = 'A'

function serenityFloorFunction(elmnt, id) {
    // console.log(id)
    // alert(id)
    if (id == "serenity1BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity2BHK").classList.contains('active') ) {
            document.getElementById("serenity2BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity3BHK").classList.contains('active') ) {
            document.getElementById("serenity3BHK").classList.remove('active')
        }
        serenityBHKS = 1
    }
    if (id == "serenity2BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity1BHK").classList.contains('active') ) {
            document.getElementById("serenity1BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity3BHK").classList.contains('active') ) {
            document.getElementById("serenity3BHK").classList.remove('active')
        }
        serenityBHKS = 2
    }
    if (id == "serenity3BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity2BHK").classList.contains('active') ) {
            document.getElementById("serenity2BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity1BHK").classList.contains('active') ) {
            document.getElementById("serenity1BHK").classList.remove('active')
        }
        serenityBHKS = 3
    }
    simpAnother()
    // alert(serenityBHKS)
    // document.getElementById(id).classList.add('active');
    // document.getElementById("demo").innerHTML = "Hello World";
  }

  function serenityFaceFunction(elmnt) {
    serenityFACES = document.getElementById("serenitySelectFacing").value;
    // alert(serenityFACES)
    simpAnother()
  }

  function serenityBlockFunction(elmnt) {
    serenityBLOCKS = document.getElementById("serenitySelectBlock").value;
    // alert(serenityFACES)
    simpAnother()
  }

  function simpAnother(){
      console.log(serenityBHKS,serenityFACES,serenityBLOCKS)
  }