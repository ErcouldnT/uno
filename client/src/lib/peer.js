import Peer from 'peerjs';

const peer = new Peer(undefined, {
  host: '/peer',
  port: '4000'
});

peer.on('connection', conn => {
  console.log("peer: " + peer.id);

  conn.on('data', data => {
    console.log(data);
  });

  conn.on('open', () => {
    conn.send('pong!');
  });
});

console.log("peer working...");
export default peer;
