import ExportSheet from "./ExportSheet";
import GetEmptySheet from "./GetEmptySheet";
import HowToUse from "./HowToUse";

function MarksLayout() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-4 pt-6">
      <GetEmptySheet />
      <div className="flex w-[34rem] flex-col gap-4">
        <ExportSheet />
        <HowToUse />
      </div>
    </div>
  );
}

export default MarksLayout;
