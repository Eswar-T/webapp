import { useEffect, useState } from 'react';
import './App.css';
import  restaurantItems  from './data';
//import download from './images'

function App() {

  const [restoDetails, setrestoDetails] = useState([]);

useEffect(()=>{
  setrestoDetails(restaurantItems.category)
  console.log(restoDetails,"detai;s")
},[restoDetails])

  return (
    <div className="App" style={{ backgroundColor:'#808080' }}>
       {/* <h1>{restaurantItems.restaurant_name}</h1> */}
       <img src={require("./images/download3.jpg").default} alt="download" style={{ height:30,width:'90%',marginBottom:12 }}/>
    {
      restoDetails.map((items)=>{
        return (
          <div  style={{ marginLeft:'15px',marginRight:'15px',backgroundColor:'white',borderRadius:10 }}>  
                  
                 <div style={{ display:'flex',paddingLeft:12 }}> 
                 <h3 style={{ textAlign:'left' }}>{items.category_name}</h3>
                 <div style={{ height:12,width:12,backgroundColor:items.color,marginTop:26,marginLeft:20 }}/>
                 </div>
                 {
                   items.food_types.map(foodTypes=>{
                   
                   return (
                           <div style={{ marginBottom:12,padding:12 }}>
                           <div style={{ display:'flex',justifyContent:'space-between',fontSize:14 }}> 
                              <div>{foodTypes.item_name}</div>
                              <div>{foodTypes.price}</div>
                           </div>
                           <div style={{ textAlign:'left',fontSize:12,color:'#C8C8C8' }}>{foodTypes.description}</div>
                           <div style={{ borderTop: "2px solid #F5F5F5", marginTop:2}}></div>
                           </div> 
                   )})
                 }
          </div>     
      )})
    }
    </div>
  );
}

export default App;
