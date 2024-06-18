import React, { useState } from 'react';
import logo from '../images/logo.svg';
import menuOpen from "../images/icon-menu.svg"
import closeMenu from "../images/icon-close-menu.svg"
import openDropMenu from "../images/icon-arrow-down.svg"
import closeDropMenu from "../images/icon-arrow-up.svg";
import todolist from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const Navbar = () => {
    const [openSideMenu, setSideMenuOpen] = useState(false);
    const [openFeaturesDropdown, setOpenFeaturesDropdown] = useState(false);
    const [openCompanyDropdown, setOpenCompanyDropdown] = useState(false);

    const handleOpenSideMenu = () => {
        setSideMenuOpen(!openSideMenu);
      };

    const handleDropdownMenu = (label) => {
        if (label === "Features") {
            setOpenFeaturesDropdown(!openFeaturesDropdown);
        } else if (label === "Company") {
            setOpenCompanyDropdown(!openCompanyDropdown);
        }
    };

    const links = [
        {
            label: "Features",
            icon: openFeaturesDropdown ? closeDropMenu : openDropMenu,
            dropdown: true,
            list_items: [
                { icon: todolist, label: "Todo List" },
                { icon: calendar, label: "Calendar" },
                { icon: reminders, label: "Reminders" },
                { icon: planning, label: "Planning" },
            ]
        },
        {
            label: "Company",
            icon: openCompanyDropdown ? closeDropMenu : openDropMenu,
            dropdown: true,
            list_items: [
                { label: "History" },
                { label: "Our Team" },
                { label: "Blog" }
            ]
        },
        { label: "Careers" },
        { label: "About" }
    ];

    return (
        <nav> 
            {/* web: nav menu */}
                    <div className='px-6 flex items-center justify-between my-5'>
                <div className='flex items-center gap-12'>
                    <img src={logo} alt='' className='cursor-pointer'/>
                    <ul className='md:flex hidden gap-12'>
                        {links.map((link) => (
                            <li key={link.label}>
                                <button className='flex items-center gap-3' onClick={() => handleDropdownMenu(link.label)}>
                                    <h1 className='cursor-pointer hover:text-almost-black'>{link.label}</h1>
                                    <img src={link.icon} alt="" />
                                </button>
                                {link.dropdown && (
                                    <div className={`absolute bg-white rounded-lg shadow-md p-3 mt-5 ${link.label === "Features" ? (openFeaturesDropdown ? 'md:flex' : 'hidden') : (openCompanyDropdown ? 'md:flex' : 'hidden')}`}>
                                        <ul>
                                            {link.list_items.map((item) => (
                                                <li className='flex gap-4 items-center space-y-3' key={item.label}>
                                                    <img src={item.icon} alt="" />
                                                    <h1>{item.label}</h1>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:flex hidden gap-6'>
                    <button className=''>Login</button>
                    <button className='border-2 px-3 py-1 rounded-lg'>Register</button>
                </div>

                <button onClick={handleOpenSideMenu} className='md:hidden absolute right-5 top-4 z-30'>
                {openSideMenu ? (
                    <img src={closeMenu} alt=""/>
                    ) : (
                    <img src={menuOpen} alt=""/>
                    )}
            </button>
            </div>

            {/* mobile: overlay */}
            <div className={`absolute bg-almost-black w-full h-full z-20 opacity-80 bottom-0 ${openSideMenu ? "md:hidden":"hidden"}`}></div>

            {/* mobile: side menu */}
            <div className={`md:hidden absolute bg-white h-full w-[60%] bottom-0 right-0 py-16 pl-6 pr-3 z-20 duration-500 ${openSideMenu ? "right-0":"right-[-60%]"}`}>

            <ul className='space-y-4'>
                        {links.map((link) => (
                            <li key={link.label}>
                                <button className='flex items-center gap-3' onClick={() => handleDropdownMenu(link.label)}>
                                    <h1 className='cursor-pointer hover:text-almost-black'>{link.label}</h1>
                                    <img src={link.icon} alt="" />
                                </button>
                                {link.dropdown && (
                                    <div className={` ${link.label === "Features" ? (openFeaturesDropdown ? 'md:flex' : 'hidden') : (openCompanyDropdown ? 'md:flex' : 'hidden')}`}>
                                        <ul>
                                            {link.list_items.map((item) => (
                                                <li className='flex gap-4 items-center space-y-3 ml-3' key={item.label}>
                                                    <img src={item.icon} alt="" />
                                                    <h1>{item.label}</h1>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

            <div className='grid grid-rows-2 mr-2 gap-3 mt-6'>
                <button className=''>Login</button>
                <button className='outlined-btn'>Register</button>
            </div>

        </div>
        </nav>
    );
};

export default Navbar;