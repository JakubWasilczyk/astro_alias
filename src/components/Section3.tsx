import FloaterAbsolute from "./FloaterAbsolute";
import SectionBase from "./SectionBase";
import geo3 from "/floaters/geo3.png";
import geo6 from "/floaters/geo6.png";
import splash1 from "/floaters/splash1.png";
import splash5 from "/floaters/splash5.png";

const Section3: React.FC = () => {
  return (
    <SectionBase id="3">
      <FloaterAbsolute
        bottom={"0"}
        left={"-332px"}
        width={331}
        image={geo6}
        delay={"0.80994s"}
        duration={"7.85193s"}
        className="z-50"
      />
      <div className="container relative mx-auto h-full pt-8">
        <FloaterAbsolute
          top={"-99px"}
          right={"-54.1px"}
          width={311}
          image={geo3}
          delay={"0.25819s"}
          duration={"8.30448s"}
          className="-z-10"
        />
        <FloaterAbsolute
          top={"350px"}
          right={"3.1px"}
          width={74}
          image={splash1}
          delay={"0.20871s"}
          duration={"5.85798s"}
          className="-z-10"
        />
        <FloaterAbsolute
          top={"538px"}
          right={"763px"}
          width={145}
          image={splash5}
          delay={"0.31712s"}
          duration={"8.563s"}
          className="-z-10"
        />
        <h2 className="text-primary font-bold text-[100px] font-berlingske leading-none mb-6">
          Servizi
        </h2>
        <p className="mb-20">
          Aiutiamo la tua azienda a creare strategie digitali di successo,
          esploriamo insieme nuove opportunità e facciamo crescere il tuo
          business.
        </p>
        <div className="flex justify-between items-start">
          <Tab title={"E-commerce"}>
            <p>
              Uno store digitale curato in ogni dettaglio, dalla tecnologia ai
              sistemi di pagamento, dal servizio clienti alla logistica.
            </p>
          </Tab>
          <TabDivider />
          <Tab title={"Cloud native software"}>
            <p>
              L’eccellenza nella gestione dei tuoi processi grazie a software
              online costruiti su misura per te, sempre accessibili e da ogni
              parte del mondo.
            </p>
          </Tab>
          <TabDivider />
          <Tab title={"Website"}>
            <p>
              La piattaforma migliore, i contenuti più adatti, il design più
              appropriato per creare uno spazio web adatto alle tue esigenze.
              Scopriamo insieme ciò di cui hai davvero bisogno.
            </p>
          </Tab>
          <TabDivider />
          <Tab title={"Digital design"}>
            <p>
              Dallo UX/UI Design al branding, dalle animazioni video alla
              grafica, lavoriamo insieme per trovare la veste migliore ai tuoi
              progetti.
            </p>
          </Tab>
          <TabDivider />
          <Tab title={"Digital marketing"}>
            <p>
              Definiamo strategie per affermare la tua presenza sul web,
              lavorando sulla SEO, le campagne advertising e il social media
              marketing.
            </p>
          </Tab>
        </div>
      </div>
    </SectionBase>
  );
};
export default Section3;

export interface TabProps extends React.PropsWithChildren {
  title: string;
  className?: string;
  groupName?: string;
}

const Tab: React.FC<TabProps> = (props) => {
  const className = props.className ?? "";
  return (
    <div className="group h-auto px-5 cursor-default bg-white rounded-[2rem] flex-1 transition-shadow duration-500 shadow-none hover:shadow-lg">
      <div className="py-5 flex content-center cursor-pointer">
        <h5 className="m-auto text-dark">{props.title}</h5>
      </div>
      <div className="transition-all duration-700 max-h-0 opacity-0 overflow-clip group-hover:max-h-80 group-hover:opacity-100">
        {props.children}
        <div className="btn-secondary my-4 w-full">Scopri di più</div>
      </div>
    </div>
  );
};

const TabDivider: React.FC = () => {
  return (
    <div className="w-8 h-16 flex justify-center items-center">
      <div className="h-2 w-2 rounded-full bg-dark"></div>
    </div>
  );
};
