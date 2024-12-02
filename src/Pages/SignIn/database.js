class UsersExample {

    dataUserToLocalStorage () {

        const users = [
            {
                email: "0041ea23e24b8fa4f47933af91feb9b8",
                password: "25d55ad283aa400af464c76d713c07ad"
            }
        ]
    
        localStorage.setItem("users", JSON.stringify(users));
    
    }
}

export default UsersExample