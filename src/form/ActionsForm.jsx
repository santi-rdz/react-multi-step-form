import useStepContext from "../hooks/useStepContext";

export default function ActionsForm() {
  const { stepActive, setStepActive } = useStepContext();
  const isFirstStep = stepActive === 1;
  const isLastStep = stepActive === 4;
  return (
    <div className="buttons-container fixed bottom-0 left-0 flex w-full justify-between bg-white p-5 text-end md:flex md:static md:mt-auto md:p-0">
      <button
        type="button"
        onClick={() => setStepActive((c) => c - 1)}
        className={`btn-back hover:text-gray-500 transition-colors duration-200 btn-step text-grey-500 font-ubuntu-medium  cursor-pointer ${
          isFirstStep ? "hidden" : "flex"
        }`}
      >
        Go Back
      </button>
      <button
        className="btn-next btn-step transition-opacity duration-200  txt-3 font-ubuntu-medium ml-auto cursor-pointer rounded-sm bg-purple-950  hover:opacity-80 px-4 py-3 text-white"
        type="submit"
      >
        {isLastStep ? "Confirm" : "Next"}
      </button>
    </div>
  );
}
