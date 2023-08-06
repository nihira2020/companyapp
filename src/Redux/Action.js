import { MAKE_REQ, OPEN_POPUP, REQ_ADD_SUCC, REQ_DELETE_SUCC, REQ_GETALL_FAIL, REQ_GETALL_SUCC, REQ_GETBYCODE_SUCC, REQ_UPDATE_SUCC } from "./ActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQ
    }
}

export const getAllRequestSuccess=(data)=>{
    return{
        type:REQ_GETALL_SUCC,
        payload:data
    }
}

export const getAllRequestFail=(err)=>{
    return{
        type:REQ_GETALL_FAIL,
        payload:err
    }
}

export const OpenPopup=()=>{
    return{
        type:OPEN_POPUP
    }
}

export const AddRequest=(data)=>{
    return{
        type:REQ_ADD_SUCC,
        payload:data
    }
}

export const UpdateRequest=(data)=>{
    return{
        type:REQ_UPDATE_SUCC,
        payload:data
    }
}

export const RemoveRequest=(code)=>{
    return{
        type:REQ_DELETE_SUCC,
        payload:code
    }
}

export const getbycodeSuccess=(data)=>{
    return{
        type:REQ_GETBYCODE_SUCC,
        payload:data
    }
}