
const getUsers = () => {


    $.ajax({

        url: "https://gorest.co.in/public/v1/users?page=4",
        success: function (result) {
            displayUsers(result.data);
            console.log(result);
            console.log(result.meta.pagination.pages);
            console.log(result.meta.pagination.page);
            
            $('#dataTable').DataTable({
                "destroy": true,
            //    "pagingType": "simple",
            "pageLength": 50,
            "drawCallback": function( settings ) {
                alert( 'DataTables has redrawn the table' );
            },

            });
            
        }
    });

}
getUsers();






function displayUsers(usersArray) {
    // $('#dataTable').DataTable();

    for (let i = 0; i < usersArray.length; i++) {
        user_record = '';
        user_record += '<tr><td>' + usersArray[i].name + '</td>';
        user_record += '<td>' + usersArray[i].email + '</td>';
        user_record += '<td>' + usersArray[i].gender + '</td>';
        user_record += '<td>' + usersArray[i].status + '</td>';
        user_record += '<td><a  href="edit.html?userid=' + usersArray[i].id.toString() + '"><img src = "img/edit.png" style = "width:30px ; height: 30px"></a><a  href="javascript:void(0);" onclick="deleteUsers(' + usersArray[i].id + ')"><img src = "img/delete.png" style = "width:30px ; height: 30px"></a></td></tr>';
        // user_record += '<td><a  href="edit.html?userarray='+usersArray[i]+' "><img src = "img/edit.png" style = "width:30px ; height: 30px"></a><a  href="javascript:void(0);" onclick="deleteUsers(' + usersArray[i].id + ')"><img src = "img/delete.png" style = "width:30px ; height: 30px"></a></td></tr>'; 
        $("#dataTable").append(user_record);


    }
}

// Delete user

const deleteUsers = (id) => {
    alert(id);
    console.log(id);
    var token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
    $.ajax({
        url: "https://gorest.co.in/public/v1/users/" + id,
        type: "DELETE",
        headers:
        {
            'Authorization': 'Bearer ' + token
        },
        success: function (result) {
            getUsers();
            // alert("User deleted successfully");

        },
        error: function (error) {
            alert("error");
            console.log(error);
        }
    });
}






// Add new user

const addUsers = (username, useremail, gender, status) => {

    var token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
    $.ajax({
        url: "https://gorest.co.in/public/v1/users",
        type: "POST",
        headers:
        {
            'Authorization': 'Bearer ' + token
        },
        data: {
            name: username,
            email: useremail,
            gender: gender,
            status: status
        },
        success: function (result) {
            console.log(result);
            alert("User added successfully");
            window.location.href = "Users.html";
            console.log(result);
        },
        error: function (error) {
            alert("add user error");
            console.log(error);
        }
    });
}

// Update user

const updateUser = (userid, username, useremail, gender, status) => {

    var token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
    $.ajax({
        url: "https://gorest.co.in/public/v1/users/" + userid,
        type: "PUT",
        headers:
        {
            'Authorization': 'Bearer ' + token
        },
        data: {
            id: userid,
            name: username,
            email: useremail,
            gender: gender,
            status: status
        },
        success: function (result) {
            alert("User updated successfully");
            window.location.href = "Users.html";
            console.log(result);
        },
        error: function (error) {
            alert("Update user error");
            console.log(error);
        }
    });
}


// var secret = "THESECRET";
// const encrypt = (value) => {
//     var cipher = CryptoJS.AES.encrypt(value, secret);
//     cipher = cipher.toString();
//     return cipher;
// }
