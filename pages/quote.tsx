import useSWR from "swr";
import Layout from "../components/Layout";

function fetcher(url: string) {
    return fetch(url).then(r => r.json());
}

export default function Quote() {
    const {data, error} = useSWR("/api/randomQuote", fetcher);

    let quote = data?.quote;
    const name = data?.name;

    if(!data) {
        quote = "Loading...";
    }

    if(error) {
        quote = "Failed to fetch the quote";
    }

    return (
        <Layout>
            <div>
                <p className="quote">"{quote}"</p>
                <p className="name">{name}, 1969 (not colorized)</p>
            </div>
            <style jsx>{`
                .quote {
                    text-decoration: italic;
                }

                .name {
                    border: 2px solid black;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </Layout>
    );
}