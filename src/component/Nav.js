/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Nav = ({ authenticate, toggleAuthenticate }) => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'H&M', 'HOME', 'Sport', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);

    const handleToggle = () => {
        console.log(isShow);
        setIsShow(!isShow);
    };
    const goLogin = () => {
        if (authenticate) {
            // 로그인 되어있으면 로그아웃
            toggleAuthenticate(false);
        } else {
            // 로그인 되어있지 않으면 로그인 페이지로 이동
            navigate('/login');
        }
    };

    const search = event => {
        if (event.key === 'Enter') {
            //console.log('enter!');
            // 입력한 검색어를 읽어오기
            let keyword = event.target.value;
            //console.log('keyword', keyword);
            navigate(`/?q=${keyword}`);
            handleToggle(false);
        }
    };
    return (
        <div className="navBar">
            <div className="login-btn" onClick={goLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>{authenticate === false ? '로그인' : '로그아웃'}</div>
            </div>

            <div className="logo">
                <div onClick={() => navigate('/')}>
                    <img
                        width={100}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
                    />
                </div>
            </div>
            <div className={`menuBar ${isShow ? 'closeBtn' : ''}`}>
                {isShow ? (
                    <FontAwesomeIcon icon={faClose} onClick={handleToggle} />
                ) : (
                    <FontAwesomeIcon icon={faBars} onClick={handleToggle} />
                )}
            </div>
            <div className={`menuWrap ${isShow ? '' : 'hide'}`}>
                <ul className="menu">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>

                <div className="search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyUp={event => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
