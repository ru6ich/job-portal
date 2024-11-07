import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

const CompanyPage = () => {
    const navigate = useNavigate();
    return <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4'>
    <Divider size="xs"/>
        <Button onClick={()=>navigate(-1)} my="md" leftSection={<IconArrowLeft size={20}/>}
        color="bright-sun.4" variant="light">Back</Button>
    <div className="flex gap-5">
    </div>
</div>
}

export default CompanyPage;