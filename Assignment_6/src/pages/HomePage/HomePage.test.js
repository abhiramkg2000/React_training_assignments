/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";
import App from "../../App";
import UserProvider from "../../context/UserProvider";

describe("Home Page test cases", () => {
  test("check if we are able to logout", async () => {
    render(
      <UserProvider>
        <App />
      </UserProvider>
    );

    //To enter login credentials
    const email = await screen.findByTestId("email");
    await user.type(email, "ad@");
    expect(email).toHaveValue("ad@");

    const password = await screen.findByTestId("password");
    await user.type(password, "1111");
    expect(password).toHaveValue("1111");

    const login = await screen.findByTestId("login");
    await user.click(login);

    //logout clicked
    const logout = await screen.findByTestId("logout");
    await user.click(logout);

    const loginPage = await screen.findByTestId("loginpage");
    expect(loginPage).toBeInTheDocument();
  });
});
