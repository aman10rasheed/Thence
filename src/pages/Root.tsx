import { Button } from "@/Components/ui/button";
import vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col my-20 ml-16 mr-[165px] h-[800px] bg-slate-400">
        <div className="flex flex-col pl-[364px] pr-[281px] items-center">
          <p className="font-grace text-[36px] text-custom animate-fadeIn">
            Success stories
          </p>
          <p
            className="text-[56px] w-[6 88px] font-semibold h-[178px] text-center animate-pulse"
            style={{ lineHeight: "67.2px" }}
          >
            Every success journey we’ve encountered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Root;
