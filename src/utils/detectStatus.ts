export function detectStatus(status: string) {
  if (status === "pending")
    return {
      color: "text-slate-100",
      bgColor: "bg-slate-600",
    };
  if (status === "processing")
    return {
      color: "text-amber-100",
      bgColor: "bg-amber-600",
    };
  if (status === "resolved")
    return {
      color: "text-green-100",
      bgColor: "bg-green-600",
    };
  if (status === "rejected")
    return {
      color: "text-red-100",
      bgColor: "bg-red-600",
    };
}
