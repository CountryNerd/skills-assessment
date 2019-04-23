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
            emailAddress: "Christian@edu",
            phoneNumber: "509..."
            },
            { 
            status: "away", 
            name: "Joe",
            emailAddress: "Joe@edu",
            phoneNumber: "509"
          },
          { 
            status: "standby", 
            name: "Lesli",
            emailAddress: "lesli@edu",
            phoneNumber: "509"
          },
        ]
    }
})