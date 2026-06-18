import type { Invite, Project, RoomMessage } from "./types";

export const seedProjects: Project[] = [
  { id: 1, name: "Pilot workspace rollout", owner: "Asha", status: "In Progress", risk: "Medium" },
  { id: 2, name: "Media upload QA", owner: "Ravi", status: "Blocked", risk: "High" },
  { id: 3, name: "Invite flow polish", owner: "Nina", status: "Planning", risk: "Low" },
];

export const seedMessages: RoomMessage[] = [
  {
    id: 1,
    author: "Asha",
    body: "Can someone verify the invite acceptance copy before the demo?",
    createdAt: "09:15",
  },
  {
    id: 2,
    author: "Ravi",
    body: "Media upload is blocked on a missing validation state.",
    createdAt: "09:28",
  },
];

export const seedInvites: Invite[] = [
  { id: 1, email: "tester@example.com", role: "Member", status: "Pending" },
  { id: 2, email: "lead@example.com", role: "Admin", status: "Accepted" },
];
