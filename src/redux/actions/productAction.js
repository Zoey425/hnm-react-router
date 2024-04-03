// import { productActions } from '../reducers/ProductSlice';

// // function getProducts(keyword) {
// //     return async (dispatch, getState) => {
// //         let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products?q=${keyword}`;
// //         let response = await fetch(url);
// //         let data = await response.json();
// //         // dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
// //         dispatch(productActions.getAllProducts({ data }));
// //     };
// // }
// function getProductDetail(id) {
//     return async dispatch => {
//         let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products/${id}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         // dispatch({ type: 'GET_SINGLE_PRODUCT_SUCCESS', payload: { data } });
//         dispatch(productActions.getSingleProductSuccess({ data }));
//     };
// }
// export const productAction = { getProductDetail };
