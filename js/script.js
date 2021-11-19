
window.onload = (event) => {
    getUsers();
};

const getUsers = () => {

    $.ajax({

        url: "https://gorest.co.in/public/v1/users",
        success: function (result) {
            displayUsers(result.data);

        }
    });
}


function displayUsers(usersArray) {

    // console.log(usersArray);
    // console.log(typeof (usersArray));
    // console.log(Array.isArray(usersArray));

    var user_record = '';
    for (let i = 0; i < 20; i++) {
        user_record += '<tr><td>' + usersArray[i].name + '</td>';
        user_record += '<td>' + usersArray[i].email + '</td>';
        user_record += '<td>' + usersArray[i].gender + '</td>';
        user_record += '<td>' + usersArray[i].status + '</td>';
        user_record += '<td><a><img src = "img/edit.png" style = "width:30px ; height: 30px"></a><a><img src = "img/delete.png" style = "width:30px ; height: 30px"></a></td></tr>';
        $("#dataTable").append(user_record);
        user_record = '';
    }

}
