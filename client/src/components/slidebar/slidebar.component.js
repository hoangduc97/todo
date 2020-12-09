import React from 'react';
import {
    AiOutlineSchedule,
    CgGoogleTasks,
    BsListTask,
    GoSignIn,
    GoSignOut,
    FaUserPlus,
    MdToday,
} from 'react-icons/all';
import { connect } from 'react-redux';
import CustomLink from '../link/custom_link.component';
import './slidebar.scss';

const Slidebar = ({ isAuthUser }) => {
    const navbar = [];

    if (isAuthUser) {
        navbar.push(
            { icon: BsListTask, name: 'lists', link: '/lists' },
            // { icon: AiOutlineSchedule, name: 'schedule', link: '/schedule' },
            // { icon: MdToday, name: 'today', link: '/today' },
            { icon: GoSignOut, name: 'logout', link: '/logout' }
        );
    } else {
        navbar.push(
            { icon: GoSignIn, name: 'signin', link: '/signin' },
            { icon: FaUserPlus, name: 'signup', link: '/signup' }
        );
    }
    return (
        <div className="slidebar">
            <div className="slidebar--logo">
                <CustomLink to="/" children={<CgGoogleTasks />} />
            </div>
            <ul className="slidebar--navbar">
                {navbar.map((ele, index) => (
                    <li key={index} className="slidebar--navbar__item">
                        <CustomLink
                            to={ele.link}
                            children={
                                <span data_text={ele.name}>
                                    <ele.icon />
                                </span>
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ AuthReducer }) => {
    return {
        isAuthUser: AuthReducer.isAuthUser,
    };
};

export default connect(mapStateToProps)(Slidebar);
