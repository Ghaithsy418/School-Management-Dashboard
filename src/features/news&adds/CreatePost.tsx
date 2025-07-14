import Modal from "@/ui/Modal";
import { IoCreateOutline } from "react-icons/io5";
import CreatePostForm from "./CreatePostForm";

function CreatePost() {
  return (
    <Modal>
      <div className="flex h-19 w-full items-center justify-start gap-5 bg-gray-50 py-6 pr-6 pl-14">
        <span className="flex items-center justify-center rounded-full bg-indigo-100 p-3 text-indigo-600">
          <IoCreateOutline className="h-5 w-5" />
        </span>
        <Modal.Open name="createPost">
          <button className="w-92 cursor-pointer rounded-full border border-gray-700/20 px-6 py-2 text-start transition-all duration-300 hover:bg-gray-100">
            New news? Try posting them here😊
          </button>
        </Modal.Open>
      </div>
      <Modal.Window
        icon={<IoCreateOutline className="h-6 w-6" />}
        name="createPost"
      >
        <CreatePostForm />
      </Modal.Window>
    </Modal>
  );
}

export default CreatePost;
