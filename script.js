const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  } , 2000);
})


h2{
 display:flex;
 flex-direction: column;

}


 var audio_info = document.getElementById('audio1');
    document.getElementById('play').addEventListener('click', function(){
        audio_info.play();
    }, false);
//
    document.getElementById('stop').addEventListener('click', function(){
        audio_info.pause();
    }, false);
    <script>
var audio = new Audio ('https://youtu.be/i7jU0xDABGM');
audio.play();
</script>
