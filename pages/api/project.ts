import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest,NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest & {
        body : {
            name?: string
        },
        cookies : {
            [key: string] : string
        }
    },
    res: NextApiResponse
) {
    const user = await validateJWT(req.cookies[process.env.COOKIE_NAME ?? 'jwt']);
    if(!req.body?.name) return;

    await db.project.create({
        data : {
            name: req.body.name,
            ownerId: user.id
        }
    })

    res.json({data: {message: 'Ok'}});
}