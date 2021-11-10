// scenes : "starting_page", "waterfall", "horse", "market", "train_station", "dog"
var current_scene;

// initial audio : "how do I get home?"
var current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F1.%20how%20do%20i%20get%20home.mp3?v=1636293153952");
var right_reaction;
var wrong_reaction;

// to detect if the current audio has been ended
var current_audio_ended = false;

$(document).ready(function(){
    var opening_audio_ended = false;
    $("#instruction-text-1").hide();
    $("#instruction-button").hide();
    $("#instruction-text-2").hide();

    $("#waterfall").hide();
    $("#horse").hide();
    $("#market").hide();
    $("#train-station").hide();
    $("#home").hide();

    $("#replay-instruction").hide();
    $("#replay-current-soundscape").hide();

    // check if the current audio has ended
    setInterval(function(){
        current_audio.addEventListener('ended', function() {
            this.currentTime = 0;
            current_audio_ended = true;
        });
    }, 1000);

    // start by pressing any key
    $(window).keydown( 
        function play_audio(e) {
            // helper methods
            console.log(current_audio_ended);
            console.log(current_scene);


            // play instruction after the opening question
            if (opening_audio_ended == false) {
                $("#instruction-text-1").show();
                $("#instruction-button").show();
                current_audio.play();
                opening_audio_ended = true;
            }

            // LEFT arrow key
            if (e.which == 37) {
                // after the instruction, waterfall (left) plays when user presses on of the arrow keys
                if (current_scene == "instruction" && current_audio_ended == true) {
                    current_audio_ended = false;
                    $("#start-page").children().hide(); // hide instruction
                    $("#replay-instruction").show(); // show replay buttons
                    $("#replay-current-soundscape").show();

                    // play waterfall (left) audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F2.%20waterfall%20is%20on%20the%20left.mp3?v=1636293157416");
                    current_audio.play();
                    current_scene = "starting_page"
                }

                // at starting page, user has to go left
                else if (current_scene == "starting_page" && current_audio_ended == true) {
                    current_audio_ended = false;
                    right_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0.%20yay%20i'm%20in%20the%20right%20direction.mp3?v=1636295460948");
                    right_reaction.play(); // "yay I'm in the right direction"
                    
                    // play waterfall (left-forward) audio + horse (right) audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F3.%20Walking%20to%20waterfall%20%2B%20Horses.mp3?v=1636546745375");
                    current_audio.play();
                    document.body.style.backgroundColor = "#536FA6"; // change background to blue
                    $("#waterfall").show();
                    current_scene = "waterfall"; // move on to the next scene
                }

                // at waterfall, user has to go right
                else if (current_scene == "waterfall" && current_audio_ended == true) {
                    wrong_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0.%20uh-oh.mp3?v=1636295461915");
                    wrong_reaction.play(); // "uh-oh"
                }

                // at horse farm, user has to go right
                else if (current_scene == "horse" && current_audio_ended == true) {
                    wrong_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0_0.%20get%20out%20of%20my%20property.mp3?v=1636295779684");
                    wrong_reaction.play(); // "get out of my property!""
                }

                // at market, user has to go left
                else if (current_scene == "market" && current_audio_ended == true) {
                    current_audio_ended = false;
                    right_reaction = new Audio ("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0.%20mm%20this%20feels%20familiar.mp3?v=1636295507620");
                    right_reaction.play(); // "this feels familiar"

                    // play market (left-forward) audio + train_station (right) audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F5.%20walkint%20to%20marketplace%20%2B%20at%20marketplace%20(train%20on%20left).mp3?v=1636546752009");
                    current_audio.play();
                    document.body.style.backgroundColor = "#D96299"; // train is pink
                    $("#market").hide();
                    $("#train-station").show();
                    current_scene = "train_station";
                }

                // at train station, user has to go left
                else if (current_scene == "train_station" && current_audio_ended == true) {
                    current_audio_ended = false;
                    right_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0.%20oof%20finally%20i'm%20home.mp3?v=1636295490063");
                    right_reaction.play(); // "finaly home!!"

                    // play train_station + home audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2Fat%20train%20%2B%20dog%20walking%20home.mp3?v=1636568031288");
                    current_audio.play();
                    document.body.style.backgroundColor = "white"; // home is white
                    $("#train-station").hide();
                    $("p").style.color = "black"; // change text color to black
                    $("#home").show();
                    current_scene = "home";
                }
            }

            // RIGHT arrow key
            else if (e.which == 39) {
                // after the instruction, waterfall (left) plays when user presses on of the arrow keys
                if (current_scene == "instruction" && current_audio_ended == true) {
                    current_audio_ended = false;
                    $("#start-page").children().hide(); // hide instruction
                    $("#replay-instruction").show(); // show replay buttons
                    $("#replay-current-soundscape").show();

                    // play waterfall (left) audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F2.%20waterfall%20is%20on%20the%20left.mp3?v=1636293157416");
                    current_audio.play();
                    current_scene = "starting_page"
                }

                // at starting page, user has to go left
                else if (current_scene == "starting_page" && current_audio_ended == true) {
                    wrong_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0_0.%20get%20out%20of%20here.mp3?v=1636295760963");
                    wrong_reaction.play(); // "uh-oh"
                }

                // at waterfall, user has to go right
                else if (current_scene == "waterfall" && current_audio_ended == true) {
                    current_audio_ended = false;
                    right_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0.%20mm%20this%20feels%20familiar.mp3?v=1636295507620");
                    right_reaction.play(); // "mm this sounds familiar"

                    // play horse + market audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F4.%20Walking%20to%20horse%20%2B%20at%20horse%20(marketplace%20on%20the%20right).mp3?v=1636546748402");
                    current_audio.play();
                    document.body.style.backgroundColor = "#F29727"; // horse is orange
                    $("#waterfall").hide();
                    $("#horse").show();
                    current_scene = "horse"; // move on to the next scene
                }

                // at horse farm, user has to go right
                else if (current_scene == "horse" && current_audio_ended == true) {
                    current_audio_ended = false;
                    right_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0.%20ooh%20this%20sounds%20right.mp3?v=1636295570614");
                    right_reaction.play(); // "ooh this sounds right"

                    // play market + train audio
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F5.%20walkint%20to%20marketplace%20%2B%20at%20marketplace%20(train%20on%20left).mp3?v=1636546752009");
                    current_audio.play();
                    document.body.style.backgroundColor = "#03A678"; // market is green
                    $("#horse").hide();
                    $("#market").show();
                    current_scene = "market"; // move on to the next scene
                }

                // at market, user has to go left
                else if (current_scene == "market" && current_audio_ended == true) {
                    wrong_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0_0.%20oh%20I%20think%20you're%20in%20the%20wrong%20place.mp3?v=1636295804550");
                    wrong_reaction.play(); // "ooh I think you're in the wrong place"
                }

                // at train station, user has to go left
                else if (current_scene == "train_station" && current_audio_ended == true) {
                    wrong_reaction = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0_0.%20get%20out%20of%20here.mp3?v=1636295760963");
                    wrong_reaction.play(); // "get out of here!"
                }
            }
        }
    );

    // buttons
    $("#instruction-button").click(
        function play_instruction() {
            if(current_audio_ended == true) {
                current_audio_ended = false;

                // instruction audio
                current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0_.%20Instruction%20LONG_Thank%20you.mp3?v=1636459267925");
                current_audio.play();
                $("#instruction-text-2").show();
                current_scene = "instruction";
            }
        }
    );

    $("#replay-instruction").click(
        function replay_instruction() {
            if(current_audio_ended == true) {
                current_audio_ended = false;

                // shorter instruction audio
                current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F0_.%20Instruction%20SHORT%20shorter.mp3?v=1636569143281");
                current_audio.play();
            }
        }
    );

    $("#replay-current-soundscape").click(
        function replay_current_soundscape() {
            if(current_audio_ended == true) {
                current_audio_ended = false;
                
                // shorter soundscape
                if(current_scene == "starting_page"){
                    // waterfall on left
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F2.%20waterfall%20is%20on%20the%20left.mp3?v=1636293157416");
                }
                else if(current_scene == "waterfall"){
                    // horse on right
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F4.%20at%20waterfall%2C%20horse%20farm%20is%20on%20the%20right.mp3?v=1636567769188");
                }
                else if(current_scene == "horse"){
                    // market on right
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F6.%20at%20horse%2C%20marketplace%20is%20on%20the%20right.mp3?v=1636567769830");
                }
                else if(current_scene == "market"){
                    // train_station on left
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F8.%20at%20marketplace%2C%20train%20is%20on%20the%20left.mp3?v=1636567774009");
                }
                else if(current_scene == "train_station"){
                    // home on left
                    current_audio = new Audio("https://cdn.glitch.me/55491f2e-b3d7-4553-b0b7-2b7c2789f793%2F10.%20at%20train%2C%20dog%20barking%20on%20the%20left.mp3?v=1636567778192");
                }
                current_audio.play();
            }
        }
    );
});