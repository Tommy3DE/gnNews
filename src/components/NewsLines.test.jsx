import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import NewsLines from "./NewsLines";

// Mock useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("NewsLines", () => {
  it("renders a list of articles with their titles and source name", () => {
    const articles = [
      {
        title: "Article 1",
        source: { name: "Source 1" },
        publishedAt: new Date("2022-01-01").toString(),
      },
      {
        title: "Article 2",
        source: { name: "Source 2" },
        publishedAt: new Date("2022-01-02").toString(),
      },
    ];
    const { getByText } = render(<NewsLines articles={articles} />);
    expect(getByText("Article 1")).toBeInTheDocument();
    expect(getByText("Source 1")).toBeInTheDocument();
    expect(getByText("Article 2")).toBeInTheDocument();
    expect(getByText("Source 2")).toBeInTheDocument();
  });

  it("renders a NewsCard when showNewsCard is true and selectedArticle is the current article", () => {
    const articles = [
      {
        title: "Article 1",
        source: { name: "Source 1" },
        publishedAt: new Date("2022-01-01").toString(),
      },
      {
        title: "Article 2",
        source: { name: "Source 2" },
        publishedAt: new Date("2022-01-02").toString(),
      },
    ];
    const handleToggle = jest.fn();
    const selectedArticle = articles[0];
    const { getByText } = render(
      <NewsLines
        articles={articles}
        handleToggle={handleToggle}
        showNewsCard={true}
        selectedArticle={selectedArticle}
      />
    );
    expect(getByText("Article 1")).toBeInTheDocument();
    fireEvent.click(getByText("Article 1"));
    expect(handleToggle).toHaveBeenCalledWith(selectedArticle);
  });

  it("navigates to the article page when a title is clicked", () => {
    const articles = [
      {
        title: "Article 1",
        source: { name: "Source 1" },
        publishedAt: new Date("2022-01-01").toString(),
      },
    ];
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const { getByText } = render(<NewsLines articles={articles} />);
    fireEvent.click(getByText("Article 1"));
    expect(navigate).toHaveBeenCalledWith(
      expect.stringContaining("/news?title=Article%201")
    );
  });
});
