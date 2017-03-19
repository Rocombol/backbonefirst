var editViewTpl = `<div id = "person_input">
                <p>Edit Student</p>
                <div>
                <p>Name</p>
                <input type = "text" id = "name" class = "output" value = <%= name %> />
                </div>
                <div>
                <p>Lastname</p>
                <input type = "text" id = "lastname" class = "output" value = <%= lastname %> />
                </div>
                <div>
                <p>Gender</p>
                <input type = "text" id = "gender" class = "output" value = <%= gender %> />
                </div>
                <div>
                <p>Phone</p>
                <input type = "text" id = "phone" class = "output" value = <%= phone %> />
                </div>
                <div>
                <p>Skype</p>
                <input type = "text" id = "skype" class = "output" value = <%= skype %> />
                </div>
                <div>
                <p>Email</p>
                <input type = "text" id = "email" class = "output" value = <%= email %> />
                </div>    
                <button class = "closeInfo"> Close </button>  
                <button id = "edit_student"> Save </button>  
            </div>`;

