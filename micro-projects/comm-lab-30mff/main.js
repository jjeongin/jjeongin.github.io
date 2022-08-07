let main_curve = document.getElementById("curve-box-main");
let main_curve_path = document.getElementById("main-curve-path");
let repeater; // to loop the animation while mouseover

function main_curve_path_up() {
    main_curve_path.setAttribute("d", "M 0 300 Q 50 50 150 120 Q 200 150 250 10");
}

function main_curve_path_down() {
    main_curve_path.setAttribute("d", "M 0 300 Q 50 50 150 120 Q 200 150 250 50");
}

function curve_animation() {
    main_curve_path.style.transitionDuration = "0.5s"; // make animation speed slower
    main_curve_path_up();
    setTimeout('main_curve_path_down();', 500);
}

function loop_animation() {
    if (!repeater) {
        repeater = setInterval(curve_animation, 1000);
    }
}

function stop_animation() {
    clearInterval(repeater);
    repeater = null;
    main_curve_path_down();
}

main_curve.addEventListener("mouseover", loop_animation);
main_curve.addEventListener("mouseout", stop_animation);