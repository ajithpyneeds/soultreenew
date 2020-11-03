"use strict";

// onscroll snap sticky navbar #########################################
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("navbar").style.marginTop = "-4.84vw";
    document.getElementById("navbar2").style.marginTop = "-4.84vw";
    document.getElementById("dropdown-content").style.marginTop = "4.84vw";
    document.getElementById("navbarM").style.marginTop = "-18vw";
    document.getElementById("navbar2M").style.marginTop = "-18vw";
    document.getElementById("dropdown-contentM").style.marginTop = "18vw";
    document.getElementById("getInTouchId").style.marginTop = "16vw";
  } else {
    document.getElementById("navbar").style.marginTop = "0";
    document.getElementById("navbar2").style.marginTop = "4.84vw";
    document.getElementById("dropdown-content").style.marginTop = "0vw";
    document.getElementById("navbarM").style.marginTop = "0";
    document.getElementById("navbar2M").style.marginTop = "18vw";
    document.getElementById("dropdown-contentM").style.marginTop = "0vw";
    document.getElementById("getInTouchId").style.marginTop = "5vw";
  }
} // menu-pages active function ###########################################


function menuFunc(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks; // Get all elements with class="tabcontent" and hide them
  // tabcontent = document.getElementsByClassName("tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = "none";
  // }
  // Get all elements with class="tablinks" and remove the class "active"

  tablinks = document.getElementsByClassName("tablinks-menu");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-menu", "");
  } // Show the current tab, and add an "active" class to the button that opened the tab


  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-menu";
} // Hamburger Menu working ###########################################


var btn = $('.btn11');
btn.on('click', function () {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});
$(document).ready(function () {
  $('.box').on('click', function () {
    $(this).toggleClass('active');
    $('.top-nav').toggleClass('open');
  });
  $('.top-nav .nav-link').on('click', function () {
    $('.btn11').toggleClass('not-active');
    $('.top-nav').toggleClass('open');
  });
  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });
  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });
}); //Progress Bar ##############################################################

$(function () {
  var $ppc = $('.progress-pie-chart'),
      percent = parseInt($ppc.data('percent')),
      deg = 360 * percent / 100;

  if (percent > 50) {
    $ppc.addClass('gt-50');
  }

  $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
  $('.ppc-percents span').html(percent + '%');
}); //Timeline #####################################################################
//Sample dates

var dates = ["6/12/2020", "8/15/2021", "10/22/2021", "11/2/2021", "12/22/2021"]; //For the purpose of stringifying MM/DD/YYYY date format

var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //Format MM/DD/YYYY into string

function dateSpan(date) {
  var month = date.split('/')[0];
  month = monthSpan[month - 1];
  var day = date.split('/')[1];

  if (day.charAt(0) == '0') {
    day = day.charAt(1);
  }

  var year = date.split('/')[2]; //Spit it out!

  return month + " " + day + ", " + year;
} //Main function. Draw your circles.


function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  if (dates.length < 2) {
    $("#line").hide();
    $("#span").show().text(dateSpan(dates[0])); //This is what you really want.
  } else if (dates.length >= 2) {
    //Set day, month and year variables for the math
    var first = dates[0];
    var last = dates[dates.length - 1];
    var firstMonth = parseInt(first.split('/')[0]);
    var firstDay = parseInt(first.split('/')[1]);
    var lastMonth = parseInt(last.split('/')[0]);
    var lastDay = parseInt(last.split('/')[1]); //Integer representation of the last day. The first day is represnted as 0

    var lastInt = (lastMonth - firstMonth) * 30 + (lastDay - firstDay); //Draw first date circle

    $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');
    $("#mainCont").append('<span id="span0" class="center">' + dateSpan(dates[0]) + '</span>'); //Loop through middle dates

    for (i = 1; i < dates.length - 1; i++) {
      var thisMonth = parseInt(dates[i].split('/')[0]);
      var thisDay = parseInt(dates[i].split('/')[1]); //Integer representation of the date

      var thisInt = (thisMonth - firstMonth) * 30 + (thisDay - firstDay); //Integer relative to the first and last dates

      var relativeInt = thisInt / lastInt; //Draw the date circle

      $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');
      $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
    } //Draw the last date circle


    $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>');
    $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
  }

  $(".circle:first").addClass("active");
}

makeCircles();
$(".circle").mouseenter(function () {
  $(this).addClass("hover");
});
$(".circle").mouseleave(function () {
  $(this).removeClass("hover");
});
$(".circle").click(function () {
  var spanNum = $(this).attr("id");
  selectDate(spanNum);
});

function selectDate(selector) {
  $selector = "#" + selector;
  $spanSelector = $selector.replace("circle", "span");
  var current = $selector.replace("circle", "");
  $(".active").removeClass("active");
  $($selector).addClass("active");

  if ($($spanSelector).hasClass("right")) {
    $(".center").removeClass("center").addClass("left");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right");
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  }

  ;
}

;
console.log(); //floor plan selection #################################################
// var header = document.getElementById("click-btn");
//         var btns = header.getElementsByClassName("click-btn-1");
//         for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//         });
//         }
//sticky nav ###########################################################
// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("navbar2");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// function serActive() {
//   var act = document.getElementById('elSerenity');
//   var deactive = document.getElementById('erSerenity');
//   var sl1 = document.getElementById('slide1');
//   var sl3 = document.getElementById('slide3');
//   if (sl1.style.display === 'block') {
//     act.style.display = 'none';
//   }
// }
// carousel images model #################################################
// Get the modal

var modal = document.getElementById("myModal"); // Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img9.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}; // Get the <span> element that closes the modal


var span = document.getElementsByClassName("close")[0]; // When the user clicks on <span> (x), close the modal

span.onclick = function () {
  modal.style.display = "none";
}; // floor plan tab functions


function serenityFunc(evt, blocks) {
  var i, planView, tablinks;
  planView = document.getElementsByClassName("tabcontent");

  for (i = 0; i < planView.length; i++) {
    planView[i].style.display = "none";
    planView[i].className = "planView tabcontent hidden";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active-spec", " ");
  }

  document.getElementById(blocks).style.display = "block";
  document.getElementById(blocks).className = "planView tabcontent";
  evt.currentTarget.className += " active-spec";
} // function serenityFunc() {
//     var a = document.getElementById('serenity');
//     var b = document.getElementById('bliss');
//     var c = document.getElementById('nirvana');   
//     var d = document.getElementById('snty');   
//     var e = document.getElementById('bls');   
//     var f = document.getElementById('nrv');   
//     if (a.style.display === 'none') {
//         a.style.display = 'flex';
//         b.style.display = 'none';
//         c.style.display = 'none';
//         d.classList.add('active-spec')
//         e.classList.remove('active-spec');
//         f.classList.remove('active-spec');
//     }
// }
// function blissFunc() {
//     var a = document.getElementById('serenity');
//     var b = document.getElementById('bliss');
//     var c = document.getElementById('nirvana'); 
//     var d = document.getElementById('snty');   
//     var e = document.getElementById('bls');   
//     var f = document.getElementById('nrv');     
//     if (b.style.display === 'none') {
//         a.style.display = 'none';
//         b.style.display = 'flex';
//         c.style.display = 'none';
//         d.classList.remove('active-spec')
//         e.classList.add('active-spec');
//         f.classList.remove('active-spec');
//     }
// }
// function nirvanaFunc() {
//     var a = document.getElementById('serenity');
//     var b = document.getElementById('bliss');
//     var c = document.getElementById('nirvana');  
//     var d = document.getElementById('snty');   
//     var e = document.getElementById('bls');   
//     var f = document.getElementById('nrv');    
//     if (c.style.display === 'none') {
//         a.style.display = 'none';
//         b.style.display = 'none';
//         c.style.display = 'flex';
//         d.classList.remove('active-spec')
//         e.classList.remove('active-spec');
//         f.classList.add('active-spec');
//     }
// }
// Explore Soultree Starts ################################################
// function fn22(id) 
// {
//     var id_1 = "car"+id;
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("carousel-descrip_t1");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     document.getElementById(id_1).style.display = "block";
//     evt.currentTarget.className += " active";
// }
// const state1 = {};
// const carouselList1 = document.querySelector('.carousel_list');
// const carouselItems1 = document.querySelectorAll('.carousel_item1');
// const elems1 = Array.from(carouselItems1);
// carouselList1.addEventListener('click', function (event) {
// var newActive1 = event.target;
// var isItem1 = newActive1.closest('.carousel_item1');
// if (!isItem1 || newActive1.classList.contains('carousel_item1_active1')) {
// return;
// };
// update1(newActive1);
// });
// const update1 = function(newActive1) {
// const newActivePos1 = newActive1.dataset.pos;
// const current1 = elems1.find((elem) => elem.dataset.pos == -2);
// const prev1 = elems1.find((elem) => elem.dataset.pos == -1);
// const next1 = elems1.find((elem) => elem.dataset.pos == 0);
// const first1 = elems1.find((elem) => elem.dataset.pos == 1);
// const last1 = elems1.find((elem) => elem.dataset.pos == 2);
// current1.classList.remove('carousel_item1_active1');
// [current1, prev1, next1, first1, last1].forEach(item => {
// var itemPos1 = item.dataset.pos;
// item.dataset.pos = getPos1(itemPos1, newActivePos1)
// });
// };
// const getPos1 = function (current1, active1) {
// const diff1 = current1 - active1;
// if (Math.abs(current1 - active1) > 2) {
// return -current1
// }
// return diff1;
// }
// Explore Soultree Ends
// Amenities Carousel Starts #############################################################
// function fn_33(id) 
//         {
//             var id_1 = "car"+id;
//             var i, tabcontent, tablinks;
//             tabcontent = document.getElementsByClassName("carousel-descrip_tb");
//             for (i = 0; i < tabcontent.length; i++) {
//                 tabcontent[i].style.display = "none";
//             }
//             document.getElementById(id_1).style.display = "block";
//         }
// const state2 = {};
// const carouselList2 = document.querySelector('.carousel_list2');
// const carouselItems2 = document.querySelectorAll('.carousel_item2');
// const elems2 = Array.from(carouselItems2);
// carouselList2.addEventListener('click', function (event) {
//   var newActive2 = event.target;
//   var isItem2 = newActive2.closest('.carousel_item2');
//   if (!isItem2 || newActive2.classList.contains('.carousel_item2_active2')) {
//     return;
//   };
//   update2(newActive2);
// });
// const update2 = function(newActive2) {
//   const newActivePos2 = newActive2.dataset.pos;
//   const current2 = elems2.find((elem) => elem.dataset.pos == -2);
//   const prev2 = elems2.find((elem) => elem.dataset.pos == -1);
//   const next2 = elems2.find((elem) => elem.dataset.pos == 0);
//   const first2 = elems2.find((elem) => elem.dataset.pos == 1);
//   const last2 = elems2.find((elem) => elem.dataset.pos == 2);
//   current2.classList.remove('.carousel_item2_active2');
//   [current2, prev2, next2, first2, last2].forEach(item => {
//     var itemPos2 = item.dataset.pos;
//     item.dataset.pos = getPos2(itemPos2, newActivePos2)
//   });
// };
// const getPos2 = function (current2, active2) {
//   const diff2 = current2 - active2;
//   if (Math.abs(current2 - active2) > 2) {
//     return -current2
//   }
//   return diff2;
// }
// Amenities Carousel Ends