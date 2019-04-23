var app = new Vue ({
    el: '#app',
    data: {
        title: "Contacts",
        contactMode: [
            {
                modeKey: "email",
                text: "Email address"
            }, 
            {
                modeKey: "phone",
                text: "Phone number"
            }],
        contactTypeSelected: "email",
        people: [
            { 
            status: "available", 
            name: "Christian",
            email: "Christian@edu",
            phone: "509"
            },
            { 
            status: "away", 
            name: "Joe",
            email: "Christian@edu",
            phone: "509"
          },
          { 
            status: "standby", 
            name: "Lesli",
            email: "Christian@edu",
            phone: "509"
          },
        ]
    }
})