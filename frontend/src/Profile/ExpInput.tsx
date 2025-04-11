import { Anchor, Button, Checkbox, Textarea } from "@mantine/core";
import SelectInput from "./SelectInput";
import { useState } from "react";
import fields from "../Data/Profile";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props:any) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);
    const select = fields;
    const [desc, setDesc] = useState("В качестве инженера-программиста в Google я отвечаю за проектирование, разработку и поддержку масштабируемых программных решений, которые улучшают работу пользователей и повышают эффективность работы. Моя роль заключается в сотрудничестве с межфункциональными командами для определения требований к проекту, разработки технических спецификаций и внедрения надежных приложений с использованием передовых технологий. Я активно участвую в проверке кода, обеспечивая соблюдение лучших практик и стандартов кодирования, а также вношу вклад в постоянное совершенствование процесса разработки.");
    return <div className="flex flex-col gap-3">
        <div className="text-lg font-semibold">{props.add?"Добавить" : "Редактировать"} Опыт</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]}/>
            </div>
                <SelectInput {...select[2]}/>
                <Textarea withAsterisk label="Резюме" autosize minRows={3} value={desc}
                        placeholder="Напишите резюме..." 
                        onChange={(event) => setDesc(event.currentTarget.value)}/>

        <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput withAsterisk maxDate={endDate||undefined} label="Начальная дата" placeholder="Установите дату" value={startDate} onChange={setStartDate}/>
            <MonthPickerInput disabled={checked} withAsterisk minDate={startDate||undefined} maxDate={new Date()} label="Конечная дата" placeholder="Установите дату" value={endDate} onChange={setEndDate}/>
        </div>
            <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} autoContrast label="Работаю в настоящий момент"/>
            <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="bright-sun.4" variant="outline">Сохранить</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="light">Отмена</Button>
            </div>
    </div>
}

export default ExpInput;