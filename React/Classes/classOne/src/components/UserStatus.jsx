const UserStatus = ()=>{
    const isAdmin = false;
    const loggedIn = true;

    if(isAdmin && loggedIn){
        return <h1>Welcome Admin</h1>
    }else{
        return <h1>Welcome User</h1>
    }
}
export default UserStatus;