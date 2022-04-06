const initialState = false

const Login = (State= initialState,action)=>{
    switch(action.type){
        case 'LogIn' :return State = true
        case 'LogOut': return State= false
        default : return State
    }

}
export default Login