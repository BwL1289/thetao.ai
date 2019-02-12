var cycleText = [
  'relevant.',
  'effective.'
];

for(var i = 0; i < cycleText.length; i++) {
  $('<div>').html('<strong>'+cycleText[i]+'</strong>').addClass('item').appendTo('.text .cycle');
}

var cycleLength = 0;
$('.text .cycle .item').each(function(index) {
  $(this).data('cycle-num', index + 1);
  cycleLength++;
});
$( document ).ready(function() {
setInterval(function() {
  var $current = $('.text .cycle .item.current');
  var currentNum = $current.data('cycle-num');

  $('.text .cycle .item.last').removeClass('last');
  $current.removeClass('current');
  $current.addClass('last');

  var next = 1;
  if(currentNum !== cycleLength) next = currentNum + 1;

  $('.text .cycle .item').filter(function() {
    return $(this).data('cycle-num') == next;
  }).addClass('current');

  console.log(next);
}, 2000);

addParticleEffect();

/*var owl = $('#intro-home-screen');
owl.owlCarousel({

autoplayTimeout: 5000,
  animateOut: 'fadeOut',
items: 1,
    margin: 0,
    stagePadding:0,
    smartSpeed: 450,
    nav: false,
autoplay:true,
autoplayHoverPause:false,
    loop:true
});*/
$(".move-bottom-button").click(function() {
    $('html,body').animate({
       scrollTop: $("#context").offset().top}, 'slow');
});

function addParticleEffect () {
    if ($('#particles-js').length === 0) {
      return;
    }
    particlesJS("particles-js", {
    particles: {
        number: {
            value: 70,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 1,
                color: "#ffffff"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 50
            }
        },
        opacity: {
            value: .1,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .05,
                sync: !1
            }
        },
        size: {
            value: 3,
            random: !0,
            anim: {
                enable: !1,
                speed: 10,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: .5,
            width: 3
        },
        move: {
            enable: !0,
            speed: 3,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "grab"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            repulse: {
                distance: 200,
                duration: .4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0
    });
}

$(".get-url-form").submit(function(e){
    e.preventDefault();
    $('#myModal').modal('show');
    this.reset();
})

});
