function usersWrapper () {
    var users = ["odb", "rza", "gza"]

    function getUsers() {
        return users
    }

    APP.getUsers = getUsers
}

usersWrapper()
