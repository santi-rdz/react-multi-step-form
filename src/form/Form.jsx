import FormProvider from "../context/FormProvider";
import useStepContext from "../hooks/useStepContext";
import InfoStep from "./InfoStep";
import PlansStep from "./PlansStep";
import AddStep from "./AddStep";
import Summary from "./Summary";
import Confirmed from "./Confirmed";

const stepHeaderInfo = {
  1: {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  },
  2: {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  3: {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  4: {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
};

export default function Form() {
  const { stepActive } = useStepContext();

  return (
    <section className="step-content my-container -mt-20 flex flex-col rounded-xl bg-white px-6 py-8 shadow-2xl md:mt-0 md:min-h-[600px] md:w-full md:py-6 md:pr-12 md:pb-4 md:shadow-none lg:pr-20 [&_form]:grow">
      {stepActive <= 4 && <Header />}
      <FormProvider>
        {stepActive === 1 && <InfoStep />}
        {stepActive === 2 && <PlansStep />}
        {stepActive === 3 && <AddStep />}
        {stepActive === 4 && <Summary />}
        {stepActive === 5 && <Confirmed />}
      </FormProvider>
    </section>
  );
}

function Header() {
  const { stepActive } = useStepContext();
  const { title, description } = stepHeaderInfo[stepActive];

  return (
    <header>
      <h1 className="step-title txt-1 font-ubuntu-bold mb-2">{title}</h1>
      <p className="step-description txt-2 text-grey-500">{description}</p>
    </header>
  );
}
