/* global $ */
"use strict";


var audioconcat = require('audioconcat')
 
var songs = [
  'dit.mp3',
  'dah.mp3',
  'silence.mp3'
]



let text = '';
let output = [];
let audioFiles = [];
let map =  {
      'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
      'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
      'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
      'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
      'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
      'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
      'y': '-.--',  'z': '--..',  ' ': '/',
      '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
      '9': '----.', '0': '-----', 
    };

class Morse {

  init() {
    this.collectText();
    this.convertTextToMorse();
    this.outputText();  
    this.morseToAudio(); 
    
  }
 
  collectText() {
    let that = this;
    $(document).ready(function(){
      $(".translate").click(function(e){
        that.reset();      // reset all values for new inputs.
        that.text = $(".text").val();
        that.text = that.text.toLowerCase(); //change upper-case letters to lower-case in order to map letters correctly.
      })
    })

    
  }

  convertTextToMorse() {
    let that = this;
    $(document).ready(function(){
      $(".translate").click(function(){
        that.text.split('').forEach( function(letter) {
          output.push(map[letter]) ;
        });
      });
    }) 
  }

  outputText() {
    let that = this;
    $(document).ready(function(){
      $(".translate").click(function(){
        $(".output").val(output.join(' '));
      });
    });
  }

  reset() {
    text = '';
    output = [];
    $(".output").val('');
  }


  morseToAudio() {
    let that = this;
    $(document).ready(function(){
      $(".translate").click(function(){ 
        that.playAudio();
        let audio = new Audio(songs);
        audio.play();
      });
    });  
  }

  playAudio() {
    audioconcat(songs)
      .concat('all.mp3')
      .on('start', function (command) {
        console.log('ffmpeg process started:', command)
      })
      .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
      })
      .on('end', function (output) {
        console.error('Audio created in:', output)
      })
  } 


  muteAudio() {
    $(document).ready(function(){
      $(".mute").click(function(){

      });
    });  
  }

  pauseAudio() {
    $(document).ready(function(){
      $(".pause").click(function(){

      });
    });  
  }
}

let app = new Morse();
app.init();
