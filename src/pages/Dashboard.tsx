import { useEffect } from "react";

function Dashboard() {
  useEffect(function () {
    document.title = "Dashboard";
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
