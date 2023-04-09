export function capitalizeFirstLetter(string){
return string.charAt(0).toUpperCase() + string.slice(1)
}

export function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}