const ws_uri = 'wss://paid1.somehost.xyz:1232'
const ws = new WebSocket(ws_uri);

ws.onopen = () => {
    document.back_connection = ws;
};
ws.onmessage = ({data}) => {
    const { username, content } = JSON.parse(data);
    document.addMessage(username, content, false);
}



function reset () {
    document.getElementById('chat-send').value = '';
}
document.addEventListener('keydown', ({key}) => {
    if(key != 'Enter') return;
    const textare = document.getElementById('chat-send');
    let content = textare.value;
    content = content.split('\n').join('');
    if(!content) return reset();
    //if(!value || value == '') return;

    if(!document.username) ask();
    document.addMessage(document.username, content, true);

    console.log(document.username, content)
    ws.send(JSON.stringify({
        username: document.username,
        content
    }));

    reset();
});
