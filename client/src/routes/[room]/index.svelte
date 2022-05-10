<svelte:head>
  <title>{ roomID }</title>
  
  <script src="https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js"></script>
  <script>
    // var peer = new Peer();
    var peer = new Peer(undefined, {
      // key: "peerjs",
      host: '/',
      // path: '/peer',
      port: '5000'
    });
  </script>
</svelte:head>

<script context="module">
  export async function load({ params, fetch, session, stuff }) {
    const roomID = params.room;

    return {
      props: {
        roomID: roomID
      }
    };
  };
</script>

<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  onMount(async () => {
    const socket = await import("$lib/socket.js").default;
    console.log(socket);

    const videoGrid = document.getElementById('video-grid');
    const myVideo = document.createElement('video');
    myVideo.muted = true;
    const peers = {};
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      addVideoStream(myVideo, stream);

      peer.on('call', call => {
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
          addVideoStream(video, userVideoStream);
        });
      });

      socket.on('user-connected', userId => {
        connectToNewUser(userId, stream);
      });
    });

    socket.on('user-disconnected', userId => {
      if (peers[userId]) peers[userId].close();
    });

    peer.on('open', id => {
      socket.emit('join-room', roomID, id);
    });

    function connectToNewUser(userId, stream) {
      const call = peer.call(userId, stream);
      const video = document.createElement('video');
      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream);
      });
      call.on('close', () => {
        video.remove();
      });

      peers[userId] = call;
    };

    function addVideoStream(video, stream) {
      video.srcObject = stream;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
      videoGrid.append(video);
    };

    peer.on('connection', conn => {
      console.log("peer: " + peer.id);
  
      conn.on('data', data => {
        console.log(data);
      });
  
      conn.on('open', () => {
        conn.send('pong!');
      });
    });

    console.log(peers);

    // const conn = peer.connect('another-peers-id');
    // conn.on('open', () => {
    //   conn.send('hi!');
    // });
  });
  
  export let roomID;
</script>

<section>
  <h1>Welcome to { roomID } room!</h1>
  
  <div id="video-grid"></div>
</section>

<style>
  #video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 300px;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
