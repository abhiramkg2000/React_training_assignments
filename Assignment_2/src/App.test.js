/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'

import { render,screen,fireEvent } from "@testing-library/react"; 

import React from "react";
import App from "./App"

test("on initial render check if textbox is present",()=>{
    render(<App/>)
    const inputElement=screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
})

test("on initial render check if button is present",()=>{
    render(<App/>)
    const buttonElement=screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})

test("on initial render,Submit button is disabled",()=>{
    render(<App/>)
    const buttonElement=screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
})

test("check whether submit button gets enabled when the user types 'test'",()=>{
    render(<App/>)
    const buttonElement=screen.getByRole("button");
    const inputElement=screen.getByRole("textbox");
    fireEvent.input(inputElement,{target:{value:"test"}});
    expect(buttonElement).toBeEnabled();
})

test("check whether submit button gets disabled when the user clears the input or types anything other than 'test'",()=>{
    render(<App/>)
    const buttonElement=screen.getByRole("button");
    const inputElement=screen.getByRole("textbox");
    fireEvent.input(inputElement,{target:{value:""}});
    expect(buttonElement).toBeDisabled();
})