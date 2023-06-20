import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/feature.png";
import benefitTwoImg from "../public/img/feature2.png";

const benefitOne = {
  title: "5 minutes daily ",
  desc: `Meditation is not just a process we do early in the morning and completely forgetting the whole day and bounce back the next day. It’s a continuous process of taming our minds the way I need to think. Which needs continuous practice in equal intervals`,
  
  image: benefitOneImg,
  bullets: [],
    // {
    //   title: "Understand your customers",
    //   desc: "Then explain the first point breifly in one or two lines.",
    //   icon: <FaceSmileIcon />,
    // },
    // {
    //   title: "Improve acquisition",
    //   desc: "Here you can add the next benefit point.",
    //   icon: <ChartBarSquareIcon />,
    // },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  //],
};

const benefitTwo = {
  title: "Keep a track of your Peace Minutes",
  desc: "This campaign promotes peace within and around and also helps to track the minutes spent in peace. You can also watch out the total minutes spent globally.",
  image: benefitTwoImg,
  bullets: [],
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DevicePhoneMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  //],
};


export {benefitOne, benefitTwo};
