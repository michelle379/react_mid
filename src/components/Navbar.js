import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // <>   
    //   <div className={`sidenav-wrap ${open ? "" : "collapse-mobile-wrap"}`}></div>
    //   <div className={`sidenav ${open ? "" : "collapse-mobile"}`}>
       
    //   <div className="sidenav">
    //   <br/><br/><br/>
    //     {navData.map(item =>{
    //         return <NavLink key={item.id} className = "sideitem" to={item.link}>
    //         {item.icon}
    //         <span className = "linkText" >{item.text}</span>
    //     </NavLink>
    //     })}
    // </div>
    // </div>
    // </>

    <nav className="nav">
            <NavLink to="/" className="site-title">
                <img className="site-image" src="/images/Brightness.png " alt=""/>
                &nbsp;&nbsp;<b className="home_title">FML 家事服務</b>
            </NavLink>
            <ul>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/components" ><b className="word">服務項目</b></NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/indoor"><b>室內清潔</b></NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/storage"><b>居家收納</b></NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/dustmite"><b>除蟲除塵蟎</b></NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/blockage"><b>抓漏堵塞</b></NavLink>
                </li>
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/doorwindowfix"><b>門窗裝修</b></NavLink>
                </li>
                {/* <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/feedback">顧客回饋</NavLink>
                </li> */}
                <li className={["active", (navData) => navData.isActive ? "nav-item--active" : "" ]}>
                    <NavLink to="/reserve"><b>預約系統</b></NavLink>
                </li>
            </ul>
        </nav>
  )
}

