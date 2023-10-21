import type { RequestHandler } from "@sveltejs/kit";
import path from "path";
import sharp from "sharp";
import {existsSync, readFileSync, writeFileSync} from "fs";

export const GET: RequestHandler = async ({url}) => {
    const imgWithDimensions = url.searchParams.get('img');

    if (imgWithDimensions === null) {
        return new Response('img is null', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    const imgName = imgWithDimensions.split('-')[0];
    const dimensions = imgWithDimensions.split('-')[1];

    if (dimensions === null) {
        return new Response('dimensions is null', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    const dimensionsArray = dimensions.split('x');

    if (dimensionsArray.length !== 2) {
        return new Response('dimensions is invalid', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    const width = parseInt(dimensionsArray[0]);
    const height = parseInt(dimensionsArray[1]);

    if (isNaN(width) || isNaN(height)) {
        return new Response('dimensions is invalid', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    // const cachePath = path.join(CACHE_DIR, `${imgName}-${dimensions}.png`);
    //
    // if (existsSync(cachePath)) {
    //     // Serve cached image
    //     const buffer = readFileSync(cachePath);
    //     return new Response(buffer, {
    //         status: 200,
    //         headers: {
    //             'Content-Type': 'image/png',
    //         },
    //     });
    // }

    // Fetch image from /src/assets folder, cache it, then serve it

    const imgPath = path.join(process.cwd(), 'src', 'assets', 'img', imgName + '.png');

    if (!existsSync(imgPath)) {
        return new Response('img not found', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    // get image
    const buffer = readFileSync(imgPath);

    // resize it
    const resizedBuffer = await sharp(buffer)
        .resize(width, height)
        .toBuffer();

    // cache it
    // writeFileSync(cachePath, resizedBuffer);

    return new Response(resizedBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
        },
    });
}