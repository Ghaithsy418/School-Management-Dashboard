interface StudentNumberTypes {
  currentStudentNumber: number;
  size: number;
}

function CurrentStudentNum({ currentStudentNumber, size }: StudentNumberTypes) {
  const numberToFormat = Math.round((currentStudentNumber * 100) / size);
  let color = "";

  if (numberToFormat >= 80) color = "bg-red-600";
  if (numberToFormat < 80 && numberToFormat >= 60) color = "bg-red-400";
  if (numberToFormat < 60 && numberToFormat >= 40) color = "bg-orange-600";
  if (numberToFormat < 40 && numberToFormat >= 20) color = "bg-emerald-600/80";
  else color = "bg-emerald-400";

  if (!currentStudentNumber && currentStudentNumber !== 0) return <p>-</p>;

  return (
    <p className={`w-12 rounded-full px-3 py-1 text-center ${color}`}>
      {currentStudentNumber}
    </p>
  );
}

export default CurrentStudentNum;
