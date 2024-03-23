import LogoAnima from "/LogoAnima.png";
import LogoUnifacs from "/LogoUnifacs.png";

export function Footer (){
    return (
        <div className="bg-secondary text-white h-[568px] flex flex-col justify-between">
            <div className="">INFOS</div>
            <footer className="border-t flex flex-row justify-between items-center py-[24px] px-[120px]">
                <div className="font-[600]">UNIVERSIDADE:</div>
                <div className="flex flex-row gap-20">
                    <a href="/">
                    <img src={LogoAnima} alt="LogoAnima" className="max-w-[80%] md:max-w-[100%] w-[109px]"/>
                    </a>
                    <a href="/">
                        <img src={LogoUnifacs} alt="LogoUnifacs" className="max-w-[80%] md:max-w-[100%] w-[160px]"/>
                    </a>
                </div>
                
            </footer>
        </div>

    );
}