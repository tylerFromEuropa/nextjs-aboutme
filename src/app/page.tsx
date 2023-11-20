import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="flex-grow flex-col my-24">
                <article>
                    <h2 className="text-3xl font-bold ">Welcome</h2>
                    <p className="mb-8 ">You have stumbled upon my totally real terminal...</p>

                    <h2 className="text-3xl font-bold ">Things I Like</h2>
                    <p className="">Well, I like lots of things. If you're curious to know more, look below, silly.</p>
                </article>

                <section className="mt-14 flex flex-row gap-1">
                    <section>
                        <h3 className="text-xl ">Music:</h3>
                        <ul>
                            <li>Rock</li>
                            <li>Metal</li>
                            <li>Country</li>
                            <li>Old School Pop</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl ">Movies:</h3>
                        <ul>
                            <li>Interstellar</li>
                            <li>Lord of the Rings Series</li>
                            <li>Hacksaw Ridge</li>
                            <li>Spider-Man Trilogy (original one with Toby Maguire)</li>
                            <li>Grown Ups</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl ">Video Games:</h3>
                        <ul>
                            <li>Red Dead Redemption 2</li>
                            <li>Wacky Wheels</li>
                            <li>Raptor: Call of the Shadows</li>
                            <li>Ghost of Tsushima</li>
                            <li>Super Mario Bros</li>
                            <li>Tetris</li>
                        </ul>
                    </section>
                </section>
            </main>
        </>
    );
}
