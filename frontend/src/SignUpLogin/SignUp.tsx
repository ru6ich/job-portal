import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { registerUser } from "../Services/UserService";
import { signUpValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";
const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
}



const SignUp = (props:any) => {
    const [data, setData] = useState<{[key:string]:string}>(form);
    const [formError, setFormError] = useState<{[key:string]:string}>(form);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleCHange = (event:any) => {
        if(typeof(event)=="string"){
            setData({...data, accountType:event})
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({...data,[name]:value})
        setFormError({...formError, [name]:signUpValidation(name, value)})
        console.log(formError)
        if(name === "password" && data.confirmPassword !== ""){
            let err = "";
            if(data.confirmPassword !== value) err = "Пароли не совпадают.";
            setFormError({...formError, [name]:signUpValidation(name, value), confirmPassword:err})
        }
        if(name === "confirmPassword"){
            if (data.password !== value)
                 setFormError({...formError, [name]:"Пароли не совпадают."});
            else setFormError({...formError, confirmPassword:""});
        }
    } 
    const handleSubmit = () => {
        
        let valid = true, newFormError: {[key:string]:string} = {};
        for(let key in data){
            if (key === "accountType")
                continue;
            if (key !== "confirmPassword") 
                newFormError[key] = signUpValidation(key, data[key]);
            else if (data[key]!==data["password"])
                newFormError[key] = "Пароли не совпадают.";
            if (newFormError[key])
                valid = false;
        }
        setFormError(newFormError);
        if (valid === true){
            setLoading(true);
            registerUser(data).then((res)=>{
                console.log(res);
                setData(form);
                notifications.show({
                    title: 'Аккаунт успешно зарегистрирован',
                    message: 'Перенаправляем на домашнюю страницу...',
                    withCloseButton: true,
                    icon: <IconCheck style={{width:"90%", height:"90%"}}/>,
                    color: "teal",
                    withBorder: true,
                    className:"!border-green-500"
                  })
                  setTimeout(() => {
                    setLoading(false);
                    navigate("/login");
                  }, 4000)
            }).catch((err)=>{
                setLoading(false);
                console.log(err)
                notifications.show({
                    title: 'Ошибка регистрации',
                    message: err.response.data.errorMessage,
                    withCloseButton: true,
                    icon: <IconX style={{width:"90%", height:"90%"}}/>,
                    color: "red",
                    withBorder: true,
                    className:"!border-red-500"
                  })
            });
                
        }
    }
    return <><LoadingOverlay
        visible={loading}
        zIndex={1000}
        className="translate-x-1/2"
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
      /><div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Создать аккаунт</div>
            <TextInput value={data.name} error={formError.name} name="name" onChange={handleCHange} withAsterisk label="ФИО" placeholder="Ваше ФИО"/>
            <TextInput value={data.email} error={formError.email} name="email" onChange={handleCHange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                label="Email" placeholder="Ваш email"/>
            <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleCHange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                label="Пароль" placeholder="Пароль" />
            <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleCHange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                label="Подтвердить пароль" placeholder="Подтвердить пароль" />
                <Radio.Group
                    value={data.accountType}
                    onChange={handleCHange}
                    label="Кто вы?"
                    withAsterisk>

                    <Group mt="xs">
                        <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg
                          has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400" autoContrast value="APPLICANT" label="Соискатель" />
                        <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg
                          has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400" autoContrast value="EMPLOYER" label="Работодатель" />
                    </Group>
                </Radio.Group>
            <Checkbox autoContrast label={<>Я принимаю {''}<Anchor>правила & условия</Anchor></>}/>
            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Зарегистрироваться</Button>
            <div className="mx-auto">Уже есть аккаунт? <span className="text-bright-sun-400
                hover:underline cursor-pointer" onClick={() => {navigate("/login"); setFormError(form); setData(form)}}>Войти</span></div>
    </div></>
}

export default SignUp;

