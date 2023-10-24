import z from "zod";

export type Review = {
    id: number,
    title: string,
    body: string,
    rating: number,
    product_external_id: number,
    reviewer: {
        id: number,
        name: string,
        email: string,
        external_id: number,
        avatar: string,
        created_at: string,
        updated_at: string,
        last_login_at: string,
        last_login_ip: string,
        last_login_ua: string
    },
    source: string,
    curated: string,
    published: boolean,
    hidden: boolean,
    verified: string,
    featured: boolean,
    created_at: string,
    updated_at: string,
    has_published_pictures: boolean,
    has_published_videos: boolean,
    pictures: [],
    ip_address: string,
    product_title: string,
    product_handle: string
}

const reviewSchema = z.object({
    shop_domain: z.string(),
    platform: z.enum(["shopify"]),
    name: z.string(),
    email: z.string(),
    rating: z.number(),
    body: z.string(),
    id: z.string(),
    title: z.string(),
    reviewer_name_format: z.string().optional(),
    cf_answers: z.array(z.object({
        cf_question_id: z.number(),
        value: z.string()
    })).optional(),
    picture_urls: z.array(z.string()).optional(),
    ip_addr: z.string().optional()
});

export type ReviewWidget = {
    widget: string
}

// create a type from the schema
type ReviewSchema = z.infer<typeof reviewSchema>;

export default class JudgeMeService {
    // initializing the judgeme api
    static async judgeMeApi<T>(args: {
        path: string,
        method: "POST" | "GET",
        body?: string,
        params?: Record<string, string>
    }) {
        const { path, method, body, params } = args;
        const searchParams = new URLSearchParams(params);
        const shopDomain = "suplab.myshopify.com"
        const privateToken = "m8uogR0l9FtGK62wm5KJxpIvp00"
        const res = await fetch(`https://judge.me/api/v1/${path}?api_token=${privateToken}&shop_domain=${shopDomain}&${searchParams.toString()}`, {
            method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body
        });
        return res.json() as T;
    }

    async getProductReviews(productId: string) {
        const res = await JudgeMeService.judgeMeApi<Review[]>({
            path: `reviews`,
            method: "GET",
            params: {
                external_id: productId
            }
        });
        return res;
    }

    async createProductReview(args: {
        review: ReviewSchema,
    }) {
        const review = reviewSchema.parse(args.review);
        const res = await JudgeMeService.judgeMeApi<Review>({
            path: `reviews`,
            method: "POST",
            body: JSON.stringify(review)
        });
        return res;
    }

    async getProductReviewWidget(productId: string) {
        const res = await JudgeMeService.judgeMeApi<ReviewWidget>({
            // https://judge.me/api/v1/widgets/preview_badge
            path: `widgets/product_review`,
            method: "GET",
            params: {
                external_id: productId
            }
        });
        return res;
    }
    async getWidgetSettings() {
        const res = await JudgeMeService.judgeMeApi<{ settings: string }>({
            // https://judge.me/api/v1/widgets/
            // product_review
            // https://judge.me/api/v1/
            path: `widgets/settings`,
            method: "GET",
        });
        return res.settings;
    }
}


// {
//     "shop_domain": "example.myshopify.com",
//     "platform": "shopify",
//     "id": 999999,
//     "email": "john@example.com",
//     "name": "John Smith",
//     "reviewer_name_format": "",
//     "rating": 5,
//     "title": "Review title",
//     "body": "Review body",
//     "cf_answers": [
//       {
//         "cf_question_id": 1,
//         "value": "Yellow"
//       },
//       {
//         "cf_question_id": 2,
//         "value": "Big"
//       },
//       {
//         "cf_question_id": 3,
//         "value": "4/5"
//       },
//       {
//         "cf_question_id": 4,
//         "value": "Free text answer"
//       }
//     ],
//     "picture_urls": [
//       "https://pub-images.judge.me/judgeme/funny/big-pr.jpg",
//       {
//         "$ref": "#/components/examples/image_url/value"
//       }
//     ],
//     "ip_addr": "123.123.123.123"
//   }
// Above is the example of the request body for creating a review
// create a zod schema for the request body

