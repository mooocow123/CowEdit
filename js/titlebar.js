const remote = require('electron').remote


function CloseApp() {
    remote.getCurrentWindow().close()
}

function MaximizeApp() {
    if (remote.getCurrentWindow().isMaximized()) {
        remote.BrowserWindow.getFocusedWindow().restore()
    }
    else {
        remote.BrowserWindow.getFocusedWindow().maximize()
    }
}

function MinimizeApp() {
    remote.BrowserWindow.getFocusedWindow().minimize()
}
