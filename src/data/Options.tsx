import { MdOutlineCastForEducation } from "react-icons/md";
import { TbFileUnknown } from "react-icons/tb";
import { FaOpencart } from "react-icons/fa6";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const options = [
  {
    value: "education",
    label: "Education",
    icon: <MdOutlineCastForEducation />,
  },
  { value: "sience", label: "Yeeeah, sience!", icon: <TbFileUnknown /> },
  { value: "art", label: "Art", icon: <FaOpencart /> },
  { value: "sport", label: "Sport", icon: <MdOutlineSportsVolleyball /> },
  { value: "games", label: "Games", icon: <TbDeviceGamepad2 /> },
  { value: "health", label: "Health", icon: <MdOutlineHealthAndSafety /> },
];

export default options;
