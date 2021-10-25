function JSONPropertyExists(json, propname) {
    if (eval(json + '.' + propname) != undefined) {
        return true
    }
    else {
        return false
    }
}
