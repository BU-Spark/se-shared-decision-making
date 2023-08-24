import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Home_New from './pages/Home_New';

describe('Header', () => {
  test('Header Text shown', async () => {
    render(<Home_New />);
    // const expectedText = 'Home';
    // const textElement = screen.getByText(expectedText);
    // expect(textElement)[0].toBeInTheDocument();
    expect(screen.queryByTestId('header-home')).toBeDefined();
    expect(screen.queryByTestId('header-choices')).toBeDefined();
    expect(screen.queryByTestId('header-stuff')).toBeDefined();
    expect(screen.queryByTestId('header-values')).toBeDefined();
  });
});


describe('Home Hero', () => {
  test('Hero data shown', async () => {
    render(<Home_New />);
    // const expectedText = 'Home';
    // const textElement = screen.getByText(expectedText);
    // expect(textElement)[0].toBeInTheDocument();
    expect(screen.queryByTestId('hero-title')).toBeDefined();
    expect(screen.queryByTestId('hero-desc')).toBeDefined();
  });
});

describe('Home Choices', () => {
  test('Choices Data Shown', async () => {
    render(<Home_New />);
    // const expectedText = 'Home';
    // const textElement = screen.getByText(expectedText);
    // expect(textElement)[0].toBeInTheDocument();
    expect(screen.queryByTestId('choices-title')).toBeDefined();
    expect(screen.queryByTestId('choices-card-title')).toBeDefined();
  });
});