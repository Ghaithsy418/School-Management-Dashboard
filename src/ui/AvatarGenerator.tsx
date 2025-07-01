interface AvatartGeneratorTypes {
  name: string;
  size?: number;
  className?: string;
}

function AvatarGenerator({
  name,
  size = 44,
  className,
}: AvatartGeneratorTypes) {
  const newName = name.split(" ");
  return (
    <div
      className={`flex items-center ${size > 44 ? "text-2xl" : "text-base"} justify-center rounded-full bg-gray-800 text-slate-50 ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {newName[0]?.slice(0, 1).toUpperCase() +
        newName[2]?.slice(0, 1).toUpperCase()}
    </div>
  );
}

export default AvatarGenerator;
