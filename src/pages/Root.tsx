import { Button } from "@/Components/ui/button";
import vector from "../assets/Vector.png";
import { Link } from "react-router-dom";
import Statscomponent from "@/Components/stats/Statscomponent";
import Explore from "@/Components/explore/Explore";
import AskQustions from "@/Components/AskQuestions/AskQustions";
import Footer from "@/Components/Footer/Footer";

type Props = {};

const Root = ({}: Props) => {
  return (
    <div className="font-custom">
      <div className="flex mx-6 mt-6  items-center border rounded-full pl-14 justify-between pr-5">
        <div className="py-8">
          <img src={vector} alt="Vector logo" />
        </div>
        <div className="flex gap-3 py-4">
          <Link to="/getproject">
            <Button
              className="text-lg font-medium px-10 py-7 hover:bg-gray-300 rounded-full h-[77.22px]"
              variant={"outline"}
            >
              Get projects
            </Button>
          </Link>

          <Button className="text-lg font-medium px-10 py-7 rounded-full h-[77.22px] bg-black hover:bg-gray-700 hover:">
            Onboard Talent
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-20 mb-64 ml-16 mr-[165px] h-[800px]">
        <div className="flex flex-col pl-[364px] pr-[281px] items-center">
          <p className="font-grace text-[36px] text-custom animate-fadeIn">
            Success stories
          </p>
          <p
            className="text-[56px] w-[688px] font-semibold h-[178px] text-center animate-pulse"
            style={{ lineHeight: "67.2px" }}
          >
            Every success journey we’ve encountered.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[727.49px] h-[596px] mt-[112px] ">
            <Statscomponent />
          </div>
          <div className="mt-[112px] mr-[107px]">
            <Explore />
          </div>
        </div>
      </div>
      <div>
        <AskQustions />
      </div>
      <div className="mx-8 h-[144px] bg-gray-200 rounded-full my-8">
        <Footer/>
      </div>
    </div>
  );
};

export default Root;
