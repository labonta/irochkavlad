import Image from "next/image"

type book = {
    title: string,
    imageHref: string,
    type: string,
    author: string,
    fandom: string
}

const Book = ({book} : {book: book}) => {
    return (
        <article className="max-w-50">
            <div className="flex flex-col gap-1 items-center">
                <h3 className="text-lg text-mauve-700 font-semibold">{book.title}</h3>
                <Image
                    className="border-2 border-mauve-700"
                    src={book.imageHref}
                    width={400}
                    height={500}
                    alt={book.title}
                />
            </div>

            <div>
                <ul className="text-sm">
                    <li className="font-semibold">
                        {book.type}
                    </li>
                    <li><span className="font-semibold">Автор:</span> {book.author}</li>
                    <li><span className="font-semibold">Фэндом:</span> {book.fandom}</li>
                </ul>
            </div>
        </article>
    )
}

export default Book