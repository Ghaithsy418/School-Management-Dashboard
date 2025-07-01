interface StudentNumberTypes {
  currentStudentNumber: number;
  size: number;
}

function CurrentStudentNum({ currentStudentNumber, size }: StudentNumberTypes) {
  const numberToFormat = Math.round((currentStudentNumber * 100) / size);
  let color = "";
  let textColor = "";

  if (numberToFormat === 100) {
    color = "bg-gradient-to-r from-red-500 to-red-600";
    textColor = "text-white";
  } else if (numberToFormat >= 80 && numberToFormat < 100) {
    color = "bg-gradient-to-r from-orange-400 to-red-500";
    textColor = "text-white";
  } else if (numberToFormat < 80 && numberToFormat >= 60) {
    color = "bg-gradient-to-r from-yellow-400 to-orange-400";
    textColor = "text-white";
  } else if (numberToFormat < 60 && numberToFormat >= 40) {
    color = "bg-gradient-to-r from-amber-300 to-yellow-400";
    textColor = "text-gray-800";
  } else if (numberToFormat < 40 && numberToFormat >= 20) {
    color = "bg-gradient-to-r from-emerald-400 to-teal-500";
    textColor = "text-white";
  } else if (numberToFormat < 20) {
    color = "bg-gradient-to-r from-emerald-500 to-emerald-600";
    textColor = "text-white";
  }

  if (!currentStudentNumber && currentStudentNumber !== 0) return <p>-</p>;

  return (
    <p
      className={`w-14 rounded-full px-3 py-1.5 text-center text-sm font-semibold shadow-md ring-1 ring-white/20 ${color} ${textColor}`}
    >
      {currentStudentNumber}
    </p>
  );
}

export default CurrentStudentNum;
