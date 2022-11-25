import Floater from "../Floater";
import { ParallaxLayer } from "@react-spring/parallax";
import geo1 from "/floaters/geo1.png";
import geo2 from "/floaters/geo2.png";
import geo3 from "/floaters/geo3.png";
import geo4 from "/floaters/geo4.png";
import geo5 from "/floaters/geo5.png";
import geo6 from "/floaters/geo6.png";
import splash1 from "/floaters/splash1.png";
import splash2 from "/floaters/splash2.png";
import splash3 from "/floaters/splash3.png";
import splash4 from "/floaters/splash4.png";
import splash5 from "/floaters/splash5.png";
import splash6 from "/floaters/splash6.png";
import splash7 from "/floaters/splash7.png";
import splash8 from "/floaters/splash8.png";
import splash9 from "/floaters/splash9.png";

const Section1: React.FC = () => {
  return (
    <>
      <ParallaxLayer className="w-1/2" offset={0} speed={-0.1}>
        <div className="h-screen">
          <Floater
            top={"0px"}
            left={"0px"}
            width={173}
            image={geo2}
            delay={"738ms"}
            duration={"6.92471s"}
          />
          <Floater
            top={"465px"}
            left={"-66px"}
            width={331}
            image={geo6}
            delay={"369ms"}
            duration={"7.70695s"}
          />
          <Floater
            top={"200px"}
            left={"475px"}
            width={286}
            image={geo3}
            delay={"160ms"}
            duration={"8.47337s"}
            className="z-10"
          />
          <Floater
            top={"860px"}
            left={"40px"}
            width={189}
            image={splash7}
            delay={"405ms"}
            duration={"5.93112s"}
          />
          <Floater
            top={"256px"}
            left={"-65px"}
            width={179}
            image={splash9}
            delay={"99ms"}
            duration={"6.79034s"}
          />
          <Floater
            top={"184px"}
            left={"514px"}
            width={74}
            image={splash1}
            delay={"827ms"}
            duration={"7.19641s"}
          />
          <Floater
            top={"513px"}
            left={"302px"}
            width={115}
            image={splash4}
            delay={"560ms"}
            duration={"8.16401s"}
          />
          <Floater
            top={"328px"}
            left={"393px"}
            width={117}
            image={splash6}
            delay={"77ms"}
            duration={"7.14806s"}
          />
          <Floater
            top={"-108px"}
            left={"200px"}
            width={153}
            image={splash2}
            delay={"476ms"}
            duration={"8.16461s"}
          />
          <Floater
            top={"177px"}
            left={"230px"}
            width={91}
            image={splash3}
            delay={"605ms"}
            duration={"7.51597s"}
          />
          <Floater
            top={"254px"}
            left={"110px"}
            width={205}
            image={geo5}
            delay={"200ms"}
            duration={"6.91925s"}
          />
          <Floater
            top={"777px"}
            left={"668px"}
            width={205}
            image={splash5}
            delay={"280ms"}
            duration={"5.76777s"}
          />
          <Floater
            top={"444px"}
            left={"616px"}
            width={205}
            image={splash5}
            delay={"312ms"}
            duration={"6.19494s"}
          />
          <Floater
            top={"-58px"}
            left={"584px"}
            width={205}
            image={geo1}
            delay={"731ms"}
            duration={"5.56368s"}
          />
          <Floater
            top={"615px"}
            left={"414px"}
            width={205}
            image={geo4}
            delay={"217ms"}
            duration={"6.54066s"}
          />
          <Floater
            top={"802px"}
            left={"309px"}
            width={205}
            image={splash8}
            delay={"930ms"}
            duration={"8.17654s"}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="w-1/2 flex" offset={0}>
        <div className="w-1/2"></div>
        <div className="flex flex-col w-1/2 justify-center px-8">
          <SectionTitle />
        </div>
      </ParallaxLayer>
    </>
  );
};
export default Section1;

const SectionTitle: React.FC = () => {
  return (
    <>
      <h2 className="text-secondary mb-6 animate-zoomin animation-delay-900">
        Cresciamo
      </h2>
      <h3 className="text-primary text-[100px] mb-6 animate-zoomin animation-delay-1000">
        insieme
      </h3>
      <div className="font-worksans text-darkblue text-[20px] leading-[26px] mb-6">
        <p className="mb-4">Soluzioni digitali di successo</p>
      </div>
      <div className="flex gap-5 content-end">
        <a className="leading-none">
          <span className="font-semibold font-worksans uppercase text-[15px] text-darkblue tracking-widest">
            Scopri di più
          </span>
        </a>
        <hr className="inline-block flex-1 h-[60%] mt-auto border-dashed border-primary border-t-2" />
      </div>
    </>
  );
};
