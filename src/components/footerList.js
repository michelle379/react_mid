import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from 'react-router-dom';

export default function FooterList() {
    
    return (
        <section className=" col-md-6 col-lg-10 pt-4 p-md-2 p-lg-3">
        <div>
            <div className="p-2">
            <h4>FML家事服務<br/></h4>
            <h1>客服專線<h2>02-6639-6688</h2><h5>更多FML<Link to="/"><img src="/images/Line.png" className="mx-2" width='30'></img></Link><Link to="/"><img src="/images/Facebook.png" className="mx-2" width='30'></img></Link><Link to="/"><img src="/images/Instagram.png" className="mx-2" width='30'></img></Link></h5></h1>
            <h1>公司信箱<h2>service@familyclean.com.tw</h2></h1>
            <h1>公司地址<h2>台北市大安區和平東路二段134號</h2></h1>
            <h1>客服時間<h2>週一~週五(不含例假日)08:30~12:00, 14:00~17:30</h2></h1>
            </div>
        </div>

        <div className="p-2">
        <h1>@ 2022. Familyclean. All Rights Reserved.</h1>
        </div>
      </section>

      
    );
  }

// export default function FooterList() {
    
//     return (
//         <div className="container">
//         <nav className="row">
//             <div >
//                 <ul>
//                     客服專線 
//                 </ul>
//                 <ul>
//                     公司信箱 
//                 </ul>
//                 <ul>
//                     公司地址 
//                 </ul>
//                 <ul>
//                     客服時間 
//                 </ul>
//             </div>                      
            
//         </nav>
//     </div>

//     <div className="container">
//     <p className="col-5m">
//         更多FML 
//         <div className="col">
//             <Link to="/" className="col-12 col-md3 d-flex align-items-center justify-content-center">
//                 <img src="https://cdn-icons-png.flaticon.com/128/1946/1946546.png" className="mx-2" width='70'></img>
//             </Link>
//             <Link to="/" className="col-12 col-md3 d-flex align-items-center justify-content-center">
//                 <img src="https://cdn-icons-png.flaticon.com/128/1946/1946546.png" className="mx-2" width='70'></img>
//             </Link>
//             <Link to="/" className="col-12 col-md3 d-flex align-items-center justify-content-center">
//                 <img src="https://cdn-icons-png.flaticon.com/128/1946/1946546.png" className="mx-2" width='70'></img>
//             </Link>
//         </div>
//     </p>  
//     </div>
//     );
//   }
