import { mainAPI } from '../api/api';

const SET_DATA = 'SET_DATA'
const SET_INFO = 'SET_INFO'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    data: [],
    info: {},
    currentPage: 1,
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_DATA: 
            return {...state, data: action.data}
        case SET_INFO: 
            return {...state, info: action.info}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}
        default: 
            return state
    }
}

const setData = (data) => ({type: SET_DATA, data})
const setInfo = (info) => ({type: SET_INFO, info})
const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const requestData = (page) => async (dispatch) => {
    const response = await mainAPI.getData(page)
    if(response.status === 200){
        dispatch(setData(response.data.results))
        dispatch(setInfo(response.data.info))
    }else{
        console.log(response);
    }
}

export const changePage = (page) => async (dispatch) => dispatch(setCurrentPage(page))