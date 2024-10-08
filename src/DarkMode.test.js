import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DarkMode from "./components/DarkMode";

// 1
test("renders dark mode component", () => {
  render(<DarkMode />);

  // 2
  const inputElement = screen.getByRole("checkbox");
  expect(inputElement).toBeInTheDocument();
});

// 3
test("toggles dark mode", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox");

  // 4
  expect(inputElement.checked).toEqual(false);
  fireEvent.click(inputElement);
  expect(inputElement.checked).toEqual(true);

  // 5
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});