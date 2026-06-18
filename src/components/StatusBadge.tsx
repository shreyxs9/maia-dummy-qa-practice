import type { ProjectStatus } from "../types";

type StatusBadgeProps = {
  status: ProjectStatus | "Pending" | "Accepted";
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const className = `status-badge ${status.toLowerCase().replaceAll(" ", "-")}`;

  return <span className={className}>{status}</span>;
}
