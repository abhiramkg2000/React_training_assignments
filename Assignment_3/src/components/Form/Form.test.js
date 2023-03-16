/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render,screen,fireEvent} from "@testing-library/react"; 
 
import React from "react";
import App from '../../App';

test("on initial render check if firstname textfield is present",()=>{
    render(<App/>);
    const firstname=screen.getByTestId("firstname");
    expect(firstname).toBeInTheDocument();
})

test("on initial render check if lastname textfield is present",()=>{
  render(<App/>);
  const lastname=screen.getByTestId("lastname");
  expect(lastname).toBeInTheDocument();
})

test("on initial render check if age combo box is present",()=>{
  render(<App/>);
  const age=screen.getByTestId("age");
  expect(age).toBeInTheDocument();
})

test("on initial render check if male radio button is present",()=>{
  render(<App/>);
  const male=screen.getByTestId("male");
  expect(male).toBeInTheDocument();
})

test("on initial render check if female radio button is present",()=>{
  render(<App/>);
  const female=screen.getByTestId("female");
  expect(female).toBeInTheDocument();
})

test("on initial render check if other radio button is present",()=>{
  render(<App/>);
  const other=screen.getByTestId("other");
  expect(other).toBeInTheDocument();
})

test("check whether the form is hidden initially",()=>{
  render(<App/>);
  const form=screen.getByTestId("form");
  expect(form).toHaveClass("form hidden");
})

test("check whether the form gets displayed after Add user button is clicked ",()=>{
  render(<App/>);
  const submit=screen.getByTestId("adduser");
  const form=screen.getByTestId("form");
  fireEvent.click(submit);
  expect(form).toHaveClass("form active");
})

test("check whether the form is filled",async ()=>{
  render(<App/>)
  const firstname=screen.getByTestId("firstname");
  const lastname=screen.getByTestId("lastname");
  const age=screen.getByTestId("age");
  const gender=screen.getByTestId("male");
  const submit=screen.getByTestId("submit");

  fireEvent.change(firstname,{target:{value:"adithya"}});
  fireEvent.change(lastname,{target:{value:"krishnan"}});
  fireEvent.change(age,{target:{value:22}});
  fireEvent.click(gender)
  
  expect(firstname).toHaveValue("adithya");
  expect(lastname).toHaveValue("krishnan");
  expect(age).toHaveValue(22);
  expect(gender).toBeChecked();

  fireEvent.click(submit);
})