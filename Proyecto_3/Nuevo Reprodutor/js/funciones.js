$(document).ready(function()
{
		$(".playlist").audioControls(
		{
			autoplay:false,
			timer: 'increment',
			onAudioChange:function(datos)
			{
				$(".nombremp3").text(datos.title);
			}
			 
				

	})
});