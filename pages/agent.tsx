// Questa pagina mostra l'user agent.
// Notare che la funzione Agent è dichiarata ed esportata in modo rispetto ad Index

import {NextPage} from "next";
import Layout from "../components/Layout";

const Agent: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
        <h1>Your user agent is {userAgent}</h1>
    </Layout>
);

Agent.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
    return {userAgent};
};

export default Agent;