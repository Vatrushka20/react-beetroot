import './NavList.scss';
import {NavItem} from "./NavItem/NavItem";
import {useEffect, useState} from "react";
import axios from "axios";

export const NavList = () => {
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        const getNavItem = async () => {
            const data = await axios('mock/navigation.json').then(res => (res.data));
            setNavData(data.sidebar);
        }
        getNavItem();
    }, [])

    return (
        <div className='nav-list'>
            {navData.map(item => (
                <NavItem
                key={item.id}
                {...item}
                />
            ))}
        </div>
    )
}