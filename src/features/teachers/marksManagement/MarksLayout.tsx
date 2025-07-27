import ExportSheet from "./ExportSheet";
import GetEmptySheet from "./GetEmptySheet";
import HowToUse from "./HowToUse";

function MarksLayout() {
  return (
    <div className="grid grid-cols-[560px_560px] grid-rows-[240px_270px] items-start justify-start gap-x-14 pt-6">
      <GetEmptySheet />
      <ExportSheet />
      <HowToUse />
    </div>
  );
}

export default MarksLayout;
