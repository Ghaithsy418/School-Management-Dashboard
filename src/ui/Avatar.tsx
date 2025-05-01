import AvatarGenerator from "./AvatarGenerator";

function Avatar() {
  return (
    <div className="flex items-center justify-center gap-4">
      <h3 className="font-semibold">Ghaith Shabakji</h3>
      <AvatarGenerator name="ghaith" />
    </div>
  );
}

export default Avatar;
