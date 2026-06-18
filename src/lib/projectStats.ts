import type { Project, ProjectStatus } from "../types";

export type ProjectStats = Record<ProjectStatus | "Total", number>;

export function calculateProjectStats(projects: Project[]): ProjectStats {
  return projects.reduce<ProjectStats>(
    (stats, project) => {
      stats.Total += 1;
      stats[project.status] += 1;
      return stats;
    },
    {
      Total: 0,
      Planning: 0,
      "In Progress": 0,
      Blocked: 0,
      Shipped: 0,
    }
  );
}
