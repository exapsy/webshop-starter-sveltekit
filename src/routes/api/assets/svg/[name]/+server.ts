import type { RequestHandler } from "@sveltejs/kit";
import path from 'path'
import {existsSync, readFileSync} from "fs";

export const GET: RequestHandler = async ({params: {name}}) => {
    const svgName = name;

    if (svgName === null) {
        return new Response('svgName is null', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

   // serve the svg directly from the file system from assets
    const svgPath = path.join('src/routes/assets', `${svgName}.svg`);

    if (!existsSync(svgPath)) {
        return new Response('svg not found', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    const buffer = await readFileSync(svgPath);
    return new Response(buffer, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
        },
    })
}
