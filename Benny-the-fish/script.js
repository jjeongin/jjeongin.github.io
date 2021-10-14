$(document).ready(function(){
    var counter_scene_2 = 0;
    var counter_scene_4 = 0;
    $(".story-scene-2").hide();
    $(".instruction2-scene-2").hide();
    $(".instruction3-scene-2").hide();
    $(".story-scene-4").hide();
    $(".instruction2-scene-4").hide();
    $(".instruction3-scene-4").hide();
    $(".mom-hand").hide();
    $(".dad-hand").hide();
    $(".ben-hand").hide();
    $(".benny-food").hide();

    // Scene 2 : resize benny with the button click
    $(".button-scene-2").click(function(){
        counter_scene_2 += 1;
        $("#benny-scene-2").animate({
        top: '-=2.5%',
        left: '-=2%',
        width: '+=3%'
        });
        if (counter_scene_2 == 1) { // if button click reaches 1
            $(".instruction-scene-2").hide();
            $(".instruction2-scene-2").show();
            $(".instruction3-scene-2").hide();
            $(".story-scene-2").hide();
        }
        if (counter_scene_2 == 2) { // if button click reaches 2
            $(".instruction-scene-2").hide();
            $(".instruction2-scene-2").hide();
            $(".instruction3-scene-2").show();
            $(".story-scene-2").hide();
        }
        if (counter_scene_2 == 3) { // if button click reaches 3
            $(".instruction-scene-2").hide();
            $(".instruction2-scene-2").hide();
            $(".instruction3-scene-2").hide();
            $(".button-scene-2").hide();
            $(".story-scene-2").show();
        }
    });

    // Scene 4 : resize benny with the button click
    $(".button-scene-4").click(function(){
      counter_scene_4 += 1;
      $("#benny-scene-4").animate({
        top: '-=3%',
        left: '-=2%',
        width: '+=5%'
      });
      if (counter_scene_4 == 1) { // if button click reaches 1
        $(".instruction-scene-4").hide();
        $(".instruction2-scene-4").show();
        $(".instruction3-scene-4").hide();
        $(".story-scene-4").hide();
      }
        if (counter_scene_4 == 2) { // if button click reaches 2
            $(".instruction-scene-4").hide();
            $(".instruction2-scene-4").hide();
            $(".instruction3-scene-4").show();
            $(".story-scene-2").hide();
        }
      if (counter_scene_4 == 3) { // if button click reaches 3
        $(".instruction-scene-4").hide();
        $(".instruction2-scene-4").hide();
        $(".instruction3-scene-4").hide();
        $(".button-scene-4").hide();
        $(".story-scene-4").show();
      }
    });

    $(".button-mom").click(function(){
      $(".mom-hand").show();
      $(".mom-hand").fadeOut(1000);
      $(".benny-food").show();
      $(".benny-food").animate({
        top: '15%',
      });
      $(".benny-food").fadeOut(1000);
      $(".benny-food").animate({
        top: '7%',
      });
    });

    $(".button-dad").click(function(){
      $(".dad-hand").show();
      $(".dad-hand").fadeOut(1000);
      $(".benny-food").show();
      $(".benny-food").animate({
        top: '15%',
      });
      $(".benny-food").fadeOut(1000);
      $(".benny-food").animate({
        top: '7%',
      });
    });

    $(".button-ben").click(function(){
      $(".ben-hand").show();
      $(".ben-hand").fadeOut(1000);
      $(".benny-food").show();
      $(".benny-food").animate({
        top: '15%',
      });
      $(".benny-food").fadeOut(1000);
      $(".benny-food").animate({
        top: '7%',
      });
    });

    $("#scene3").hover(function(){
      $("#benny-scene-3").animate({
        top: '15%',
        left: '15%'
      }, 1200);
    });
    
    $("#scene5").hover(function(){
      $("#benny-scene-5").animate({
        bottom: '-500%',
        opacity: '0'
      }, 2000);
    });

  $(".comic-container").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {
        $(".scene-container").css("overflow", "hidden");
    }, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
});