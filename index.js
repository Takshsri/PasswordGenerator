function Shuffle(password) {
    let array = password.split('');
    for (let i = password.length - 1; i > 0; i--) {
        const ind = Math.floor(Math.random() * (i + 1));
        [array[i], array[ind]] = [array[ind], array[i]];
    }
    return array.join('');
}

function Generate(lowerLength, upperLength, digitsLength, symbolLength) {
    let password = "";
    const lowerletters = "abcdefghijklmnopqrstuvwxyz";
    const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "1234567890";
    const symbols = "~!@#$%^&*()_+-=[];'\./,";

    // Add lowercase letters
    for (let i = 0; i < lowerLength; i++) {
        const RandomIdx = Math.floor(Math.random() * lowerletters.length);
        password += lowerletters[RandomIdx];
    }

    // Add uppercase letters
    for (let i = 0; i < upperLength; i++) {
        const RandomIdx = Math.floor(Math.random() * upperletters.length);
        password += upperletters[RandomIdx];
    }

    // Add digits
    for (let i = 0; i < digitsLength; i++) {
        const RandomIdx = Math.floor(Math.random() * digits.length);
        password += digits[RandomIdx];
    }

    // Add symbols
    for (let i = 0; i < symbolLength; i++) {
        const RandomIdx = Math.floor(Math.random() * symbols.length);
        password += symbols[RandomIdx];
    }

    return Shuffle(password);
}

// Event listener for button click
document.getElementById("mySubmit").addEventListener("click", (event) => {
    event.preventDefault();
    const lowerLength = parseInt(document.getElementById("lower").value) || 0;
    const upperLength = parseInt(document.getElementById("upper").value) || 0;
    const digitsLength = parseInt(document.getElementById("digits").value) || 0;
    const symbolLength = parseInt(document.getElementById("symbols").value) || 0;
    const result = document.getElementById("myText");

    const password = Generate(lowerLength, upperLength, digitsLength, symbolLength);
    result.textContent = password || "Please enter valid lengths!";
});
