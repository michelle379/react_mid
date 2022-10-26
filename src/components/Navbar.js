import { Link, NavLink } from 'react-router-dom';
export default function NavBar(){
    return(
        <nav className="nav">
            <NavLink to="/" className="site-title">
                <img src="/images/BrightnessAltHighFill (3).png "></img>
                &nbsp;&nbsp;&nbsp;&nbsp;FML 家事服務
            </NavLink>
            <ul>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/components" className="word" >服務項目</NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/indoor">室內清潔</NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/storage">居家收納</NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/bugs">除蟲除塵蟎</NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/blockage">抓漏堵塞</NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/DoorWindowFix">門窗裝修</NavLink>
                </li>
                {/* <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/feedback">顧客回饋</NavLink>
                </li> */}
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/reserve">預約清潔</NavLink>
                </li>
            </ul>
        </nav>
    )
}
