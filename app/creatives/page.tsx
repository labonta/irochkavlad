
import Image from "next/image"
import Maxim from "../../public/Maxim.png"

function Creatives() {
    return (
        <div className="w-full h-full pt-10">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                    className="w-70"
                    src={Maxim}
                    alt="Максим"
                    width={1605}
                    height={1485}
                />
                <h1 className="text-xl font-semibold text-center text-mauve-700">Печалики, ни одной творческой работы(</h1>
            </div>
        </div>
    )
}

export default Creatives