import ClearAll from "../../ui/ClearAll";
import AddByCSV from "./AddByCSV";

function AddingTemplate() {
  return (
    <div className="flex items-center gap-8">
      <AddByCSV />
      <ClearAll clearFunction={() => {}} />
    </div>
  );
}

export default AddingTemplate;
