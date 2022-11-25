import { AiOutlineInstagram } from "react-icons/ai/index";
import { ImFacebook } from "react-icons/im/index";
import { FaLinkedinIn } from "react-icons/fa/index";
import { BsArrowRight } from "react-icons/bs/index";
import { ParallaxLayer } from "@react-spring/parallax";
import logo from "/logo_orange.svg";

const Section4: React.FC = () => {
  return (
    <ParallaxLayer offset={3}>
      <div className="flex flex-col h-full w-full bg-cover bg-center bg-no-repeat">
        <div className="basis-3/5 flex justify-center items-center">
          <Contacts />
        </div>
        <div className="basis-2/5 bg-dark flex flex-col justify-center">
          <Menu />
        </div>
      </div>
    </ParallaxLayer>
  );
};
export default Section4;

const Contacts: React.FC = () => {
  return (
    <div className="text-dark w-2/3">
      <h2 className="text-primary text-center mb-8">Contattaci</h2>
      <div className="flex justify-evenly">
        <div className="font-worksans text-xl">
          <div className="text-secondary font-medium text-3xl mb-2">
            Alias Srl
          </div>
          <div className="flex gap-8">
            e-mail
            <strong>
              <a
                href="mailto:info@alias2k.com"
                className="hover:text-secondary-600 cursor-pointer transition-colors duration-500"
              >
                info@alias2k.com
              </a>
            </strong>
          </div>
          <div className="flex gap-8">
            phone
            <strong>
              <a
                href="tel:+39055900249"
                className="hover:text-secondary-600 cursor-pointer transition-colors duration-500"
              >
                +39 055 900 249
              </a>
            </strong>
          </div>
        </div>
        <div className="font-worksans text-xl">
          <div className="text-secondary font-medium text-3xl mb-2">
            Alias USA Inc.
          </div>
          <div className="flex gap-8">
            e-mail
            <strong>
              <a
                href="mailto:info@alias2k.com"
                className="hover:text-secondary-600 cursor-pointer transition-colors duration-500"
              >
                info@alias2k.com
              </a>
            </strong>
          </div>
          <div className="flex gap-8">
            phone
            <strong>
              <a
                href="tel:+19179055988"
                className="hover:text-secondary-600 cursor-pointer transition-colors duration-500"
              >
                +1 (917) 905-5988
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="mx-20 ">
      <div className="flex items-center mb-16">
        <img src={logo} alt="ALIAS" className="mr-4" />
        <span className="text-primary font-worksans text-[17px] font-bold">
          ALIAS2K
        </span>
        <div className="h-px flex-1 mx-8 bg-primary" />
        <div className="font-bold text-xl text-white">
          Soluzioni digitali di successo
        </div>
      </div>
      <div className="grid grid-cols-3 text-white font-worksans">
        <div>
          <div className="font-bold text-2xl mb-4">Alias Srl</div>
          <p className="text-base text-white mb-8">
            Via Cennano, 31 <br />
            Montevarchi, Arezzo, Italia <br />
            P. IVA IT01648260519 <br />
          </p>
        </div>
        <div>
          <div className="font-bold text-2xl mb-4">Alias USA Inc.</div>
          <p className="text-base text-white mb-8">
            NY United States, 18 Bridge St <br />
            Unit 2A 11201 Brooklyn <br />
            EIN 32-0600989 <br />
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex align-center justify-start gap-4 mb-8">
            <a
              className="text-primary text-lg hover:text-white transition-colors duration-500"
              href="https://www.instagram.com/alias2kcom/"
              aria-label="instagram"
              target="_blank"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="text-primary text-lg hover:text-white transition-colors duration-500"
              href="https://facebook.com/alias2kcom"
              aria-label="facebook"
              target="_blank"
            >
              <ImFacebook />
            </a>
            <a
              className="text-primary text-lg hover:text-white transition-colors duration-500"
              href="https://www.linkedin.com/company/alias-srl"
              aria-label="linkedin"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="font-worksans text-base text-white mb-4">
            Hai un’idea per un progetto di business digitale?
          </div>
          <a
            className="font-worksans text-3xl text-white transition-colors duration-500 hover:text-secondary font-bold flex items-center gap-4 mb-12"
            href="https://alias2k.com/it/contatti/"
          >
            <div className="animate-bounceright text-5xl">
              <BsArrowRight />
            </div>
            <span className="flex-1">Parla con noi!</span>
          </a>
        </div>

        <div className="flex justify-center gap-8 text-white text-sm col-span-3">
          <a
            href="https://alias2k.com/it/privacy-policy/"
            className="transition-colors duration-500 hover:text-secondary"
            target="_blank"
          >
            Privacy Policy
          </a>
          -
          <a
            href="https://alias2k.com/it/cookie-policy/"
            className="transition-colors duration-500 hover:text-secondary"
            target="_blank"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};
