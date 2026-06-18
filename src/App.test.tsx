import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders the training dashboard", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Workspace Operations Board" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Delivery Board" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Messages" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Workspace Access" })).toBeInTheDocument();
  });
});
