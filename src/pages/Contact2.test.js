import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import Contact from "./Contact";

const setData = jest.fn();
const visibilityHandler = jest.fn();

// Mock the dispatch function
const mockDispatchForm = jest.fn();

// Mock the useReducer hook
jest.mock("react", () => {
  return {
    ...jest.requireActual("react"),
    useReducer: (reducer, initialState) => {
      //   console.log(initialState);
      return [initialState, mockDispatchForm];
    },
  };
});

// const useReducerSpy = jest.spyOn(React, "useReducer");

// const formReducer = (state, action) => {
//   // Faites ce que vous devez faire dans la réduction
// };

// useReducerSpy.mockImplementation((formReducer, initialState) => {
//   return [initialState, mockDispatchForm];
// });

// For this test, we don't want to have the original implementation of useReducer. We want to check if the dispatch function is called with correct args. Thus, we have to mock this function.
// In order to have this test in "Contact.test.js", we tried to use the spyOn function to restore the original implementation of the useReducer hook for other tests but we didn't succeed.
// That's why it is in a separated file.
test("dispatch fn is called with correct arguments", () => {
  //   mockDispatchForm.mockReset();
  console.log("** dispatch fn is called with correct arguments **");

  // Arrange
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

  // Act
  const nameInput = screen.getByPlaceholderText("Nom *");
  fireEvent.change(nameInput, { target: { value: "John" } });

  const firstNameInput = screen.getByPlaceholderText("Prénom *");
  fireEvent.change(firstNameInput, { target: { value: "Doe" } });

  const emailInput = screen.getByPlaceholderText("Adresse mail *");
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

  const phoneInput = screen.getByPlaceholderText("Téléphone");
  fireEvent.change(phoneInput, { target: { value: "123456789" } });

  const messageInput = screen.getByPlaceholderText("Votre message");
  fireEvent.change(messageInput, { target: { value: "Test message" } });

  const submitButton = screen.getByText("Envoyer");
  fireEvent.click(submitButton);

  // Assert
  //   console.log(useReducerSpy.mock);
  //   console.log(mockDispatchForm.mock);
  //   console.log(mockDispatchForm.mock.calls);
  //   console.log(mockDispatchForm.mock.calls[0][0]);

  expect(mockDispatchForm.mock.calls[0][0]).toStrictEqual({
    type: "NAME_CHANGE",
    value: "John",
  });
  expect(mockDispatchForm.mock.calls[1][0]).toStrictEqual({
    type: "FIRST_NAME_CHANGE",
    value: "Doe",
  });
  expect(mockDispatchForm.mock.calls[2][0]).toStrictEqual({
    type: "EMAIL_CHANGE",
    value: "john.doe@example.com",
  });
  expect(mockDispatchForm.mock.calls[3][0]).toStrictEqual({
    type: "PHONE_CHANGE",
    value: "123456789",
  });
  expect(mockDispatchForm.mock.calls[4][0]).toStrictEqual({
    type: "MESSAGE_CHANGE",
    value: "Test message",
  });
  expect(mockDispatchForm.mock.calls[5][0]).toStrictEqual({
    type: "RESET",
  });
});
