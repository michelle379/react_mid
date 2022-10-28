import { Layout } from 'antd';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import ProductGrid_detail from "../components/ProductGrid_detail";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const { productId } = useParams();

   const product = products.find(
      (x) => x.id === productId
   );

   const [open, setopen] = useState(false);

   return (
      <>
            <ProductGrid_detail product = {product} />
      </>
   );
}

export default Product;