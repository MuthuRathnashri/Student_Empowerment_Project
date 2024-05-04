import { useEffect, useState } from "react";
import Header from "./Header1";
import axios from 'axios';
import Footer from "./common/footer/Footer";

function MyProfile() {

    const [ user , setuser ] = useState({})
    useEffect(() => {
        let url = 'http://localhost:4000/my-profile/' + localStorage.getItem('userId');
        axios.get(url)
        .then((res) => {
            console.log(res.data)
            if(res.data.user){
                setuser(res.data.user);
            }
        })
        .catch((err) => {
            alert('Server err')
        })
    },[])

    return (
        <div >
            <Header />
            <div className="m-3 p-3">

           
            <h5 className="text-center mt-2"> USER PROFILE </h5>
            { user.username }

            <table className="table table-dark table-bordered">
                <thead>
                    <tr>
                        <td> USER NAME </td>
                        <td> Password </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {user.username} </td>
                        <td> {user.password} </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <Footer />
        </div>
    )
}
export default MyProfile;