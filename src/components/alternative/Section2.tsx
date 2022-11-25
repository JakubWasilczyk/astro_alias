import Floater from "../Floater";
import Vimeo from "@u-wave/react-vimeo";
import { ParallaxLayer } from "@react-spring/parallax";
import SectionBase from "../SectionBase";
import geo6 from "/floaters/geo6.png";

const Section2: React.FC = () => {
  return (
    <>
      <ParallaxLayer offset={1} className="-z-10 relative overflow-clip">
        <div className="aspect-h-9 aspect-w-16">
          <Vimeo
            video="771149654"
            autoplay={true}
            pip={true}
            loop={true}
            controls={false}
            muted={true}
            background={true}
            responsive={true}
          />
        </div>
        <div className="bg-gradient-to-r  from-black/50 to-black/10 z-10 absolute top-0 bottom-0 left-0 right-0"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} className="z-10 max-h-screen">
        <div className="absolute z-10 top-0 bottom-0 left-0 right-0">
          <div className="container mx-auto h-full flex">
            <div className="w-[50%] max-h-screen h-auto flex flex-col justify-end pb-28">
              <h2 className="mb-6">Chi siamo</h2>
              <p className="text-white mb-12">
                Un team con esperienze, competenze e personalità diverse, ma con
                un unico obiettivo: creare valore per i nostri clienti.
              </p>
              <div>
                <a
                  className="btn-secondary w-40 hover:w-full"
                  href="https://alias2k.com/it/chi-siamo/"
                  target="_blank"
                >
                  Scopri di più
                </a>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={-0.2} className="relative">
        <Floater
          bottom={"0"}
          right={"0"}
          width={331}
          image={geo6}
          delay={"0.80994s"}
          duration={"7.85193s"}
          className="z-50"
        />
      </ParallaxLayer>
    </>
  );
};
export default Section2;
