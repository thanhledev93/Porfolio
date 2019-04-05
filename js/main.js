var flag = false;

function move(flag) {
    if(flag){
        let elem = document.getElementById("myBar");
        let elem2 = document.getElementById("percient");

        let elem3 = document.getElementById("myBar2");
        let elem4 = document.getElementById("percient2");

        let elem5 = document.getElementById("myBar3");
        let elem6 = document.getElementById("percient3");

        let elem7 = document.getElementById("myBar4");
        let elem8 = document.getElementById("percient4");

        let elem9 = document.getElementById("myBar5");
        let elem10 = document.getElementById("percient5");

        let elem11 = document.getElementById("myBar6");
        let elem12 = document.getElementById("percient6");

        let elem13 = document.getElementById("myBar7");
        let elem14 = document.getElementById("percient7");

        let elem15 = document.getElementById("myBar8");
        let elem16 = document.getElementById("percient8");

        let width = 0;
        let width2 = 0;
        let width3 = 0;
        let width4 = 0;
        let width5 = 0;
        let width6 = 0;
        let width7 = 0;
        let width8 = 0;

        var id = setInterval(frame, 30);
        function frame() {
            if (width >= 80) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem2.innerHTML = width * 1  + '%';

                if(width < 50){
                    elem2.style.opacity = 0;
                }
                else {
                    elem2.style.opacity = 1;

                }
            }
        }
        // ........
        var id2 = setInterval(frame2, 30);
        function frame2() {
            if (width2 >= 80) {
                clearInterval(id2);
            } else {
                width2++;
                elem3.style.width = width2 + '%';
                elem4.innerHTML = width2 * 1  + '%';

                if(width < 70){
                    elem4.style.opacity = 0;
                }
                else {
                    elem4.style.opacity = 1;

                }
            }
        }
        // ........
        var id3 = setInterval(frame3, 30);
        function frame3() {
            if (width3 >= 70) {
                clearInterval(id3);
            } else {
                width3++;
                elem5.style.width = width3 + '%';
                elem6.innerHTML = width3 * 1  + '%';

                if(width < 60){
                    elem6.style.opacity = 0;
                }
                else {
                    elem6.style.opacity = 1;

                }
            }
        }

        // ........
        var id4 = setInterval(frame4, 30);
        function frame4() {
            if (width4 >= 70) {
                clearInterval(id4);
            } else {
                width4++;
                elem7.style.width = width4 + '%';
                elem8.innerHTML = width4 * 1  + '%';

                if(width4 < 50){
                    elem8.style.opacity = 0;
                }
                else {
                    elem8.style.opacity = 1;

                }
            }
        }

        // ........
        var id5 = setInterval(frame5, 30);
        function frame5() {
            if (width5 >= 70) {
                clearInterval(id5);
            } else {
                width5++;
                elem9.style.width = width5 + '%';
                elem10.innerHTML = width5 * 1  + '%';

                if(width5 < 50){
                    elem10.style.opacity = 0;
                }
                else {
                    elem10.style.opacity = 1;

                }
            }
        }

        // ........
        var id6 = setInterval(frame6, 30);
        function frame6() {
            if (width6 >= 75) {
                clearInterval(id6);
            } else {
                width6++;
                elem11.style.width = width6 + '%';
                elem12.innerHTML = width6 * 1  + '%';

                if(width6 < 60){
                    elem12.style.opacity = 0;
                }
                else {
                    elem12.style.opacity = 1;

                }
            }
        }

        // ........
        var id7 = setInterval(frame7, 30);
        function frame7() {
            if (width7 >= 50) {
                clearInterval(id7);
            } else {
                width7++;
                elem13.style.width = width7 + '%';
                elem14.innerHTML = width7 * 1  + '%';

                if(width7 < 35){
                    elem14.style.opacity = 0;
                }
                else {
                    elem14.style.opacity = 1;

                }
            }
        } // ........
        var id8 = setInterval(frame8, 30);
        function frame8() {
            if (width8 >= 30) {
                clearInterval(id8);
            } else {
                width8++;
                elem15.style.width = width8 + '%';
                elem16.innerHTML = width8 * 1  + '%';

                if(width8 < 20){
                    elem16.style.opacity = 0;
                }
                else {
                    elem16.style.opacity = 1;

                }
            }
        }


    }}


// <!--end progress bar-->

// MagnificPopup

$(function () {
    $('.gallery').magnificPopup({
        delegate:'.popimg',
        type:'image',
        gallery:{
            enabled:true
        }
    })
})


// Isotope
$('.gallery').isotope({
    itemSelector: '.items',
    layoutMode: 'fitRows'
});
// Isotope click function
$('.filterring span').click(function () {
    $('.filterring span').removeClass('active');
    $(this).addClass('active');

    var  selector = $(this).attr('data-filter');
    $('.gallery').isotope({
        filter: selector
    });
    return false;
});

// Vertical menu

$(document).ready(function () {
    var scrollLink = $('.vertical-nav-link');
    var scrollLinkRes = $('.nav-link');

    //Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 120
        }, 500);

        // // $('.vertical-nav-link').parent().removeClass('active');
        // $(this).parent().addClass('active');
    });
    //Smooth scrooling Responsive
    scrollLinkRes.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 500);

        // // $('.vertical-nav-link').parent().removeClass('active');
        // $(this).parent().addClass('active');
    });

    $('.scroolToTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000)
    })



    //Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop() + 70;

        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top;
            if(sectionOffset <= scrollbarLocation + 70){
                // console.log('sectionOffset:' + sectionOffset);
                // console.log('scrollbarLocation:' + scrollbarLocation);

                $('.vertical-nav-link').parent().removeClass('active');
                $(this).parent().addClass('active');

                // Set animation for Section
                if(scrollbarLocation >= 260){
                    $('.horizontal-nav').addClass('horizontal-nav-anim');
                }
                if(scrollbarLocation < 190){
                    $('.horizontal-nav').removeClass('horizontal-nav-anim');
                    // console.log('scrollbarLocation-2:' + scrollbarLocation);
                }
                if(scrollbarLocation > 550){
                    if(!flag){
                        flag = true;
                        move(flag);
                    }

                }
                if(scrollbarLocation > 500){
                    $('.scroolToTop').fadeIn();
                }else if(scrollbarLocation < 500){
                    $('.scroolToTop').fadeOut();
                }

            }
        })
    })
})

// Loader
$(window).on('load',function () {
    $('.preloader').addClass('complete')
})

// Button To Top
// show hide collapse Menu
$('.nav-link').click(function () {
    $('#collapsibleNavbar').removeClass('show');
})

