// return true if the email contains the correct characters
export const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
//return true if the password contains a minimum 8 characters,
// at least one letter, one number and one special character
export const validatePassword = (password) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
}
//return true if the password matches the repeated password
export const validatePasswordMatch = (password, passwordRepeat) =>{
    return password === passwordRepeat;
}