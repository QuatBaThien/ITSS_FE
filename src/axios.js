import axios from "axios";
// axios.defaults.withCredentials= true;
axios.defaults.baseURL= "https://itssbe-production.up.railway.app/api"
axios.defaults.headers.common['Authorization']='Bearer '+ localStorage.getItem('token');
