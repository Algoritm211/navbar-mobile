import React from 'react';
import './NavbarItem.css';
import classnames from 'classnames';

interface INavbarItem {
  textLink: string
  isActive?: boolean
  setActive: (tabName: string) => void
}

const NavbarItem: React.FC<INavbarItem> = ({ isActive, textLink, setActive}) => {

  const onActiveClick = () => {
    setActive(textLink);
  }
  return (
    <li
      onClick={onActiveClick}
      className={classnames('nav-item', isActive && 'active')}
    >
      <a className='item-link'>
        <span className='icon'>
          I
        </span>
        <span className='text-link'>
          {textLink}
        </span>
      </a>
    </li>
  );
};

export default NavbarItem;
