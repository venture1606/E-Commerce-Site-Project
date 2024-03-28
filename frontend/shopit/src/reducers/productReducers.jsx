// import { Object } from '../constants/productConstants'

// export const productReducers = (state = { Product: [] }, action => {
//     const {ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS} = Object;

//     switch(action.type){
//         case ALL_PRODUCTS_REQUEST:
//             return {
//                 loading: true,
//                 products: []
//             }

//         case ALL_PRODUCTS_SUCCESS:
//             return{
//                 laoding: false,
//                 products: action.payload.products,
//                 productsCount: action.payload.productCount
//             }
        
//         case ALL_PRODUCTS_FAIL:
//             return{
//                 loading: false,
//                 error: action.payload
//             }
        
//         case CLEAR_ERRORS:
//             return{
//                 ...state,
//                 error: null
//             }    

//         default:
//             return state;
//     }

// })
