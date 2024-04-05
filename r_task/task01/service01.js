const userService = (() => {
    const findAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "get",
            }
        );
        const users = await response.json();
        if (callback) {
            callback(users);
        }
    };

    return { findAll: findAll };
})();
