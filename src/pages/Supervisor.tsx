import SupervisorProfile from "@/features/supervisors/SupervisorProfile";
import MainContainer from "@/ui/MainContainer";

function Supervisor() {
  return (
    <MainContainer title="" needsBackArrow={true} toPage={`/dean/supervisors`}>
      <div>
        <SupervisorProfile />
      </div>
    </MainContainer>
  );
}

export default Supervisor;
