import image from "../../assets/imageKid.png";
import rocket from "../../assets/rocket.png";
type Props = {};

const Statscomponent = ({}: Props) => {
  return (
    <div>
      <Achieved />
      <Reduced />
      <img src={image} alt="" className="rounded-[50px] mx-auto" />
      <Staff />
    </div>
  );
};

export default Statscomponent;

function Achieved() {
  return (
    <div className="absolute top-[710px] left-[50px] shadow-md z-20 w-[267px] h-[239px] bg-white rounded-[27px] p-[30px]">
      <div className="text-[64px] font-medium" style={{ lineHeight: "76.8px" }}>
        40%
      </div>
      <div
        className="text-[18px] font-medium text-gray-400"
        style={{ lineHeight: "23.4px" }}
      >
        Achieved reduction in project execution time by optimising team
        availability
      </div>
    </div>
  );
}

function Reduced() {
  return (
    <div className="absolute top-[940px] left-[499px] shadow-md z-10 w-[267px] h-[239px] bg-green-950 rounded-[27px] p-[30px] text-white">
      <div
        className="flex text-[64px] font-medium"
        style={{ lineHeight: "76.8px" }}
      >
        $0.5{" "}
        <span
          className="text-[22px] font-medium pt-4"
          style={{ lineHeight: "76.8px" }}
        >
          MILLION
        </span>
      </div>
      <div
        className="text-[17px] font-medium text-gray-300"
        style={{ lineHeight: "23.4px" }}
      >
        Reduced client expenses by saving on hiring and employee costs.
      </div>
    </div>
  );
}

function Staff() {
  return (
    <div className="absolute top-[1040px] left-[110px] shadow-md rounded-full flex w-[245px] h-[88px] bg-white py-4 px-6 ">
      <img src={rocket} alt="" className="w-[52px] h-[52px]" />
      <div className="text-[24px] font-bold" style={{ lineHeight: "32.78px" }}>
        10 DAYS<p className="text-[16px] font-medium"style={{ lineHeight: "20.8px" }}>Staff Deployment</p>
      </div>
    </div>
  );
}
