import type from "../type"


export const continueLogin =()=>{
    return {
        type:type.LOGIN
    }
}


export const ContinueLogout =()=>{
    return {
        type:type.LOGOUT
    }
}