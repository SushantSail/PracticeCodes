function passwordValidation(password){
   const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return uppercase && lowercase && specialChar;
}

export default passwordValidation;