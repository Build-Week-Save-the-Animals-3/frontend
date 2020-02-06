import axios from "axios";

const axioswithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}

export default axioswithAuth;