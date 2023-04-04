import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import PuzzleHeader from './PuzzleHeader';
import { readDefaultData} from "./acrosticData";
import {Puzzle, getPuzzle} from "./Puzzle";

test('renders learn react link', () => {
  let pj: Puzzle = getPuzzle();
  if(pj.isValid())
       console.log("puzzle valid");
  else
    console.log("puzzle invalid");


  render(<App />);
  const linkElement = screen.getAllByTestId("ax-grid__body");
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getAllByTestId("ax-grid__row");
  expect(linkElement2.length).toBeGreaterThan(4)
});
