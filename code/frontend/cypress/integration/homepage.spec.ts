describe("Home Page Test", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("can see the page heading", () => {
        cy.getBySel("page-heading")
            .get("a")
            .should("contain.text", "Search Movies");
    });

    it("can search", () => {
        cy.getBySel("input-search").type("Pokemon{Enter}");
        cy.getBySel("movie-card").should("not.have.length", 0);
    });

    it("empty result", () => {
        cy.getBySel("input-search").type("asdaasdqeqwe {Enter}");
        cy.getBySel("movie-card").should("have.length", 0);
    });

    it("Load more items", () => {
        cy.scrollTo("bottom");
        cy.scrollTo("bottom");
        cy.getBySel("movie-card").should("have.length.greaterThan", 10);
    });
});
