import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const CertiInput = (props:any) => {
    const dispatch = useDispatch();
    const select = fields;
    const profile = useSelector((state:any)=>state.profile);
    const form = useForm({
            mode: 'controlled',
            validateInputOnChange: true,
            initialValues: {
                name:'',
                issuer:'',
                issueDate: new Date(),
                certificateId: '',
            },
            validate: {
                name: isNotEmpty("Название обязательно"),
                issuer: isNotEmpty("Компания обязательна"),
                issueDate: isNotEmpty("Дата обязательна"),
                certificateId: isNotEmpty("Id обязательно"),
                
            }
        })
        const handleSave = () => {
            form.validate();
            if(!form.isValid())return;
            let certi = [...profile.certifications];
            certi.push(form.getValues());
            certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
            let updatedProfile = {...profile, certifications:certi};
            props.setEdit(false);
            dispatch(changeProfile(updatedProfile));
            successNotification("Успешно","Сертификат успешно добавлен");
        }
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Добавить сертификат</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput {...form.getInputProps("name")} withAsterisk label="Название" placeholder="Введите название"/>
            <SelectInput form={form} name="issuer" {...select[1]}/>
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk maxDate={new Date()} label="Дата выдачи"
            placeholder="Установите дату" />
        <TextInput {...form.getInputProps("certificateId")} withAsterisk label="ID Сертификата" placeholder="Введите ID"/>
        </div>
        <div className="flex gap-5">
                <Button onClick={handleSave} color="green.8" variant="light">Сохранить</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Отменить</Button>
        </div>
    </div>
}

export default CertiInput;