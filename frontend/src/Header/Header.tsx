import { Avatar, Indicator } from '@mantine/core';
import { IconRobotFace, IconBell, IconSettings } from '@tabler/icons-react';

const Header = () => {
    return <div className='w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center'>
        <div className='flex gap-1 items-center text-bright-sun-400'>
            <IconRobotFace className='h-8 w-8' stroke={2}/>
            <div className='text-3xl font-semibold'>Jobs</div>
        </div>
        <div className='flex gap-5'>
            <a href="">Find Jobs</a>
            <a href="">Find Talents</a>
            <a href="">Upload Jobs</a>
            <a href="">About Us</a>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='flex items-center gap-3'>
                <div>Rustam</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <IconSettings stroke={1.5}/>
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Indicator color="bright-sun.4" offset={6} size={8} withBorder processing>
                    <IconBell stroke={1.5}/>
                </Indicator>
            </div>
        </div>
    </div>
}

export default Header;