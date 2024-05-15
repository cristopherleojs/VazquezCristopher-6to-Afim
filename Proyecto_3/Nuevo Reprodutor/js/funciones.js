$(document).ready(function()
{

let playing_song = false;
let play = document.querySelector('#play');
		$(".playlist").audioControls(
		{
			autoplay:false,
			timer: 'increment',
			onAudioChange:function(datos)
			{
				$(".nombremp3").text(datos.title);
			}
			 
				

	});
		$(".repro").audioControls(
		{
			
			autoPlay:true,
			playPauseAudio:function(playAudio)
			{
				$(".repro").text(playAudio);
			}
        
		});
			function justplay(){
				if (playing_song==false) {
					playsong();
				}else{
					pausesong();
				}
			}
		
		function playsong(){
			track.play();
			playing_song = true;
			play.innerHTML = '<i class="fa-solid fa-pause"></i>';
		}
    function pausesong(){
			track.pause();
			playing_song = false;
			play.innerHTML = '<i class="fa-solid fa-play"></i>';
		}
});