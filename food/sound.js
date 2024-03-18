document.addEventListener('DOMContentLoaded', function () {
    // Create an audio element
    var audio = new Audio("C:/Users/A NAVEN KUMAR REDDY/Desktop/po/scott-buckley-moonlight(chosic.com).mp3");
    audio.loop = true; // Enable looping
    audio.volume = 0.5; // Adjust volume as needed

    // Add a button to trigger audio playback
    var playButton = document.getElementById('playButton'); // Replace 'playButton' with the ID of your button

    // Event listener for button click
    playButton.addEventListener('click', function() {
        // Play the audio
        audio.play();
    });
});
