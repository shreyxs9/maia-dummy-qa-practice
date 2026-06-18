import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusBadge } from "./StatusBadge";

describe("StatusBadge", () => {
  it("renders the given status", () => {
    render(<StatusBadge status="In Progress" />);

    expect(screen.getByText("In Progress")).toHaveClass("in-progress");
  });
});
