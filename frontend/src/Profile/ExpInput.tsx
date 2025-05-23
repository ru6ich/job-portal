import { Anchor, Button, Checkbox, Textarea } from "@mantine/core";
import SelectInput from "./SelectInput";
import { useEffect, useState } from "react";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const ExpInput = (props:any) => {
    const dispatch = useDispatch();
    const profile = useSelector((state:any)=>state.profile);
    const select = fields;
    useEffect(()=>{
        if(!props.add) form.setValues({title:props.title, company:props.company,
            location: props.location, description: props.description,
            startDate: new Date(props.startDate), endDate:new Date(props.endDate), working:props.working});
    }, [])
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            title:'',
            company:'',
            location:'',
            description:'',
            startDate: new Date(),
            endDate: new Date(),
            working: false,
        },
        validate: {
            title: isNotEmpty("Название обязательно"),
            company: isNotEmpty("Компания обязательна"),
            location: isNotEmpty("Локация обязательна"),
            description: isNotEmpty("Описание обязательно"),
            
        }
    })
    const handleSave=()=>{
        form.validate();
        if(!form.isValid())return;
        let exp=[...profile.experiences];
        if(props.add){
            exp.push(form.getValues());
            exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
            exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();

        }
        else {
            exp[props.index]=form.getValues();
            exp[props.index].startDate=exp[props.index].startDate.toISOString();
            exp[props.index].endDate=exp[props.index].endDate.toISOString();

        }
        let updatedProfile={...profile, experiences:exp};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Успешно",`Опыт успешно ${props.add?"добавлен":"обновлен"}`);
    }
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add?"Добавить" : "Редактировать"} Опыт</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name='title' {...select[0]}/>
                <SelectInput form={form} name='company' {...select[1]}/>
            </div>
                <SelectInput form={form} name='location' {...select[2]}/>
                <Textarea {...form.getInputProps('description')}/>

        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput {...form.getInputProps("startDate")} withAsterisk maxDate={form.getValues().endDate||undefined} label="Начальная дата" placeholder="Установите дату"/>
            <MonthPickerInput {...form.getInputProps("endDate")} disabled={form.getValues().working} withAsterisk minDate={form.getValues().startDate||undefined} maxDate={new Date()} label="Конечная дата" placeholder="Установите дату"/>
        </div>
            <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working", event.currentTarget.checked)} autoContrast label="Работаю в настоящий момент"/>
            <div className="flex gap-5">
                <Button onClick={handleSave} color="green.8" variant="light">Сохранить</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Отмена</Button>
            </div>
    </div>
}

export default ExpInput;

