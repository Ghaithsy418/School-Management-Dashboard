// src/components/ComplaintLayout.jsx
import { useState } from "react";
import ComplaintItem from "./ComplaintItem";

const initialComplaints = [
  {
    id: 102,
    title: "Printer not working on the second floor",
    body: "The printer is out of toner. We have an important presentation today and need it fixed urgently.",
    submitter: "S. Teacher",
    seen_at: null,
  },
  {
    id: 101,
    title: "Issue with classroom projector",
    body: "The projector in room 3B is displaying a yellow tint. It makes it difficult to see the content clearly.",
    submitter: "M. Dean",
    seen_at: "2025-08-02T11:30:00Z",
  },
  {
    id: 98,
    title: "Wi-Fi password for guests",
    body: "Several guest lecturers are visiting next week and require guest access to the Wi-Fi network.",
    submitter: "J. Supervisor",
    seen_at: "2025-08-01T09:00:00Z",
  },
  {
    id: 95,
    title: "Broken chair in the staff lounge",
    body: "One of the chairs in the staff lounge has a broken leg and is a safety hazard.",
    submitter: "S. Teacher",
    seen_at: null,
  },
];

const ComplaintLayout = () => {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [expandedId, setExpandedId] = useState(null);

  const unseenCount = complaints.filter((c) => c.seen_at === null).length;

  const handleToggle = (id) => {
    const newExpandedId = expandedId === id ? null : id;
    setExpandedId(newExpandedId);

    if (newExpandedId !== null) {
      const complaint = complaints.find((c) => c.id === id);
      if (complaint && complaint.seen_at === null) {
        const updatedComplaints = complaints.map((c) =>
          c.id === id ? { ...c, seen_at: new Date().toISOString() } : c,
        );
        setComplaints(updatedComplaints);
      }
    }
  };

  return (
    <div className="mx-auto my-10 w-full overflow-hidden rounded-xl border border-slate-200 bg-white font-sans shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-200 p-5">
        <h1 className="text-xl font-bold text-slate-800">
          Complaint Management
        </h1>
        <div className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          New ({unseenCount})
        </div>
      </header>

      <main className="p-2">
        {complaints.map((complaint) => (
          <ComplaintItem
            key={complaint.id}
            complaint={complaint}
            isExpanded={expandedId === complaint.id}
            onToggle={() => handleToggle(complaint.id)}
          />
        ))}
      </main>
    </div>
  );
};

export default ComplaintLayout;
