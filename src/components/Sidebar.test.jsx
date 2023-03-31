import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  test("renders sidebar and country links", () => {
    const { getByText } = render(<Sidebar />);
    const sidebarHeading = getByText("Sidebar:");
    expect(sidebarHeading).toBeInTheDocument();

    const countries = [
      { short: "us", name: "United States" },
      { short: "ca", name: "Canada" },
      { short: "gb", name: "United Kingdom" },
    ];
    countries.forEach((country) => {
      const countryLink = getByText(country.name);
      expect(countryLink).toBeInTheDocument();
      expect(countryLink.getAttribute("href")).toBe(`/country/${country.short}`);
    });
  });

  test("dropdown button toggles list of countries", () => {
    const { getByRole, queryByText } = render(<Sidebar />);
    const dropdownButton = getByRole("button");
    expect(dropdownButton).toBeInTheDocument();


    const countryList = queryByText("United States");
    expect(countryList).toBeInTheDocument();

    fireEvent.click(dropdownButton);
    expect(countryList).not.toBeInTheDocument();

    fireEvent.click(dropdownButton);
    expect(countryList).toBeInTheDocument();
  });
});
