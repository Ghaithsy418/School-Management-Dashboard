import ExportSheet from "./ExportSheet";
import GetEmptySheet from "./GetEmptySheet";

function MarksLayout() {
  return (
    <div className="grid grid-cols-[520px_520px] items-start justify-start gap-x-20 px-8 py-6">
      <GetEmptySheet />
      <ExportSheet />
    </div>
  );
}

export default MarksLayout;
