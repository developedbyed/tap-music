//GRABING ALL THE SOUND CONTAINERS FROM THE DOM
    var sounds = document.querySelectorAll('.sound');
    var circle = document.querySelector('.circle');
    var lines = document.querySelector('#lines');
    var cube = document.querySelector('#cube');
    var signal = document.querySelector('.signal1');
    var sign = document.querySelector('#sign');
    var signLine = document.querySelectorAll('.sign-line');
    var squiggle = document.querySelector('.squiggle1');
    var star = document.querySelector('#star');
    var sun = document.querySelector('#sun');
    var sunPath1 = document.querySelector('.sun-path1');
    var sunPath2 = document.querySelector('.sun-path2');
    
    
//IMPORTING THE SOUNDS INTO THEIR INDIVIDUAL VARIABLES
    var sound0 = new Howl({
        src: ['./sounds/bubbles.mp3']
    });
    var sound1 = new Howl({
        src: ['./sounds/clay.mp3']
    });
    var sound2 = new Howl({
        src: ['./sounds/confetti.mp3']
    });
    var sound3 = new Howl({
        src: ['./sounds/flash-1.mp3']
    });
    var sound4 = new Howl({
        src: ['./sounds/glimmer.mp3']
    });
    var sound5 = new Howl({
        src: ['./sounds/moon.mp3']
    });
    var sound6 = new Howl({
        src: ['./sounds/zig-zag.mp3']
    });
    var sound7 = new Howl({
        src: ['./sounds/ufo.mp3']
    });
//ADDING INDIVIDUAL EVENT LISTENERS FOR EACH SOUND
    sounds[0].addEventListener('click',function(){
        sound0.play();
        circle.style.animation = "circle 0.8s ease-out";
        circle.addEventListener('webkitAnimationEnd',function(){
            circle.style.animation = 'none';
        });   
    });
   
    sounds[1].addEventListener('click',function(){
        sound1.play();
        lines.style.animation = "lines 0.8s ";
        lines.addEventListener('webkitAnimationEnd',function(){
        lines.style.animation = 'none';
        });
    });
   
    sounds[2].addEventListener('click',function(){
        sound2.play();
        cube.style.animation = 'cube 0.8s ';
        cube.addEventListener('webkitAnimationEnd',function(){
            cube.style.animation = 'none';
        });
    });
    

    sounds[3].addEventListener('click',function(){
        sound3.play();
        signal.style.animation = 'signal 0.5s'
        signal.addEventListener('webkitAnimationEnd',function(){
            signal.style.animation = 'none';
         });
    });
   
    sounds[4].addEventListener('click',function(){
        sound4.play();
        sign.style.animation= 'sign 0.8s';
        for(var i=0; i<signLine.length;i++){
            signLine[i].style.animation = 'sign 0.8s';
            signLine[i].addEventListener('webkitAnimationEnd',function(){
                for(var i=0; i<signLine.length;i++){
                    signLine[i].style.animation = 'none';
                }
            });
        } 
    });
   sign.addEventListener('webkitAnimationEnd',function(){
      sign.style.animation = 'none';
     });

     
    sounds[5].addEventListener('click',function(){
        sound5.play();
        squiggle.style.animation = 'squiggle 1s';
        squiggle.addEventListener('webkitAnimationEnd',function(){
            squiggle.style.animation = 'none';
           });
    });
    

    sounds[6].addEventListener('click',function(){
        sound6.play();
        star.style.animation="star 0.7s";
        star.addEventListener('webkitAnimationEnd',function(){
            star.style.animation = 'none';
           });
    });
    

    sounds[7].addEventListener('click',function(){
        sound7.play();
        sun.style.animation = 'sun 1s';
        sunPath1.style.animation = 'sun1 1s';
        sunPath2.style.animation = 'sun2 1s';
       sun.addEventListener('webkitAnimationEnd',function(){
        sun.style.animation = 'none';
        sunPath1.style.animation = 'none';
        sunPath2.style.animation = 'none';
           });
    });





    