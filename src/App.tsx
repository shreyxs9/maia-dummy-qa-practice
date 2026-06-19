import { CheckCircle2, MessageSquare, Search, Send, UserPlus } from "lucide-react";
import { useMemo, useState } from "react";
import { StatusBadge } from "./components/StatusBadge";
import { seedInvites, seedMessages, seedProjects } from "./data";
import { calculateProjectStats } from "./lib/projectStats";
import type { Invite, Project, ProjectStatus, RoomMessage } from "./types";

const statusOptions: ProjectStatus[] = ["Planning", "In Progress", "Blocked", "Shipped"];

export function App() {
  const [projects, setProjects] = useState<Project[]>(seedProjects);
  const [messages, setMessages] = useState<RoomMessage[]>(seedMessages);
  const [invites, setInvites] = useState<Invite[]>(seedInvites);
  const [projectSearch, setProjectSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">("All");
  const [notice, setNotice] = useState("Complete the TODO features through pull requests.");

  const projectStats = useMemo(() => calculateProjectStats(projects), [projects]);

  
    const visibleProjects = projects.filter((project) => {
    const normalizedSearch = projectSearch.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 || project.name.toLowerCase().includes(normalizedSearch);
    // statusFilter is handled in a separate PR (feature/project-status-filter).
    return matchesSearch;
  });
    

  function handleCreateProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Intern task: read form values, validate name/owner, add project, and write tests.
    setNotice("TODO: create project with validation.");
  }

  function handleSendMessage(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  const body = (form.elements.namedItem("message") as HTMLInputElement).value;

  const newMessage: RoomMessage = {
    id: Date.now(),
    author: "You",
    body,
    createdAt: new Date().toLocaleTimeString(),
  };

  setMessages((current) => [...current, newMessage]);
  form.reset();
}

  function handleInvite(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Intern task: validate email, prevent duplicate pending invites, and test failures.
    setNotice("TODO: invite user with email validation.");
  }

  function markProjectShipped(projectId: number) {
    setProjects((current) =>
      current.map((project) =>
        project.id === projectId ? { ...project, status: "Shipped", risk: "Low" } : project
      )
    );
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Dummy MAIA-style Training App</p>
          <h1>Workspace Operations Board</h1>
          <p className="hero-copy">
            A safe practice app for feature branches, PR reviews, UI tests, and manual QA reports.
          </p>
        </div>
        <div className="notice">{notice}</div>
      </header>

      <section className="stats-grid" aria-label="Project summary">
        {Object.entries(projectStats).map(([label, count]) => (
          <div className="stat-card" key={label}>
            <span>{label}</span>
            <strong>{count}</strong>
          </div>
        ))}
      </section>

      <section className="workspace-grid">
        <section className="panel project-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Delivery Board</h2>
            </div>
            <CheckCircle2 aria-hidden="true" />
          </div>

          <div className="controls">
            <label>
              <span>Search projects</span>
              <div className="input-icon">
                <Search aria-hidden="true" size={16} />
                <input
                  value={projectSearch}
                  onChange={(event) => setProjectSearch(event.target.value)}
                  placeholder="Search by project name"
                />
              </div>
            </label>

            <label>
              <span>Status</span>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as ProjectStatus | "All")}
              >
                <option value="All">All</option>
                {statusOptions.map((status) => (
                  <option value={status} key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <form className="inline-form" onSubmit={handleCreateProject}>
            <input name="name" placeholder="Project name" />
            <input name="owner" placeholder="Owner" />
            <select name="status" defaultValue="Planning">
              {statusOptions.map((status) => (
                <option value={status} key={status}>
                  {status}
                </option>
              ))}
            </select>
            <button type="submit">Add Project</button>
          </form>

          <div className="project-list">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.id}>
                <div>
                  <h3>{project.name}</h3>
                  <p>Owner: {project.owner}</p>
                </div>
                <div className="project-meta">
                  <StatusBadge status={project.status} />
                  <span className={`risk risk-${project.risk.toLowerCase()}`}>{project.risk} risk</span>
                  <button type="button" onClick={() => markProjectShipped(project.id)}>
                    Ship
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Team room</p>
              <h2>Messages</h2>
            </div>
            <MessageSquare aria-hidden="true" />
          </div>

          <div className="message-list">
            {messages.map((message) => (
              <article className="message-card" key={message.id}>
                <strong>{message.author}</strong>
                <span>{message.createdAt}</span>
                <p>{message.body}</p>
              </article>
            ))}
          </div>

          <form className="message-form" onSubmit={handleSendMessage}>
            <input name="message" placeholder="Write an update" />
            <button aria-label="Send message" type="submit">
              <Send size={18} />
            </button>
          </form>
        </section>

        <section className="panel invite-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Invites</p>
              <h2>Workspace Access</h2>
            </div>
            <UserPlus aria-hidden="true" />
          </div>

          <form className="invite-form" onSubmit={handleInvite}>
            <input name="email" placeholder="teammate@example.com" />
            <select name="role" defaultValue="Member">
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
              <option value="Observer">Observer</option>
            </select>
            <button type="submit">Invite</button>
          </form>

          <ul className="invite-list">
            {invites.map((invite) => (
              <li key={invite.id}>
                <span>{invite.email}</span>
                <small>{invite.role}</small>
                <StatusBadge status={invite.status} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
