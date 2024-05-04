import { useEffect, useState } from "react";
import Header from "./Header1";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import './Home1.css';
import Categories from "./Categories";
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './MyProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Footer from "./common/footer/Footer";
function LikedProducts(){

    const navigate = useNavigate()

    const [products, setproducts] = useState([]);
    const [cproducts, setcproducts] = useState([]);
    const [search, setsearch] = useState('');
    const [refresh, setrefresh] = useState(false);

    // useEffect (() => {
    //     if(!localStorage.getItem('token')){
    //         navigate('/login')
    //     }
    // },[])


    useEffect (() => {
        const url = 'https://student-empowerment-project.onrender.com/my-products';
        let data = { userId : localStorage.getItem('userId') }
        console.log(data);
        axios.post(url,data)
        .then((res) => {
            console.log(res);
            if(res.data.products){
                setproducts(res.data.products);
            }
        })
        .catch((err) => {
            console.log(err);
            alert('EEEEEEEEErr.')
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
const handleEditProduct = (productId) => {
    navigate(`/edit-product/${productId}`);
};

// const handleLike = (productId) => {
//     let userId = localStorage.getItem('userId');

//     const url = 'https://student-empowerment-project.onrender.com/like-product';
//     const data = { userId,productId}
//         axios.post(url,data)
//         .then((res) => {
//             console.log(res);
//             if(res.data.message){
//                 alert("Liked")
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//             alert('EErr.')
//         })
// }



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



const handleDel = (pid) => {

    if(!localStorage.getItem('userId')){
        alert("Please Login First")
        return;
    }
    const url = 'https://student-empowerment-project.onrender.com/delete-product';
    const data = {
        pid ,
        userId : localStorage.getItem('userId')
    }
    axios.post(url,data)
        .then((res) => {
            if(res.data.message){
                alert("Deleted Success")
                setrefresh(!refresh)
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Error.')
        })
}
    return (
        <div className="myProduct-container">
            <Header search={search} handlesearch={handlesearch} handleClick={handleClick}/>
            <Categories handleCategory={handleCategory}/>
           

            {cproducts.length > 0 && <h5>SEARCH RESULTS</h5>}
            <div className="d-flex justify-content-center flex-wrap">

            

{cproducts && products.length > 0 &&
    cproducts.map((item, index) => {
                /*<h3 className="m-2 text-danger"> { item.price }</h3>
                <p className="m-2 text-success"> { item.pdesc }</p> within return */
        return (
            // <div key={item._id} className="card m-3">
            //     <img width = "300px" height = "200px" src={ 'https://student-empowerment-project.onrender.com/' + item.pimage }/>
            //     <p className="m-2"> { item.pname } | { item.category }</p>
            // </div>
            <div className="card m-3">

            <div onClick = { () => handleProduct(item._id) } key={item._id} >
                {/* <div onClick={ () => handleLike(item._id) } className="icon-con">
                    <FaHeart className="icons" />
                </div>    */}
                <img width = "300px" height = "200px" src={ 'https://student-empowerment-project.onrender.com/' + item.pimage }/>
                <p className="m-2"> { item.pname } | { item.category }</p> 
            </div>
                <div className="m-4">
                    {/* <button className="left-btn">
                            <Link to={ `/edit-product/${ item._id }` }> EDIT PRODUCT </Link>
                        </button> */}
                    <button className="left-btn" onClick={() => handleEditProduct(item._id)}>
                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                    </button>
                    <button onClick={() => handleDel(item._id)} className="right-btn">
                        <FontAwesomeIcon icon={faTrash} />  Remove
                    </button>
                </div>                  
            </div>
        )
    })}

</div>
<h5>ALL RESULTS</h5>

            <div className="myProduct-text">

                {products && products.length > 0 &&
                    products.map((item, index) => {
                     //   <h4 className="m-2 text-danger"> { item.price }</h4> within return
                     //   <p className="m-2 text-success"> { item.pdesc }</p>
                        return (
                            // <div onClick = { () => handleProduct(item._id) } key={item._id} className="card m-3">
                            <div key={item._id} className="card m-3">
                                {/* <div onClick={ () => handleLike(item._id) } className="icon-con">
                                    <FaHeart className="icons" />
                                </div>     */}
                                 
                                <img width = "300px" height = "200px" src={ 'https://student-empowerment-project.onrender.com/' + item.pimage }/>
                                <p className="m-2"> { item.pname } | { item.category }</p>
                                <div className="m-4">
                                    {/* <button className="left-btn">
                                        <Link to={ `/edit-product/${ item._id }` }> EDIT PRODUCT </Link>
                                    </button> */}
                                    <button className="left-btn" onClick={() => handleEditProduct(item._id)}>
                                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                    </button>
                                    <button onClick={() => handleDel(item._id)} className="right-btn">
                                        <FontAwesomeIcon icon={faTrash} />  Remove
                                    </button>
                                </div>
                            </div>
                        )
                    })}

            </div>
            
        </div>
    );
}
export default LikedProducts;