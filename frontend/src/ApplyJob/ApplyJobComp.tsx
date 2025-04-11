import { Button, Divider, FileInput, NumberInput, Textarea, TextInput, Notification, rem, Box, LoadingOverlay } from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false); 
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate(); 
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({top:0, behavior:"smooth"})
    }
    const handleSubmit = () => {
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)navigate('/find-jobs');
        }, 1000)
    }
    return <> <div className="w-2/3 mx-auto">
        <LoadingOverlay className="!fixed" visible={submit} zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
        <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold txt-2xl">Разработчик ПО </div>
                        <div className="text-lg text-mine-shaft-300">Google &bull; 3 дня назад &bull; 36 Откликов</div>
                    </div> 
                </div>
            </div>
            <Divider my="xl"/>
            <div className="text-xl font-semibold mb-5">Подайте заявку</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
                label="ФИО" withAsterisk placeholder="Введите ФИО" />
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Email" withAsterisk placeholder="Введите email" />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput readOnly={preview} variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="номер телефона" withAsterisk placeholder="Введите номер телефона"
                 hideControls min={0} max={9999999999} clampBehavior="strict" />
                <TextInput readOnly={preview} variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Персональный сайт" withAsterisk placeholder="Введите URL" />
                </div>
                <FileInput readOnly={preview} variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5}/>} label="Прикрепите ваше резюме"
                 placeholder="Ваше резюме" leftSectionPointerEvents="none"/>
                 <Textarea readOnly={preview} variant={preview?"unstyled":"default"}
                className={`${preview?"text-mine-shaft-300 font-semibold":""}`} withAsterisk placeholder="Напишите немного о себе..."
                 label="Напишите о себе" autosize minRows={4}/>
                 {!preview && <Button onClick={handlePreview} color="bright-sun.4" variant="light">Превью</Button>}
                 {
                    preview && <div className="flex gap-10 [&>*]:w-1/2">
                        <Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline">Редактировать</Button>
                        <Button fullWidth onClick={handleSubmit} color="bright-sun.4" variant="light">Подтвердить</Button>
                    </div>
                 }
            </div>
    </div>
    <Notification className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%] z-[1001]
     transition duration-300 ease-in-out ${submit?"translate-y-0":"-translate-y-20"}`} 
     icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
     color="teal" withBorder title="Заявка подана" mt="md" withCloseButton={false}>
        Перенаправление на Найти работу через {sec} секунд...
    </Notification>
    </>
}

export default ApplyJobComp;