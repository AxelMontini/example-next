// Link: navigazione lato client (senza refresh)
import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
        <p>
            <Link href="/about">
                <a>About page</a>
            </Link>
        </p>
        <p>
            <Link href="/agent">
                <a>User agent</a>
            </Link>
        </p>
        <p>
            <Link href="/post/[id]" as="/post/cambiami">
                <a>Post "Cambiami"</a>
            </Link>
        </p>
    </Layout>
);

export default Index;