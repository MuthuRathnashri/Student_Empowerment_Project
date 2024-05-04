import { Link ,useNavigate} from "react-router-dom";
import './Header1.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faGraduationCap, faHouse, faList, faMagnifyingGlass, faRightFromBracket, faRightToBracket, faSquarePlus, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import Head1 from "./Head1";

 
function Header (props){
  const [showOver, setshowOver] = useState(false)
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  const handleLoginClick = () => {
    navigate("/login");
  }
  const handleSignClick = () => {
    navigate("/signup");
  }
  const handleFilterClick = () => {
    if (props.onFilterClick) {
        props.onFilterClick(); 
    }
  }
    return (
      <div>
       <Head1 />
      <div className='header-container-web1'>
        <Link className='links' to="/home1"><FontAwesomeIcon icon={faHouse} style={{fontSize: "35px" }} /></Link>
        <Link className='links' to="/web2"><FontAwesomeIcon icon={faGraduationCap} style={{fontSize: "35px" }}/></Link>
        <div className="header-web1">
           <input className='search-web1' 
                type='text'
                value={props && props.search}
                onChange={(e) => props.handlesearch && props.handlesearch(e.target.value) 
                }
            />
            <button className='search-btn-web1' onClick={()=>props.handleClick && props.handleClick()}><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: "20px"}} /></button>
        </div>
        <div className="filter-icon" onClick={handleFilterClick}>
            <FontAwesomeIcon icon={faFilter} style={{ fontSize: "35px" }} />
        </div>
       
        <div onClick={() => {
                        setshowOver(!showOver)
                    }}
            style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#002f34',
                        width: '40px',
                        height: '40px',
                        color: '#fff',
                        fontSize: '14px',
                        borderRadius: '50%'}}><FontAwesomeIcon icon={faUser} style={{fontSize: "20px"}}/></div>

        
        {showOver && <div style={{
                    minHeight: '100px',
                    width: '200px',
                    background: '#eee',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    zIndex: 1,
                    marginTop: '240px',
                    marginRight: '70px',
                    color: 'red',
                    fontSize: '14px',
                    background: '#002f34',
                    borderRadius: '7px'
                }}>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/add-product">
                                <button className="logout-btn" style={{padding: "15px"}}><FontAwesomeIcon icon={faSquarePlus}  />      ADD PRODUCT  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/liked-products">
                                <button className="logout-btn" style={{padding: "15px"}}><FontAwesomeIcon icon={faStar}  />   FAVOURITES  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/my-products">
                                <button className="logout-btn"style={{padding: "15px"}}><FontAwesomeIcon icon={faList} />   MY Products  </button>
                            </Link>}
                    </div>
                    <div>
                        {!localStorage.getItem('token') ?
                            <div>
                                <button className='logout-btn'onClick={handleSignClick} style={{padding: "15px",marginBottom:"10px",marginLeft: "20px"}} ><FontAwesomeIcon icon={faRightToBracket} />   SIGNUP</button>
                                <button className='logout-btn'onClick={handleLoginClick}style={{padding: "15px",marginBottom:"10px",marginLeft: "20px"}} ><FontAwesomeIcon icon={faRightToBracket} />   LOGIN</button>
                            </div> :
                            <button className='logout-btn' onClick={handleLogout}style={{padding: "15px",marginBottom:"10px"}}><FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT </button>}
                            <br></br>
                    </div>



                </div>}
        
        </div>
        </div> 
    )
}
export default Header;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Head from "./common/header/Head";
// import "./Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse, faList, faMagnifyingGlass, faRightFromBracket, faRightToBracket, faSquarePlus, faStar, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

// const Header = (props) => {
//   const [click, setClick] = useState(false);
//   const [showOver, setShowOver] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handleSignClick = () => {
//     navigate("/signup");
//   };

//   return (
//     <>
//       <header>
//         {/* <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            
//           </ul>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
//           </button>
//         </nav> */}
//         <div className="new">
//             <div>
//                 <Link className='links' to="/">
//                     <FontAwesomeIcon icon={faHouse} style={{ fontSize: "35px" }} />
//                 </Link>
//             </div>
//             <div className="new_search">
//                 <input className='search'
//                 type='text'
//                 value={props && props.search}
//                 onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)
//                 }
//                 />
//                 <button className='search-btn' onClick={() => props.handleClick && props.handleClick()}>
//                 <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "20px" }} />
//                 </button>
//             </div>
//             <div>
//                 <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} />
//             </div>
//         </div>
// <div>

//           {showOver && <div style={{
//             minHeight: '100px',
//             width: '200px',
//             background: '#eee',
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             zIndex: 1,
//             marginTop: '50px',
//             marginRight: '50px',
//             color: 'red',
//             fontSize: '14px',
//             background: '#002f34',
//             borderRadius: '7px'
//           }}>
//             <div>
//               {!!localStorage.getItem('token') &&
//                 <Link to="/add-product">
//                   <button className="logout-btn" style={{ padding: "15px" }}><FontAwesomeIcon icon={faSquarePlus} />      ADD PRODUCT  </button>
//                 </Link>}
//             </div>
//             <div>
//               {!!localStorage.getItem('token') &&
//                 <Link to="/liked-products">
//                   <button className="logout-btn" style={{ padding: "15px" }}><FontAwesomeIcon icon={faStar} />   FAVOURITES  </button>
//                 </Link>}
//             </div>
//             <div>
//               {!!localStorage.getItem('token') &&
//                 <Link to="/my-products">
//                   <button className="logout-btn" style={{ padding: "15px" }}><FontAwesomeIcon icon={faList} />   MY Products  </button>
//                 </Link>}
//             </div>
//             <div>
//               {!localStorage.getItem('token') ?
//                 <div>
//                   <button className='logout-btn' onClick={handleSignClick} style={{ padding: "15px", marginBottom: "10px", marginLeft: "20px" }} ><FontAwesomeIcon icon={faRightToBracket} /> SIGNUP</button>
//                   <button className='logout-btn' onClick={handleLoginClick} style={{ padding: "15px", marginBottom: "10px", marginLeft: "20px" }} ><FontAwesomeIcon icon={faRightToBracket} /> LOGIN</button>
//                 </div> :
//                 <button className='logout-btn' onClick={handleLogout} style={{ padding: "15px", marginBottom: "10px" }}><FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT </button>}
//               <br></br>
//             </div>
//           </div>}
//         </div>
//       </header>
//     </>
//   )
// }

// export default Header;
