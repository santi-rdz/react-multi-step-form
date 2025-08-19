import useStepContext from "./hooks/useStepContext";

const stepTitle = ["Your Info", "Select Plan", "Add-ons", "Summary"];
export default function StepSidebar() {
  return (
    <aside className="step-tracker flex h-52 w-full justify-center overflow-hidden bg-cover bg-no-repeat pt-10 md:h-auto md:justify-start md:rounded-lg md:px-6">
      <Steps />
    </aside>
  );
}

function Steps() {
  const { stepActive } = useStepContext();

  return (
    <ul className="steps flex gap-4 md:flex-col md:gap-8">
      {stepTitle.map((title, i) => (
        <StepItem stepActive={stepActive} stepNum={i + 1} key={i}>
          {title}
        </StepItem>
      ))}
    </ul>
  );
}

function StepItem({ stepNum, stepActive, children }) {
  return (
    <li
      style={{ animationDelay: `${stepNum * 0.15}s` }}
      className={`animate-reveal-rigth step items-center gap-4 md:flex ${stepActive === stepNum ? "active" : ""}`}
    >
      <span className="font-ubuntu-bold flex size-9 items-center justify-center rounded-full border text-white active:border-0 active:bg-blue-200 active:text-blue-950">
        {stepNum}
      </span>

      <div className="hidden uppercase md:block">
        <p className="txt-4 text-blue-300">Step {stepNum}</p>
        <p className="font-ubuntu-bold text-sm tracking-[1px] text-white">{children}</p>
      </div>
    </li>
  );
}
