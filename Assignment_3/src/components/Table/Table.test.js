/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render,screen} from "@testing-library/react"; 
  
import React from "react";
import App from '../../App';

test("on initial render check if table is present",()=>{
    render(<App/>);
    const table=screen.getByTestId("table");
    expect(table).toBeInTheDocument();
})