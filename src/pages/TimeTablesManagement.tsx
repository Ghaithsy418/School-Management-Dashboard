// import { BookOpen, Clock, RotateCcw, Save } from "lucide-react";
// import { useState } from "react";

// // Subject enum - you can modify these based on your curriculum
// const SUBJECTS = [
//   "Mathematics",
//   "Physics",
//   "Chemistry",
//   "Biology",
//   "English",
//   "History",
//   "Geography",
//   "Computer Science",
//   "Physical Education",
//   "Art",
//   "Music",
//   "Economics",
//   "Psychology",
//   "Philosophy",
// ];

// const SEMESTERS = ["First", "Second"];

// export default function TimeTablesManagement({
//   classes = [],
//   isGettingClasses = false,
// }) {
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//   const sessions = [
//     "8:00-9:00",
//     "9:00-10:00",
//     "10:00-11:00",
//     "11:00-12:00",
//     "12:00-13:00",
//     "13:00-14:00",
//     "14:00-15:00",
//   ];

//   // Form state
//   const [selectedClass, setSelectedClass] = useState("");
//   const [selectedSemester, setSelectedSemester] = useState("");

//   // Initialize schedule state
//   const [schedule, setSchedule] = useState(() => {
//     const initialSchedule = {};
//     days.forEach((day) => {
//       initialSchedule[day] = {};
//       sessions.forEach((session) => {
//         initialSchedule[day][session] = {
//           subject: "",
//           instructor: "",
//         };
//       });
//     });
//     return initialSchedule;
//   });

//   const [selectedCell, setSelectedCell] = useState(null);

//   const updateSchedule = (day, session, field, value) => {
//     setSchedule((prev) => ({
//       ...prev,
//       [day]: {
//         ...prev[day],
//         [session]: {
//           ...prev[day][session],
//           [field]: value,
//         },
//       },
//     }));
//   };

//   const clearSchedule = () => {
//     const clearedSchedule = {};
//     days.forEach((day) => {
//       clearedSchedule[day] = {};
//       sessions.forEach((session) => {
//         clearedSchedule[day][session] = { subject: "", instructor: "" };
//       });
//     });
//     setSchedule(clearedSchedule);
//     setSelectedCell(null);
//   };

//   const saveSchedule = () => {
//     if (!selectedClass || !selectedSemester) {
//       alert(
//         "Please select both class and semester before saving the schedule.",
//       );
//       return;
//     }

//     const scheduleData = {
//       class: selectedClass,
//       semester: selectedSemester,
//       schedule: schedule,
//     };

//     console.log("Schedule saved:", scheduleData);
//     alert("Schedule saved successfully!");
//   };

//   const selectCell = (day, session) => {
//     setSelectedCell({ day, session });
//   };

//   const isSelected = (day, session) => {
//     return selectedCell?.day === day && selectedCell?.session === session;
//   };

//   const hasContent = (day, session) => {
//     const cell = schedule[day][session];
//     return cell.subject || cell.instructor;
//   };

//   return (
//     <div className="mx-auto min-h-screen max-w-7xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
//       <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/80 shadow-xl backdrop-blur-sm">
//         {/* Header */}
//         <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="relative flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
//                 <BookOpen className="h-7 w-7" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">Weekly Class Schedule</h1>
//                 <p className="text-sm text-white/80">
//                   Create and manage your teaching schedule
//                 </p>
//               </div>
//             </div>
//             <div className="flex space-x-3">
//               <button
//                 onClick={clearSchedule}
//                 className="flex items-center space-x-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
//               >
//                 <RotateCcw className="h-4 w-4" />
//                 <span className="font-medium">Clear All</span>
//               </button>
//               <button
//                 onClick={saveSchedule}
//                 className="flex items-center space-x-2 rounded-xl bg-emerald-500 px-6 py-3 shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:shadow-emerald-500/25"
//               >
//                 <Save className="h-4 w-4" />
//                 <span className="font-medium">Save Schedule</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Selection Controls */}
//         <div className="border-b border-gray-100 p-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             {/* Class Selection */}
//             <div className="group relative">
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
//               <div className="relative rounded-2xl border border-rose-200/50 bg-gradient-to-br from-rose-50 to-pink-50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10">
//                 <div className="mb-4 flex items-center space-x-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg">
//                     <svg
//                       className="h-5 w-5 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 9l4-4 4 4m0 6l-4 4-4-4"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-800">
//                       Choose Class
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Select a class to create schedule
//                     </p>
//                   </div>
//                 </div>
//                 <select
//                   value={selectedClass}
//                   onChange={(e) => setSelectedClass(e.target.value)}
//                   disabled={isGettingClasses}
//                   className="h-14 w-full rounded-xl border border-rose-200 bg-white/80 px-4 text-base backdrop-blur-sm transition-all duration-200 hover:border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 disabled:cursor-not-allowed disabled:bg-gray-100"
//                 >
//                   <option value="">
//                     {isGettingClasses
//                       ? "Loading Classes..."
//                       : "Click to select a class..."}
//                   </option>
//                   {classes?.map((classData) => (
//                     <option
//                       key={classData.className}
//                       value={classData.className}
//                     >
//                       {classData.className}
//                     </option>
//                   ))}
//                 </select>
//                 {!classes?.length && !isGettingClasses && (
//                   <p className="mt-3 text-sm font-medium text-rose-600">
//                     You are not teaching any class right now
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Semester Selection */}
//             <div className="group relative">
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
//               <div className="relative rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
//                 <div className="mb-4 flex items-center space-x-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
//                     <svg
//                       className="h-5 w-5 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-800">
//                       Choose Semester
//                     </h3>
//                     <p className="text-sm text-gray-600">
//                       Select the semester period
//                     </p>
//                   </div>
//                 </div>
//                 <select
//                   value={selectedSemester}
//                   onChange={(e) => setSelectedSemester(e.target.value)}
//                   className="h-14 w-full rounded-xl border border-blue-200 bg-white/80 px-4 text-base backdrop-blur-sm transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Select semester...</option>
//                   {SEMESTERS.map((semester) => (
//                     <option key={semester} value={semester}>
//                       {semester} Semester
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Status Indicator */}
//           {selectedClass && selectedSemester && (
//             <div className="animate-in slide-in-from-top mt-6 rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-4 duration-300">
//               <div className="flex items-center space-x-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
//                   <svg
//                     className="h-4 w-4 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                 </div>
//                 <p className="font-semibold text-emerald-800">
//                   Creating schedule for:{" "}
//                   <span className="font-bold text-emerald-900">
//                     {selectedClass}
//                   </span>{" "}
//                   -{" "}
//                   <span className="font-bold text-emerald-900">
//                     {selectedSemester} Semester
//                   </span>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Schedule Grid */}
//         <div className="p-8">
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr>
//                   <th className="w-32 rounded-tl-xl border border-gray-200 bg-gradient-to-br from-slate-100 to-gray-100 p-4 font-bold text-gray-700">
//                     <div className="flex items-center justify-center space-x-2">
//                       <Clock className="h-5 w-5 text-indigo-600" />
//                       <span>Time</span>
//                     </div>
//                   </th>
//                   {days.map((day, index) => (
//                     <th
//                       key={day}
//                       className={`min-w-52 border border-gray-200 bg-gradient-to-br from-slate-100 to-gray-100 p-4 font-bold text-gray-700 ${index === days.length - 1 ? "rounded-tr-xl" : ""}`}
//                     >
//                       <div className="flex items-center justify-center space-x-2">
//                         <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
//                         <span>{day}</span>
//                       </div>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {sessions.map((session, sessionIndex) => (
//                   <tr key={session}>
//                     <td
//                       className={`border border-gray-200 bg-gradient-to-r from-slate-50 to-gray-50 p-4 text-center font-semibold text-gray-700 ${sessionIndex === sessions.length - 1 ? "rounded-bl-xl" : ""}`}
//                     >
//                       <div className="flex flex-col items-center">
//                         <span className="text-sm font-bold">{session}</span>
//                       </div>
//                     </td>
//                     {days.map((day, dayIndex) => (
//                       <td
//                         key={`${day}-${session}`}
//                         className={`border border-gray-200 p-0 ${sessionIndex === sessions.length - 1 && dayIndex === days.length - 1 ? "rounded-br-xl" : ""}`}
//                       >
//                         <div
//                           className={`h-28 cursor-pointer p-4 transition-all duration-300 ${
//                             isSelected(day, session)
//                               ? "scale-105 border-2 border-indigo-400 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-lg"
//                               : hasContent(day, session)
//                                 ? "bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 hover:shadow-md"
//                                 : "bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 hover:shadow-sm"
//                           }`}
//                           onClick={() => selectCell(day, session)}
//                         >
//                           <div className="flex h-full flex-col justify-center space-y-2">
//                             <div
//                               className={`truncate text-sm font-bold ${
//                                 schedule[day][session].subject
//                                   ? "text-gray-800"
//                                   : "text-gray-400"
//                               }`}
//                             >
//                               {schedule[day][session].subject || "Click to add"}
//                             </div>
//                             {schedule[day][session].instructor && (
//                               <div className="truncate rounded-md bg-white/50 px-2 py-1 text-xs text-gray-600">
//                                 👨‍🏫 {schedule[day][session].instructor}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {selectedCell && (
//           <div className="border-t border-gray-100 bg-gradient-to-br from-slate-50 to-gray-50 p-8">
//             <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
//               <div className="mb-6 flex items-center space-x-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
//                   <svg
//                     className="h-5 w-5 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800">
//                     Edit Class Details
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     {selectedCell.day} at {selectedCell.session}
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <div>
//                   <label className="mb-3 block text-sm font-bold text-gray-700">
//                     Subject/Course *
//                   </label>
//                   <select
//                     value={
//                       schedule[selectedCell.day][selectedCell.session].subject
//                     }
//                     onChange={(e) =>
//                       updateSchedule(
//                         selectedCell.day,
//                         selectedCell.session,
//                         "subject",
//                         e.target.value,
//                       )
//                     }
//                     className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all duration-200 outline-none hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
//                   >
//                     <option value="">Select a subject...</option>
//                     {SUBJECTS.map((subject) => (
//                       <option key={subject} value={subject}>
//                         {subject}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="mb-3 block text-sm font-bold text-gray-700">
//                     Instructor
//                   </label>
//                   <input
//                     type="text"
//                     value={
//                       schedule[selectedCell.day][selectedCell.session]
//                         .instructor
//                     }
//                     onChange={(e) =>
//                       updateSchedule(
//                         selectedCell.day,
//                         selectedCell.session,
//                         "instructor",
//                         e.target.value,
//                       )
//                     }
//                     placeholder="e.g., Dr. Smith"
//                     className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all duration-200 outline-none hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end">
//                 <button
//                   onClick={() => setSelectedCell(null)}
//                   className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/25"
//                 >
//                   Done
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Legend */}
//       <div className="mt-8 rounded-2xl border border-white/20 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
//         <h4 className="mb-4 text-lg font-bold text-gray-800">Legend</h4>
//         <div className="flex flex-wrap gap-6 text-sm">
//           <div className="flex items-center space-x-3">
//             <div className="h-6 w-6 rounded-lg border-2 border-gray-300 bg-white shadow-sm"></div>
//             <span className="font-medium text-gray-600">Empty slot</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <div className="h-6 w-6 rounded-lg border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 shadow-sm"></div>
//             <span className="font-medium text-gray-600">Has class</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <div className="h-6 w-6 rounded-lg border-2 border-indigo-400 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-sm"></div>
//             <span className="font-medium text-gray-600">Selected</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function TimeTablesManagement() {
  return <div>TimeTablesManagement</div>;
}

export default TimeTablesManagement;
