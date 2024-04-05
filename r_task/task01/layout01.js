const userLayout = (() => {
    const showList = (users) => {
        const tbody = document.querySelector("table.user-table tbody");
        let text = ``;
        users.forEach((user) => {
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                </tr>
            `;
        });
        tbody.innerHTML = text;
    };

    return { showList: showList };
})();
