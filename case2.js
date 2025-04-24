document.addEventListener('DOMContentLoaded', () => {
    const decodeBtn = document.getElementById('decode-btn');
    const messageInput = document.getElementById('message');
    const shiftInput = document.getElementById('shift');
    const resultOutput = document.getElementById('result');

    function decodeCaesarCipher(text, shift) {
        return text.replace(/[a-zA-Z]/g, (char) => {
            const base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            return String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        });
    }

    decodeBtn.addEventListener('click', () => {
        const message = messageInput.value;
        const shift = parseInt(shiftInput.value);
        resultOutput.value = decodeCaesarCipher(message, shift);
    });

    // Optional: Auto-decode as user types
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim()) {
            const shift = parseInt(shiftInput.value);
            resultOutput.value = decodeCaesarCipher(messageInput.value, shift);
        } else {
            resultOutput.value = '';
        }
    });
});