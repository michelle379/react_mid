import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductGrid_list from '../components/ProductGrid_list';
import storage from "../json/storage.json";

const { Header, Content} = Layout;

function Storage() {
  return (
    <>
        <ProductGrid_list products={storage}/>
    </>
  );
}

export default Storage;