const withLogin = (WrappedCompponet) =>{
    const login = () =>{

    }
    const logout = () =>{
        
    }
    return <WrappedCompponet  login={login} logout={logout} />
}

const details = () =>{
        console.log('inside details');        
}

const withAuth = withLogin(details)