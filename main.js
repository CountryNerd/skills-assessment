var app = new Vue ({
    el: '#app',
    data: {
        title: "Contacts",
        contactMode: [
            {
                modeKey: "phone",
                text: "Phone number"
            }, 
            {
                modeKey: "email",
                text: "Email address"
            }, 
        ],
        contactTypeSelected: "email",
        people: [
            { 
            status: "available", 
            name: "Christian",
            emailAddress: "Christian@yahoo.com",
            phoneNumber: "509-555-1234", 
            selectedInfo: "Christian@ahoo.com"
            },
            { 
            status: "available", 
            name: "Rich",
            emailAddress: "rich@tripod.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "rich@tripod.com"
          },
          { 
            status: "available", 
            name: "Scott",
            emailAddress: "scott@mailinator.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "scott@mailinator.com"
          },
          { 
            status: "available", 
            name: "Danny",
            emailAddress: "danny@hotmail.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "danny@hotmail.com"
          },
          { 
            status: "away", 
            name: "Taka",
            emailAddress: "taka@myspace.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "taka@myspace.com"
          },
          { 
            status: "standby", 
            name: "Tim",
            emailAddress: "tim@netscape.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "tim@netscape.com"
          },
          { 
            status: "available", 
            name: "Patrick",
            emailAddress: "patrick@live.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "patrick@live.com"
          },
          { 
            status: "standby", 
            name: "Jacques",
            emailAddress: "jacques@aol.com",
            phoneNumber: "509-555-1234",
            selectedInfo: "jacques@aol.com"
          },
        ]
    },
    watch: {
        contactTypeSelected: function() {
            this.people.forEach(person => {
                if(this.contactTypeSelected == "email"){
                    person.selectedInfo = person.emailAddress;
                } else{
                    person.selectedInfo = person.phoneNumber;
                } 
            });
        }
    }
})