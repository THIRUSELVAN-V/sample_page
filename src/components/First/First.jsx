import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const First = () => {
    const navigate = useNavigate();
    const handlenav = () =>{
        navigate("/catalog")
    }
    //HI
  return (
    <div style={{height:"97vh",width:"98vw"}}>
    <div style={{width:"100%",height:"100%"}}>
        <div style={{width:"100%",height:"15%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{height:"100%",width:"47%",display:"flex",alignItems:"center"}}>
            <div style={{backgroundColor:"#6415ff",height:"45%",width:"7%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"30px",fontWeight:"bold",color:"white",marginLeft:"4%",marginRight:"2%",borderRadius:"3px"}}>T</div>
            <div style={{fontSize:"30px",fontWeight:"bold",color:"#243e63"}}>Treact</div>
            </div>
            <div style={{height:"100%",width:"53%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <button className='hoverbut' style={{border:"none",backgroundColor:"white",color:"#243e63",fontWeight:"bold",fontSize:"15px"}}>About</button>
            <button className='hoverbut' style={{border:"none",backgroundColor:"white",color:"#243e63",fontWeight:"bold",fontSize:"15px"}}>Blog</button>
            <button className='hoverbut' style={{border:"none",backgroundColor:"white",color:"#243e63",fontWeight:"bold",fontSize:"15px"}}>Pricing</button>
            <button className='hoverbut' style={{border:"none",backgroundColor:"white",color:"#243e63",fontWeight:"bold",fontSize:"15px"}}>Contect Us</button>
            <button className='hoverbut' style={{border:"none",backgroundColor:"white",color:"#243e63",fontWeight:"bold",fontSize:"15px"}}>Login</button>
            <button  style={{backgroundColor:"#6415ff",border:"none",height:"45%",width:"17%",borderRadius:"4px",fontSize:"15px",fontWeight:"bold",color:"white"}}>Sign Up</button>
            </div>
        </div>
        <div style={{height:"81%",width:"100%",display:"flex"}}>
            <div style={{height:"100%",width:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"end"}}>
                <div style={{fontSize:"50px",fontWeight:"bolder",color:"#243e63"}}>Delicious & Affordable</div>
                <div style={{fontSize:"50px",fontWeight:"bolder",backgroundColor:"#6415ff",color:"white"}}>Meals Near You.</div>
                <div style={{color:"gray",padding:"70px",fontSize:"17px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div style={{display:"flex",marginBottom:"8%",width:"100%",height:"10%",alignItems:"center"}}>
                    <button onClick={handlenav} style={{height:"100%",marginRight:"5%",marginLeft:"8%",width:"25%",backgroundColor:"#6415ff",border:"none",borderRadius:"5px",color:"white",fontSize:"16px",fontWeight:"bold"}}>Order Now</button>
                    <div style={{fontSize:"17px",color:"gray",alignItems:"center",display:"flex"}}><IoPlayCircleOutline size={50} /> Meet the Chefs</div>
                </div>
            </div>
            <div style={{height:"100%",width:"50%",display:"flex",justifyContent:"center",alignItems:"end"}}>
                <img style={{height:"83%",borderRadius:"30px"}} src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="food" />
            </div>
        </div>
        <div></div>
    </div>
    </div>
  )
}

export default First