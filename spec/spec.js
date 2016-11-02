describe('movie-search', function() {

    var searchBox = element(by.model('view.search'));
    var searchButton = element.all(by.tagName('input')).get(1);
    var results = element.all(by.repeater('movie in view.results'));
    var firstResult = element.all(by.repeater('movie in view.results').row(0).column('movie.Title'));


    beforeEach(function() {
        browser.get('http://localhost:8000');
    });


    it('should say booyah', function() {
        expect(true).toBe(true);
    });

    it('should show the input box', function() {
        expect(searchBox.isPresent()).toBe(true);
    });

    it('should show search button', function() {
        expect(searchButton.isPresent()).toBe(true);
    });

    it('should show search results', function() {
        searchBox.sendKeys('Snakes on a Plane');
        searchButton.click();
        expect(results.count()).toBe(5);
    });

    it('should click on search result and test URL', function() {
        searchBox.sendKeys('Snakes on a Plane');
        searchButton.click();
        firstResult.click();
        expect(browser.getCurrentUrl()).toContain('http://localhost:8000/#/tt0417148');
    });
});

describe('search-results', function() {

    var poster = element.all(by.tagName('img')).get(0);


    beforeEach(function() {
        browser.get('http://localhost:8000/#/tt0417148');
    });

    it('should show the poster', function() {

        expect(poster.getAttribute('src')).toEqual("https://images-na.ssl-images-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg")
    });

    it('should show the title', function() {

        expect(element.all(by.tagName('p')).get(0).getText()).toBe("Snakes on a Plane");
    });

    it('should show the Plot', function() {

        expect(element.all(by.tagName('p')).get(2).getText()).toBe("An FBI agent takes on a plane full of deadly and venomous snakes, deliberately released to kill a witness being flown from Honolulu to Los Angeles to testify against a mob boss.");
    });

    it('should show the Metascore', function() {

        expect(element.all(by.tagName('li')).get(2).getText()).toContain("58");
    });

    it('should show the imdbRating', function() {

        expect(element.all(by.tagName('li')).get(3).getText()).toContain("5.6");
    });

});
