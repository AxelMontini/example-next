import Link from "next/link";

// In questa pagina, <style jsx> è un modo per definire stili con sintassi CSS che valgono solo per
// il componente in scope infatti il selettore "a" si applica solo agli a dentro la navbar

const Navbar = () => (
    <>
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/agent">
            <a>Agent</a>
        </Link>
    </nav>
    <style jsx>{`
        nav {
            background-color: black;
            padding: 12px;

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
        }

        a {
            color: white;
            text-decoration: none;
            font-weight: bolder;
        }

        a:hover {
            text-decoration: underline;
        }
    `}</style>
    </>
);

export default Navbar;