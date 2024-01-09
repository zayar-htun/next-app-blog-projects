import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <div>
                <h1>Not found Page</h1>
                <p>Please go back to home page</p>
                <Link href="/">Homepage</Link>
            </div>
        </div>
    );
}
