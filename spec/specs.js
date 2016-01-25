describe('Place', function() {
	it("creates a new Place object with the given properties", function (){
		var testPlace = new Place("Australia","opera house","fall","Australia is cool")
		expect(testPlace.location1).to.equal("Australia");
		expect(testPlace.landmark).to.equal("opera house");
		expect(testPlace.timeOfYear).to.equal("fall");
		expect(testPlace.note).to.equal("Australia is cool");
	});
});





// describe('Contact', function() {
// 	it("creates a new contact with the given properties", function() {
// 		var testContact = new Contact("Rita", "Moreno");
// 		expect(testContact.firstName).to.equal("Rita");
// 		expect(testContact.lastName).to.equal("Moreno");
// 		expect(testContact.addresses).to.eql([]);
// 	});
//
// 	it("adds the fullName method to a contact", function() {
// 		var testContact = new Contact("Sherlock", "Holmes");
// 		expect(testContact.fullName()).to.equal("Sherlock Holmes");
// 	});
//
//
// });
