import { Menu, Button, Text, rem, Avatar, Switch } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';

const ProfileMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector((state:any)=>state.user);
    const profile = useSelector((state:any)=>state.profile);
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleLogout = () => {
      dispatch(removeUser());
    }
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className='flex items-center cursor-pointer gap-3'>
                <div>{user.name}</div>
                <Avatar src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="it's me" />
            </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Link to="/profile">
            <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
            Профиль
            </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Сообщения
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />}>
          Резюме
        </Menu.Item>
        <Menu.Item leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />} 
        rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)} size="md" color="dark.4" 
            onLabel={<IconSun
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="yellow" />}
            offLabel={<IconMoonStars
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="cyan"
              />} />
        }>
          Темный режим
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item onClick={handleLogout}
          color="red"
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}
        >
          Выйти
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;