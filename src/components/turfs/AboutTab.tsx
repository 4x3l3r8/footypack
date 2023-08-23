import {
  // Clock1,
  Clock4,
  MapPin,
  Phone,
  // PhoneCall,
  Star,
  // StarOff,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
// import { BookingCard } from "./BookingGame";
import BookNow from "./BookNow";
import Image from "next/image";
import TurfsNearby from "../landingPage/TurfsNearby";
import Link from "next/link";

export interface IAboutTurfTabProps {
  turfDetails?: any;
}

export function AboutTurfTab(props: IAboutTurfTabProps) {
  return (
    <div>
    <div className="flex w-full gap-3 ">
      <div className="mt-12 flex w-[52%] flex-col space-y-5">
        <p className="text-justify text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          totam consequatur harum porro sunt aperiam magni, iure, quam eaque
          facilis quod voluptates vero amet repudiandae ipsam incidunt sint
          quidem reprehenderit! Laudantium illum commodi, sed cupiditate
          excepturi temporibus similique! Qui quidem velit aperiam deserunt
          quaerat nisi delectus quos reiciendis est labore excepturi amet
          tenetur, debitis sequi, itaque, incidunt animi iusto. Enim!
          Consequuntur fugiat ducimus, molestiae consectetur dolore recusandae,
          assumenda quasi ea id ut aliquam sit, quis excepturi.
        </p>
        <Separator />
        <ul className="flex flex-col space-y-4 italic font-semibold">
          <li className="flex items-center space-x-2">
            <MapPin className="mr-2 h-5 w-5" />
            <span className="pr-2">F4X5+XRM, </span>
            <span>Ojo 102101, Lagos</span>
            <Button variant={"link"} color="Blue">Show on map</Button>
          </li>
          <li className="flex items-center space-x-2">
            <Phone className="mr-2 h-5 w-5" />
            <span className="pr-2">+234 903 346 6788 </span>
            <span>+234 903 346 6788</span>
          </li>
          <li className="flex items-center space-x-2 italic">
            <Clock4 className="mr-2 h-5 w-5" />
            <span className="pr-2">Mon- sat </span>
            <span>11:00am -09:00pm</span>
            <Button variant={"link"} color="Blue">.open</Button>
          </li>
          <li className="flex items-center space-x-2">
            <Clock4 className="mr-2 h-5 w-5" />
            <span className="pr-2">SUN</span>
            <span>08:00am -06:00pm</span>
          </li>
          <li className="flex items-center space-x-2">
            <Star className="mr-2 h-5 w-5" />
            <span className="pr-2">3.7 (12 REVIEWS)</span>
            <Button variant={"link"} color="Blue">show REVIEWS</Button>
          </li>
          <li className="mr-2 flex items-center space-x-2">
            <svg
              height="64px"
              width="64px"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-51.2 -51.2 614.40 614.40"
              xmlSpace="preserve"
              fill="#000000"
              className="h-7 w-7"
              transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="7.168000000000001"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    className="fill-black"
                    d="M0,73.783v364.433h512v-11.175V73.783H0z M22.358,205.741h54.726v118.446H22.358V205.741z M244.827,320.936 c-13.732-2.337-26.002-8.852-35.466-18.306c-11.954-11.962-19.316-28.383-19.318-46.63c0.003-18.254,7.364-34.668,19.318-46.638 c9.465-9.454,21.735-15.962,35.466-18.306V320.936z M167.684,256c0.004,44.982,33.652,82.026,77.143,87.532v72.319H22.358v-69.307 h77.084V183.383H22.358V96.141h222.465l0.004,72.328C201.332,173.989,167.688,211.017,167.684,256z M489.643,324.187h-54.726 V205.741h54.726V324.187z M489.643,183.383h-77.088v163.161h77.088v69.307H267.185l-0.004-72.319 c43.491-5.513,77.132-42.55,77.14-87.532c-0.008-44.983-33.652-82.01-77.14-87.532l-0.004-72.328h222.466V183.383z M267.181,320.936v-129.88c13.732,2.345,25.998,8.853,35.459,18.306c11.955,11.969,19.316,28.384,19.319,46.638 c-0.004,18.247-7.364,34.668-19.319,46.63C293.178,312.084,280.912,318.591,267.181,320.936z"
                  ></path>
                </g>
              </g>
            </svg>
            <span>6 PITCHES</span>
          </li>
        </ul>
        <hr />
       <div>
        <h1 className="uppercase font-semibold italic text-[#777]">Facilities</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-4 gap-4 mt-4">

      <div className="mb-0 w-fit rotate-[12.5deg] bg-[#F8FFFD] rounded-sm border border-primary -skew-y-12 px-4 py-2 h-12">
        <span className=" flex items-center justify-center">
        <Image src='../images/jersey.svg' width={20} height={20} alt="jersey" />
                <span className="text-xl font-medium text-primary uppercase">Dressing Room</span>
        </span>
      </div>

      <div className="mb-0 w-fit rotate-[12.5deg] bg-[#F8FFFD] rounded-sm border border-primary -skew-y-12 px-4 py-2 h-12">
      <span className=" flex items-center justify-center">
                <Image src='../images/jersey.svg' width={20} height={20} alt="jersey" />
                <span className="font-medium text-primary text-xl uppercase">lounge</span>
                </span>
              </div>

              <div className="mb-0 w-fit rotate-[12.5deg] bg-[#F8FFFD] rounded-sm border border-primary -skew-y-12 px-4 py-2 h-12">
      <span className=" flex items-center justify-center">
                <Image src='../images/restroom.svg' width={20} height={20} alt="jersey" />
                <span className="font-medium text-primary text-xl uppercase">rest room</span>
                </span>
              </div>

              <div className="mb-0 w-fit rotate-[12.5deg] bg-[#F8FFFD] rounded-sm border border-primary -skew-y-12 px-4 py-2 h-12">
      <span className=" flex items-center justify-center">
                <Image src='../images/first-aid-kit.svg' width={20} height={20} alt="jersey" />
                <span className="font-medium text-primary text-xl uppercase">first aid</span>
                </span>
              </div>

              <div className="mb-0 w-fit rotate-[12.5deg] bg-[#F8FFFD] rounded-sm border border-primary -skew-y-12 px-4 py-2 h-12">
      <span className=" flex items-center justify-center">
                <Image src='../images/restroom.svg' width={20} height={20} alt="jersey" />
                <span className="font-medium text-primary text-xl uppercase">parking space</span>
                </span>
              </div>






              <div className="mb-0 w-fit rotate-[12.5deg] bg-[#F8FFFD] rounded-sm border border-primary -skew-y-12 px-4 py-2 h-12">
      <span className=" flex items-center justify-center">
                <Image src='../images/jersey.svg' width={20} height={20} alt="jersey" />
                <span className="font-medium text-primary text-xl uppercase">sitting area</span>
                </span>
              </div>

              </div>
       </div>

       <hr />

      </div>

      <div className="mt-12 flex w-1/2 flex-col space-y-3">
        <BookNow />
      </div>
    </div>

<div className="w-[95%] mt-4">
<div className="flex justify-between items-center mb-8">
  <h1 className="text-[#777] italic font-semibold text-xl">LOCATION</h1>
  <Button
        size={"sm"}
        variant={"outline"}
        className="mb-0 w-fit underline border-[#1974EE] text-[#1974EE] rotate-[12.5deg] -skew-y-12 px-4 py-4"
      >
        <span className="rotate-0 skew-y-0 text-xl">GET DIRECTION</span>
      </Button>
</div>
{/* Map component goes here  */}
<h1>MAP GOES HERE</h1>
<div className="border-2 rounded border-[#E0E0E0] p-4">
 <div className="flex justify-between items-center">
    <h1 className="font-bold italic text-2xl uppercase">EXPLORE OTHER turfs near you</h1>
    <Link href='#' className="underline uppercase text-[#1974EE] font-semibold flex items-center gap-2 ">
    View more
    <Image src='../images/arrow.svg' width={20} height={20} alt="arrow right" />
    </Link>
 </div>
</div>
<TurfsNearby />

</div>
</div>
  );
}
