import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setClassName } from "@/slices/AttendanceSlice";
import UiCardSection from "@/ui/UiCardSection";
import { HiSelector } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useGetTeacherClasses } from "./useGetTeacherClasses";

function ChooseAttendanceClass() {
  const { classes, isGettingClasses } = useGetTeacherClasses();
  const dispatch = useDispatch();

  return (
    <div className="col-start-2 col-end-3 row-start-1 row-end-2">
      <UiCardSection
        title="1. Choose Class"
        subTitle="Select a Class to see Students"
        icon={<HiSelector className="h-6 w-6" />}
        iconColor="text-rose-600"
        iconBackgroundColor="bg-rose-100"
      >
        <Select onValueChange={(e) => dispatch(setClassName(e))}>
          <SelectTrigger
            disabled={isGettingClasses}
            className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            <SelectValue
              placeholder={
                isGettingClasses
                  ? `Loading Classes...`
                  : "Click to select a class..."
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>
                {!classes?.length
                  ? "You are not teaching any class right now"
                  : "Classes"}
              </SelectLabel>
              {classes?.map((classData: { className: string }) => (
                <SelectItem
                  key={classData.className}
                  value={classData.className}
                  className="py-2 text-base"
                >
                  {classData.className}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </UiCardSection>
    </div>
  );
}

export default ChooseAttendanceClass;
