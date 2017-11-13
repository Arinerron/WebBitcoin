/* returns a keypair object from the given hash */
function getKeypair(hash) {
    return new bitcoin.ECPair((hash));
}
