import videoGif from "../../../public/assets/gifs/video.gif";
import foodGif from "../../../public/assets/gifs/food.gif";
import cakeGif from "../../../public/assets/gifs/cake.gif";
import flowerGif from "../../../public/assets/gifs/flower.gif";
import locationGif from "../../../public/assets/gifs/location.gif";
import cameraGif from "../../../public/assets/gifs/camera.gif";
import plannerGif from "../../../public/assets/gifs/planner.gif";
import musicGif from "../../../public/assets/gifs/music.gif";
import dotsGif from "../../../public/assets/gifs/dots.gif";
import eyeGif from "../../../public/assets/gifs/eye.gif";
import flameGif from "../../../public/assets/gifs/flame.gif";
import delivertGif from "../../../public/assets/gifs/delivery.gif";
import vehicleGif from "../../../public/assets/gifs/vehicle.gif";
import hangerGif from "../../../public/assets/gifs/hanger.gif";
import {
  FaRing,
  FaSearchLocation,
  FaClipboardList,
  FaHome,
  FaCheckCircle,
} from "react-icons/fa";

export const vendorOptions = [
  {
    label: "Venue",
    value: "venue",
    staticIcon:
      "https://img.icons8.com/?size=100&id=eIFSPeynRDyl&format=png&color=000000",
    animatedIcon: locationGif.src,
  },
  {
    label: "Photographer",
    value: "photographer",
    staticIcon:
      "https://img.icons8.com/?size=100&id=zA8CKq2IOOWF&format=png&color=000000",
    animatedIcon: cameraGif.src,
  },
  {
    label: "Videographer",
    value: "videographer",
    staticIcon:
      "https://img.icons8.com/?size=100&id=o7Ls0zwvTkO3&format=png&color=000000",
    animatedIcon: videoGif.src,
  },
  {
    label: "Florist",
    value: "florist",
    staticIcon:
      "https://img.icons8.com/?size=100&id=zE9uwXycbCLv&format=png&color=000000",
    animatedIcon: flowerGif.src,
  },
  // {
  //   label: "Catering",
  //   value: "catering",
  //   staticIcon:
  //     "https://img.icons8.com/?size=100&id=01fLHPk4i70R&format=png&color=000000",
  //   animatedIcon: foodGif.src,
  // },
  {
    label: "Cakes",
    value: "cakes",
    staticIcon:
      "https://img.icons8.com/?size=100&id=wDw9A4PRw9SG&format=png&color=000000",
    animatedIcon: cakeGif.src,
  },
  {
    label: "Bands/DJ",
    value: "bands-dj",
    staticIcon:
      "https://img.icons8.com/?size=100&id=hcVamhP3QzTD&format=png&color=000000",
    animatedIcon: musicGif.src,
  },
  {
    label: "Makeup Artist",
    value: "makeup_artist",
    staticIcon:
      "https://img.icons8.com/?size=100&id=vmqv135kp5Ty&format=png&color=000000",
    animatedIcon: eyeGif.src,
  },
  {
    label: "Designer",
    value: "designer",
    staticIcon:
      "https://img.icons8.com/?size=100&id=5pe7e3Q7l5XO&format=png&color=000000",
    animatedIcon: hangerGif.src,
  },
  {
    label: "Planner",
    value: "planner",
    staticIcon:
      "https://img.icons8.com/?size=100&id=txE3iVQ7RBlC&format=png&color=000000", // Static image for Vendor
    animatedIcon: plannerGif.src,
  },
  {
    label: "Religious",
    value: "religious",
    staticIcon:
      "https://img.icons8.com/?size=100&id=zFMhE88YdSqt&format=png&color=000000",
    animatedIcon: flameGif.src,
  },
  {
    label: "Furniture/Rental",
    value: "furniture-rental",
    staticIcon:
      "https://img.icons8.com/?size=100&id=mkKY8gAastgc&format=png&color=000000",
    animatedIcon: delivertGif.src,
  },
  {
    label: "Luxury Cars",
    value: "luxury-cars",
    staticIcon:
      "https://img.icons8.com/?size=100&id=qRo6mXkL8iFE&format=png&color=000000",
    animatedIcon: vehicleGif.src,
  },
];

export const vendorVows = [
  {
    heading: "Love and respect",
    sub: "You support every couple's right to marry",
  },
  {
    heading: "Quality and collaboration",
    sub: "You'll partner with T.T.K couples to deliver the best possible experience",
  },
  {
    heading: "Transparency and trust",
    sub: "You'll talk honestly about your services and prices",
  },
  {
    heading: "Tolerance and acceptance",
    sub: "You'll treat every T.T.K couple and vendor equally, reguardless of sexual orientation, gender identity, race, religion, budget or any other characteristic.",
  },
  {
    heading: "Inclusion and anti-discrimination",
    sub: "You commit to creating a welcoming environment for all, celebrating diversity in every aspect of your work.",
  },
  {
    heading: "Community and support",
    sub: "You'll cheer on your fellow T.T.K vendors, united in the shared goal to make couples happy, Lets lift each other up!",
  },
];
export const coupleStatus = [
  { label: "Not yet engaged", value: "not-engaged", icon: <FaRing /> },
  {
    label: "Newly engaged and exploring",
    value: "newly-engaged",
    icon: <FaSearchLocation />,
  },
  {
    label: "Planning mode but haven't booked a venue yet",
    value: "planning",
    icon: <FaClipboardList />,
  },
  {
    label: "Planning mode and already booked a venue",
    value: "planning-booked",
    icon: <FaHome />,
  },
  {
    label: "Almost done, just the details left",
    value: "post-wedding",
    icon: <FaCheckCircle />,
  },
];
