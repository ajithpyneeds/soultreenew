function vFunc() {
    var a = document.getElementById('gal-V');
    var b = document.getElementById('gal-I');
    var c = document.getElementById('walkthrough');
    var d = document.getElementById('photos');
    if (a.style.display === 'none') {
        a.style.display = 'block';
        b.style.display = 'none';
        c.classList.add('active-gal');
        d.classList.remove('active-gal');
    }
}

function vMFunc() {
    var a = document.getElementById('gal-V');
    var b = document.getElementById('gal-I');
    var c = document.getElementById('walkthroughM');
    var d = document.getElementById('photosM');
    if (a.style.display === 'none') {
        a.style.display = 'block';
        b.style.display = 'none';
        c.classList.add('active-gal');
        d.classList.remove('active-gal');
    }
}

function iFunc() {
    var a = document.getElementById('gal-V');
    var b = document.getElementById('gal-I');
    var c = document.getElementById('walkthrough');
    var d = document.getElementById('photos');
    if (b.style.display === 'none') {
        a.style.display = 'none';
        b.style.display = 'block';
        c.classList.remove('active-gal');
        d.classList.add('active-gal');
    }
}

function iMFunc() {
    var a = document.getElementById('gal-V');
    var b = document.getElementById('gal-I');
    var c = document.getElementById('walkthroughM');
    var d = document.getElementById('photosM');
    if (b.style.display === 'none') {
        a.style.display = 'none';
        b.style.display = 'block';
        c.classList.remove('active-gal');
        d.classList.add('active-gal');
    }
}