import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer-title"><br/>FML家事服務<br/></h1>
            <div className="container" >
                <nav className="row">
                    <ul className="col-12 col-md-3 list-unstyled footer-item">
                        <li className="text-center">客服專線 <li className="text-center">公司信箱</li><li className="text-center">公司地址</li><li className="text-center">客服時間</li></li>
                    </ul>
                    <ul className="col-12 col-md-6 list-unstyled text-white footer-text">
                        <li className="text-left ">02-6639-6688<li className="text-left">service@familyclean.com.tw</li><li className="text-left">台北市大安區和平東路二段134號</li><li className="text-left">週一~週五(不含例假日)08:30~12:00, 14:00~17:30</li></li>
                    </ul>
                    <ul className="col-12 col-md-1 list-unstyled">
                        <li className="text-left">更多FML</li>
                    </ul>
                    <ul className="col-12 col-md-2 list-unstyled">
                        <li className="text-left"><Link to="/"><img src="/images/Line.png" className="mx-2" width='30'></img></Link><Link to="/"><img src="/images/Facebook.png" className="mx-2" width='30'></img></Link><Link to="/"><img src="/images/Instagram.png" className="mx-2" width='30'></img></Link></li>
                    </ul>
                    

                    <div className="container">
                        <p className="text-center mb-0 mt-2"></p>
                    </div>
                </nav>
            </div>
            <p className="text-center mb-0 mt-2 text-white">Ⓒ 2022. Familyclean. All Rights Reserved.</p>
        </footer>
    );
}