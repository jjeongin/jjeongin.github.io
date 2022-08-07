let sub_curve = document.getElementById("curve-box-sub");
let sub_curve_path = document.getElementById("sub-curve-path");
let repeater; // to loop the animation while mouseover

function sub_curve_path_up() {
    sub_curve_path.setAttribute("d", "M 0 300 Q 50 50 150 120 Q 200 150 250 50");
}

function sub_curve_path_down() {
    sub_curve_path.setAttribute("d", "M 0 300 Q 50 50 150 120 Q 200 150 250 50");
}

function curve_animation() {
    sub_curve_path.style.transitionDuration = "0.5s"; // make animation speed slower
    sub_curve_path_up();
    setTimeout('sub_curve_path_down();', 500);
}

function loop_animation() {
    if (!repeater) {
        repeater = setInterval(curve_animation, 1000);
    }
}

function stop_animation(target) {
    clearInterval(repeater);
    repeater = null;
    sub_curve_path_down();
}

sub_curve.addEventListener("mouseover", loop_animation);
sub_curve.addEventListener("mouseout", stop_animation);