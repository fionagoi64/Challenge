/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useState } from 'react';
import logo from '../images/logo.svg';
import menuOpen from "../images/icon-menu.svg"
import closeMenu from "../images/icon-close-menu.svg"
import openDropMenu from "../images/icon-arrow-down.svg"
import closeDropMenu from "../images/icon-arrow-up.svg"
import todolist from "../images/icon-todo.svg"
import calendar from "../images/icon-calendar.svg"
import reminders from "../images/icon-reminders.svg"
import planning from "../images/icon-planning.svg"

const Navbar = () => {

    const [openSideMenu, SetSideMenuOpen] = useState(false);
    
    const handleOpenMenu = () => {
        SetSideMenuOpen(!openSideMenu);
      };
    
    const links =[
        {
            label:"Features",
            icon:openDropMenu,
            dropdown: true,
            list_items:[
                {
                 icon: todolist,
                 label: "Todo List"
                },
                {
                 icon: calendar,
                 label: "Calendar"
                },
                {
                 icon: reminders,
                 label: "Reminders"
                },
                {
                 icon: planning,
                 label: "Planning"
                },
            ]
        },
        {
            label:"Company",
            icon:openDropMenu,
            dropdown: true,
            list_items:[
                {
                 label: "History"
                },
                {
                 label: "Our Team"
                },
                {
                 label: "Blog"
                }
            ]
        },
        {
            label:"Careers",
        },
        {
            label:"About",
        }
    ]

  return (
    <nav className='flex items-center justify-between mx-4 my-5'>
        {/* web: nav menu */}
            <div className='flex items-center gap-12'>
                <img src={logo} alt='' className='cursor-pointer'/>
                <ul className='md:flex hidden gap-12'>
                  {links.map((links) => (
                    <li className='cursor-pointer hover:text-almost-black group'>
                        <div>
                    <a> {links.label} </a>
                    <img src={links.icon} alt="" />
                  </div>
                  
                  {links.dropdown && (
                  <div className='absolute bg-white rounded-lg shadow-md p-3 mt-5 hidden group-hover:md:block hover:md:block'>
                    <ul>
                       { links.list_items.map((items)=>(
                        <li className='flex gap-4 items-center space-y-3 '>
                           <img src={items.icon} alt="" />
                           <a href="#">{items.label}</a>
                        </li>
                       ))}
                    </ul>
                    </div>
               )}    
                    </li>
                  ))
                  }
                </ul>
            </div>
            
            <div className='md:flex hidden gap-6'>
                <button className=''>Login</button>
                <button className='border-2 px-3 py-1 rounded-lg'>Register</button>
            </div>

            <button onClick={handleOpenMenu} className='md:hidden absolute right-5 top-4 z-10'>
                {openSideMenu ? (
                    <img src={closeMenu} alt=""/>
                    ) : (
                    <img src={menuOpen} alt=""/>
                    )}
            </button>

        {/* mobile: side menu */}
        <div className={`md:hidden absolute bg-white h-full w-1/2 bottom-0 right-0 py-16 pl-5 pr-3 duration-500 ${openSideMenu ? "right-0":"right-[-50%]"}`}>
        <img src="" alt="" />
        <ul className='space-y-4'>
            {links.map((links) => (
                <li>{links.label}
               
               {links.dropdown && (
                <div>
                    <ul>
                    { links.list_items.map((items)=>(
                        <li className='flex gap-4 items-center space-y-3 ml-3'>
                           <img src={items.icon} alt="" />
                           <a href="#">{items.label}</a>
                        </li>
                       ))}
                    </ul>
                </div>
               )}
                </li>
            ))
            }
        </ul>

        </div>
    </nav>
  )
}

export default Navbar;