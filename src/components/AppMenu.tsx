import logoDark from '/logo_dark.svg';
import instagram from '/instagram.svg';
import facebook from '/facebook.svg';
import linkedIn from '/linkedin.svg';


const AppMenu: React.FC = () => {
    return (
        <div className="group z-50 flex flex-col cursor-default fixed bg-gradient-to-b transition-all duration-500 from-secondary to-primary top-[35px] left-[35px] rounded-full w-[74px] min-h-[230px] hover:min-h-[90vh] justify-between">
            <div className="flex flex-col h-[230px] pb-[3.7rem] pt-[2.4rem] justify-between">
                <img src={logoDark} width={28} height={32} className="self-center" />
                <div className="transform -rotate-90 text-white font-bold text-center font-worksans text-[17px] tracking-[3.4px]">
                    ALIAS2K
                </div>
            </div>
            <div className="transition-all duration-500 max-h-0 opacity-0 group-hover:opacity-100 group-hover:max-h-96 justify-self-end flex-1 flex overflow-clip">
                <div className="hidden group-hover:flex pb-[37px] flex-1 flex-col text-white justify-end align-middle">
                    <div className="text-center py-4"><a className="no-underline" href="/">ENG</a></div>
                    <a className="py-4" href="https://www.instagram.com/alias2kcom/">
                        <img src={instagram} height={20} className="m-auto" />
                    </a>
                    <a className="py-4" href="https://facebook.com/alias2kcom">
                        <img src={facebook} height={20} className="m-auto" />
                    </a>
                    <a className="py-4" href="https://www.linkedin.com/company/alias-srl">
                        <img src={linkedIn} height={20} className="m-auto" />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default AppMenu;