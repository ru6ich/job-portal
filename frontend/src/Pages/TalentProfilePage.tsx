import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage = () => {
    return (
        <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4'>
            <Link className="my-4 inline-block" to="/find-talent">
                    <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light"
                    >Back</Button>
            </Link>
            <Divider size="xs"/>
            <div className="flex gap-5">
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
        </div>
    )
}

export default TalentProfilePage;