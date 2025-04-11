import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
    const links = [
        {name:"Найти работу", url:"find-jobs"},
        {name:"Найти соискателей", url:"find-talent"},
        {name:"Выложить вакансию", url:"post-job"},
        {name:"Вакансии", url:"posted-job"},
        {name:"Мои вакансии", url:"job-history"},
        {name:"Регистрация", url:"signup"},
    ]
    const location = useLocation();
    return <div className='flex gap-5 text-mine-shaft-300 h-full items-center'>
            { 
                links.map((link, index) =><div className=
                {`${location.pathname=="/"+link.url?"border-bright-sun-400 text-bright-sun-400":"border-transparent"} border-t-[3px] h-full flex items-center`}>
                    <Link key={index} to={link.url}>{link.name}</Link>
                </div>)     
            }
    </div>
}
export default NavLinks; 