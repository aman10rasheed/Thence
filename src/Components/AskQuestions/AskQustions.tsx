import union from "../../assets/Union.png";
import FAQList from "./FAQ";
type Props = {};

const AskQustions = ({}: Props) => {
  return (
    <div className="p-8">
      <div className="flex bg-green-100 h-[749px] rounded-2xl">
        <div className="flex flex-col gap-5">
          <div className="ml-[94px] mt-[80px]">
            <p
              className="font-grace text-[32px] leading-7 tracking-tight"
              style={{ fontSize: "32px", letterSpacing: "-2%" }}
            >
              What’s on your mind
            </p>
            <p className="font-Manrope font-semibold text-[60px] leading-16 tracking-tighter text-left">
              Ask Questions
            </p>
          </div>

          <img src={union} alt="" className="mt-28" />
        </div>
        <div className="w-[781px] h-[538px] ml-[630px] mt-[137px]">
          <FAQList />
        </div>
      </div>
    </div>
  );
};

export default AskQustions;
