import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewsCard from "./NewsCard";

describe("NewsCard", () => {
  const article = {
    title: "Test News",
    author: "Test Author",
    content: "This is a test news article.",
    url: "https://example.com",
  };

  it("renders news article information", () => {
    render(<NewsCard article={article} handleToggle={() => {}} />);
    
    const titleElement = screen.getByText("Test News");
    expect(titleElement).toBeInTheDocument();

    const authorElement = screen.getByText("Test Author");
    expect(authorElement).toBeInTheDocument();

    const contentElement = screen.getByText("This is a test news article.");
    expect(contentElement).toBeInTheDocument();

    const linkElement = screen.getByRole("button", { name: "Link" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  it("calls handleToggle when close button is clicked", () => {
    const handleToggleMock = jest.fn();
    render(<NewsCard article={article} handleToggle={handleToggleMock} />);

    const closeButton = screen.getByRole("button", { name: "close" });
    fireEvent.click(closeButton);

    expect(handleToggleMock).toHaveBeenCalled();
  });
});
