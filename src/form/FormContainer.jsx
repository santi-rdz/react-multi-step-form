import ActionsForm from "./ActionsForm";

export default function FormContainer({ children, onSubmit }) {
  return (
    <form
      action="#"
      className="step-form flex flex-col  mt-[clamp(0.5rem,0.456rem+0.1878vw,0.625rem)]"
      noValidate
      onSubmit={onSubmit}
    >
      <section>{children}</section>
      <ActionsForm />
    </form>
  );
}
