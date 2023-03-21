function uploadVideo() {
  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/upload", true);
  xhr.setRequestHeader("Content-Type", "application/octet-stream");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var videoUrl = xhr.responseText;
      var videoElement = document.getElementById("uploadedVideo");
      videoElement.setAttribute("src", videoUrl);
    }
  };

  xhr.send(file);
}
