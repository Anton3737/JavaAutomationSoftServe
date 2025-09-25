function generatePassword(lenght) {
    if (lenght < 6) {
        return "password should be more than 6 symbols";
    }

    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialSymbols = "!@#$%^&*()_+~[]{};:,.<>?/|";

    const allChars = lowerCaseLetters + upperCaseLetters + numbers + specialSymbols;

    let username = [
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)],
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        specialSymbols[Math.floor(Math.random() * specialSymbols.length)],
    ];


    while (username.length < length) {
        let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        cont

        if (
            password.length >= 2 &&
            password[password.length - 1] === char &&
            password[password.length - 2] === char
        ) {
            continue;
        }

        password.push(randomChar);
    }
}