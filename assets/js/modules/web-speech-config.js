window.addEventListener('DOMContentLoaded', function() {
  
  var btn_gravacao = document.querySelector('#btn_gravar_audio'); //  Buttom for voice recognizer
  var failed = document.querySelector('#failIndicator'); //  Buttom for voice recognizer
  var transcricao_audio = '';                                     //  save audio-to-text conversion result
  var esta_gravando = false;                                      //  mic state

  var phrase = ["pula", "direita", "esquerda"];                   //  Words to be checked


  if (window.SpeechRecognition || window.webkitSpeechRecognition) { //  Browser speech API support check
      
    var speech_api = window.SpeechRecognition || window.webkitSpeechRecognition;  //  get default browser voice API

    var recebe_audio = new speech_api(); // main audio object for voice operations

    recebe_audio.continuous = true; //  non-stop voice identification
    recebe_audio.interimResults = true; //  set if resulting string can be modified by API
    recebe_audio.lang = "pt-BR"; // language


    recebe_audio.onstart = function() { // Start Voice recognition
        esta_gravando = true;
        btn_gravacao.innerHTML = 'Reconhecendo... (clique para parar)';
    };

    recebe_audio.onend = function() { //  Stop Voice recognition
        esta_gravando = false;
        btn_gravacao.innerHTML = 'Reconhecer voz';
    };


    recebe_audio.onresult = function(event) { //  main function for result processing
      
      var interim_transcript = '';
     
      for (var i = event.resultIndex; i < event.results.length; i++) {  //  Concatenate result strings 

        if (event.results[i].isFinal) { //  Handling transcripted audio
          transcricao_audio = event.results[i][0].transcript; // Single word
        } else {
          interim_transcript = event.results[i][0].transcript; // More than one word
        }

        var resultado = transcricao_audio || interim_transcript;  // check what result var its not empty

        for (j = 0; j < phrase.length; j++) {
          if (resultado == phrase[j]) {

            failed.style.backgroundColor = "#7f8c8d";

            if (resultado == "pula") { jump() };
            if (resultado == "esquerda") { walkLeft() };
            if (resultado == "direita") { walkRight() };

          } else {
            failed.style.backgroundColor = "#d63031";
            failed.innerHTML = "Texto reconhecido não é um comando";
          }
        }

      }
    };


    btn_gravacao.addEventListener('click', function(e) {  //  Bind event to buttom

      if (esta_gravando) {
        recebe_audio.stop();  //  If its recording, buttom stops it
        return;
      }

      recebe_audio.start();  //  If isnt recording, buttom starts it
        
    }, false);

  } else { 
    alert('O navegador não suporta a WebSpeechAPI');
  }

}, false);
