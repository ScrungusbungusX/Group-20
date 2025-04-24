const keyboard = document.getElementById('keyboard');
const puzzleMap = {
  A: 'C',
  B: 'F',
  C: 'P',
  D: 'S',
  E: 'Z',
  F: 'I',
  G: 'L',
  H: 'Q',
  I: 'M',
  J: 'B',
  K: 'X',
  L: 'T',
  M: 'G',
  N: 'V',
  O: 'U',
  P: 'R',
  Q: 'D',
  R: 'N',
  S: 'W',
  T: 'Y',
  U: 'A',
  V: 'J',
  W: 'E',
  X: 'H',
  Y: 'K',
  Z: 'O'
};

let encodedInput = "";
let decodedOutput = "";

const outputBox = document.createElement('div');
outputBox.id = 'output';
outputBox.style.marginTop = '20px';
outputBox.style.textAlign = 'center';
outputBox.style.fontSize = '24px';
document.body.appendChild(outputBox);

const successMessage = document.createElement('div');
successMessage.id = 'success';
successMessage.style.display = 'none';
successMessage.style.marginTop = '10px';
successMessage.style.textAlign = 'center';
successMessage.style.fontSize = '28px';
successMessage.style.color = 'lime';
successMessage.textContent = "Message decrypted, go consult the associate... ";
document.body.appendChild(successMessage);

const solution = "MURDERMYSTERY";

// Generate keyboard buttons
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const btn = document.createElement('button');
  btn.classList.add('key-button');
  btn.textContent = letter;
  btn.dataset.key = letter;

  btn.addEventListener('click', () => {
    encodedInput += letter;
    decodedOutput += puzzleMap[letter] || '?'; // For unknown mappings
    outputBox.textContent = decodedOutput;

    if (decodedOutput === solution) {
      successMessage.style.display = 'block';
    }
  });

  keyboard.appendChild(btn);
}

// Create and style the clear button
const clearBtn = document.createElement('button');
clearBtn.textContent = "Clear";
clearBtn.classList.add('key-button');
clearBtn.style.backgroundColor = '#800';
clearBtn.style.marginTop = '20px';

clearBtn.addEventListener('click', () => {
  encodedInput = "";
  decodedOutput = "";
  outputBox.textContent = "";
  successMessage.style.display = 'none';
});

document.body.appendChild(clearBtn);
