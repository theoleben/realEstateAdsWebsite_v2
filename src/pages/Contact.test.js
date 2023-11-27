import { /*fireEvent,*/ render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

beforeEach(() => {
  console.log("** beforeEach **");
  render(
    <MemoryRouter initialEntries={["/contact"]}>
      <Routes>
        <Route
          path="/"
          element={<Outlet context={[setData, visibilityHandler]} />}
        >
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
});

const setData = jest.fn();
const visibilityHandler = jest.fn();

// const mockDispatchForm = jest.fn();

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useReducer: (reducer, initialState) => {
//     console.log(initialState);
//     return [initialState, mockDispatchForm];
//   },
// }));

describe("Contact", () => {
  test("renders contact page ", async () => {
    console.log("** renders contact page **");
    // Arrange
    // see beforeEach

    // Act

    // Assert
    const titleElement = await screen.findByText("Nous contacter");
    expect(titleElement).toBeInTheDocument();

    const expectedInput = [
      "Nom *",
      "Prénom *",
      "Adresse mail *",
      "Téléphone",
      "Votre message",
    ];

    expectedInput.forEach((input) => {
      const placeholder = screen.getByPlaceholderText(input);
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toBeVisible();
    });

    const submitButton = screen.getByText("Envoyer");
    expect(submitButton).toBeInTheDocument();
  });

  // For this test, we want to have the original implementation of the useReducer hook because we want to have the state updated.
  test("check the internal state of the form", async () => {
    console.log("** check the internal state of the form **");

    // Arrange
    // See beforeEach

    //   Act
    const nameInput = screen.getByPlaceholderText("Nom *");
    const firstNameInput = screen.getByPlaceholderText("Prénom *");
    const emailInput = screen.getByPlaceholderText("Adresse mail *");
    const phoneInput = screen.getByPlaceholderText("Téléphone");
    const messageInput = screen.getByPlaceholderText("Votre message");

    //   console.log(nameInput);
    //   console.log(firstNameInput);

    act(() => {
      userEvent.type(nameInput, "John");
      userEvent.type(firstNameInput, "Doe");
      userEvent.type(emailInput, "JohnDoe@gmail.com");
      userEvent.type(phoneInput, "0123456789");
      userEvent.type(messageInput, "It is a dummy message");

      // fireEvent.change(nameInput, { target: { value: "John" } });
      // fireEvent.change(firstNameInput, { target: { value: "Doe" } });
      // fireEvent.change(emailInput, { target: { value: "JohnDoe@gmail.com" } });
      // fireEvent.change(phoneInput, { target: { value: "0123456789" } });
      // fireEvent.change(messageInput, { target: { value: "It is a dummy message" } });
    });

    // Assert
    // console.log(nameInput.value);
    //   console.log(firstNameInput.value);
    //   console.log(emailInput.value);

    expect(nameInput.value).toBe("John");
    expect(firstNameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("JohnDoe@gmail.com");
    expect(phoneInput.value).toBe("0123456789");
    expect(messageInput.value).toBe("It is a dummy message");

    // Question: Is it possible to check calls of the useReducer dispatch fn directly in this test ?

    // console.log(mockDispatchForm.mock.calls);

    //   expect(mockDispatchForm).toHaveBeenLastCalledWith({
    //     type: "NAME_CHANGE",
    //     value: "John",
    //   });
    //   expect(mockDispatchForm).toHaveBeenCalledTimes(new String("John").length);
  });
});
