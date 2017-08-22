/* global $ */
"use strict";

let text = '';
let output = [];

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
    this.addSound();
    this.playSound();
    this.muteSound();   
  }
 
  collectText() {
    let that = this;
    $(document).ready(function(){
      $("button").click(function(){
        // reset all values for new inputs.
        that.reset(); 
        that.text = $(".text").val();
      })
    })
  }

  convertTextToMorse() {
    let that = this;
    $(document).ready(function(){
      $("button").click(function(){
        that.text.split('').forEach( function(letter) {
          output.push(map[letter]) ;
        });
       });
    }) 
  }

  outputText() {
    let that = this;
    $(document).ready(function(){
      $("button").click(function(){
        $(".output").val(output.join(''));
      });
    });
  }

  reset() {
    text = '';
    output = [];
    $(".output").val('');
  }

  addSound() {}

  playSound() {}

  muteSound() {
    $(document).ready(function(){
      $(".volume").click(function(){

      });
    });  
  }

}

let app = new Morse();
app.init();