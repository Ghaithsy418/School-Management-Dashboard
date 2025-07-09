import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setSession } from "@/slices/AttendanceSlice";
import UiCardSection from "@/ui/UiCardSection";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

function ChooseSession() {
  const dispatch = useDispatch();

  return (
    <UiCardSection
      title="2. Choose Session"
      subTitle="Select a Session so you can Submit Attendance"
      icon={<FaCalendarAlt className="h-6 w-6" />}
      iconColor="text-emerald-600"
      iconBackgroundColor="bg-emerald-100"
    >
      <Select onValueChange={(e) => dispatch(setSession(Number(e) + 1))}>
        <SelectTrigger className="!h-12 w-full text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">
          <SelectValue placeholder="Click to select a session..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sessions</SelectLabel>
            {Array.from({ length: 7 }, (_, index) => (
              <SelectItem
                key={index}
                value={String(index)}
                className="py-2 text-base"
              >
                Session {index + 1}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </UiCardSection>
  );
}

export default ChooseSession;
