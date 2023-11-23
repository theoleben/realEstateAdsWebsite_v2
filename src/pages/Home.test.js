import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import RealEstateContext from "../store/real-estate-context";
import {
  MOCK_CONTEXT_REAL_ESTATE,
  MOCK_CONTEXT_OFFICES,
  MOCK_CONTEXT_PICTURES,
} from "../__mocks__/context";

describe("Home", () => {
  test("renders the home page", async () => {
    console.log("** renders the home page **");
    // Arrange
    //   We are rendering the <Home /> component directly with the provider and fake data
    //   Should we mock the context ? If yes, how ?
    render(
      <MemoryRouter basename="/">
        <RealEstateContext.Provider
          value={{
            realEstate: MOCK_CONTEXT_REAL_ESTATE,
            offices: MOCK_CONTEXT_OFFICES,
            pictures: MOCK_CONTEXT_PICTURES,
          }}
        >
          <Home />
        </RealEstateContext.Provider>
      </MemoryRouter>
    );

    // Act

    // Assert
    const expectedResults = [
      "Notre agence",
      "Plonger dans l'excellence",
      "Nos dernières découvertes",
    ];

    expectedResults.forEach((element) => {
      const el = screen.getByText(element);
      expect(el).toBeInTheDocument();
      expect(el).toBeVisible();
    });

    const ulElement = await screen.findByRole("list");
    //   console.log(ulElement);
    //   console.log(ulElement.children);

    Array.from(ulElement.children).forEach((element) => {
      expect(element.tagName).toBe("LI");
      // console.log(element);
      const card = element.querySelector(":first-child");
      // console.log(card);
      expect(card).toHaveClass("card-home");
    });
  });
});
