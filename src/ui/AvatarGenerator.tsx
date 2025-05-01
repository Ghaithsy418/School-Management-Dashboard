function AvatarGenerator({ name, size = 44 }: { name: string; size?: number }) {
  return (
    <div
      className={`flex items-center ${size > 44 ? "text-2xl" : "text-base"} justify-center rounded-full bg-gray-800 text-slate-50`}
      style={{
        width: size,
        height: size,
      }}
    >
      {name.slice(0, 1).toUpperCase()}
    </div>
  );
}

export default AvatarGenerator;
