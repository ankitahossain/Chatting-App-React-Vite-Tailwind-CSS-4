import React from 'react'
import logo from '../assets/Images/logo.svg'
import Button from './Button'

const Navbar = () => {
    const menuitem = [
        { id: 1, name: "Home" },
        { id: 2, name: "About Us" },
        { id: 3, name: "All Service" },
        { id: 4, name: "All Page" },
    ];

    return (
        <nav className='py-4 bg-white'>
            <div className='flex justify-between items-center px-7 py-2 pl-20 pr-20'>
                <picture>
                    <img src={logo} alt="logo" className='h-12 w-auto' />
                </picture>

                <ul className='flex items-center gap-x-[32px]'>
                    {menuitem.map((item) => (
                        <li key={item.id}>
                            <a href="#" className='menu font-inter font-semibold text-[20px] capitalize'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Button 
                  btnContent="Log in"
                  btnDesign="bg-black font-bold font-nunito text-white text-[20px] px-7 py-2 rounded-lg btn"
                />
            </div>
        </nav>
    );
};

export default Navbar;
