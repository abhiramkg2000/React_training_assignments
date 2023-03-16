/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";
import App from "../../App";

test("check if user is able to select the checkboxes one at a time", async () => {
  render(<App />);
  const male = screen.getByTestId("male");
  const female = screen.getByTestId("female");
  const other = screen.getByTestId("other");
  await user.click(male);
  expect(male).toBeChecked();
  await user.click(female);
  expect(female).toBeChecked();
  await user.click(other);
  expect(other).toBeChecked();
});
