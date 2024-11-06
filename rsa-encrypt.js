// rsa-encrypt.js
const forge = require("node-forge");

/**
 * Encrypt a message using RSA and a public key (PKCS #1 v1.5 padding).
 * @param {string} publicKeyPem - The public key in PEM format.
 * @param {string} message - The message to encrypt.
 * @returns {string} - The Base64 encoded encrypted message.
 */
function rsaEncrypt(publicKeyPem, message) {
  // Convert PEM formatted public key to forge public key
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

  // Encrypt the message with RSA using PKCS#1 v1.5 padding
  const encrypted = publicKey.encrypt(message, "RSAES-PKCS1-V1_5");

  // Encode the encrypted message in Base64 for easier transport
  return forge.util.encode64(encrypted);
}

// Example usage
const publicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0W+WjlA7YjkF9N78bfOY
+ty4KghUB0AV48gZ1fWwBBZ5oSf9uU0pFzGdJOUOxWmT6Fdgp5q8FofVR3R0fCRd
+zlfw+Od/SLW/Dgi58X4wZxMJ4VqCVSbxLxbjYIQW1FGqpuGhNQIDAQAB
-----END PUBLIC KEY-----`;

const message = "Hello, this is a secure message.";
const encryptedMessage = rsaEncrypt(publicKeyPem, message);
console.log("Encrypted message (Base64):", encryptedMessage);
