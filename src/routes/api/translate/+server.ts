// src/routes/api/translate.ts

import type { RequestHandler } from "@sveltejs/kit";

// const i18n = new I18n({
//     locales: ['en', 'gr'],
//     directory: 'src/lib/locales',
//     defaultLocale: 'en',
//     fallbacks: {
//         'en-*': 'en',
//         'gr-*': 'gr',
//     },
//     syncFiles: true,
//     autoReload: true,
//     updateFiles: false,
// });

export const GET: RequestHandler = async({url}) => {
    const text = url.searchParams.get('text');
    const locale = url.searchParams.get('locale');
    if (text === null) {
        return new Response('text is null', {
            status: 400,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    if (locale === null) {
        return new Response('locale is null', {
            status: 400,
            headers: {
                'Content-Type': 'text/plain',
            }
        });
    }

    // i18n.setLocale(locale);

    // const translatedText = i18n.__(text);
    const translatedText = text;

    return new Response(translatedText, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};
