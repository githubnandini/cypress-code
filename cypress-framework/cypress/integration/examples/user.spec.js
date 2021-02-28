describe('HTTP API', () => {
    it('Create a couple of users from Array/List', function(){
   
      var payload = [{
        id: 4,
        username: "green",
        firstName: "Pgreen",
        lastName: "ery",
        email: "green@gmail.com",
        password: "Test@12345",
        phone: "9876543210",
        userStatus: 0
      },
      {
      id: 5,
      username: "abhj",
      firstName: "asjfksd",
      lastName: "reddy",
      email: "nandini@gmail.com",
      password: "adin@12345",
      phone: "8861603490",
      userStatus: 0
    }
    ];
      cy
        .request('POST', 'https://petstore.swagger.io/v2/user/createWithArray', payload)
        .then((response) => {
          cy.log(response.requestBody)
        })
  
    })
  
    it('Get created user details (of anyone)', function(){
       
      cy.request('GET','https://petstore.swagger.io/v2/user/green').then(response =>{
        expect(response.body.email).to.equal('green@gmail.com')
        expect(response.body.firstName).to.equal('Pgreen')
        expect(response.body.lastName).to.equal('ery')
        expect(response.body.password).to.equal('Test@12345')
        expect(response.body.phone).to.equal('9876543210')
        expect(response.body.userStatus).to.equal(0)
        expect(response.body.username).to.equal('green')
        cy.log(response.body) 
      })  
      })
  
      beforeEach(() => {
        cy.request('https://petstore.swagger.io/v2/user/login?username=xyz&password=pwd').as('datafield');
    });
    
    it('Login created user', () => {
          cy.request('https://petstore.swagger.io/v2/user/login?username=xyz&password=pwd')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
            cy.get('@datafield')
            .its('body')
            .its('message')
            .should('contain', "logged in user ");
        })
       
    it('Logout the user', () => {
          cy.request('https://petstore.swagger.io/v2/user/logout')
            .its('body') 
        })
  
        
   
    it('DELETE user', function(){
      var item = {
        id: 5,
        username: "abhj",
        firstName: "asjfksd",
        lastName: "reddy",
        email: "nandini@gmail.com",
        password: "adin@12345",
        phone: "8861603490",
        userStatus: 0
     }
     cy.request('DELETE', 'https://petstore.swagger.io/v2/user/abhj', item).then(response =>{
       cy.log(response)
      expect(undefined).to.be.undefined
  })
    })
  })