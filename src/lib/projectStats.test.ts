import { describe, expect, it } from "vitest";
import { calculateProjectStats } from "./projectStats";
import type { Project } from "../types";

describe("calculateProjectStats", () => {
  it("counts projects by status", () => {
    const projects: Project[] = [
      { id: 1, name: "One", owner: "Asha", status: "Planning", risk: "Low" },
      { id: 2, name: "Two", owner: "Ravi", status: "Blocked", risk: "High" },
      { id: 3, name: "Three", owner: "Nina", status: "Blocked", risk: "Medium" },
    ];

    expect(calculateProjectStats(projects)).toEqual({
      Total: 3,
      Planning: 1,
      "In Progress": 0,
      Blocked: 2,
      Shipped: 0,
    });
  });

  it("returns zero counts for an empty list", () => {
    expect(calculateProjectStats([])).toEqual({
      Total: 0,
      Planning: 0,
      "In Progress": 0,
      Blocked: 0,
      Shipped: 0,
    });
  });
});
