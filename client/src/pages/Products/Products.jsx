import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List';
import "./Products.scss"
const Products = () => {
 const catId = parseInt(useParams().id);
 const [maxPrice, setMaxPrice] = useState(1000);
 const [sort, setSort] = useState("asc");
 
 const [selectedSubCats, setSelectedSubCats] = useState([])
 const [data, setData] = useState([])
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);
 //console.log("catId: " + catId)
 //categories id
 
 //console.log(maxPrice)
 // category wise filtering -> /catId  -> 1-men 2-women 
 // subcat mey konse products ka cat same hai
const path =  `/sub-categories?populate=*&filters[categories][id][$eq]=${catId}`

useEffect(() => {
 const fetchData = async () =>{
   try {
    setLoading(true);
    const res =await axios.get(process.env.REACT_APP_API_URL+path, {
      headers: {
        Authorization: "bearer" + process.env.REACT_APP_API_TOKEN
      }
    })
    //console.log("Data : ", res)
    setData(res.data.data)
  } catch (error) {
    setError(true);
  }
  setLoading(false);
}
fetchData()
}, [path])

//console.log(data)


const handleChange = (e) =>{
  const value = e.target.value;
  const isChecked =  e.target.checked;
  setSelectedSubCats(isChecked ? [...selectedSubCats,value] :
    selectedSubCats.filter((item)=> item != value))
}
//console.log("selectedSubCats",selectedSubCats)
 return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {
            data?.map(item=>(
              <div className="inputItem" key={item.id}>
              <input type="checkbox" name="" id={item.id} value={item.id}
              onChange={handleChange} />
              <label htmlFor="1" >{item.attributes.title}</label>
            </div>
            ))
          }
          
       
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
             <span>0</span>
             <input type="range" min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)}/>
             <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
           <input type="radio" name="price" id="asc" value="asc" 
           onChange={(e)=>setSort("asc") } />
           <label htmlFor="asc">Price (Lowest price)</label>
          </div>
          <div className="inputItem">
           <input type="radio" name="price" id="desc" value="desc" 
            onChange={(e)=>setSort("desc") }/>
           <label htmlFor="desc">Price (Higest price)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg'
         src="https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600" alt="" />
         <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products