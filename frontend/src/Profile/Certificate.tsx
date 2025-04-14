import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Certificate = () => {
    const [edit, setEdit] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const profile = useSelector((state:any)=>state.profile);
    const handleClick=()=>{
        setEdit(!edit);
    }
    return <div className="px-3">
    <div className="text-2xl font-semibold mb-5 flex justify-between">Сертификаты
        <div className="flex gap-2"><ActionIcon onClick={() => setAddCerti(true)} 
            size="lg" color="bright-sun.4" variant="subtle" aria-label="Settings">
            <IconPlus className="h-4/5 w-4/5"/>
        </ActionIcon><ActionIcon onClick={handleClick} size="lg" color={edit?"red.8":"bright-sun.4"} variant="subtle" aria-label="Settings">
            {edit?<IconX className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5"/>}
        </ActionIcon></div></div>
    <div className="flex flex-col gap-8">
        {
            profile?.certifications?.map((certi:any, index:any)=>
            <CertiCard key={index} index={index} edit={edit} {...certi}/>)
        }
        {
            addCerti && <CertiInput setEdit={setAddCerti}/>
        }
    </div>
</div>
}

export default Certificate;