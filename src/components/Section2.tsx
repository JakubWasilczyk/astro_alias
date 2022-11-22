
import Floater from './Floater';
import SectionBase from './SectionBase';
import geo6 from '/floaters/geo6.png';


const Section2: React.FC = () => {
    return (
        <SectionBase id="2">
            <Floater bottom={"0"} right={"0"} width={331} image={geo6} delay={"0.80994s"} duration={"7.85193s"} />
            <div className='-z-10 relative overflow-hidden w-full aspect-w-16 aspect-h-9'>
                <iframe src="https://player.vimeo.com/video/771149654?h=2af8544caf&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963" 
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen={true}
                        title="ALIAS2K_LANDING_MAIN_V4_NOSUB.mp4" 
                        data-ready="true" 
                        className='h-full w-full absolute top-0 bottom-0 left-0 right-0'>
                </iframe>
                <div className='bg-gradient-to-r  from-black/50 to-black/10 z-10 absolute top-0 bottom-0 left-0 right-0'></div>
            </div>
            <div className='absolute z-10 top-0 bottom-0 left-0 right-0'>
                <div className='container mx-auto h-full flex'>
                    <div className='w-[50%] max-h-screen h-auto flex flex-col justify-end pb-28'>
                        <h2 className='text-primary font-bold text-[100px] font-berlingske leading-none mb-6'>Chi siamo</h2>
                        <p className='text-white font-worksans text-[20px] leading-[26px] mb-12'>
                            Un team con esperienze, competenze e personalità diverse, ma con un unico obiettivo: creare valore per i nostri clienti.
                        </p>
                        <div>
                            <span className='rounded-full cursor-pointer bg-secondary py-3 px-6 leading-none inline-flex justify-center transition-all duration-500 w-40 hover:w-full'>
                                <span className='font-worksans text-white font-normal leading-none text-[15px] tracking-wider inline-flex'>
                                    Scopri di più
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionBase>
    );
}
export default Section2;