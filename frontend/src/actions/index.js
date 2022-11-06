import api from "../request";

export const GEN_ROUTES = 'GEN_ROUTES';
export const GET_DATA = 'GET_DATA';
export const SET_PAGENATION = 'SET_PAGENATION';
export const SET_HAS_MORE = 'SET_HAS_MORE';
export const SET_LOADING = 'SET_LOADING';
export const SET_JOB_LIST = 'SET_JOB_LIST';
export const SET_DETAIL = 'SET_DETAIL';
export const SET_ID = 'SET_ID';


export function serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&").replace(/%3B/g, ";").replace(/%2F/g, "/");
  }


export const generateRoutes = () => ({ type: GEN_ROUTES })
export const setPagenation = (value) => ({ type: SET_PAGENATION, payload: value })
export const getDatas = (pagenation = 1, data = []) =>  async (dispatch) => {
    try {        
        dispatch({
            type : SET_LOADING,
            payload: true
        })
        const res = await api.listJobs.list('page=' + pagenation)
        dispatch({
            type : GET_DATA,
            payload: {
                data: [...data, ...res],
                jobs_list: 'Job List'
            }
        })
        dispatch({
            type : SET_HAS_MORE,
            payload: res.length > 0
        })
        dispatch({
            type : SET_LOADING,
            payload: false
        })
    } catch (error) {
        dispatch({
            type : SET_HAS_MORE,
            payload: false
        })
        dispatch({
            type : SET_LOADING,
            payload: false
        })
    }
}
export const getDatasSearch = (val) =>  async (dispatch) => {
    try {        
        dispatch({
            type : SET_LOADING,
            payload: true
        })
        const res = await api.listJobs.list(serialize(val))
        dispatch({
            type : GET_DATA,
            payload: {
                data: res,
                ...val,
                jobs_list: (val?.location !== "" || val?.description !== "" || val?.positions) ?  `showing ${res.length} jobs` : 'Jobs List'
            },
        })
        dispatch({
            type : SET_HAS_MORE,
            payload: res.length > 0
        })
        dispatch({
            type : SET_LOADING,
            payload: false
        })
    } catch (error) {
        dispatch({
            type : SET_HAS_MORE,
            payload: false
        })
        dispatch({
            type : SET_LOADING,
            payload: false
        })
    }
}

// Detail
export const getDataDetail = (val) => async (dispatch) => {
    dispatch({
        type : SET_DETAIL,
        payload: [],
    })
    dispatch({
        type : SET_LOADING,
        payload: true
    })
    try {
        const res = await api.listJobs.detail(val)
        if (res) {
            dispatch({
                type : SET_DETAIL,
                payload: res,
            })
            dispatch({
                type : SET_LOADING,
                payload: false
            })
        }
        
    } catch (error) {
        dispatch({
            type : SET_DETAIL,
            error: error,
        })
        dispatch({
            type : SET_LOADING,
            payload: false
        })
    }
}
export const setDetailId = (value) => ({ type: SET_ID, payload: value })
