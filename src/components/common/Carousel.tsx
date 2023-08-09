import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import field1 from "public/images/static/turf1.png";
import field2 from "public/images/static/turf2.png";
import field3 from "public/images/static/turf3.png";
import field4 from "public/images/static/turf4.png";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ICarouselProps {}

export function Carousel(props: ICarouselProps) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={4}
      infinite
      isIntrinsicHeight
      isPlaying
      interval={5000}
    >
      <div className="relative">
        <Slider>
          <Slide className="h-fit" index={0}>
            <Image
              src={field1}
              height={1270}
              width={1270}
              alt="uol"
              className="h-52"
            />
          </Slide>
          <Slide className="h-fit" index={1}>
            <Image
              src={field2}
              height={1270}
              width={1270}
              alt="uol"
              className="h-52"
            />
          </Slide>
          <Slide className="h-fit" index={2}>
            <Image
              src={field3}
              height={1270}
              width={1270}
              alt="uol"
              className="h-52"
            />
          </Slide>
          <Slide className="h-fit" index={3}>
            <Image
              src={field4}
              height={1270}
              width={1270}
              alt="uol"
              className="h-52"
            />
          </Slide>
        </Slider>
        <div className="absolute bottom-0 left-1/2 flex gap-4">
          <ButtonBack>
            <ChevronLeft className="fill-white stroke-transparent" />
          </ButtonBack>
          {/* <DotGroup
            renderDots={(props) => {
              return <div className="h-2 w-2 rounded-full bg-white"></div>;
            }}
          /> */}
          <ButtonNext>
            <ChevronRight className="fill-white stroke-transparent" />
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
}
