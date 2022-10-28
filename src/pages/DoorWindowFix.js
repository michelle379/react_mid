import { Layout } from 'antd';
import ProductGrid_list from '../components/ProductGrid_list';
import doorwindowfix from "../json/doorwindowfix.json";

const { Header, Content, Footer } = Layout;

function DoorWindowFix() {
  return (
    <>
        <ProductGrid_list products={doorwindowfix}/>
    </>
  );
}

export default DoorWindowFix;