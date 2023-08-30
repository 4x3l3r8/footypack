import Image from "next/image";
import ball from "public/images/ball.png";
import { Button } from "../ui/button";

export interface ISearchBookPlayProps {}

export default function SearchBookPlay(props: ISearchBookPlayProps) {
  return (
    <div className="flex w-full justify-center mt-8 mb-24">
      <div className="flex w-fit flex-col md:flex-row justify-center">
        <div className="flex md:w-1/2 mb-4 md:mb-0 flex-col justify-center space-y-3 border border-r-0 px-8">
          <span className="text-3xl font-black uppercase italic">
            Search, Play and Book
          </span>
          <p className="mr-7 text-justify text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            eu eu consequat.
          </p>
          <Button
            size={"lg"}
            className="mb-0 mt-auto h-auto w-fit rotate-[12.5deg] -skew-y-12 rounded-none px-9 py-6"
          >
            <span className="rotate-0 skew-y-0 text-xl uppercase">
              Get started
            </span>
          </Button>
        </div>
        <Image
          src={ball}
          alt="leg on ball"
          height={720}
          width={1280}
          className="md:h-80 md:w-80 object-fit"
        />
      </div>
    </div>
  );
}
