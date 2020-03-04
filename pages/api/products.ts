import {NextApiRequest, NextApiResponse} from "next";
import { isError } from "util";

type Response = {
    products?: Product[],
    error?: Error,
}

type Product = {
    name: string,
    short_description?: string,
    cost: number,
}

enum Error {
    /** Search must not be 0 length or null */
    EmptySearch,
    /** Search must be a string */
    NotAString,
}

export type ProductsResponse = Response;

export function isProductsResponse(obj: any): obj is ProductsResponse {
    return obj && ((obj.products && isProductArray(obj.products)) || (obj.error && isError(obj.error)));
};

export function isProductArray(obj: any): obj is Product[] {
    return obj && Array.isArray(obj) && obj.every(isProduct);
};

export function isProduct(obj: any): obj is Product {
    return obj && typeof obj.name === "string" && typeof obj.cost === "number" && (typeof obj.short_description === "string" || typeof obj.short_description === "undefined");
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    const search = req.query["search"];

    if(search) {
        if(typeof search === "string") {
                const content: Response = {
                    products: [],
                };

                res.status(200).json(content);
        } else {
            const content: Response = {
                error: Error.NotAString,
            };

            res.status(200).json(content);
        }
    } else {
        // empty search
        const content: Response = {
            error: Error.EmptySearch,
        };

        res.status(400).json(content);
    }
};