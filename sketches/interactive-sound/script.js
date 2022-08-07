var synth = new Tone.Synth().toMaster();
var kick_drum = new Tone.MembraneSynth({
  volume: 8
}).toMaster();
var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var rect = document.getElementById('rect');

document.body.addEventListener('keypress', (event) => {
    if(event.key == 'w'){
      synth.triggerAttackRelease('C4', '4n')
      circle1.style.visibility = "visible";
      setTimeout( function() {  
        circle1.style.visibility = "hidden";
      }, 1500);
    }else if(event.key == 'a'){
      synth.triggerAttackRelease('C5', '4n')
      circle2.style.visibility = "visible";
      document.body.style.backgroundColor = "black";
      document.getElementById('instruction').style.color = "white";
      setTimeout( function() {  
        circle2.style.visibility = "hidden";
        document.body.style.backgroundColor = "white";
        document.getElementById('instruction').style.color = "black";
      }, 1500);
    }else if(event.key == 's'){
      synth.triggerAttackRelease('C6', '4n')
      circle3.style.visibility = "visible";
      setTimeout( function() {  
        circle3.style.visibility = "hidden";
      }, 1500);
    }else if(event.key == 'd'){
      kick_drum.triggerAttackRelease('C1', '4n')
      rect.style.visibility = "visible";
      setTimeout( function() {  
        rect.style.visibility = "hidden";
      }, 1500);
    }
  }
)