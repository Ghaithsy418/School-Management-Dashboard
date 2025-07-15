import { PiSmileySadLight } from "react-icons/pi";

function NoMoreEvents() {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center gap-4 bg-gray-50 p-12 text-center">
      <PiSmileySadLight className="h-20 w-20 text-slate-400" />

      <p className="text-xl font-semibold text-slate-600">
        No more events to show!
      </p>
    </div>
  );
}

export default NoMoreEvents;
