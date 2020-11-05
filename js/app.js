
// Get the modal
var modalForm = document.getElementById("myModalForm");

// Get the button that opens the modal
var btnForm = document.getElementById("myBtn");
var btnFormMob = document.getElementById("myBtnMob");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnForm.onclick = function() {
  modalForm.style.display = "block";
}

btnFormMob.onclick = function() {
  modalForm.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
}



// onscroll snap sticky navbar #########################################
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("navbar").style.marginTop = "-4.84vw";
    document.getElementById("navbar2").style.marginTop = "-4.84vw";
    // document.getElementById("dropdown-content").style.marginTop = "4.84vw";
    document.getElementById("navbarM").style.marginTop = "-18vw";
    document.getElementById("navbar2M").style.marginTop = "-18vw";
    // document.getElementById("dropdown-contentM").style.marginTop = "18vw";
    document.getElementById("getInTouchId").style.marginTop = "16vw";
  }
   else {
    document.getElementById("navbar").style.marginTop = "0";
    document.getElementById("navbar2").style.marginTop = "4.84vw";
    // document.getElementById("dropdown-content").style.marginTop = "0vw";
    document.getElementById("navbarM").style.marginTop = "0";
    document.getElementById("navbar2M").style.marginTop = "18vw";
    // document.getElementById("dropdown-contentM").style.marginTop = "0vw";
    document.getElementById("getInTouchId").style.marginTop = "5vw";
  }
}

// menu-pages active function ###########################################
function menuFunc(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  // tabcontent = document.getElementsByClassName("tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = "none";
  // }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks-menu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-menu", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active-menu";
}


// Hamburger Menu working ###########################################
var btn = $('.btn11');

btn.on('click', function() {
$(this).toggleClass('active');
$(this).toggleClass('not-active');
});

$(document).ready(function() {
$('.box').on('click', function() {
$(this).toggleClass('active');
$('.top-nav').toggleClass('open');
});

$('.top-nav .nav-link').on('click', function() {
$('.btn11').toggleClass('not-active');
$('.top-nav').toggleClass('open');
});

$('nav a[href*="#"]').on('click', function() {
$('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
}, 2000);
});

$('#up').on('click', function() {
$('html, body').animate({
    scrollTop:0
}, 2000);
});
});


//Progress Bar ##############################################################
$(function(){
    var $ppc = $('.progress-pie-chart'),
      percent = parseInt($ppc.data('percent')),
      deg = 360*percent/100;
    if (percent > 50) {
      $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
    $('.ppc-percents span').html(percent+'%');
  });

//Timeline #####################################################################
//Sample dates
var dates = ["6/12/2020", "8/15/2021", "10/22/2021", "11/2/2021", "12/22/2021"];
//For the purpose of stringifying MM/DD/YYYY date format
var monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Format MM/DD/YYYY into string
function dateSpan(date) {
  var month = date.split('/')[0];
  month = monthSpan[month - 1];
  var day = date.split('/')[1];
  if (day.charAt(0) == '0') {
    day = day.charAt(1);
  }
  var year = date.split('/')[2];

  //Spit it out!
  return month + " " + day + ", " + year;
}

//Main function. Draw your circles.
function makeCircles() {
  //Forget the timeline if there's only one date. Who needs it!?
  if (dates.length < 2) {
    $("#line").hide();
    $("#span").show().text(dateSpan(dates[0]));
    //This is what you really want.
  } else if (dates.length >= 2) {
    //Set day, month and year variables for the math
    var first = dates[0];
    var last = dates[dates.length - 1];

    var firstMonth = parseInt(first.split('/')[0]);
    var firstDay = parseInt(first.split('/')[1]);

    var lastMonth = parseInt(last.split('/')[0]);
    var lastDay = parseInt(last.split('/')[1]);

    //Integer representation of the last day. The first day is represnted as 0
    var lastInt = ((lastMonth - firstMonth) * 30) + (lastDay - firstDay);

    //Draw first date circle
    $("#line").append('<div class="circle" id="circle0" style="left: ' + 0 + '%;"><div class="popupSpan">' + dateSpan(dates[0]) + '</div></div>');
    
    $("#mainCont").append('<span id="span0" class="center">' + dateSpan(dates[0]) + '</span>');

    //Loop through middle dates
    for (i = 1; i < dates.length - 1; i++) {
      var thisMonth = parseInt(dates[i].split('/')[0]);
      var thisDay = parseInt(dates[i].split('/')[1]);

      //Integer representation of the date
      var thisInt = ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);

      //Integer relative to the first and last dates
      var relativeInt = thisInt / lastInt;

      //Draw the date circle
      $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + relativeInt * 100 + '%;"><div class="popupSpan">' + dateSpan(dates[i]) + '</div></div>');
      
      $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
    }

    //Draw the last date circle
    $("#line").append('<div class="circle" id="circle' + i + '" style="left: ' + 99 + '%;"><div class="popupSpan">' + dateSpan(dates[dates.length - 1]) + '</div></div>'); 
    
    $("#mainCont").append('<span id="span' + i + '" class="right">' + dateSpan(dates[i]) + '</span>');
  }

  $(".circle:first").addClass("active");
}

makeCircles();

$(".circle").mouseenter(function() {
  $(this).addClass("hover");
});

$(".circle").mouseleave(function() {
  $(this).removeClass("hover");
});

$(".circle").click(function() {
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
    $(".center").removeClass("center").addClass("left")
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("right")
  } else if ($($spanSelector).hasClass("left")) {
    $(".center").removeClass("center").addClass("right");
    $($spanSelector).addClass("center");
    $($spanSelector).removeClass("left");
  }; 
};

console.log()


//floor plan selection #################################################
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
//


// #########################################################
// floor plan tab functions
function serenityFunc(evt,blocks) {
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
}

//#####################################################################
// Specifications and Brands
function specFunc() {
  var btn = document.getElementById('btnFlex');
  var specDescrip = document.getElementById('specsBrands');
  if (specDescrip.style.display === 'none') {
    specDescrip.style.display = 'block';
    specDescrip.classList.add('animate__slideInRight');
    specDescrip.classList.remove('animate__slideOutUp');
  } else {
    specDescrip.style.display = 'none';
    specDescrip.classList.remove('animate__slideInRight');
    specDescrip.classList.add('animate__slideOutUp');
  }
}

//###############################################################
// onscroll highlight menu
// Cache selectors
// var lastId,
//  topMenu = $("#navbar2"),
//  topMenuHeight = topMenu.outerHeight()+1,
//  // All list items
//  menuItems = topMenu.find("a"),
//  // Anchors corresponding to menu items
//  scrollItems = menuItems.map(function(){
//    var item = $($(this).attr("href"));
//     if (item.length) { return item; }
//  });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 850);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active-menu")
//          .end().filter("[href=#"+id+"]").parent().addClass("active-menu");
//    }                   
// });
