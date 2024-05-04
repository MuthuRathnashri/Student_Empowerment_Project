import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header1';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; 
import Footer from './common/footer/Footer';

function ProductDetail() {
    const [product, setProduct] = useState();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });
    const { productId } = useParams();

    useEffect (() => {
        const url = 'https://student-empowerment-project.onrender.com/get-product/' + productId;
        axios.get(url)
            .then((res) => {
                if(res.data.product){
                    setProduct(res.data.product);
                }
            })
            .catch((err) => {
                console.log(err);
                alert('Server Error');
            });
    }, [productId]);

    const handleBuyClick = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, contact, message } = formData;

        axios.post('https://student-empowerment-project.onrender.com/send-message', { name, contact, message, productId })
            .then(response => {
                console.log(response.data);
                alert('Message sent successfully');
            })
            .catch(error => {
                console.error(error);
                alert('Failed to send message');
            });
    };

    return (
        <div className='product-detail-page'>
            <Header />
            <div className='product-detail-container'>
                <h6>Product Details</h6><br /><br />
                {product && (
                    <>
                        <img className='product-detail-image' src={'https://student-empowerment-project.onrender.com/' + product.pimage} alt='' />
                        {product.pimage2 && <img className='product-detail-image' src={'https://student-empowerment-project.onrender.com/' + product.pimage2} alt='' />}
                        <div className='product-info-container'>
                            <p className='product-name'>{product.pname} | {product.category}</p>
                            <h3 className='product-price'>{product.price}</h3>
                            <p className='product-description'>{product.pdesc}</p>
                            {!showForm ? (
                                <button onClick={handleBuyClick}>Buy now</button>
                            ) : (
                              <div className='messageform'>
                                <form onSubmit={handleSubmit} >
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                    <input type="text" name="contact" placeholder="Your Contact Details" value={formData.contact} onChange={handleChange} />
                                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
                                    <button type="submit">Send Message</button>
                                </form>
                              </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;
