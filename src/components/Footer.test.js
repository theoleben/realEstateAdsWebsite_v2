import { findByRole, render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  console.log("** beforeEach **");
  render(
    <MemoryRouter basename="/">
      <Footer />
    </MemoryRouter>
  );
});

describe("Footer", () => {
  test("check if the footer exists", async () => {
    console.log("** check if the footer exists **");
    // Arrange
    // render(
    //   <MemoryRouter basename="/">
    //     <Footer />
    //   </MemoryRouter>
    // );

    // Act

    // Assert
    const footerElement = await screen.findByRole("contentinfo");
    //   console.log(footerElement);
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toBeVisible();
  });

  test("check the number of links", async () => {
    console.log("** check the number of links **");
    // Arrange
    // render(
    //   <MemoryRouter basename="/">
    //     <Footer />
    //   </MemoryRouter>
    // );

    // Act

    // Assert
    const aElements = await screen.findAllByRole("link");
    //   console.log(footerElement);
    expect(aElements.length).toBe(8);
  });

  test("check footer links with correct text and url", async () => {
    console.log("** check footer links with correct text and url **");
    // Arrange
    // render(
    //   <MemoryRouter basename="/">
    //     <Footer />
    //   </MemoryRouter>
    // );

    // Act

    // Assert
    const expectedResults = [
      {
        category: "Services",
        subcategory: [
          { name: "Achat", ref: "/real-estate/transaction/buy" },
          { name: "Location", ref: "/real-estate/transaction/rent" },
        ],
      },
      {
        category: "A notre propos",
        subcategory: [
          { name: "Nos agences", ref: "/offices" },
          { name: "Contact", ref: "/contact" },
        ],
      },
      {
        category: "Légal",
        subcategory: [
          { name: "Mentions légales", ref: "/" },
          { name: "Honoraires d'agence", ref: "/" },
          { name: "Confidentialités", ref: "/" },
          { name: "Politique de cookies", ref: "/" },
        ],
      },
    ];

    const footerElement = await screen.findByRole("contentinfo");
    // console.log(footerElement.children.length);
    //   expect(footerElement).toBeInTheDocument();
    //   expect(footerElement).toBeVisible();
    const child = footerElement.children;
    //   console.log(child.length);
    Array.from(child).forEach((element, index1) => {
      // console.log(element);
      // console.log(element.children.length);
      const child2 = element.children;
      const array = Array.from(child2);
      const subArray = array.slice(1);

      // Category
      expect(array[0].tagName).toBe("LI");
      expect(array[0].textContent).toBe(expectedResults[index1].category);

      // Subcategory
      subArray.forEach((element, index2) => {
        expect(element.tagName).toBe("LI");
        //   console.log(element.chil);
        const aElement = element.querySelector("a");
        expect(aElement.textContent).toBe(
          expectedResults[index1].subcategory[index2].name
        );
        expect(aElement.getAttribute("href")).toBe(
          expectedResults[index1].subcategory[index2].ref
        );
      });
    });
  });
});
