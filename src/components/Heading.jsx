import iconsun from "../assets/desktop/icon-sun.svg";
import iconmoon from "../assets/desktop/icon-moon.svg";
import iconfilter from "../assets/mobile/icon-filter.svg";
import iconfilterwhite from "../assets/mobile/icon-filter-white.svg";
import iconsearchwhite from "../assets/desktop/icon-search-white.svg";
import logo from "../assets/desktop/logo.svg";

function Heading(props){
    
    return(
        <div className="heading-container" data-theme={props.toggleState}>
            <div className="heading-top">
                <a href="/" rel="noreferrer"><img src={logo} alt=""></img></a>
                <div className="heading-toggle-container">
                    <img src={iconsun} alt=""></img>
                    <button id="toggle-theme" onClick={props.changeTheme}>
                        <div className={props.toggleState==="light" ? "theme-setting-indicator" : "theme-setting-indicator theme-setting-indicator--night"}></div>
                    </button>
                    <img src={iconmoon} alt=""></img>
                </div>
            </div>
            <div className="heading-filter-container" data-theme={props.toggleState} style={props.pageView==="home" ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                <form className="search-form">
                    <input className="search-input" type="text" placeholder="Filter by title..." data-theme={props.toggleState}></input>
                </form>
                <div>
                    <button id="button-search-filter"><img src={props.toggleState==="light" ? iconfilter : iconfilterwhite} alt="" fill="white"></img></button>
                    <button id="button-search"><img src={iconsearchwhite} alt=""></img></button>
                </div>
            </div>
        </div>
    )
}

export default Heading;