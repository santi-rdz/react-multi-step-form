import useFormContext from "../hooks/useFormContext";
import ThanksIcon from "../assets/images/icon-thank-you.svg";
export default function Confirmed() {
  const { name } = useFormContext();
  return (
    <div className="flex grow flex-col items-center justify-center gap-4">
      <img className="mb-4  animate-reveal-zoom" src={ThanksIcon} alt="" />
      <h3 className="txt-1 font-ubuntu-bold">
        Thank you <span>{name.split(" ")[0]}!</span>
      </h3>
      <p className="text-grey-500 text-center text-balance">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
