 /**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render,screen,fireEvent} from "@testing-library/react"; 

import React from "react";
import App from '../../App';

test("check if user is able to select the checkboxes one at a time",()=>{
   render(<App/>);
   const male=screen.getByTestId("male");
   const female=screen.getByTestId("female");
   const other=screen.getByTestId("other");
   fireEvent.click(male);
   expect(male).toBeChecked();
   fireEvent.click(female);
   expect(female).toBeChecked();
   fireEvent.click(other);
   expect(other).toBeChecked();
})