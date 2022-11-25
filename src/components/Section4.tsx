import { AiOutlineInstagram } from "react-icons/ai/index";
import { ImFacebook } from "react-icons/im/index";
import { FaLinkedinIn } from "react-icons/fa/index";
import { BsArrowRight } from "react-icons/bs/index";
import SectionBase from "./SectionBase";
import logo from "/logo_orange.svg";

const Section4: React.FC = () => {
  return (
    <SectionBase id="4">
      <div className="flex h-full w-full bg-[url('/images/desk-selva.svg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full flex justify-end items-end">
          <Contacts />
        </div>
        <div className="w-[30%] bg-dark">
          <Menu />
        </div>
      </div>
    </SectionBase>
  );
};
export default Section4;

const Contacts: React.FC = () => {
  return (
    <div className="text-white mb-5 mr-40">
      <h2 className="text-white text-[50px] mb-4">Contattaci</h2>
      <div className="font-worksans text-xl mb-4">
        <strong>Alias Srl</strong>
        <div className="flex gap-4">
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
        <div className="flex gap-4">
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
      <div className="font-worksans text-xl mb-4">
        <strong>Alias USA Inc.</strong>
        <div className="flex gap-4">
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
        <div className="flex gap-4">
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
  );
};

const Menu: React.FC = () => {
  return (
    <div className="mx-20 mt-24">
      <div className="flex items-center mb-16">
        <img src={logo} alt="ALIAS" className="mr-4" />
        <span className="text-primary font-worksans text-[17px] font-bold">
          ALIAS2K
        </span>
        <div className="h-px flex-1 ml-8 bg-primary" />
      </div>
      <div className="text-white font-worksans">
        <div className="font-bold text-xl mb-8">
          Soluzioni digitali di successo
        </div>
        <div className="font-bold text-2xl mb-4">Alias Srl</div>
        <p className="text-base text-white mb-8">
          Via Cennano, 31 <br />
          Montevarchi, Arezzo, Italia <br />
          P. IVA IT01648260519 <br />
        </p>
        <div className="font-bold text-2xl mb-4">Alias USA Inc.</div>
        <p className="text-base text-white mb-8">
          NY United States, 18 Bridge St, <br />
          Unit 2A 11201 Brooklyn <br />
          EIN 32-0600989 <br />
        </p>
      </div>
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
      <div className="font-worksans text-base text-white mb-8">
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
      <div className="flex justify-evenly text-white text-sm">
        <a
          href="https://alias2k.com/it/privacy-policy/"
          className="transition-colors duration-500 hover:text-secondary"
        >
          Privacy Policy
        </a>
        <a
          href="https://alias2k.com/it/cookie-policy/"
          className="transition-colors duration-500 hover:text-secondary"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
};
