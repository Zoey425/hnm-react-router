import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async (keyword, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products?q=${keyword}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue();
    }
});

export const fetchProductDetail = createAsyncThunk('product/fetchDetail', async (id, { dispatch, rejectWithValue }) => {
    try {
        let url = `https://my-json-server.typicode.com/Zoey425/hnm-react-router/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
// function productReducer(state = initialState, action) {
//     let { type, payload } = action;
//     switch (type) {
//         case 'GET_PRODUCT_SUCCESS':
//             return { ...state, productList: payload.data };
//         case 'GET_SINGLE_PRODUCT_SUCCESS':
//             return { ...state, selectedItem: payload.data };
//         default:
//             return { ...state };
//     }
// }

// export default productReducer;

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getSingleProduct(state, action) {
            state.selectedItem = action.payload.data;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductDetail.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedItem = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
