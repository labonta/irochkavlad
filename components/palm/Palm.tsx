import Image, { StaticImageData } from "next/image"



const Palm = ({ src, title, className }: { src: StaticImageData, title: string, className?: string }) => {
    return (
        <span className="w-30">
            <Image
                className={"w-full h-auto " + className ? className : ""}
                src={src}
                alt={title}
                width={654}
                height={764}
            />
        </span>
    )
}

export default Palm