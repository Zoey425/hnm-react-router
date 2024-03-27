import React from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'H&M', 'HOME', 'Sport', 'Sale', '지속가능성'];
    return (
        <div className="nav">
            <div>
                <div className="login-btn">
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className="logo">
                <img
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
                />
            </div>
            <div className="menuWrap">
                <ul className="menu">
                    {menuList.map(menu => (
                        <li>{menu}</li>
                    ))}
                </ul>

                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
