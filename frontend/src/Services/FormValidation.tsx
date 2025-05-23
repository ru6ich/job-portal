const signUpValidation = (name:string, value:string) => {
    switch(name) {
        case "name":
            if (value.length === 0) return "Имя обязательно";
            if(!/^(?! )[a-zA-Z0-9_ ]{8,15}(?<! )$/.test(value)) return "Логин должен быть от 1 до 15 символов, используются буквы, цифры и пробелы";
            return "";
        case "email":
            if (value.length === 0) return "Email обязателен";
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email недействителен";
            return "";
        case "password":
            if(value.length===0) return "Пароль обязателен."
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value))
                return `Пароль должен иметь длину от 8 до 15 символов,
                    одну буква верхнего регистра, одну нижнего, цифру, специальный символ`;
            return "";
        default:
            return "";
    }
}


const loginValidation = (name:string, value:string) => {
    switch(name) {
        case "email":
            if (value.length === 0) return "Email обязателен";
            return "";
        case "password":
            if(value.length === 0) return "Пароль обязателен."
            return "";
        default:
            return "";
    }
}

export {signUpValidation, loginValidation};