var player = videojs('my_video_1');
var facebookUrl = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61556247166361%2Fvideos%2F3874014176201954%2F&width=1280"
//var youtubeChannel= "UCASAYSJj2N3xu6B0l6TryEg"; // HP
var youtubeChannel= "UCiBs3jF6UKT91AXm4vPFBOg"; // DNHP
//var youtubeValue= "https://www.youtube.com/embed/live_stream?channel=" + youtubeChannel;
var youtubeValue= "https://www.youtube.com/embed/-qmGV_rQw1k"

var youtubeIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vyMh2_OUiL0?si=ToveOnIf5SVM7VCT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
var facebookIframe = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61556247166361%2Fvideos%2F3874014176201954%2F&width=1280" width="1280" height="720" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';
const sourceSelect = document.getElementById('source-select');
const changeSourceBtn = document.getElementById('change-source-btn');
const videoContainer = document.getElementById('video-container');
const youtubeContainer = document.getElementById('youtube-video-container');
const facebookContainer = document.getElementById('facebook-video-container');
const lowResBtn = document.getElementById('low-res-btn');
const midResBtn = document.getElementById('mid-res-btn');
const highResBtn = document.getElementById('high-res-btn');

  window.onload = function() {
    document.getElementById('youtube-option').value = youtubeValue;
    document.getElementById('facebook-option').value = facebookUrl;
    document.getElementById('facebook-iframe').src = facebookUrl;
  }

changeSourceBtn.addEventListener('click', function() {
  const newSource = sourceSelect.value;
  var selectedOptionText = sourceSelect.options[sourceSelect.selectedIndex].text;

  if (selectedOptionText == 'VOD' || selectedOptionText === 'HLS Stream') {
    videoContainer.style.display = 'block';
    youtubeContainer.style.display = 'none';
    facebookContainer.style.display = 'none';
    player.src({ src: newSource, type: 'application/x-mpegURL' });
    player.load();
    player.play();
  } else if (selectedOptionText == 'Youtube Restream' )
   {
    videoContainer.style.display = 'none';
    youtubeContainer.style.display = 'block';
    facebookContainer.style.display = 'none';
    //document.getElementById('youtube-iframe').src = newSource;
    youtubeContainer.innerHTML = youtubeIframe;
  }
  else 
    {
        videoContainer.style.display = 'none';
        youtubeContainer.style.display = 'none';
        facebookContainer.style.display = 'block';
        //document.getElementById('facebook-iframe').src = newSource;
        facebookContainer.innerHTML = facebookIframe;
    }

});

  highResBtn.addEventListener('click', function() {
    player.src({ src: 'hls/stream_hi/index.m3u8', type: 'application/x-mpegURL' });
    player.load();
    player.play();
  });

    midResBtn.addEventListener('click', function() {
    player.src({ src: 'hls/stream_mid/index.m3u8', type: 'application/x-mpegURL' });
    player.load();
    player.play();
    });

    lowResBtn.addEventListener('click', function() {
    player.src({ src: 'hls/stream_low/index.m3u8', type: 'application/x-mpegURL' });
    player.load();
    player.play();
    });