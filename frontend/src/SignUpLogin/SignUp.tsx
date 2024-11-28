import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { registerUser } from "../Services/UserService";
const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT",
}



const SignUp = (props:any) => {
    const [data, setData] = useState(form);
    const [formError, setFormError] = useState(form);
    const handleCHange = (event:any) => {
        if(typeof(event)=="string")setData({...data, accountType:event})
        else setData({...data,[event.target.name]:event.target.value})
    } 
    const handleSubmit = () => {
        registerUser(data).then((res)=>{
            console.log(res);
        }).catch((err)=>console.log(err));
    }
    return <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
            <TextInput value={data.name} name="name" onChange={handleCHange} withAsterisk label="Full Name" placeholder="Your Name"/>
            <TextInput value={data.email} name="email" onChange={handleCHange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                label="Email" placeholder="Your email"/>
            <PasswordInput value={data.password} name="password" onChange={handleCHange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                label="Password" placeholder="Password" />
            <PasswordInput value={data.confirmPassword} name="confirmPassword" onChange={handleCHange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
                label="Confirm Password" placeholder="Confirm Password" />
                <Radio.Group
                    value={data.accountType}
                    onChange={handleCHange}
                    label="Are you?"
                    withAsterisk>

                    <Group mt="xs">
                        <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg
                          has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400" autoContrast value="APPLICANT" label="Applicant" />
                        <Radio className="py-4 px-6 border hover:bg-mine-shaft-900 border-mine-shaft-800 rounded-lg
                          has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400" autoContrast value="EMPLOYER" label="Employer" />
                    </Group>
                </Radio.Group>
            <Checkbox autoContrast label={<>I accept {''}<Anchor>terms & condition</Anchor></>}/>
            <Button onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
            <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400
                hover:underline">Login</Link></div>
    </div>
}

export default SignUp;

