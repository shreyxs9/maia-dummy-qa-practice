import { fireEvent, render, screen } from "@testing-library/react";import { describe, expect, it } from "vitest";
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

describe("Send Message", () => {
  it("adds a message to the list", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Write an update");
    fireEvent.change(input, { target: { value: "Hello team!" } });
    fireEvent.submit(input.closest("form")!);
    expect(screen.getByText("Hello team!")).toBeInTheDocument();
  });

  it("blocks empty messages", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Write an update");
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.submit(input.closest("form")!);
    expect(screen.getByText("Message cannot be empty.")).toBeInTheDocument();
  });
});

describe("Invite User", () => {
  it("adds a valid invite", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("teammate@example.com");
    fireEvent.change(input, { target: { value: "new@example.com" } });
    fireEvent.submit(input.closest("form")!);
    expect(screen.getByText("new@example.com")).toBeInTheDocument();
  });

  it("blocks an invalid email", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("teammate@example.com");
    fireEvent.change(input, { target: { value: "not-an-email" } });
    fireEvent.submit(input.closest("form")!);
    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
  });

  it("blocks a duplicate pending invite", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("teammate@example.com");
    fireEvent.change(input, { target: { value: "dup@example.com" } });
    fireEvent.submit(input.closest("form")!);
    fireEvent.change(input, { target: { value: "dup@example.com" } });
    fireEvent.submit(input.closest("form")!);
    expect(
      screen.getByText("dup@example.com already has a pending invite.")
    ).toBeInTheDocument();
  });
});
