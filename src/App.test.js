import { render, waitFor } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import { getDownloadURL, ref } from "firebase/storage";
import App from "./App";
import { MOCK_REAL_ESTATE } from "./__mocks__/real-estate";
import { MOCK_OFFICES } from "./__mocks__/offices";
import { OFFICES_URL, REAL_ESTATE_URL } from "./firebase/private_constants";

// Mockez le module Firebase Storage
jest.mock("firebase/storage", () => ({
  ...jest.requireActual("firebase/storage"), // use actual implementation for other functions
  ref: jest.fn(),
  getDownloadURL: jest.fn(),
}));

describe("App", () => {
  test("renders the loader", async () => {
    console.log("** renders the loader **");

    const { container } = render(<App />);
    // console.log("container:", container);

    const element = container.querySelector(".loader");
    // console.log(element);
    expect(element).toBeInTheDocument();
  });

  test("check that data are fetch correctly", async () => {
    console.log("** check that data are fetch correctly **");

    window.scrollTo = jest.fn();

    // Simulation du fetch real estate
    // global.fetch = jest
    //   .fn(() =>
    //     Promise.resolve({
    //       json: () => Promise.resolve(MOCK_REAL_ESTATE),
    //     })
    //   )
    //   .mockName("mock-real-estate");

    // Mock fetch implementation
    global.fetch = jest.fn();
    global.fetch
      .mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(MOCK_REAL_ESTATE),
        })
      )
      .mockName("mock-real-estate");

    global.fetch
      .mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(MOCK_OFFICES),
        })
      )
      .mockName("mock-offices");

    // console.log("name:", fetch.getMockName());
    // console.log("calls:", fetch.mock.calls);

    // Simulation des fonctions Firebase Storage
    ref.mockImplementation((path) => path);
    getDownloadURL.mockImplementation((url) => Promise.resolve(url));

    // global.fetch = jest
    //   .fn(() =>
    //     Promise.resolve({
    //       json: () => Promise.resolve(MOCK_OFFICES),
    //     })
    //   )
    //   .mockName("mock-offices");

    // Solution 1 - With Act
    // let cont;
    // await act(async () => {
    //   const { container } = render(<App />);
    //   cont = container;
    // });

    // Solution 2 - Without Act
    // Seems to works fine too
    const { container: cont } = render(<App />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(REAL_ESTATE_URL);
      expect(global.fetch).toHaveBeenCalledWith(OFFICES_URL);
      const element = cont.querySelector(".loader");
      // // console.log(element);
      expect(element).not.toBeInTheDocument();

      // Solution 2 - Without Act
      // const expectedResults = [
      //   "Notre agence",
      //   "Plonger dans l'excellence",
      //   "Nos dernières découvertes",
      // ];

      // expectedResults.forEach((element) => {
      //   const el = screen.getByText(element);
      //   expect(el).toBeInTheDocument();
      //   expect(el).toBeVisible();
      // });
    });

    // Solution 1 - With Act
    // const expectedResults = [
    //   "Notre agence",
    //   "Plonger dans l'excellence",
    //   "Nos dernières découvertes",
    // ];

    // expectedResults.forEach((element) => {
    //   const el = screen.getByText(element);
    //   expect(el).toBeInTheDocument();
    //   expect(el).toBeVisible();
    // });
  });
});
