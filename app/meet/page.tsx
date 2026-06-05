import Image from "next/image"
import IraPalm from "../../public/IraPalm.png"
import VladPalm from "../../public/VladPalm.png"
import Palm from "@/components/palm/Palm"
import CountDown from "@/components/countDown/CountDown"
import { Loader } from "@deemlol/next-icons";

function Meet() {
    return (
        <>
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex relative">
                    <Palm className="rounded-bl-full animate-[floatleft_5s_ease-in-out_infinite]" src={IraPalm} title="Ira's Palm" />
                    <Palm className="rounded-br-full animate-[floatright_5s_ease-in-out_infinite]" src={VladPalm} title="Ira's Palm" />
                    <div className="absolute left-[50%] top-[55%] transform translate-y-[-50%] translate-x-[-50%]">
                        <CountDown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meet