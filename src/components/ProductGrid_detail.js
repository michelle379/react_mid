import { useState } from "react";
import { Select,Segmented } from 'antd';
const { Option } = Select


function ProductGrid_detail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

    const current = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const date = `${current.getMonth()+1}/${current.getDate()}`;
    const week = weekday[current.getDay()];

    return (
        <div className="col-lg-12">
        <div className="detail_twoColumn">

        <div className="detail_leftColumn">
                <section className="store_info">

                            <div className="store_info_avatar">
                                <img src={product.store_avatar}  alt={product.store_avatar} />                                        
                            </div>

                        <div className="store_info_name">
                            <div className="store_info_workName" title={product.company}>
                                <p className="store_info_NameText">{product.company}</p>
                            </div>

                        </div>

                    {/* <div class="store_info_workroomInfoService__2DdGL">
                        <p class="store_info_storeInfoRow__20x6k"><span class="store_info_storeInfoCategory__AGDcz">服務分類</span><span class="store_info_skillsForLife__1Bdq0"><a class="store_info_storeInfoRowText__1yTb_" href="https://www.tasker.com.tw/life/list?bca=Nap" title="#居家修繕">#居家修繕</a></span></p>
                    </div> */}
                    <div className="store_info_MoreInfo">
                        <div className="store_info_Portfolio">
                            <p>簡歷</p><label>{product.MoreInfo}</label>
                        </div>
                    </div>
                </section>
            </div>


        <div className="detail_rightColumn">
            <section className="detail_Layer">
                
                    <li className="service_Info">
                        <div className="service_InfoLeft">
                            <div className="service_info_image">
                                <img src={product.image}  alt={product.name} />
                            </div>
                        </div>
                        <div className="service_InfoRight">
                            
                                <p className="service_InfoCategory">#{product.category}</p>

                                <h4 className="service_name"><b>{product.name}</b></h4>
                                <div className="service_name">
                                    服務報價
                                    <font className="service_info_servicePrice">NT${product.price}</font> 
                                    <font className=""><b>/{product.hour}</b></font>
                                </div>
                                <div className="service_name">
                                    服務時間<font className="service_info_timeAndLoc"><b>{product.time}</b></font>
                                </div>
                                <div className="service_name">
                                    服務地點<font className="service_info_timeAndLoc"><b>{product.location}</b></font>
                                </div>


                                {/* <Segmented
                                options={[
                                    '10/31 Mon.',
                                    { label: '11/01 Tue.', value: '11/01 Tue.', disabled: true },
                                    '11/02 Wed.',
                                    { label: '11/03 Thu.', value: '11/03 Thu.', disabled: true },
                                    '11/04 Fri.',
                                    '11/05 Sat.',
                                    '11/06 Sun.',
                                ]}
                                /> */}
<br />





                                <div className="service_InfoReservation">
                                    <span className=""></span>
                                    <a className="service_Reservation">預約服務</a>
                                </div>

                        </div>



                    </li>
<br />
<div className="service_Reservation_Time">
<p className="service_TimeText">一週內可預約時間</p>
<Segmented 
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              {/* <div>{date}</div>
              <div>{week}</div> */}
              <div>10/31</div>
              <div>Mon.</div>
            </div>
          ),
          value: '10/31',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>11/01</div>
              <div>Tue.</div>
            </div>
          ),
          value: '11/01',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>11/02</div>
              <div>Wed.</div>
            </div>
          ),
          value: '11/02',
          disabled: true,
        },
        {
            label: (
              <div style={{ padding: 4 }}>
                {/* <div>{date}</div>
                <div>{week}</div> */}
                <div>11/03</div>
                <div>Thu.</div>
              </div>
            ),
            value: '11/03',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>11/04</div>
                <div>Fri.</div>
              </div>
            ),
            value: '11/04',
            disabled: true,
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>11/05</div>
                <div>Sat.</div>
              </div>
            ),
            value: '11/05',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <div>11/06</div>
                <div>Sun.</div>
              </div>
            ),
            value: '11/06',
          },

      ]}
/>   
<br /> 
</div>

            </section>
        </div>


    </div>
    </div>
    );
}

export default ProductGrid_detail;


