describe('Place', function() {
	it("creates a new Place object with the given properties", function (){
		var testPlace = new Place("Australia","opera house","fall","Australia is cool")
		expect(testPlace.location1).to.equal("Australia");
		expect(testPlace.landmark).to.equal("opera house");
		expect(testPlace.timeOfYear).to.equal("fall");
		expect(testPlace.note).to.equal("Australia is cool");
	});
});
