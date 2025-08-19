import useFormContext from "../hooks/useFormContext";
import FormContainer from "./FormContainer";
import { formatedPrice } from "../helpers";
import useStepContext from "../hooks/useStepContext";

export default function Summary() {
  const { selectedPlan, isYearly, selectedAdds } = useFormContext();
  const { setStepActive } = useStepContext();
  const price = isYearly ? selectedPlan.yearly : selectedPlan.monthly;
  const { name } = selectedPlan;
  const total = price + selectedAdds.reduce((acc, curr) => (isYearly ? curr.yearly + acc : curr.monthly + acc), 0);
  return (
    <FormContainer onSubmit={() => setStepActive((c) => c + 1)}>
      <article className="space-y-2 md:space-y-4 mt-8">
        <div className="summary divide-grey-500 space-y-4 divide-y-[0.5px] rounded-lg bg-blue-50 p-4">
          <div className="plan-summary flex items-center justify-between pb-4 txt-2">
            <div>
              <p className="plan font-ubuntu-medium text-lg md:text-xl   ">
                <span className="plan-name">{name}</span>
                <span className="plan-cycle"> ({isYearly ? "yearly" : "monthly"})</span>
              </p>
              <LinkButton onClick={() => setStepActive(2)}>Change</LinkButton>
            </div>
            <span className="plan-price font-ubuntu-bold text-lg md:text-xl">${formatedPrice(price, isYearly)}</span>
          </div>
          <AddsList selectedAdds={selectedAdds} isYearly={isYearly} />
        </div>
        <div className="total-container flex justify-between px-4">
          <p className="total text-grey-500 text-lg">
            Total <span className="cycle">(per {isYearly ? "Year" : "Month"})</span>
          </p>
          <span className="total-price font-ubuntu-bold txt-1 text-purple-600">
            ${total}/{isYearly === "yearly" ? "yr" : "mo"}
          </span>
        </div>
      </article>
    </FormContainer>
  );
}

function AddsList({ selectedAdds, isYearly }) {
  const { setStepActive } = useStepContext();
  return (
    <ul className="plan-adds space-y-2 text-grey-500">
      {selectedAdds.length > 0 ? (
        selectedAdds.map((add) => <Add add={add} isYearly={isYearly} key={add.name} />)
      ) : (
        <>
          No Add selected <LinkButton onClick={() => setStepActive(3)}>Add</LinkButton>
        </>
      )}
    </ul>
  );
}
function Add({ add, isYearly }) {
  const { name } = add;
  const price = isYearly ? add.yearly : add.monthly;
  return (
    <li className="add flex justify-between">
      <p className="add-name">{name}</p>
      <p className="add-price text-blue-950">+{formatedPrice(price, isYearly)}</p>
    </li>
  );
}

function LinkButton({ onClick, children }) {
  return (
    <a
      onClick={onClick}
      className="underline w-fit text-grey-500 change block change-plan cursor-pointer hover:text-purple-600"
    >
      {children}
    </a>
  );
}
