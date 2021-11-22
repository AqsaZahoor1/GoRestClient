

   

const getUsers = () => {

    // for(let i= 1 ; i <= 112 ; i++)
    // {

    $.ajax({

        // url: "https://gorest.co.in/public/v1/users?page=" +i,
        url: "https://gorest.co.in/public/v1/users",
        success: function (result) {
        // console.log(result.data);
        displayUsers(result.data);

        }
    });
// }
}
getUsers();

// function displayUsers(usersArray) {

//     // console.log(usersArray);
//     // console.log(typeof (usersArray));
//     // console.log(Array.isArray(usersArray));

//     var userArray  = usersArray;
//     var user_record = '';
//     for (let i = 0; i < 20; i++) {
//         user_record += '<tr><td>' + usersArray[i].name + '</td>';
//         user_record += '<td>' + usersArray[i].email + '</td>';
//         user_record += '<td>' + usersArray[i].gender + '</td>';
//         user_record += '<td>' + usersArray[i].status + '</td>';
//         user_record += '<td><a  href=javascript:void(0); onclick=alert("Hi");><img src = "img/edit.png" style = "width:30px ; height: 30px"></a><a  href="javascript:void(0);" onclick=deleteUsers(userArray[i].id)><img src = "img/delete.png" style = "width:30px ; height: 30px"></a></td></tr>';
//         $("#dataTable").append(user_record);
//         user_record = '';
//     }



// }



function displayUsers(usersArray) {

    for (let i = 0; i < usersArray.length; i++) {
        user_record = '';
        user_record += '<tr><td>' + usersArray[i].name + '</td>';
        user_record += '<td>' + usersArray[i].email + '</td>';
        user_record += '<td>' + usersArray[i].gender + '</td>';
        user_record += '<td>' + usersArray[i].status + '</td>';
        user_record += '<td><a  href="edit.html?userid='+usersArray[i].id+'&username=' +usersArray[i].name+'&useremail=' +usersArray[i].email+'&usergender=' +usersArray[i].gender+'&userstatus=' +usersArray[i].status+'  "><img src = "img/edit.png" style = "width:30px ; height: 30px"></a><a  href="javascript:void(0);" onclick="deleteUsers(' + usersArray[i].id + ')"><img src = "img/delete.png" style = "width:30px ; height: 30px"></a></td></tr>';
        $("#dataTable").append(user_record);
        
    }
}


// const deleteUsers = (id) => {
//     alert(id);
//     console.log(id);
//     let token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
// 1f51df622be849a48958096b04cfc14a93b6226470ac74710082d5152b3c9cab
//     $.ajax({

//         url: "https://gorest.co.in/public/v1/users/" + id,
//         type: "DELETE",
//         headers: {
//             'Authorization': 'Bearer' + token
//         },

//         success: function (result) {
//             alert("Success");
//             console.log(result);

//         },
//         error: function (error) {
//             alert("error");
//             console.log(error);
//         }
//     });
// }

const deleteUsers = (id) => {
    // alert(id);
    console.log(id);
        var token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
        $.ajax({
            url: "https://gorest.co.in/public/v1/users/" + id,
            type: "DELETE",
            headers:
            {
                'Authorization' : 'Bearer ' + token
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



const addUsers = (username , useremail , gender , status) => {
    
        var token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
        $.ajax({
            url: "https://gorest.co.in/public/v1/users",
            type: "POST",
            headers:
            {
                'Authorization' : 'Bearer ' + token
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

    const updateUser = (userid , username , useremail , gender , status) => {
    
        var token = "cb74b84591555045064bf32abcdfb53742ebb62de431f40a63e4b5b391a93ace";
        $.ajax({
            url: "https://gorest.co.in/public/v1/users/"+userid,
            type: "PUT",
            headers:
            {
                'Authorization' : 'Bearer ' + token
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
                alert("add user error");
                console.log(error);
            }
        });
    }