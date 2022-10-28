import { Layout } from 'antd';
import ProductGrid_list from '../components/ProductGrid_list';
import bugs from "../json/bugs.json";

const { Header, Content, Footer } = Layout;

function Bugs() {
  return (
    <>
        <ProductGrid_list products={bugs}/>
    </>
  );
}

export default Bugs;