function addMessage(username, content, me) {
    const theDiv = document.getElementById('main-messages');
    theDiv.innerHTML += `
    <div class="container ${me ? 'darker' : ''}">
        <h5>${username}</h5>
        <p>${content}</p>
        <span class="time-right">${new Date().toLocaleString("en-US", {timeZone: "America/New_York"})}</span>
    </div>
    `

};

document.addMessage = addMessage;