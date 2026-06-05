import Image from "next/image";
import Book from "./Book"
import Maxim from '../../../../public/Maxim.png'


var books = [
    {
        title: "Последний рубеж",
        imageHref: "https://assets.teinon.net/fanfic-covers/iSQ5HM6RYB3WwVuOdslkV92vYHCu1sBF.jpg",
        type: "Фанфик",
        author: "Obi_Wan",
        fandom: "Гарри Поттер"
    },

]


const BookList = () => {
    if (books.length <= 0) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center">
                <Image
                    className="w-70"
                    src={Maxim}
                    alt="Максим"
                    width={1605}
                    height={1485}
                />
                <h1 className="text-xl font-semibold text-mauve-700">Печалики, ни одной книжки(</h1>
            </div>
        )
    }
    return (
        <>
            {
                books && <ul className="w-full flex flex-wrap gap-10 justify-center md:justify-start md:gap-20">
                    {
                        books.map(book => {
                            return (
                                <li key={book.title}>
                                    <Book book={book} />
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </>
    )
}

export default BookList