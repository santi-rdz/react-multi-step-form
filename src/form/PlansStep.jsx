import FormContainer from "./FormContainer";
import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import useFormContext from "../hooks/useFormContext";
import { useState } from "react";
import useStepContext from "../hooks/useStepContext";
const plans = [
  { name: "Arcade", img: arcadeImg, monthly: 9, yearly: 90 },
  { name: "Advanced", img: advancedImg, monthly: 12, yearly: 120 },
  { name: "Pro", img: proImg, monthly: 15, yearly: 150 },
];
export default function PlansStep() {
  const [showError, setShowError] = useState(false);
  const { selectedPlan } = useFormContext();
  const { setStepActive } = useStepContext();

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedPlan) return setShowError(true);
    setStepActive((c) => c + 1);
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <PlanError showError={showError}> Please Select a Plan</PlanError>
      <Plans setShowError={setShowError} />
      <ToggleCycle />
    </FormContainer>
  );
}
function Plans({ setShowError }) {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:gap-6 [&_label]:flex-1">
      {plans.map((plan) => (
        <Plan setShowError={setShowError} plan={plan} key={plan.name} />
      ))}
    </ul>
  );
}

function Plan({ plan, setShowError }) {
  const { name, img, monthly, yearly } = plan;
  const { isYearly, setSelectedPlan, selectedPlan } = useFormContext();
  console.log(selectedPlan);
  function handlePlanSelected() {
    setSelectedPlan(plan);
    setShowError(false);
  }
  const price = isYearly ? yearly : monthly;
  return (
    <label className="plan min-h-[100px] animate-reveal-up  flex cursor-pointer items-center gap-4 rounded-lg border border-purple-200 lg:gap-12 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-purple-600 has-checked:border-purple-600 has-checked:bg-blue-50 lg:flex-col lg:items-start">
      <img src={img} />
      <div className="plan-info flex flex-col md:flex-row md:items-center grow justify-between lg:flex-col lg:justify-start lg:items-start">
        <div className="">
          <p className="plan-name font-ubuntu-medium text-base">{name}</p>
          <p className="plan-price text-grey-500 text-sm">
            $<span className="price">{price}</span>
          </p>
        </div>
        <span className={`${isYearly ? "flex" : "hidden"} text-sm free text-blue-950`}>2 months free</span>
        <input
          className="hidden"
          type="radio"
          name="plan"
          checked={selectedPlan?.name === name}
          onChange={handlePlanSelected}
        />
      </div>
    </label>
  );
}

function ToggleCycle() {
  const { isYearly, setIsYearly } = useFormContext();

  return (
    <div className="toggle-container mt-4 flex justify-center gap-4 rounded-lg bg-blue-50 py-4 md:mt-8">
      <p className={`${isYearly ? "text-grey-500" : "text-blue-950"}  font-ubuntu-medium `} data-cycle="monthly">
        Monthly
      </p>
      <label className="btn-toggle relative h-7 w-12 cursor-pointer rounded-full bg-blue-950">
        <input
          type="checkbox"
          onChange={() => setIsYearly((c) => !c)}
          name="billingType"
          checked={isYearly}
          className="peer hidden"
        />
        <div className="absolute top-1/2 left-1 size-5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></div>
      </label>
      <p className={`${isYearly ? "text-blue-950" : "text-grey-500"} font-ubuntu-medium`}>Yearly</p>
    </div>
  );
}

function PlanError({ children, showError }) {
  return (
    <p
      className={`${
        showError ? "opacity-100" : ""
      } mb-2 text-start text-base text-red-500 opacity-0 transition-opacity duration-200 `}
    >
      {children}
    </p>
  );
}
