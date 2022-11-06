import baseRequest from "../utils/request";

export default class ListJobs extends baseRequest{
    constructor() {
        super();
        this.baseURL = 'recruitment/positions';
    }
    list = (url) => this.get(this.baseURL + '.json?' + url)
    detail = (url) => this.get(this.baseURL + '/' + url)
}