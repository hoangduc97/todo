import React from 'react';
import {AiOutlineSchedule, CgGoogleTasks, BsListTask, GoSignIn, MdToday} from 'react-icons/all';
import CustomLink from '../link/custom_link.component';
import './slidebar.scss';

const Slidebar = (props) => {
    const navbar = [
        {icon: BsListTask, name: 'lists', link: '/lists'},
        {icon: AiOutlineSchedule, name: 'schedule', link: '/schedule'},
        {icon: MdToday, name: 'today', link: '/today'},
        {icon: GoSignIn, name: 'signin', link: '/signin'},

    ]

    return (
        <div className="slidebar">
            <div className="slidebar--logo">
                <CustomLink to='/' children={<CgGoogleTasks />}/>
            </div>
            <ul className="slidebar--navbar">
                {navbar.map((ele, index) => (
                    <li key={index} className='slidebar--navbar__item'>
                        <CustomLink to={ele.link} children={
                            <span data_text={ele.name}>
                                <ele.icon />
                            </span>
                        }/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Slidebar;