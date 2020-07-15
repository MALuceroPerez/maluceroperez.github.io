//Initalize GitHub class
const gitHub = new GitHub;

//Initalize UI class
const uI = new UI;


//Search Input
const searchUser = document.getElementById("searchUser");

// Search input event
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== ''){
        //Make HTTP Call
        gitHub.getUser(userText)
        .then(data => {

            if (data.profile.message === "Not Found"){
                //Show Alert
                uI.showAlert('User not found', 'alert alert-danger');
            } else {
                //Show Profile
                uI.showProfile(data.profile);
                uI.showRepos(data.repos);
            }

        })
        .catch(err => console.log(err));

    } else {
        //Clear Profile
        uI.clearProfile();

    }

});