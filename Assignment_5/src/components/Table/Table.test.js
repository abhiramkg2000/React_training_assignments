/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

import React from "react";
import App from "../../App";

jest.setTimeout(6000);

test("on initial render check if table is present", () => {
  render(<App />);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
});

test ("check whether the form data enters the table after submit",async()=>{
  render(<App />);

  //To enter values in the form
  const firstname = screen.getByTestId("firstname");
  await user.type(firstname, "ad");

  const lastname = screen.getByTestId("lastname");
  await user.type(lastname, "kr");

  const age = screen.getByTestId("age");
  await user.type(age, "22");

  const gender = screen.getByTestId("male");
  await user.click(gender);

  //To submit the form so that the data is entered in the table
  const submit = screen.getByTestId("submit");
  await user.click(submit);

  const tableRow=screen.getAllByTestId("rowData");
  expect(tableRow).toHaveLength(4);
});

test ("check whether the form data enters the table after 5s",async()=>{
  render(<App />);

  //To enter values in the form
  const firstname = screen.getByTestId("firstname");
  await user.type(firstname, "ad");

  const lastname = screen.getByTestId("lastname");
  await user.type(lastname, "kr");

  const age = screen.getByTestId("age");
  await user.type(age, "22");

  const gender = screen.getByTestId("male");
  await user.click(gender);

  await waitFor(() => new Promise((r) => setTimeout(r, 5000)), {
    timeout: 6000,
  });

  const tableRow=screen.getAllByTestId("rowData");
  expect(tableRow).toHaveLength(4);
});

test("check if we are able to edit the table data", async () => {
  render(<App />);

  //To enter values in the form
  const firstname = await screen.findByTestId("firstname");
  await user.type(firstname, "ad");
  expect(firstname).toHaveValue("ad");

  const lastname = await screen.findByTestId("lastname");
  await user.type(lastname, "kr");
  expect(lastname).toHaveValue("kr");

  const age = await screen.findByTestId("age");
  await user.type(age, "22");
  expect(age).toHaveValue(22);

  const gender = await screen.findByTestId("male");
  await user.click(gender);
  expect(gender).toBeChecked();

  await waitFor(() => new Promise((r) => setTimeout(r, 5000)), {
    timeout: 6000,
  });

  //To check whether we are able to edit the table data
  const editFields = await screen.findAllByTestId("Edit");

  //FirstName
  await user.clear(editFields[0]);
  await user.type(editFields[0], "al");
  expect(editFields[0]).toHaveValue("al");

  //LastName
  await user.clear(editFields[1]);
  await user.type(editFields[1], "jh");
  expect(editFields[1]).toHaveValue("jh");

  //Age
  await user.clear(editFields[2]);
  await user.type(editFields[2], "23");
  expect(editFields[2]).toHaveValue("23");

  //Gender
  await user.clear(editFields[3]);
  await user.type(editFields[3], "other");
  expect(editFields[3]).toHaveValue("other");
});
