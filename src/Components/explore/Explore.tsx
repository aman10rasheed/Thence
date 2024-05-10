import dot from "../../assets/dots.png";
import arrow from "../../assets/arrow.png";
import grid from "../../assets/grud.png";
import { Button } from "../ui/button";
type Props = {};

const Explore = ({}: Props) => {
  return (
    <div>
      <img src={grid} alt="" className="absolute right-10" />
      <div
        className="w-[398px] mr-[145px] font-semibold text-[40px] leading-12 tracking-tighter text-left"
        style={{ lineHeight: "48px" }}
      >
        Enhance fortune 50 company’s insights teams research capabilities
      </div>
      <div className="mt-[55px]">
        <img src={dot} alt="" />
      </div>
      <Button className="rounded-full bg-black py-[31px] px-[40px] mt-[105px]">
        Explore more <img src={arrow} alt="" />
      </Button>
    </div>
  );
};

export default Explore;
