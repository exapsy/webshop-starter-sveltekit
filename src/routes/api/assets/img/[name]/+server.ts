import {join} from 'path';
import type { RequestHandler } from '@sveltejs/kit';
import {existsSync, mkdirSync, readFileSync} from "fs";
import sharp from "sharp";

const CACHE_DIR = join(process.cwd(), '.image-cache');

// Ensure cache directory exists
if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR);
}

export const GET: RequestHandler = async({params: { name:  imgFullname }}) => {
    if (imgFullname === null) {
        return new Response('img is null', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    } else if (imgFullname?.split('-').length !== 2) {
        // if dimensions is not provided, use original image
        imgFullname = `${imgFullname}-original`;
    }

    const imgName = imgFullname.split('-')[0];
    const dimensions = imgFullname.split('-')[1];

    if (dimensions === null) {
        return new Response('dimensions is null', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    const originalImagePath = join(process.cwd(), 'src', 'assets', 'img', `${imgName}`);

    // Image exists in assets, get the original image
    if (dimensions === 'original') {
        // get buffer from original image's path
        const imgBuffer = await readFileSync(originalImagePath);

        return new Response(imgBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
            }
        });
    }

    const dimensionsArray = dimensions.split('x');

    // Image does not exist in assets, fetch at least a placeholder
    if (!existsSync(originalImagePath)) {
        // fetch placeholder from placeholder.it API
        const url = `https://placehold.it/${dimensions}?text=${encodeURIComponent(imgName)}`;
        const response = await fetch(url);

        if (response.status !== 200) {
            return new Response('internal error while trying to get image from placeholder api', {
                status: 200,
                headers: {
                    'Content-Type': 'text/plain',
                }
            });
        }

        const buffer = await response.arrayBuffer()
        const resizedImgBuffer = await sharp(buffer).resize(parseInt(dimensionsArray[0]), parseInt(dimensionsArray[1])).toBuffer();

        return new Response(resizedImgBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
            }
        });
    }

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

    const cachePath = join(CACHE_DIR, `${imgName}-${dimensions}.png`);

    if (existsSync(cachePath)) {
        // serve cached image
        const buffer = readFileSync(cachePath);
        return new Response(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
            },
        });
    }

    // resize image
    const imgBuffer = await readFileSync(originalImagePath);
    const resizedImgBuffer = await sharp(imgBuffer).resize(width, height).toBuffer();

    // cache it
    await mkdirSync(CACHE_DIR, { recursive: true });
    await sharp(resizedImgBuffer).toFile(cachePath);

    // serve it
    return new Response(resizedImgBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
        }
    });
}

