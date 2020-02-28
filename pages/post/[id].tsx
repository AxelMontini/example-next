import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <h1>Ti mostrerei il post "{id}", ma purtroppo non sono ancora stato implementato...</h1>
            <p>Prova a cambiare l'id del post nella barra di ricerca e guarda cosa succede</p>
        </Layout>
    );
};

export default Post;