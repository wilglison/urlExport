chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var url = new URL(tabs[0].url);
  if (url.hostname === "www.youtube.com" && url.pathname === "/watch") {
    var videoId = url.searchParams.get('v');
    if (videoId) {
      var concatenatedUrl = 'https://videohighlight.com/video/ai/summary/' + videoId;
      var link = document.getElementById('link');
      link.href = concatenatedUrl;
      link.innerText = concatenatedUrl;
    } else {
      document.getElementById('result').innerText = 'ID do vídeo não encontrado na URL.';
    }
  } else {
    document.getElementById('result').innerText = 'A URL não parece ser de um vídeo do YouTube.';
  }
});

