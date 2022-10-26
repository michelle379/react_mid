
export default function ReserveList() {
    
    return (
      <section className=" col-md-6 col-lg-10 pt-4 p-md-2 p-lg-3">
        <div>
            <div className="p-4">
                <h1>
                    預約系統<br/>
                </h1>
                <h4>
                ＊因應疫情，若該清潔地址於下列情況，FML家事服務保留暫停服務權益：該地址居住/生活者於14日內有出入境、有呼吸道症狀、確診/居家隔離等情事。<br/><br/>
                ＊每月15日開放隔月清潔服務預約<br/><br/><br/>
                </h4>
                <h3>———&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本資料&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———<br/><br/></h3>

                <h5>姓名：<form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="姓名" />
                        </div>
                    </form>
                     電話：<form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="電話" />
                        </div>
                    </form><br/><br/></h5>
                <h5>Email：<input type="email" class="form-control"  placeholder="信箱" /></h5>
                <h3><br/><br/>———&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;預約內容&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———<br/><br/></h3>
                <h5>清潔地點：
                <div class="col-sm-2.5">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>請選擇縣市</option>
                        <option value="1">台北市</option>
                        <option value="2">新北市</option>
                        <option value="3">桃園市</option>
                        <option value="4">新竹市</option>
                        <option value="5">新竹縣</option>
                        <option value="6">台中市</option>
                    </select>
                </div>
                <div class="col-sm-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>請選擇鄉政市區</option>
                    </select>
                </div>
                <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="地址" />
                        </div>
                    </form>
                <br/><br/><br/>
                </h5>
                <h5>服務名稱：
                    <div class="col-sm-4">
                        <select class="form-select" aria-label="Default select example">
                        <option selected>請選擇服務名稱</option>
                        <option value="1">室內清潔</option>
                        <option value="2">居家收納</option>
                        <option value="3">除蟲除塵蟎</option>
                        <option value="1">抓漏堵塞</option>
                        <option value="2">門窗裝修</option>
                </select>
                    </div>
                    坪數大小：
                    <div class="col-sm-4">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>請選擇坪數大小</option>
                            <option value="1">10以下</option>
                            <option value="2">11~20</option>
                            <option value="3">21~40</option>
                            <option value="4">41~60</option>
                            <option value="5">61~80</option>
                            <option value="6">81以上</option>
                            </select>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                </h5>
                <h5>
                <button type="submit" class="btn btn-warning btn-lg">  送 出  </button>
                </h5>
            </div>
        </div>
      </section>
    );
  }