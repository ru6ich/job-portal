import { TextInput, Avatar, AvatarGroup } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Найдите <span>работу</span> <span>мечты</span>  вместе с нами</div>
                <div className="text-lg text-mine-shaft-200">Успех в жизни начинается с профессионального успеха. Тысячи вакансий на ваш выбор.</div>
                <div className="flex gap-3 mt-5">
                <TextInput className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100' variant="unstyled" label="Вакансия" placeholder="Разработчик ПО"/>
                <TextInput className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100' variant="unstyled" label="График" placeholder="Фуллтайм"/>
                <div className='flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'>
                    <IconSearch className="h-[85%] w-[85%]" />
                </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[20rem] relative">
                    <img src="/Boy.png" alt='Boy'/>
                    <div className='absolute -right-10 w-fit top-[0%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md'>
                        <div className='text-center mb-1 text-sm text-mine-shaft-100'>10k + получили работу</div>
                        <Avatar.Group>
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar src="avatar3.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                        <div className='absolute -left-5 w-fit top-[90%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg'>
                                    <img src='google.png' alt='google'/>
                                </div>
                                <div className='text-sm text-mine-shaft-100'>
                                    <div>Разработчик ПО</div>
                                    <div className='text-mine-shaft-200 text-xs'>Самара</div>
                                </div>
                            </div>
                            <div className='flex gap-2 justify-around text-mine-shaft-200 text-xs'>
                                <span>День назад</span>
                                <span>86 Откликов</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DreamJob;