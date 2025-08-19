import { useState } from "react";
import { isValidEmail, isValidName, isValidPhone } from "../helpers";
import useFormContext from "../hooks/useFormContext";
import useStepContext from "../hooks/useStepContext";
import FormContainer from "./FormContainer";

export default function InfoStep() {
  const { name, setName, email, setEmail, phone, setPhone } = useFormContext();
  const { setStepActive } = useStepContext();
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPhone, setIsInvalidPhone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (validateFields()) setStepActive((c) => c + 1);
  }
  function validateFields() {
    const nameValid = isValidName(name.trim());
    const emailValid = isValidEmail(email);
    const phoneValid = isValidPhone(phone);

    setIsInvalidName(!nameValid);
    setIsInvalidEmail(!emailValid);
    setIsInvalidPhone(!phoneValid);

    return nameValid && emailValid && phoneValid;
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="form-field mt-8" data-field="name">
        <InputLabel forId="name">Name</InputLabel>
        <Input
          type="text"
          id="name"
          value={name}
          isInvalid={isInvalidName}
          placeholder="e.g. Stephen King"
          onChange={(e) => setName(e.target.value)}
        />
        <InputError>Please provide a valid name.</InputError>
      </div>
      <div className="form-field" data-field="email">
        <InputLabel forId="email">Email Addres</InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          isInvalid={isInvalidEmail}
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <InputError>Please provide a valid email address.</InputError>
      </div>
      <div className="form-field" data-field="phone">
        <InputLabel forId="phone">Phone</InputLabel>
        <Input
          id="phone"
          type="tel"
          value={phone}
          isInvalid={isInvalidPhone}
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputError>Please provide a valid Phone number.</InputError>
      </div>
    </FormContainer>
  );
}
function Input({ id, value, type, onChange, isInvalid, placeholder }) {
  return (
    <input
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`${
        isInvalid ? "invalid-input outline-red-500" : ""
      } peer txt-2 placeholder:font-ubuntu-medium invalid-input:border-red-500 w-full rounded-sm border border-purple-200 p-4 font-medium focus:border-purple-500 focus:ring-2 focus:ring-purple-200`}
    />
  );
}

function InputLabel({ children, forId }) {
  return (
    <label htmlFor={forId} className="txt-4 mb-2 block text-blue-950">
      {children}
    </label>
  );
}

function InputError({ children }) {
  return (
    <p className="mt-1 font-ubuntu-bold text-2 text-end text-sm text-red-500 opacity-0 transition-opacity duration-200 peer-[.invalid-input]:opacity-100">
      {children}
    </p>
  );
}
