document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.hamburger');
    const nav = document.querySelector('.mobile-menu');

    menu.addEventListener('click', function () {
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    });


    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
});

// Accordion
document.addEventListener('DOMContentLoaded', function () {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (heading) {
        heading.addEventListener('click', function () {
            var accordionItem = this.parentNode;

            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                var activeItem = document.querySelector('.accordion-item.active');

                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                accordionItem.classList.add('active');
            }
        });
    });
});

// Scroll animation

document.addEventListener('DOMContentLoaded', function () {
    function applyAnimations() {
        var refreshed = false;

        var header = document.querySelector('.animation-content, .animation-content-about-us');
        header.classList.add('animate-content', 'animate-content-about-us');

        // Function to trigger animations
        function triggerAnimations() {
            var animation = document.querySelectorAll('.animation-scroll, .animation-right, .animation-left, .animation-center');

            animation.forEach(function (element) {
                var elementPosition = element.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
                var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

                if (elementPosition < windowHeight && scrollPosition > 0) {
                    element.classList.add('animate');
                    element.classList.add('animate-content');
                    element.classList.add('animate-content-about-us');
                    element.classList.add('animate-left');
                    element.classList.add('animate-center');
                    element.classList.add('animate-right');
                    if (refreshed) {
                        element.style.transitionDelay = '1s';
                    }
                    refreshed = false;
                } else {
                    element.classList.remove('animate');
                    element.classList.remove('animate-content');
                    element.classList.remove('animate-content-about-us');
                    element.classList.remove('animate-left');
                    element.classList.remove('animate-center');
                    element.classList.remove('animate-right');
                    element.style.transitionDelay = '0s';
                }
            });
        }

        // Trigger animations on page load
        window.addEventListener('load', function () {
            triggerAnimations();
        });

        // Trigger animations on scroll
        window.addEventListener('scroll', function () {
            triggerAnimations();
        });
    }

    // Call the function to apply animations
    applyAnimations();
});




// // Function to trigger animations
// function triggerAnimations() {
//     var animation = document.querySelectorAll('.animation-scroll, .animation-right, .animation-left, .animation-center');

//     animation.forEach(function (element) {
//         var elementPosition = element.getBoundingClientRect().top;
//         var windowHeight = window.innerHeight;
//         var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//         if (elementPosition < windowHeight && scrollPosition > 0) {
//             element.classList.add('animate');
//             element.classList.add('animate-content');
//             element.classList.add('animate-content-about-us');
//             element.classList.add('animate-left');
//             element.classList.add('animate-center');
//             element.classList.add('animate-right');
//             if (refreshed) {
//                 element.style.transitionDelay = '1s';
//             }
//             refreshed = false;
//         } else {
//             element.classList.remove('animate');
//             element.classList.remove('animate-content');
//             element.classList.add('animate-content-about-us');
//             element.classList.remove('animate-left');
//             element.classList.remove('animate-center');
//             element.classList.remove('animate-right');
//             element.style.transitionDelay = '0s';
//         }
//     });
// }



// Slide Show 1

// Access the Images
let slideImages1 = document.querySelectorAll('.slides1 img');
// Access the next and prev buttons
let next1 = document.querySelector('.next1');
let prev1 = document.querySelector('.prev1');
// Access the indicators
let dots1 = document.querySelectorAll('.dot1');

var counter1 = 0;

// Code for next button
next1.addEventListener('click', slideNext1);

function slideNext1() {
    slideImages1[counter1].style.animation = 'next-1 0.5s ease-in forwards';
    if (counter1 >= slideImages1.length - 1) {
        counter1 = 0;
    } else {
        counter1++;
    }
    slideImages1[counter1].style.animation = 'next-2 0.5s ease-in forwards';
    indicators1();
}

// Code for prev button
prev1.addEventListener('click', slidePrev1);

function slidePrev1() {
    slideImages1[counter1].style.animation = 'prev-1 0.5s ease-in forwards';
    if (counter1 == 0) {
        counter1 = slideImages1.length - 1;
    } else {
        counter1--;
    }
    slideImages1[counter1].style.animation = 'prev-2 0.5s ease-in forwards';
    indicators1();
}

// Auto sliding
function autoSliding1() {
    deleteInterval1 = setInterval(timer1, 10000);

    function timer1() {
        slideNext1();
        indicators1();
    }
}
autoSliding1();

// Stop auto sliding when mouse is over
const container1 = document.querySelector('.slide-container1');
container1.addEventListener('mouseover', function () {
    clearInterval(deleteInterval1);
});

// Resume sliding when mouse is out
container1.addEventListener('mouseout', autoSliding1);

// Add and remove active class from the indicators
function indicators1() {
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(' active', '');
    }
    dots1[counter1].className += ' active';
}

// Add click event to the indicator
function changeImage1(currentImage1) {
    currentImage1.classList.add('active');
    var imageId1 = currentImage1.getAttribute('data-attr');
    if (imageId1 > counter1) {
        slideImages1[counter1].style.animation = 'next-1 0.5s ease-in forwards';
        counter1 = imageId1;
        slideImages1[counter1].style.animation = 'next-2 0.5s ease-in forwards';
    } else if (imageId1 == counter1) {
        return;
    } else {
        slideImages1[counter1].style.animation = 'prev-1 0.5s ease-in forwards';
        counter1 = imageId1;
        slideImages1[counter1].style.animation = 'prev-2 0.5s ease-in forwards';
    }
    indicators1();
}


// Slide Show 2

// Access the Images
let slideImages2 = document.querySelectorAll('.slides2 img');
// Access the next and prev buttons
let next2 = document.querySelector('.next2');
let prev2 = document.querySelector('.prev2');
// Access the indicators
let dots2 = document.querySelectorAll('.dot2');

var counter2 = 0;

// Code for next button
next2.addEventListener('click', slideNext2);

function slideNext2() {
    slideImages2[counter2].style.animation = 'next-1 0.5s ease-in forwards';
    if (counter2 >= slideImages2.length - 1) {
        counter2 = 0;
    } else {
        counter2++;
    }
    slideImages2[counter2].style.animation = 'next-2 0.5s ease-in forwards';
    indicators2();
}

// Code for prev button
prev2.addEventListener('click', slidePrev2);

function slidePrev2() {
    slideImages2[counter2].style.animation = 'prev-1 0.5s ease-in forwards';
    if (counter2 == 0) {
        counter2 = slideImages2.length - 1;
    } else {
        counter2--;
    }
    slideImages2[counter2].style.animation = 'prev-2 0.5s ease-in forwards';
    indicators2();
}

// Auto sliding
function autoSliding2() {
    deleteInterval2 = setInterval(timer2, 10000);

    function timer2() {
        slideNext2();
        indicators2();
    }
}
autoSliding2();

// Stop auto sliding when mouse is over
const container2 = document.querySelector('.slide-container2');
container2.addEventListener('mouseover', function () {
    clearInterval(deleteInterval2);
});

// Resume sliding when mouse is out
container2.addEventListener('mouseout', autoSliding2);

// Add and remove active class from the indicators
function indicators2() {
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(' active', '');
    }
    dots2[counter2].className += ' active';
}

// Add click event to the indicator
function changeImage2(currentImage2) {
    currentImage2.classList.add('active');
    var imageId2 = currentImage2.getAttribute('data-attr');
    if (imageId2 > counter2) {
        slideImages2[counter2].style.animation = 'next-1 0.5s ease-in forwards';
        counter2 = imageId2;
        slideImages2[counter2].style.animation = 'next-2 0.5s ease-in forwards';
    } else if (imageId2 == counter2) {
        return;
    } else {
        slideImages2[counter2].style.animation = 'prev-1 0.5s ease-in forwards';
        counter2 = imageId2;
        slideImages2[counter2].style.animation = 'prev-2 0.5s ease-in forwards';
    }
    indicators2();
}



// Slide Show 3

// Access the Images
let slideImages3 = document.querySelectorAll('.slides3 img');
// Access the next and prev buttons
let next3 = document.querySelector('.next3');
let prev3 = document.querySelector('.prev3');
// Access the indicators
let dots3 = document.querySelectorAll('.dot3');

var counter3 = 0;

// Code for next button
next3.addEventListener('click', slideNext3);

function slideNext3() {
    slideImages3[counter3].style.animation = 'next-1 0.5s ease-in forwards';
    if (counter3 >= slideImages3.length - 1) {
        counter3 = 0;
    } else {
        counter3++;
    }
    slideImages3[counter3].style.animation = 'next-2 0.5s ease-in forwards';
    indicators3();
}

// Code for prev button
prev3.addEventListener('click', slidePrev3);

function slidePrev3() {
    slideImages3[counter3].style.animation = 'prev-1 0.5s ease-in forwards';
    if (counter3 == 0) {
        counter3 = slideImages3.length - 1;
    } else {
        counter3--;
    }
    slideImages3[counter3].style.animation = 'prev-2 0.5s ease-in forwards';
    indicators3();
}

// Auto sliding
function autoSliding3() {
    deleteInterval3 = setInterval(timer3, 10000);

    function timer3() {
        slideNext3();
        indicators3();
    }
}
autoSliding3();

// Stop auto sliding when mouse is over
const container3 = document.querySelector('.slide-container3');
container3.addEventListener('mouseover', function () {
    clearInterval(deleteInterval3);
});

// Resume sliding when mouse is out
container3.addEventListener('mouseout', autoSliding3);

// Add and remove active class from the indicators
function indicators3() {
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(' active', '');
    }
    dots3[counter3].className += ' active';
}

// Add click event to the indicator
function changeImage3(currentImage3) {
    currentImage3.classList.add('active');
    var imageId3 = currentImage3.getAttribute('data-attr');
    if (imageId3 > counter3) {
        slideImages3[counter3].style.animation = 'next-1 0.5s ease-in forwards';
        counter3 = imageId3;
        slideImages3[counter3].style.animation = 'next-2 0.5s ease-in forwards';
    } else if (imageId3 == counter3) {
        return;
    } else {
        slideImages3[counter3].style.animation = 'prev-1 0.5s ease-in forwards';
        counter3 = imageId3;
        slideImages3[counter3].style.animation = 'prev-2 0.5s ease-in forwards';
    }
    indicators3();
}

// Google map

// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = {
        lat: -25.344,
        lng: 131.031
    };
    // Request needed libraries.
    //@ts-ignore
    const {
        Map
    } = await google.maps.importLibrary("maps");
    const {
        AdvancedMarkerElement
    } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
    });
}

initMap();