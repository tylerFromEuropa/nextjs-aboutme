import Link from "next/link";

export default function page() {
    return (
        <>
            <main className="flex-grow my-24">
                <h2 className="text-3xl">What do you want to know about?</h2>
                <p>
                    |<br />
                    |_ <Link href="./about/tyler">Tyler</Link>
                    <br />
                    |_ <Link href="./about/birds">Birds</Link>
                    <br />
                    |_ <Link href="./portfolio">Portfolio</Link>
                </p>
            </main>
        </>
    );
}
