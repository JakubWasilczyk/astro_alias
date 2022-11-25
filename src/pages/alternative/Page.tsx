import { Parallax } from "@react-spring/parallax";
import Section1 from "../../components/alternative/Section1";
import Section2 from "../../components/alternative/Section2";
import Section3 from "../../components/alternative/Section3";
import Section4 from "../../components/alternative/Section4";
import AppMenu from "../../components/AppMenu";

const Page: React.FC = () => {
  return (
    <main>
      <AppMenu className="shadow-lg" />
      <Parallax pages={4} className="relative">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Parallax>
    </main>
  );
};
export default Page;
