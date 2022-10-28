import ProductGrid_list from '../components/ProductGrid_list';

import { useSelector } from "react-redux";
import {selectProducts} from "../redux/productsSlice";


function Components() {
  const products = useSelector(selectProducts);
  return (
    <>
        <ProductGrid_list products={products}/>
    </>
  );
}

export default Components;
