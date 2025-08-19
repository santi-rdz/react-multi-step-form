import useFormContext from "../hooks/useFormContext";
import FormContainer from "./FormContainer";
import CheckIcon from "../assets/images/icon-checkmark.svg";
import useStepContext from "../hooks/useStepContext";
import { formatedPrice } from "../helpers";

const adds = [
  { name: "Online Service", desc: "Access to multiplayer games", monthly: 1, yearly: 10 },
  { name: "Larger Storage", desc: "Extra 1TB of cloud save", monthly: 2, yearly: 20 },
  { name: "Customizable Profile", desc: "Custom theme on your profile", monthly: 2, yearly: 20 },
];

export default function AddStep() {
  const { setStepActive } = useStepContext();
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        setStepActive((c) => c + 1);
      }}
    >
      <Adds />
    </FormContainer>
  );
}

function Adds() {
  return (
    <ul className="space-y-2 md:space-y-4 mt-8">
      {adds.map((add) => (
        <AddItem add={add} key={add.name} />
      ))}
    </ul>
  );
}
function AddItem({ add }) {
  const { isYearly, selectedAdds, setSelectedAdds } = useFormContext();
  const { name, desc, monthly, yearly } = add;
  const price = isYearly ? yearly : monthly;

  const isChecked = selectedAdds.some((cur) => cur.name === name);
  function handleToggle() {
    setSelectedAdds(isChecked ? selectedAdds.filter((curr) => curr.name !== name) : [...selectedAdds, add]);
  }
  return (
    <li>
      <label
        data-add={name}
        data-price={price}
        className="add flex animate-reveal-up has-checked:border-purple-600 has-checked:bg-purple-50 cursor-pointer items-center gap-4 rounded-lg border border-purple-200 p-4"
      >
        <input
          value={name}
          checked={isChecked}
          onChange={handleToggle}
          className="peer hidden"
          name="add"
          type="checkbox"
        />
        <div className="flex size-5 items-center justify-center rounded-sm border border-purple-200 bg-white peer-checked:bg-purple-600">
          <img src={CheckIcon} alt="" />
        </div>
        <div className="add-info">
          <p className="add-title font-ubuntu-bold">{name}</p>
          <p className="add-description text-grey-500">{desc}</p>
        </div>
        <p className="add-price ml-auto text-purple-600">+{formatedPrice(price, isYearly)}</p>
      </label>
    </li>
  );
}
