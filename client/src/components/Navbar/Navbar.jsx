import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authReducer";

//https://raw.githubusercontent.com/safak/youtube2022/ecommerce/client/public/img/payment.png

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state)=>state.cart.products) 
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.currentUser)
  const navigate = useNavigate();
  //console.log(products)
  const handleLogout = () =>{

   console.log("click")
   console.log(user)
    if(user){
      dispatch(logout());
      navigate("/")
    }
  }

  return (
    <div className='navbar'>
         <div className="wrapper">
           <div className="left">
            <div className="item">
              <img src="https://raw.githubusercontent.com/safak/youtube2022/ecommerce/client/public/img/en.png" alt="" />
             <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
             <span>USD</span>
             <KeyboardArrowDownIcon/>
            </div>
            <div className="item">
             <Link className="link" to="/products/1">Women</Link>
            </div>
            <div className="item">
             <Link className="link" to="/products/2">Men</Link>
            </div>
            <div className="item">
             <Link className="link" to="/products/3">Children</Link>
            </div>
           </div>
           <div className="center">
            <Link className="link" to="/">LAMASTORE</Link>
           </div>
           <div className="right">
           <div className="items">
            <Link className="link" >{user && ("Welcome "+JSON.stringify(user.username.toUpperCase()))}</Link>
           </div>
           {
             user ? ( <div className="items">
             <Link  className="link"to="/" onClick={handleLogout}>Logout</Link>
            </div>) : (<div className="items">
            <Link className="link" to="/login">Login</Link>
           </div>) 
           }
           
          
           <div className="items">
            <Link className="link" to="/">Stores</Link>
           </div>
           <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon onClick={handleLogout}/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products?.length}</span>
            </div>
           </div>
           </div>
         </div>
         {open && <Cart/>}
    </div>
  )
}

export default Navbar