import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Detail from './Detail'

test('Renders content', ()=>{
    const component = render(<Detail/>)
})