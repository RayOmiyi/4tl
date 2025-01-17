import { FaHome, FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { RiContactsBook3Line } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { GrGallery } from "react-icons/gr";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/event",
    text: "Events",
    icon: <FaCalendarAlt />,
  },
  {
    id: 4,
    url: "/gallery",
    text: "Gallery",
    icon: <GrGallery />,
  },
  {
    id: 5,
    url: "/contact",
    text: "Contact",
    icon: <RiContactsBook3Line/>,
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.tiktok.com",
    icon: <RiTiktokLine />,
  },
  {
    id: 2,
    url: "https://www.youtube.com",
    icon: <TfiYoutube />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FiInstagram />,
  },
];
