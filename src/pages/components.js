import ProductGrid_list from '../components/ProductGrid_list';

import { useSelector } from "react-redux";
import {selectProducts} from "../redux/productsSlice";
import { useParams } from 'react-router-dom';


function Components() {
  let products = useSelector(selectProducts);
  const { categoryName } = useParams();
  const url=categoryName || "/";

  if(url !="/") {
    products = products.filter(x => x?.category.toUpperCase() === url.toUpperCase());
  }


  return (
    <>
        <ProductGrid_list products={products}/>
    </>
  );
}

export default Components;
