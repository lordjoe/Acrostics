import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import PersistentObject from "./PersistentObject";


test('renders learn react link', () => {
//  let pj: Puzzle = PersistentObject.getInstance().getPuzzle();
//  if(pj.isValid())
 //      console.log("puzzle valid");
//  else
 //   console.log("puzzle invalid");
  let dateStr = "Acrostic-2000-3-20.json";
  let date: Date = PersistentObject.buildDate(dateStr);
  let s: string = PersistentObject.stringFromDate(date);

  render(<App />);
//  const linkElement = screen.getAllByTestId("ax-grid__body");
//  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getAllByTestId("ax-grid__row");
  expect(linkElement2.length).toBeGreaterThan(4);

});
