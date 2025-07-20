import ExportSheet from "./ExportSheet";
import GetEmptySheet from "./GetEmptySheet";
import HowToUse from "./HowToUse";

function MarksLayout() {
  return (
    <div className="grid grid-cols-[520px_520px] grid-rows-[240px_270px] items-start justify-start gap-x-20 px-8 pt-6">
      <GetEmptySheet />
      <ExportSheet />
      <HowToUse />
    </div>
  );
}

export default MarksLayout;
