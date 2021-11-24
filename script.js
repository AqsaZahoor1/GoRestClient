
const getUsers = () => {

    $.ajax({

        url: "https://gorest.co.in/public/v1/users",
        success: function (result) {
            displayUsers(result.data);
            console.log(result);
            console.log(result.meta.pagination.pages);
            console.log(result.meta.pagination.page);

            $('#dataTable').DataTable({
                "destroy": true,
            });
        }
    });

}
getUsers();

//Display Users

function displayUsers(usersArray) {


    for (let i = 0; i < usersArray.length; i++) {
        user_record = '';
        user_record += '<tr><td>' + usersArray[i].name + '</td>';
        user_record += '<td>' + usersArray[i].email + '</td>';
        user_record += '<td>' + usersArray[i].gender + '</td>';
        user_record += '<td>' + usersArray[i].status + '</td>';
        user_record += '<td><a  href="edit.html?userid=' + usersArray[i].id.toString() + '"><img src = "img/edit.png" style = "width:30px ; height: 30px"></a><a  href="javascript:void(0);" onclick="deleteUsers(' + usersArray[i].id + ')"><img src = "img/delete.png" style = "width:30px ; height: 30px"></a></td></tr>';
        $("#dataTableBody").append(user_record);


    }
}

// Delete user

const deleteUsers = (id) => {

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

            
            $('#myElem').addClass('success');
            document.getElementById("myElem").innerHTML = "User deleted Successfully";
            console.log(result);   
            changeText();
        },
        error: function (error) {
            $('#myElem').addClass('fail');
            document.getElementById("myElem").innerHTML = "Failed to delete user";
            changeText();
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

            $('#myElem').addClass('success');
            document.getElementById("myElem").innerHTML = "User added Successfully";
            console.log(result);
            changeText();
        },
        error: function (error) {

            $('#myElem').addClass('fail');
            document.getElementById("myElem").innerHTML = "Failed to add user";
            changeText();
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

            $('#myElem').addClass('success');
            document.getElementById("myElem").innerHTML = "User Updated Successfully";
            console.log(result);
            changeText();

        },
        error: function (error) {

            $('#myElem').addClass('fail');
            document.getElementById("myElem").innerHTML = "Failed to update user";
            changeText();
            console.log(error);
        }
    });
}

function changeText() {

    setTimeout(function () {
        document.getElementById("myElem").innerHTML = "";
        $('#myElem').removeClass('success');
        $('#myElem').removeClass('fail');
    }, 8000);
}

// var secret = "THESECRET";
// const encrypt = (value) => {
//     var cipher = CryptoJS.AES.encrypt(value, secret);
//     cipher = cipher.toString();
//     return cipher;
// }
