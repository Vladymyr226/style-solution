import { Step } from "../../types";
import s from "./StepCard.module.css";

const StepCard = ({ step }: { step: Step }) => {
  return (
    <li className={s.stepCard}>
      <img className={s.stepImage} src={step.image} alt="step" />
      <div
        style={step.step.length > 4 ? { left: "60px" } : {}}
        className={s.stepName}
      >
        <span>{step.step}</span>
        {step.year}
      </div>
      <h3 className={s.stepTitle}>{step.title}</h3>
      <p className={s.stepText}>{step.text}</p>
    </li>
  );
};

export default StepCard;
