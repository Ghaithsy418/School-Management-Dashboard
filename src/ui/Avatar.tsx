// import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
// import AvatarGenerator from "./AvatarGenerator";

// function Avatar() {
//   const { currentUser, isGettingCurrentUser } = useGetCurrentUser();

//   if (isGettingCurrentUser)
//     return <h3 className="font-semibold">Loading...</h3>;
//   if (!currentUser?.full_name) return null;

//   const fullName = currentUser.full_name.split(" ");

//   return (
//     <div className="flex items-center justify-center gap-4">
//       <h3 className="font-semibold capitalize">
//         {fullName[0] + " " + fullName[2]}
//       </h3>
//       <AvatarGenerator name={currentUser.full_name} />
//     </div>
//   );
// }

// export default Avatar;


function Avatar() {
  return <div>Avatar</div>;
}

export default Avatar;
