import { useEffect, useState } from "react";
import Header1 from "./Header1";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AddProduct.css';
import Footer from "./common/footer/Footer";

function AddProduct() {
    const navigate = useNavigate();
    const [pname, setpname] = useState('');
    const [otherPname, setOtherPname] = useState(''); // State to store custom product name
    const [pdesc, setpdesc] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [pimage, setpimage] = useState(null);
    const [pimage2, setpimage2] = useState(null);
    
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);

    const handleApi = () => {
        const formData = new FormData();
        formData.append('pname', pname === 'Others' ? otherPname : pname); // Use custom product name if 'Others' is selected
        formData.append('pdesc', pdesc);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('pimage', pimage);
        if (pimage2) {
            formData.append('pimage2', pimage2);
        }
        formData.append('userId',localStorage.getItem('userId'));

        const url = 'https://student-empowerment-project.onrender.com/add-product';
        axios.post(url, formData)
            .then((res) => {
                if (res.data.message) {
                    navigate('/home1');
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

            
            <div className="form-back">
                <Header1 />
                <h2> ADD PRODUCT </h2>
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
                            className="form-control"
                            type="file"
                            onChange={(e) => { setpimage(e.target.files[0]) }}
                        />
                    </div>

                    <div className="form-group">
                        <label> Product Second Image </label>
                        <input
                            className="form-control"
                            type="file"
                            onChange={(e) => { setpimage2(e.target.files[0]) }}
                        />
                    </div>

                    <button onClick={handleApi} className="btn btn-primary mt-3"> SUBMIT </button>
                </div>
            </div>
            
        </div>
        
    );
}

export default AddProduct;
