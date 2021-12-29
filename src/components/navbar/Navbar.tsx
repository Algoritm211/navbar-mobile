import React, {useRef, useState} from 'react';
import NavbarItem from "./navbar-item/NavbarItem";
import './Navbar.css';

const Navbar = () => {
  const [activeTabInfo, setActiveTabInfo] = useState({
    name: 'Home',
    order: 0
  })

  const navBarListRef = useRef(null);

  const tabs = ['Home', 'Profile', 'Users', 'Orders', 'Friends']

  const navBlock = tabs.map((tab, index) => {
    return (
      <NavbarItem
        textLink={tab}
        setActive={() => setActiveTabInfo({name: tab, order: index})}
        isActive={tab === activeTabInfo.name} />
    )
  })
  return (
    <div className='navigator'>
      <ul className='list-navbar-items' ref={navBarListRef}>
        {navBlock}
        <div className='active-indicator' style={{transform: `translateX(${70 * activeTabInfo.order}px)`}} />
      </ul>
    </div>
  );
};

export default Navbar;
