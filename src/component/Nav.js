import React from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'H&M', 'HOME', 'Sport', 'Sale', '지속가능성'];
    const navigator = useNavigate();
    const goLogin = () => {
        navigator('/login');
    };
    return (
        <div className="navBar">
            <div className="login-btn" onClick={goLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>

            <div className="logo">
                <img
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
                    onClick={() => navigator('/')}
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
