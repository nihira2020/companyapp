import axios from "axios";
import { AddRequest, RemoveRequest, UpdateRequest, getAllRequestFail, getAllRequestSuccess, getbycodeSuccess, makeRequest } from "./Action"
import { toast } from "react-toastify";

export const GetAllCompanys = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(()=>{
            axios.get("http://localhost:8000/company").then(res => {
                const _list = res.data;
                dispatch(getAllRequestSuccess(_list));
            }).catch(err => {
                dispatch(getAllRequestFail(err.message));
            });
        },1000)
       
    }
}

export const GetCompanybycode = (code) => {
    return (dispatch) => {
        //dispatch(makeRequest());
        axios.get("http://localhost:8000/company/"+code).then(res => {
            const _obj = res.data;
            dispatch(getbycodeSuccess(_obj));
        }).catch(err => {
            toast.error('Failed to fetch the data')
        });
    }
}

export const CreateCompany = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/company", data).then(res => {
            dispatch(AddRequest(data));
            toast.success('Company created successfully.')
        }).catch(err => {
            toast.error('Failed to create comany due to :' + err.message)
        });
    }
}

export const UpdateCompany = (data) => {
    return (dispatch) => {
        axios.put("http://localhost:8000/company/"+data.id, data).then(res => {
            dispatch(UpdateRequest(data));
            toast.success('Company updated successfully.')
        }).catch(err => {
            toast.error('Failed to update comany due to :' + err.message)
        });
    }
}

export const RemoveCompany = (code) => {
    return (dispatch) => {
        axios.delete("http://localhost:8000/company/"+code).then(res => {
            dispatch(RemoveRequest(code));
            toast.success('Company Removed successfully.')
        }).catch(err => {
            toast.error('Failed to remove comany due to :' + err.message)
        });
    }
}


