import { render, screen } from "@testing-library/react";
import MainNavigation from "./MainNavigation";
import { MemoryRouter } from "react-router-dom";

// Before each test, we have to render the MainNavigation component
beforeEach(() => {
  console.log("** beforeEach **");
  render(
    <MemoryRouter basename="/">
      <MainNavigation />
    </MemoryRouter>
  );
});

describe("MainNavigation", () => {
  test("renders the title correctly", async () => {
    console.log("** renders the title correctly **");

    // Arrange
    //   render(
    //     <MemoryRouter basename="/">
    //       <MainNavigation />
    //     </MemoryRouter>
    //   );

    //   Act

    // Assert
    const title = await screen.findByText("Théo LEBEN");
    const title2 = await screen.findByText(
      "Appartements et maisons de prestige"
    );
    //   const title = screen.getByText("Appartements et maisons de prestige");
    expect(title).toBeInTheDocument();
    expect(title2).toBeVisible();
  });

  test("renders MainNavigation component", async () => {
    console.log("** renders MainNavigation component **");

    // Arrange
    //   render(
    //     <MemoryRouter basename="/">
    //       <MainNavigation />
    //     </MemoryRouter>
    //   );

    // Act

    // Assert
    const navElement = await screen.findByRole("navigation");
    //   console.log(navigationElement);
    expect(navElement).toBeInTheDocument();
  });

  test("renders navigation and logo links", async () => {
    console.log("** renders navigation and logo links **");

    // Arrange
    //   render(
    //     <MemoryRouter basename="/">
    //       <MainNavigation />
    //     </MemoryRouter>
    //   );

    // Act

    // Assert
    const links = await screen.findAllByRole("link");
    //   console.log(links);
    expect(links.length).toBe(10); // 1 Link + 4 NavLink
  });

  test("renders navigation links", async () => {
    console.log("** renders navigation links **");

    // Arrange
    //   render(
    //     <MemoryRouter basename="/">
    //       <MainNavigation />
    //     </MemoryRouter>
    //   );

    // Act

    // Assert
    const navElement = await screen.findByRole("navigation");
    //   console.log("navElement:", navElement);
    const ulElement = navElement.querySelector("ul");
    //   console.log("ulElement:", ulElement);
    expect(ulElement.children.length).toBe(4);
  });

  test("renders navigation links with correct text and url", async () => {
    console.log("** renders navigation links with correct text **");

    // Arrange
    //   render(
    //     <MemoryRouter basename="/">
    //       <MainNavigation />
    //     </MemoryRouter>
    //   );

    // Act

    // Assert
    const linkTexts = [
      "Accueil",
      "Rechercher",
      "Nos bureaux",
      "Nous contacter",
    ];
    const expectedHrefs = ["/", "/real-estate", "/offices", "/contact"];
    linkTexts.forEach(async (text, index) => {
      const linkElement = await screen.findByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.getAttribute("href")).toBe(expectedHrefs[index]);
    });
  });

  test("renders real estate navigation icon", async () => {
    console.log("** renders real estate navigation icon **");

    // Arrange
    //   render(
    //     <MemoryRouter basename="/">
    //       <MainNavigation />
    //     </MemoryRouter>
    //   );

    // Act

    // Assert
    const iconElement = await screen.findByTestId("real-estate-agent-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
