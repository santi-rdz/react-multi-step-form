import { useState } from "react";
import { FormContext } from "../hooks/useFormContext";

export default function FormProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAdds, setSelectedAdds] = useState([]);

  return (
    <FormContext
      value={{
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        isYearly,
        setIsYearly,
        selectedPlan,
        setSelectedPlan,
        selectedAdds,
        setSelectedAdds,
      }}
    >
      {children}
    </FormContext>
  );
}
