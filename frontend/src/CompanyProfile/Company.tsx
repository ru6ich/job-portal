import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
    return <div className="w-3/4">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <img className=" w-36 h-36 rounded-3xl bg-mine-shaft-950 -bottom-1/4 absolute left-5 p-2
             border-mine-shaft-950 border-8" src="/Icons/Google.png" alt="" />
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between">Google
                <Avatar.Group>
                    <Avatar src="avatar.png" /> 
                    <Avatar src="avatar1.png" />
                    <Avatar src="avatar2.png" />
                    <Avatar>+10K</Avatar>
                </Avatar.Group></div>
                <div className="flex gap-1 text-lg text-mine-shaft-300 items-center">
                    <IconMapPin className="h-5 w-5" stroke={1.5}/> New York, USA
                </div>
            <Divider my="xl"/>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about"> 
                    <Tabs.List className="[&_button]:!text-lg font-semibold-mb-5 
                     [&_button[data-active='true']]:text-bright-sun-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
                    <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    </div>
}

export default Company;