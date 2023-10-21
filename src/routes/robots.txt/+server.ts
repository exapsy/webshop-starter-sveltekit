export async function GET() {
    return new Response(`User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml',
            },
        },
    );
}
