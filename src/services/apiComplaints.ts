import { ComplaintTypes } from "@/utils/types";
import { fetcher } from "./fetcher";

export async function addComplaint(body: ComplaintTypes) {
  return fetcher({ url: "/api/addComplaint", method: "POST", body });
}

export async function getPreviousComplaints() {
  return fetcher({ url: "/api/getMyComplaints", method: "GET" });
}

export async function deleteComplaint(body: { complaintId: number }) {
  return fetcher({
    url: `/api/deleteComplaint/${body.complaintId}`,
    method: "DELETE",
  });
}

export async function updateComplaint(body: {
  complaint: string;
  category: string;
  complaint_id: number;
}) {
  return fetcher({ url: "/api/updateComplaint", method: "POST", body });
}

export async function getUnSeenComplaints() {
  return fetcher({ url: "/api/getUnSeenComplaints", method: "GET" });
}

export async function getAllComplaints(body: { withTrash: boolean }) {
  return fetcher({ url: "/api/getAllComplaints", method: "POST", body });
}

export async function markComplaintAsSeen(body: { id: number }) {
  return fetcher({
    url: "/api/seenAt",
    method: "POST",
    body: { ids: [body.id] },
  });
}

export async function modifyComplaint(body: {
  complaint_id: number;
  status?: string;
  priority?: string;
}) {
  return fetcher({ url: "/api/modifyComplaint", method: "POST", body });
}
