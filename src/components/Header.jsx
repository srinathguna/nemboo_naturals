import React from 'react';
import Logo from './../assets/nemboo_logo.png';

const Header = ({count,handlePopup,cardlist}) => {
    return (
        <div className='header flex flex-wrap justify-between py-4 items-center'>
            <img className="logo" src={Logo} alt="nemboo_logo" />
            <div className='w-6/12'>
                <input className='h-10 w-[100%] border border-stone-400 px-2 outline-none rounded-md'  type="search" name="" id="" placeholder='search' />
            </div>
            <div className='' onClick={handlePopup}>
                <span>Cart{cardlist.length}</span>
            </div>
        </div>
    );
};

export default Header;