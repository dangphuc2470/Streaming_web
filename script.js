//var player = videojs('my_video_1');
//var youtubeChannel= "UCASAYSJj2N3xu6B0l6TryEg"; // HP
//var youtubeChannel= "UCiBs3jF6UKT91AXm4vPFBOg"; // DNHP
//var youtubeValue= "https://www.youtube.com/embed/-qmGV_rQw1k"


var app = angular.module('streamingApp', []);
app.controller('streamingCtrl', function($scope) {
    $scope.currentTab = 'Content';
    $scope.userName = '';
    $scope.chatInput = '';

    var messagesRef = firebase.database().ref('messages');

    $scope.openTab = function(tabName) {
        $scope.currentTab = tabName;
    };

    $scope.sendMessage = function() {
        var message;
        if ($scope.userName === '') {
            message = 'Anonymous';
        }
        else {
            message = $scope.userName;
        }

        // Get current date and time
        var now = new Date();
        var date = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        var year = now.getFullYear();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var currentTime = hours + ':' + minutes + " - ";

        // Concatenate current time with the message
        message = currentTime +'	' + message + ': ' + $scope.chatInput;

        $scope.chatInput = '';

        // Send the message to Firebase
        messagesRef.push(message);
    };
});







const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

const messagesRef = firebase.database().ref('messages');

chatSend.addEventListener('click', () => {
  var message;
  var name = document.getElementById('user-name').value;
  if (name === '') {
    message = 'Anonymous';
  }
  else 
  message = name;
  
  // Get current date and time
  var now = new Date();
  var date = now.getDate().toString().padStart(2, '0');
  var month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  var year = now.getFullYear();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var currentTime = hours + ':' + minutes + " - ";

  // Concatenate current time with the message
  message = currentTime +'	' + message + ': ' + chatInput.value;
  
  chatInput.value = '';

  // Send the message to Firebase
  messagesRef.push(message);
});

document.getElementById('chat-input').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('chat-send').click();
  }
});

// Listen for new messages
messagesRef.on('child_added', (snapshot) => {
  const message = snapshot.val();
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);

  var chatBox = document.getElementById('chat-messages');
  chatBox.scrollTop = chatBox.scrollHeight;
});


var youtubeIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vyMh2_OUiL0?si=ToveOnIf5SVM7VCT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
var facebookIframe = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61556247166361%2Fvideos%2F3874014176201954%2F&width=1280" width="1280" height="720" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';

const lowResBtn = document.getElementById('low-res-btn');
const midResBtn = document.getElementById('mid-res-btn');
const highResBtn = document.getElementById('high-res-btn');

window.onload = function() {
  document.getElementById('VOD').click();
  document.getElementById("defaultButton").click();
};


var player = new Clappr.Player({ source: "vod/index.m3u8", parentId: "#player", width: "800px", height: "450px", });
var youtubeChannel = "UCv-c107xkY9lJEbKEXDnOJw"; // Mai Han
var youtubeValue = "https://www.youtube.com/embed/live_stream?channel=" + youtubeChannel;
var facebookUrl = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F61556247166361%2Fvideos%2F979792726669890%2F&width=1280";
const normarlPlayer = document.getElementById('player');
const youtubePlayer = document.getElementById('youtubePlayer');
const facebookPlayer = document.getElementById('facebookPlayer');


document.getElementById('Youtube').addEventListener('click', function () {
  console.log("Youtube");
  player.stop();
  facebookPlayer.src = '';
  youtubePlayer.src = youtubeValue;
  youtubePlayer.style.display = "block";
  normarlPlayer.style.display = "none";
  facebookPlayer.style.display = "none";
});

document.getElementById('Facebook').addEventListener('click', function () {
  console.log("Facebook");
  player.stop();
  youtubePlayer.src = '';
  facebookPlayer.src = facebookUrl;
  youtubePlayer.style.display = "none";
  normarlPlayer.style.display = "none";
  facebookPlayer.style.display = "block";
})

document.getElementById('VOD').addEventListener('click', function () {
  console.log("VOD22");
  player.configure({ source: "vod/index.m3u8" });
  youtubePlayer.src = '';
  facebookPlayer.src = '';
  youtubePlayer.style.display = "none";
  normarlPlayer.style.display = "block";
  facebookPlayer.style.display = "none";
  player.play();

});

document.getElementById('HLS').addEventListener('click', function () {
  console.log("HLS");
  player.configure({ source: "hls/stream/index.m3u8" });
  youtubePlayer.src = '';
  facebookPlayer.src = '';
  youtubePlayer.style.display = "none";
  normarlPlayer.style.display = "block";
  facebookPlayer.style.display = "none";
  player.play();
});

document.getElementById('low-res-btn').addEventListener('click', function () {
  player.configure({ source: "hls/stream_low/index.m3u8" });
  player.play();
});

document.getElementById('mid-res-btn').addEventListener('click', function () {
  player.configure({ source: "hls/stream_mid/index.m3u8" });
  player.play();
});

document.getElementById('high-res-btn').addEventListener('click', function () {
  player.configure({ source: "hls/stream_hi/index.m3u8" });
  player.play();
});


document.addEventListener('DOMContentLoaded', (event) => {
  const liveStatContainer = document.getElementById('live-stat');

  setInterval(() => {
      fetch(window.location.href +'stat')
          .then(response => response.text())
          .then(data => {
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(data, "application/xml");

              function createTable(data) {
                  const table = document.createElement("table");
                  table.style.width = "100%";
                  table.style.borderCollapse = "collapse";

                  const addRow = (table, key, value) => {
                      const row = table.insertRow();
                      const cell1 = row.insertCell(0);
                      const cell2 = row.insertCell(1);
                      cell1.textContent = key;
                      cell2.textContent = value;
                      cell1.style.border = cell2.style.border = "1px solid black";
                      cell1.style.padding = cell2.style.padding = "8px";
                      cell1.style.textAlign = cell2.style.textAlign = "left";
                  };

                  const headers = table.insertRow();
                  const headerCell1 = headers.insertCell(0);
                  const headerCell2 = headers.insertCell(1);
                  headerCell1.textContent = "Parameter";
                  headerCell2.textContent = "Value";
                  headerCell1.style.border = headerCell2.style.border = "1px solid black";
                  headerCell1.style.padding = headerCell2.style.padding = "8px";
                  headerCell1.style.textAlign = headerCell2.style.textAlign = "left";
                  headerCell1.style.backgroundColor = headerCell2.style.backgroundColor = "#f2f2f2";

                  for (let key in data) {
                      if (data.hasOwnProperty(key)) {
                          addRow(table, key, data[key]);
                      }
                  }

                  return table;
              }

              const rtmpData = {
                  "NGINX Version": xmlDoc.querySelector("nginx_version").textContent,
                  "NGINX RTMP Version": xmlDoc.querySelector("nginx_rtmp_version").textContent,
                  "Compiler": xmlDoc.querySelector("compiler").textContent,
                  "Built": xmlDoc.querySelector("built").textContent,
                  "PID": xmlDoc.querySelector("pid").textContent,
                  "Uptime": formatUptime(parseInt(xmlDoc.querySelector("uptime").textContent)),
                  "Bytes In": formatBytes(parseInt(xmlDoc.querySelector("bytes_in").textContent)),
                  "Bandwidth Out": formatBytes(parseInt(xmlDoc.querySelector("bw_out").textContent)),
                  "Bytes Out": formatBytes(parseInt(xmlDoc.querySelector("bytes_out").textContent)),
      
              };

              const server = xmlDoc.querySelector("server");
              const applications = server.querySelectorAll("application");

              const createClientTable = (clients) => {
                  const clientTable = document.createElement("table");
                  clientTable.style.width = "100%";
                  clientTable.style.borderCollapse = "collapse";

                  const addRow = (table, values) => {
                      const row = table.insertRow();
                      values.forEach(value => {
                          const cell = row.insertCell();
                          cell.textContent = value;
                          cell.style.border = "1px solid black";
                          cell.style.padding = "8px";
                          cell.style.textAlign = "left";
                      });
                  };

                  const headers = clientTable.insertRow();
                  const headerTitles = ["ID", "Address", "Time", "Flash Version", "Dropped", "AV Sync", "Timestamp"];
                  headerTitles.forEach(title => {
                      const cell = headers.insertCell();
                      cell.textContent = title;
                      cell.style.border = "1px solid black";
                      cell.style.padding = "8px";
                      cell.style.textAlign = "left";
                      cell.style.backgroundColor = "#f2f2f2";
                  });

                  clients.forEach(client => {
                      const values = [
                          client.querySelector("id").textContent,
                          client.querySelector("address").textContent,
                          client.querySelector("time").textContent,
                          client.querySelector("flashver").textContent,
                          client.querySelector("dropped").textContent,
                          client.querySelector("avsync").textContent,
                          client.querySelector("timestamp").textContent
                      ];
                      addRow(clientTable, values);
                  });

                  return clientTable;
              };

              liveStatContainer.innerHTML = "<h1>RTMP Server Information</h1>";
              liveStatContainer.appendChild(createTable(rtmpData));

              const applicationsDiv = document.createElement("div");
              applicationsDiv.innerHTML = "<h2>Applications</h2>";

              applications.forEach(app => {
                  const appName = app.querySelector("name").textContent;
                  const appDiv = document.createElement("div");
                  appDiv.innerHTML = `<h3>Application: ${appName}</h3>`;

                  const live = app.querySelector("live");
                  if (live) {
                      const stream = live.querySelector("stream");
                      if (stream) {
                          const streamData = {
                              "Stream Name": stream.querySelector("name").textContent,
                              "Time": stream.querySelector("time").textContent,
                              "Bandwidth In": formatBytes(parseInt(xmlDoc.querySelector("bw_in").textContent)),
                              "Bytes In": formatBytes(parseInt(xmlDoc.querySelector("bytes_in").textContent)),
                              "Bandwidth Out": formatBytes(parseInt(xmlDoc.querySelector("bw_out").textContent)),
                              "Bytes Out": formatBytes(parseInt(xmlDoc.querySelector("bytes_out").textContent)),
                              "Bandwidth Audio": formatBytes(parseInt(stream.querySelector("bw_audio").textContent)),
                              "Bandwidth Video": formatBytes(parseInt(stream.querySelector("bw_video").textContent)), 
                              "Clients": stream.querySelector("nclients").textContent
                          };
                          appDiv.appendChild(createTable(streamData));

                          const clients = stream.querySelectorAll("client");
                          if (clients.length > 0) {
                              appDiv.innerHTML += "<h4>Clients</h4>";
                              appDiv.appendChild(createClientTable(clients));
                          }
                      }
                  } else if (app.querySelector("play")) {
                      const playData = {
                          "Clients": app.querySelector("play > nclients").textContent
                      };
                      appDiv.appendChild(createTable(playData));
                  }

                  applicationsDiv.appendChild(appDiv);
              });

              liveStatContainer.appendChild(applicationsDiv);
          });
  }, 1000); // Update every 1 second
});



// Handle click events for buttons in button-column but not in resolution-buttons
var buttonColumnButtons = document.querySelectorAll('.button-column button:not(.resolution-buttons button)');
for (let i = 0; i < buttonColumnButtons.length; i++) {
  buttonColumnButtons[i].addEventListener('click', function() {
    for (let j = 0; j < buttonColumnButtons.length; j++) {
      buttonColumnButtons[j].classList.remove('selected');
    }
    this.classList.add('selected');
  });
}

// Handle click events for buttons in resolution-buttons
var resolutionButtons = document.querySelectorAll('.resolution-buttons button');
for (let i = 0; i < resolutionButtons.length; i++) {
  resolutionButtons[i].addEventListener('click', function() {
  document.getElementById('HLS').click();
    for (let j = 0; j < resolutionButtons.length; j++) {
      resolutionButtons[j].classList.remove('selected');
    }
    this.classList.add('selected');
  });
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}


function formatUptime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
}