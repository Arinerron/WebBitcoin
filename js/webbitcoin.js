/* returns a keypair object from the given hash */
function getKeypair(hash) {
    return new bitcoin.ECPair((hash));
}

/* hashes a string */
function sha256(str) {
    var buffer = new TextEncoder("utf-8").encode(str);
    return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
        return hex(hash);
    });
}

/* hex encodes a string */
function hex(buffer) {
    var hexCodes = [];
    var view = new DataView(buffer);

    for (var i = 0; i < view.byteLength; i += 4) {
        var value = view.getUint32(i)
        var stringValue = value.toString(16)
        var padding = '00000000'
        var paddedValue = (padding + stringValue).slice(-padding.length)
        hexCodes.push(paddedValue);
    }

    return hexCodes.join("");
}
