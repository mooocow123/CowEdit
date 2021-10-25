const fs = require('fs');
const path = require('path');
const sweetalert = require('sweetalert2');

function getUser(name) {
    let json = fs.readFileSync(path.resolve(__dirname, 'data', 'users.json'));
    json = JSON.parse(json);
    if (JSONPropertyExists(json, name) == false) {
        console.error("ERROR 404: User doesn't exist.");
        sweetalert.fire({
            title: "ERROR 404: User doesn't exist",
            text: "That user doesn't exist in this timeline but it could in the future :(\nI bet you'd need to switch timelines to find that user, Huh.",
            icon: 'error',
            confirmButtonText: 'Continue'
        });
    }
    if (JSONPropertyExists(json, name) == true) {
        console.log('Yes!');
    }
}

function Login() {
    accountname = document.getElementById('accountname').textContent;
    getUser(accountname);
}