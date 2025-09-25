function generateUserPassword(length) {
    if (length < 6) {
        throw new Error("Password should be more than 6 symbols");
    }

    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialSymbols = "!@#$%^&*()_+~[]{}<>?/|";

    const allChars = upperCaseLetters + lowerCaseLetters + numbers + specialSymbols;

    let userPassword = [
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)],
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        specialSymbols[Math.floor(Math.random() * specialSymbols.length)],
    ];

    while (userPassword.length < length) {
        let randomChar = allChars[Math.floor(Math.random() * allChars.length)];

        if (
            userPassword.length >= 2 &&
            userPassword[userPassword.length - 1] === randomChar &&
            userPassword[userPassword.length - 2] === randomChar
        ) {
            continue;
        }
        userPassword.push(randomChar);
    }

    for (let i = userPassword.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [userPassword[i], userPassword[j]] = [userPassword[j], userPassword[i]];
    }

    return userPassword.join("");
}

console.log(generateUserPassword(100));
