const data = [
        {
          id:1,
          img:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600",
          img2:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs-tinys",
          title:"long Sleeve Graphic T-shirt",
          isNew:true,
          oldPrice:19,
          price:12,
        },
        {
          id:2,
          img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
          title:"Coat",
          isNew:true,
          oldPrice:19,
          price:12,
        },
        {
          id:3,
          img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs-tinys",
          title:"Skirt",
          oldPrice:19,
          price:12,
        },
        {
          id:4,
          img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto-compress&cs-tinys",
          title:"Hat",
          oldPrice:19,
          price:12,
        },
]
# How we fetch the prod of  particular  type ? 
type : trending latest
const path = `/products?populate=*&[filters][type][$eq]=${type}`

# How we fetch the data on Products Page based on category ?
cat : 1.men 2.women
we will get catId from useParams hook
category wise filtering -> /catId  -> 1-men 2-women 
subcat mey konse products ka cat same hai
const path =  `/sub-categories?populate=*&filters[categories][id][$eq]=${catId}`

# How to show checkbox dynamically on Products Page based on Product Categories ?
cat : 1.men -> subcat : 1.hats 2.tshirt
for men we have two sub cat 
we loop over catData passed checkbox 

# How to filter and display product on the basis of product category like hats or tshirt when click on checkbox ?
1.List Comp in Products page we passed catId,sort,subCats, maxPrice
2.So we will filter List on basis of product category
initially 
3.const path =  `/products?populate=*&filters[categories][id][$eq]=${catId}`
4.we cant filter api on basis of array in strapi so we used multiple filters in api query
5.sort and price range
6.const path =  `/products?populate=*&
filters[categories][id][$eq]=${catId}${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item`)}&
[filters][price][$lte]=${maxPrice}&sort=price:${sort}`  


# How we click on product image in Product it change?
1.product page two image will be there when we click on image that image set to be main img
2.we create useState selectedImage on click
on that we given id to that no. 
3.when click on img that id we passed to setSelected action so it will change selected img
4.we passed selected img to mainimg src 

