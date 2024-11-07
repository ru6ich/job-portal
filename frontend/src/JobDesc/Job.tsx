import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify';

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc);
    return <div className="w-2/3">
        <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold txt-2xl">Software Engineer III</div>
                        <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago &bull; 48 Applicants</div>
                    </div> 
                </div>
                <div className="flex flex-col gap-2 items-center">
                <Link to={"/apply-job"}>
                <Button  color="bright-sun.4" size="sm" variant="light">Apply</Button>
                </Link>
                <IconBookmark className="text-bright-sun-400 cursor-pointer"/>
                </div>
            </div>
                <Divider my="xl"/>
                <div className="flex justify-between">
                    {
                        card.map((item:any, index:number) => <div key={index} className="flex flex-col items-center gap-1">
                            <ActionIcon color="bright-sun.4" className="!h-12 !w-12" variant="light" radius="xl" aria-label="Settings">
                                <item.icon className="h-4/5 w-4/5" stroke={1.5}/>
                            </ActionIcon>
                            <div className="text-sm text-mine-shaft-300">{item.name}</div>
                            <div className="font-semibold">{item.value}</div>
                        </div>)
                    }
                </div>
                <Divider my="xl"/>
                <div>
                    <div className="text-xl font-semibold mb-5">Required Skills</div>
                    <div className="flex flex-wrap gap-2">
                        {
                            skills.map((item, index) => <ActionIcon key={index} color="bright-sun.4"
                            className="!h-fit font-medium !text-sm !w-fit" variant="light" p="xs"
                            radius="xl" aria-label="Settings">{item}
                           </ActionIcon>)
                        }
                    </div>
                </div>
                <Divider my="xl"/>
                <div className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:mb-1 [&_li]:marker:text-bright-sun-400 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200
                [&_p]:text-justify"
                 dangerouslySetInnerHTML={{__html:data}}>
                </div>
                <Divider my="xl"/>
                <div>
                    <div className="text-xl font-semibold mb-5">About Company</div>
                    <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="h-8" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-medium text-lg">Google</div>
                        <div className=" text-mine-shaft-300">10K+ Employees</div>
                    </div> 
                </div>
                <Link to="/company">
                <Button  color="bright-sun.4" size="sm" variant="light">Company Page</Button>
                </Link>
            </div>
            <div className="text-mine-shaft-300 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt architecto maiores accusantium odio nemo consectetur velit asperiores deserunt ipsam,
                beatae quisquam nulla vitae sit qui sint iste mollitia nostrum? 
                Commodi, ex suscipit incidunt accusamus eaque pariatur facilis obcaecati harum nesciunt.</div>
        </div>
    </div>
}

export default JobDesc;