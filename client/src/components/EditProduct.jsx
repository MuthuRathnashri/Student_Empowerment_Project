import { useEffect, useState } from "react";
import Header from "./Header1";
import { useNavigate, Link , useParams } from "react-router-dom";
import axios from "axios";
import './AddProduct.css';
import Footer from "./common/footer/Footer";

function EditProduct() {
    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [otherPname, setOtherPname] = useState(''); // State to store custom product name
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [pimage, setpimage] = useState(null);
    const [pimage2, setpimage2] = useState(null);
    const [poldimage, setpoldimage] = useState(null);
    const [poldimage2, setpoldimage2] = useState(null);
    const p = useParams()
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);


    useEffect (() => {
        const url = 'https://student-empowerment-project.onrender.com/get-product/' + p.productId;
        axios.get(url)
        .then((res) => {
            if(res.data.product){
                console.log(res.data.product)
                let product = res.data.product;
                setpname(product.pname)
                setprice(product.price)
                setpdesc(product.pdesc)
                setcategory(product.category)
                setpoldimage(product.pimage)
                setpoldimage2(product.pimage2)
                //setProduct(res.data.product)
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Server Err11.')
        })

    }, []);

    const handleApi = () => {

        const formData = new FormData();

        formData.append('pid', p.productId);
        formData.append('pname', pname === 'Others' ? otherPname : pname); // Use custom product name if 'Others' is selected
        formData.append('pdesc', pdesc);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('pimage', pimage);
        if (pimage2) {
            formData.append('pimage2', pimage2);
        }
        formData.append('userId',localStorage.getItem('userId'));

        const url = 'https://student-empowerment-project.onrender.com/edit-product';
        axios.post(url, formData)
            .then((res) => {
                if (res.data.message) {
                    navigate('/my-products');
                }
            })
            .catch((err) => {
                alert('server err');
            });
    };

    // Function to handle change in product name dropdown
    const handleProductNameChange = (e) => {
        setpname(e.target.value);
        if (e.target.value !== 'Others') {
            setOtherPname(''); // Reset custom product name when a different option is selected
        }
    };

    // Function to render additional input for custom product name if 'Others' is selected
    const renderOtherProductNameInput = () => {
        if (pname === 'Others') {
            return (
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        className="form-control"
                        type="text"
                        value={otherPname}
                        onChange={(e) => setOtherPname(e.target.value)}
                    />
                </div>
            );
        }
    };

    return (
        <div>
            <Header />
            <div className="form-back">
                <h2> EDIT PRODUCT </h2>
                <div className="form-container">
                    
                    <div className="form-group">
                        <label> Product Name </label>
                        <select
                            className="form-control"
                            type="text"
                            value={pname}
                            onChange={handleProductNameChange}
                        >
                            <option> Drafter </option>
                            <option> Cycle </option>
                            <option> Others </option>
                        </select>
                    </div>

                    {/* Render additional input for custom product name */}
                    {renderOtherProductNameInput()}

                    <div className="form-group">
                        <label> Product Description </label>
                        <input
                            className="form-control"
                            type="text"
                            value={pdesc}
                            onChange={(e) => { setpdesc(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label> Contact </label>
                        <input
                            className="form-control"
                            type="text"
                            value={price}
                            onChange={(e) => { setprice(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label> Product Category </label>
                        <select
                            className="form-control"
                            value={category}
                            onChange={(e) => { setcategory(e.target.value) }}
                        >
                            <option> Academic </option>
                            <option> Non Academic </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label> Product Image </label>
                        <input
                            style = {{ width: '50%'}}
                            className="form-control"
                            type="file"
                            onChange={(e) => { setpimage(e.target.files[0]) }}
                        />
                        <img src={'https://student-empowerment-project.onrender.com/' + poldimage} width={100} height={50}/>
                    </div>

                    <div className="form-group">
                        <label> Product Second Image </label>
                        <input
                            style = {{ width: '50%' }}
                            className="form-control"
                            type="file"
                            onChange={(e) => { setpimage2(e.target.files[0]) }}
                        />
                        {pimage2 && <img src={'https://student-empowerment-project.onrender.com/' + poldimage2} width={100} height={50}/>}
                    </div>

                    <button onClick={handleApi} className="btn btn-primary mt-3"> SUBMIT </button>
                </div>
            </div>
            
        </div>
    );
}

export default EditProduct;
