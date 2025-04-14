import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../Services/ProfileService";
import Info from "./Info";
import { changeProfile, setProfile } from "../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import reducer from "../Slices/UserSlice";
import { successNotification } from "../Services/NotificationService";


const Profile = (props:any) => {
    const profile = useSelector((state:any)=>state.profile);
    const dispatch = useDispatch();
    const user = useSelector((state:any)=> state.user);
    useEffect(()=>{
        getProfile(user.id).then((data:any)=>{
            dispatch(setProfile(data));
    }).catch((error:any)=>{
        console.log(error);})
    }, [])
    const { hovered, ref } = useHover();
    const handleFileChange=async(image:any)=>{
        let picture:any = await getBase64(image);
        let updatedProfile = {...profile, picture:picture.split(',')[1]};
        dispatch(changeProfile(updatedProfile));
        successNotification("Успешно", "Ааватар успешно обновлен");
    }
    const getBase64=(file:any)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>resolve(reader.result);
            reader.onerror=error=>reject(error);
        })
    }
    return <div className="w-4/5 mx-auto">
        <div className="">
        <div className="relative">
            <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
            <div ref={ref} className="absolute flex items-center justify-center -bottom-1/3 left-3">
                <Avatar className=" !w-48 !h-48 rounded-full absolute border-mine-shaft-950 border-8"
                src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"} alt="" />
                {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
                {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16"/>}
                {hovered && <FileInput onChange={handleFileChange} className="absolute z-[301] [&_*]:!rounded-full [&_*]:!h-full !h-full w-full"
                variant="transparent" accept="image/png, image/jpg"/>}
            </div>
        </div>
            <div className="px-3 mt-16">
                <Info/>
                <Divider mx="xs" my="xl"/>
                <About/>
                <Divider mx="xs" my="xl"/>
                <Skills/>
                <Divider mx="xs" my="xl"/>
                <Experience/>
                <Divider mx="xs" my="xl"/>
                <Certificate/>
            </div>
    </div>
    </div>
}
export default Profile;