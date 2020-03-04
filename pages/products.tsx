import Layout from "../components/Layout";
import useSWR from "swr";
import {ProductsResponse, isProductsResponse} from "./api/products";

function fetcher(url: string) {
    return fetch(url).then(r => r.json());
}

export default function Products() {
    const keyword = "Car";
    const {data, error} = useSWR(`/api/products?search=${keyword}`, fetcher);

    if(error) return (<Layout><h1>An error occured. Error: {error}</h1></Layout>)
    if(data) {
        if(isProductsResponse(data)) {
            if(data.error) {
                return (
                    <Layout>
                        <h1>An error occured: {data.error}</h1>
                    </Layout>
                )
            } else if(data.products) {
                return (
                    <Layout>
                        <h1>Showing you "{keyword}" products: {JSON.stringify(data.products)}</h1>
                    </Layout>
                )
            }
        } else {
            return (
                <Layout>
                    <h1>Malformed response</h1>
                </Layout>
            );
        }
    }

    return (
        <Layout>
            <h1>Loading...</h1>
        </Layout>
    );
}