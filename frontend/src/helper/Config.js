
const config = (getState, url, method, value=null) => {
    const token =  getState().auth.token 

    const configuration = {
        url : url,
        method : method,
        headers : {
            "Content-Type":"application/json"
        },
        data : value ? JSON.stringify(value) : null
        
    }

    if(token){
        configuration.headers['x-auth-token'] = token
    }

    return configuration
}

export default config