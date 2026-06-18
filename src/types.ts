export type ProjectStatus = "Planning" | "In Progress" | "Blocked" | "Shipped";

export type Project = {
  id: number;
  name: string;
  owner: string;
  status: ProjectStatus;
  risk: "Low" | "Medium" | "High";
};

export type RoomMessage = {
  id: number;
  author: string;
  body: string;
  createdAt: string;
};

export type Invite = {
  id: number;
  email: string;
  role: "Member" | "Admin" | "Observer";
  status: "Pending" | "Accepted";
};
