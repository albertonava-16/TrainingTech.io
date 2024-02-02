var synth = window.speechSynthesis;
var utterance;

function iniciarLectura(texto) {
    // Detén cualquier reproducción existente
    synth.cancel();

    // Crea un objeto de mensaje de texto a voz
    utterance = new SpeechSynthesisUtterance();
    utterance.text = texto;

    // Reproduce el mensaje
    synth.speak(utterance);
}

function pausarLectura() {
    // Pausa la reproducción si está en curso
    if (synth.speaking) {
        synth.pause();
    }
}
