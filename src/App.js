import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Nav from './component/Nav';
import { useEffect, useState } from 'react';

/**
 * 필요한 페이지
 * -> 전체 상품 페이지 / 로그인 / 상품 상세페이지
 *
 * 전체 상품페이지에서는 전체 상품이 나옴
 * 로그인 버튼을 누르면 로그인 페이지로 이동
 * 상품디테일 누르면 로그인이 안되어있으면 로그인페이지로, 되어있으면 상품 디테일 페이지로
 * 로그아웃 버튼 클릭시 로그아웃
 * 로그아웃되면 상품디테일 못보고 로그인 페이지로 reDirect
 * 로그인 하면 로그아웃 보이고 로그아웃 하면 로그인으로 텍스트 변경
 * 상품을 검색 -> 검색시 상품 전체 페이지에서 filter 됨
 */
function App() {
    const [authenticate, setAuthenticate] = useState(false); // true 이면 로그인
    useEffect(() => {
        console.log(authenticate);
    }, [authenticate]);
    const PrivateRoute = () => {
        return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
    };
    return (
        <div className="App">
            <Nav authenticate={authenticate} />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
            </Routes>
        </div>
    );
}

export default App;
