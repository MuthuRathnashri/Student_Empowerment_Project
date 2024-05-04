import { useEffect, useState } from "react";
import Header from "./Header1";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import './Home1.css';
import Categories from "./Categories";
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Footer from "./common/footer/Footer";

function Home(){

    const navigate = useNavigate()

    const [products, setproducts] = useState([]);
    const [likedproducts, setlikedproducts] = useState([]);
    const [refresh, setrefresh] = useState(false);
    const [cproducts, setcproducts] = useState([]);
    const [search, setsearch] = useState('');
    const [showCategories, setShowCategories] = useState(false); 
    //     if(!localStorage.getItem('token')){
    //         navigate('/login')
    //     }
    // },[])


    useEffect (() => {
        const url = 'http://localhost:4000/get-products';
        axios.get(url)
        .then((res) => {
            console.log(res);
            if(res.data.products){
                setproducts(res.data.products);
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Server Err.')
        })

        const url2 = 'http://localhost:4000/liked-products';
        let data = { userId : localStorage.getItem('userId') }
        axios.post(url2,data)
        .then((res) => {
            console.log(res);
            if(res.data.products){
                setlikedproducts(res.data.products);
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Server Err.')
        })

    },[refresh])


const handlesearch=(value)=>{
    setsearch(value);
}
const handleClick=()=>{
   
    let filteredProducts=products.filter((item)=>{
        if(item.pname.toLowerCase().includes(search.toLowerCase())|| 
        item.pdesc.toLowerCase().includes(search.toLowerCase()) || 
        item.category.toLowerCase().includes(search.toLowerCase())){
            return item;
        }
    })
    setcproducts(filteredProducts)

}

const handleLike = (productId) => {
    let userId = localStorage.getItem('userId');

    console.log(userId);
    const url = 'http://localhost:4000/like-product';
    const data = { userId,productId}
        axios.post(url,data)
        .then((res) => {
            console.log(res);
            if(res.data.message){
                //alert("Liked")
                setrefresh(!refresh)
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Server Err.')
        })
}

const handleDisLike = (productId) => {
    let userId = localStorage.getItem('userId');

    console.log(userId);
    const url = 'http://localhost:4000/dislike-product';
    const data = { userId,productId}
        axios.post(url,data)
        .then((res) => {
            console.log(res);
            if(res.data.message){
                //alert("DisLiked")
                setrefresh(!refresh)
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Server Err.')
        })
}

const handleCategory=(value)=>{
   
    let filteredProducts=products.filter((item,index)=>{
  
    
        if(item.category == value){
            return item;
        }
       
    })
    setcproducts(filteredProducts)
}

const handleProduct = (id) => {
    navigate('/product/' + id)
}
 
const handleToggleCategories = () => {
    setShowCategories(!showCategories);
}
    return (
        <div>
        <div className="home-container-web1">
            <Header search={search} handlesearch={handlesearch} handleClick={handleClick} onFilterClick={handleToggleCategories} />
            {/* <Categories handleCategory={handleCategory}/> */}
            {showCategories && <Categories handleCategory={handleCategory}/>}

            {cproducts.length > 0 && <h5>SEARCH RESULTS</h5>}
            <div className="hometext-web1">

            

                {cproducts && products.length > 0 &&
                    cproducts.map((item, index) => {
                                /*<h3 className="m-2 text-danger"> { item.price }</h3>
                                <p className="m-2 text-success"> { item.pdesc }</p> within return */
                        return (
                            // <div key={item._id} className="card m-3">
                            //     <img width = "300px" height = "200px" src={ 'http://localhost:4000/' + item.pimage }/>
                            //     <p className="m-2"> { item.pname } | { item.category }</p>
                            // </div>
                            <div onClick = { () => handleProduct(item._id) } key={item._id} className="card m-3">
                                <div onClick={ () => handleLike(item._id) } className="icon-con">
                                <FaHeart className="icons" />
                                </div>  
                                <img width = "300px" height = "200px" src={ 'http://localhost:4000/' + item.pimage }/>
                                <p className="m-2"> { item.pname } | { item.category }</p>                 
                            </div>
                        )
                    })}

                </div>
                <h5>ALL RESULTS</h5>

            <div className="hometext-web1">

                {products && products.length > 0 &&
                    products.map((item, index) => {
                     //   <h4 className="m-2 text-danger"> { item.price }</h4> within return
                     //   <p className="m-2 text-success"> { item.pdesc }</p>
                        return (
                            // <div onClick = { () => handleProduct(item._id) } key={item._id} className="card m-3">
                            <div key={item._id} className="card m-3"> 
                                <div className="icon-con">
                                {
                                    likedproducts.find((likedItem) => likedItem._id == item._id) ?
                                        <FaHeart onClick={ () => handleDisLike(item._id) } className="red-icons" /> : 
                                        <FaHeart onClick={ () => handleLike(item._id) } className="icons" />
                                }
                                </div> 
                                <div onClick = { () => handleProduct(item._id) } key={item._id} >   
                                <img width = "300px" height = "200px" src={ 'http://localhost:4000/' + item.pimage }/>
                                <p className="m-2"> { item.pname } | { item.category }</p>
                                </div>
                               
                            </div>
                        )
                    })}

            </div>
            
        </div>
        
        </div>
    );
}
export default Home;