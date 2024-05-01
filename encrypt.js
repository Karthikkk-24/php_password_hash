import bcrypt from 'bcryptjs';


async function hashPassword(password) {
    // Define the salt rounds
    const saltRounds = 10;
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    return hashedPassword;
}

export function encryptPassword(element, outputElement, copyButton) {
    element.addEventListener('input', () => {
        console.log(element.value);
        hashPassword(element.value).then((hashedPassword) => {
            if (element.value.length == 0) {
                outputElement.value = ""
            } else {
                outputElement.value = hashedPassword
            }
        })
    });

    copyButton.addEventListener('click', () => {
        outputElement.select();
        navigator.clipboard.writeText(outputElement.value);
    })
}
