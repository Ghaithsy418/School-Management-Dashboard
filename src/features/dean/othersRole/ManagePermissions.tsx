import Modal from "@/ui/Modal";
import PermissionsModal from "./PermissionsModal";

interface ManageTypes {
  currentPermissions: string[];
  full_name: string;
  user_id: number;
}

function ManagePermissions({
  currentPermissions,
  full_name,
  user_id,
}: ManageTypes) {
  return (
    <Modal>
      <Modal.Open name="permissions">
        <button className="w-full cursor-pointer rounded-md bg-gradient-to-tr from-indigo-600 via-violet-600 to-violet-700 px-4 py-1.5 text-indigo-50 group-hover:from-indigo-700 group-hover:via-violet-700 group-hover:to-violet-800">
          Manage Permissions
        </button>
      </Modal.Open>
      <Modal.Window name="permissions">
        <PermissionsModal
          full_name={full_name}
          currentPermissions={currentPermissions}
          user_id={user_id}
        />
      </Modal.Window>
    </Modal>
  );
}

export default ManagePermissions;
