import Axios from 'axios'



const baseURL = 'http://dev3.dansmultipro.co.id/api/';
const headers = {
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
};



export default class baseRequest {
    constructor() {
        this.urls = {};
    }
    
    async get (url = "") {
        try {            
            const Request = Axios.create({
            });
            const res = await Request.get(baseURL + url)
            return res?.data
        } catch (error) {
            console.log("error get", error)
        }
    }

}