import products from "../json/products.json";
export default function ReserveList() {
    
    return (
      <section className="col-md-10 col-lg-10 pt-4 p-md-2 p-lg-3">
        <div>
            <div className="p-4">
                <h1>預約系統</h1><br/>

                <h4>
                ＊因應疫情，若該清潔地址於下列情況，FML家事服務保留暫停服務權益：該地址居住/生活者於14日內有出入境、有呼吸道症狀、確診/居家隔離等情事。<br/><br/>
                ＊每月15日開放隔月清潔服務預約<br/>
                </h4>

                <h3>—&nbsp;&nbsp;&nbsp;基本資料&nbsp;&nbsp;&nbsp;—<br/><br/></h3>

                
                <form>
                    <h5 className="form-title">姓名：</h5>
                    <div className="form-group input-style">
                        <input type="text" class="form-control"/>
                    </div>

                    <h5 className="form-title form-right">手機號碼：</h5>
                    <div className="form-group input-style">
                        <input type="text" class="form-control"/>
                    </div>
                
                
                <br/><br/><br/>

                <h5 className="form-title">電子信箱：</h5>
                <div className="form-group email-style">
                    <input type="email" class="form-control"/>
                </div>
                

                <br/><br/><br/><br/>
                <h3 className="formh3">—&nbsp;&nbsp;&nbsp;預約內容&nbsp;&nbsp;&nbsp;—</h3>
                <br/><br/>

                
                <h5 className="form-title">清潔地址：</h5>

                <div className="col-sm-4 loc-style">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>請選擇縣市</option>
                        <option value="1">臺北市</option>
                        <option value="2">新北市</option>
                        <option value="3">桃園市</option>
                        <option value="4">新竹市</option>
                        <option value="5">新竹縣</option>
                        <option value="6">台中市</option>
                    </select>
                </div>

                <div className="col-sm-4 loc-style">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>請選擇鄉政市區</option>
                    </select>
                </div>

                <br/><br/>
                
                <div class="form-group addr-style">
                    <input type="text" class="form-control" placeholder="地址" />
                </div>

                
                <br/><br/><br/>
                
                <h5 className="form-optiontitle">服務類別與項目：</h5>
                    <div className="col-sm-4 select-style">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>請選擇服務類別</option>
                            <option value="1">室內清潔</option>
                            <option value="2">居家收納</option>
                            <option value="3">除蟲除塵蟎</option>
                            <option value="1">抓漏堵塞</option>
                            <option value="2">門窗裝修</option>
                        </select>
                    </div>

                    <div className="col-sm-4 select-style">
                        <select className="form-select" aria-label="Default select example">
                        <option selected>請選擇服務項目</option>
                        {products.map(product =>(
                            <option value={product.id}>{product.company}-{product.name}</option>
                        ))}
                        </select>
                    </div>

                    <br/><br/><br/>

                    {/* 服務項目、服務時間、估計金額 */}
                    <h5 className="form-optiontitle">坪數或服務時間：</h5>
                    <div className="col-sm-4 select-style">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>請選擇坪數大小</option>
                            <option value="1">10以下</option>
                            <option value="2">11~20</option>
                            <option value="3">21~40</option>
                            <option value="4">41~60</option>
                            <option value="5">61~80</option>
                            <option value="6">81以上</option>
                        </select>
                    </div>

                    
                    {/* <h5 className="form-title">服務時間：</h5> */}
                    <div className="col-sm-4 select-style ">
                        <select className="form-select sizetime-style" aria-label="Default select example">
                            <option selected>請選擇服務時間</option>
                            <option value="1">1 小時</option>
                            <option value="2">2 小時</option>
                            <option value="3">3 小時</option>
                            <option value="4">4 小時</option>
                            <option value="5">5 小時</option>
                            <option value="6">6 小時以上</option>
                        </select>
                    </div>

                    <br/><br/><br/>
                    <h5 className="form-total">估計金額：NT$元</h5>
                    <br/><br/><br/>
                    <h5>
                    <button type="submit" className="btn btn-warning btn-lg">送出預約</button>
                    </h5>
                </form>
            </div>
        </div>
      </section>
    );
  }


