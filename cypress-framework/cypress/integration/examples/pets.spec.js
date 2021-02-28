describe('HTTP API', () => {
    it('Add new pets with different status to the store', function(){
      const petInfo = {
        "id": 5,
        "category": {
          "id": 3,
          "name": "pet"
        },
        "name": "doggie",
        "photoUrls": [
          "https://picsum.photos/id/237/200/300"
        ],
        "tags": [
          {
            "id": 0,
            "name": "Dog"
          }
        ],
        "status": "available"
      }
      cy
      .request('POST', 'https://petstore.swagger.io/v2/pet', petInfo)
      .then((response) => {
        expect(response.status).equal(200)
        cy.log(response)
        
      })
    })
  
    it('Get pets by status sold',()=>{
      cy.request('GET','https://petstore.swagger.io/v2/pet/findByStatus?status=sold').then((response)=>{
          expect(response.status).equal(200)
          expect(response.body[2].name).equal('doggie')
          cy.log(response.body[0].name)
      })
  })
  
  it('Update pet name',()=>{
    const petInfo = {
      "id": 5,
      "category": {
        "id": 3,
        "name": "pet"
      },
      "name": "leo",
      "photoUrls": [
        "https://picsum.photos/id/237/200/300"
      ],
      "tags": [
        {
          "id": 0,
          "name": "Dog"
        }
      ],
      "status": "sold"
    }
  
    cy.request('PUT','https://petstore.swagger.io/v2/pet',petInfo  ).then((response)=>{
        expect(response.status).equal(200)
        expect(response.body.status).equal(petInfo.status)
        expect({ name: response.body.name }).to.eql({ name: 'leo' })
       
    })
  })
  
  it('Upload pet image', function(){
    cy.fixture('slider1.jpg').then((logo) => {
      const blob = Cypress.Blob.base64StringToBlob(logo, 'slider1.jpg');
    const file = new File([blob], 'slider1.jpg', { type: 'image/jpg' })
    cy.log(file)
      cy.intercept('POST', 'https://petstore.swagger.io/v2/pet/5/uploadImage', file).then((response) => {
      cy.log(response)
      })
    })
    })
  })