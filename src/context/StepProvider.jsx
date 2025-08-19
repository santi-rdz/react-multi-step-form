import { useState } from "react";
import { StepContext } from "../hooks/useStepContext";

export default function StepProvider({ children }) {
  const [stepActive, setStepActive] = useState(1);
  return <StepContext value={{ stepActive, setStepActive }}>{children}</StepContext>;
}
