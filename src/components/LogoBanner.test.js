import { MemoryRouter } from "react-router-dom";
import LogoBanner from "./LogoBanner";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  console.log("** beforeEach **");
  render(
    <MemoryRouter basename="/">
      <LogoBanner />
    </MemoryRouter>
  );
});

describe("LogoBanner", () => {
  test("check number of links", async () => {
    console.log("** check number of links **");

    // Arrange
    // render(
    //   <MemoryRouter basename="/">
    //     <LogoBanner />
    //   </MemoryRouter>
    // );

    //   Act

    // Assert
    const ulElement = await screen.findByRole("list");
    expect(ulElement).toBeInTheDocument();
    expect(ulElement).toBeVisible();
    expect(ulElement.children.length).toBe(5);
  });

  test("checks that links have the correct href, target and rel attributes", async () => {
    console.log(
      "** checks that links have the correct href, target and rel attributes **"
    );

    // Arrange
    // render(
    //   <MemoryRouter basename="/">
    //     <LogoBanner />
    //   </MemoryRouter>
    // );

    //   Act

    // Assert
    const aElements = await screen.findAllByRole("link");
    // console.log(aElements);

    const expectedAttributes = [
      { href: "https://twitter.com/", target: "_blank", rel: "noreferrer" },
      {
        href: "https://www.facebook.com/",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        href: "https://www.instagram.com/",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        href: "https://fr.linkedin.com/in/theo-leben",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        href: "https://github.com/theoleben/realEstateAdsWebsite_v2",
        target: "_blank",
        rel: "noreferrer",
      },
    ];

    expect(aElements.length).toBe(expectedAttributes.length);

    aElements.forEach((link, index) => {
      const { href, target, rel } = expectedAttributes[index];

      // Check attributes
      expect(link.getAttribute("href")).toBe(href);
      expect(link.getAttribute("target")).toBe(target);
      expect(link.getAttribute("rel")).toBe(rel);
    });
  });
});
