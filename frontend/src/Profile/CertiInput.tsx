import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props:any) => {
    const select = fields;
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">Добавить сертификат</div>
        <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput withAsterisk label="Название" placeholder="Введите название"/>
            <SelectInput {...select[0]}/>
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput withAsterisk maxDate={new Date()} label="Дата выдачи"
            placeholder="Установите дату" value={issueDate} onChange={setIssueDate}/>
        <TextInput withAsterisk label="ID Сертификата" placeholder="Введите ID"/>
        </div>
        <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="bright-sun.4" variant="outline">Сохранить</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Отменить</Button>
        </div>
    </div>
}

export default CertiInput;