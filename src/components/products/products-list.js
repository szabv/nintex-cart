import { useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSelector } from './product-selector';
import { getProducts } from '../../redux/thunks/get-products';
import { GetRequestStatusForView } from '../../redux/request-status';
import { cartActions } from '../../redux/reducers/cart-reducer';

export const ProductList = () => {
   const dispatch = useDispatch();

   const { products, status, error } = useSelector((state) => state.products);

   useEffect(() => {
      dispatch(getProducts);
   }, []);

   const addToCart = (productId, quantity) => {
      const product = products.find((product) => product.productId === productId);

      dispatch({
         type: cartActions.ADD_TO_CART,
         ...product,
         quantity,
      });
   };

   const { loading, haveResult, isError } = GetRequestStatusForView(status);

   return (
      <>
         {loading && 'Loading ...'}
         {haveResult && <ProductSelector products={products} addToCart={addToCart} />}
         {isError && `Some thing went wrong: ${error}`}
      </>
   );
};

ProductList.displayName = 'ProductList';
