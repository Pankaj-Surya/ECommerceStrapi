import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const products = [
    {
      id:1,
      img:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600",
      img2:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs-tinys",
      title:"Long Sleeve Graphic T-shirt",
      isNew:true,
      desc:"this is a description of the",
      oldPrice:19,
      price:12,
    },
    {
      id:2,
      img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      title:"Coat",
      isNew:true,
      desc:"this is a description of the",
      oldPrice:19,
      price:12,
    },
    {
      id:3,
      img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs-tinys",
      title:"Skirt",
      desc:"this is a description of the",
      oldPrice:19,
      price:12,
    },
    {
      id:4,
      img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs-tinys",
      title:"Hat",
      desc:"this is a description of the",
      oldPrice:19,
      price:12,
    },
  ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title.length>5 ? item.title.slice(0,10)+".." : item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {2} x ${300}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${600}</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    
    </div>
  )
}

export default Cart