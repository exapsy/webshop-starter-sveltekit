export async function t(node: HTMLElement, text: string): Promise<void> {
    const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, locale: 'en' }),  // Replace 'en' with your locale
    });
    const result = await response.json();
    node.textContent = result.translatedText;
}

export async function translate(text: string): Promise<string> {
    const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text, locale: 'en'}),  // Replace 'en' with your locale
    });
    const result = await response.json();
    return result.translatedText;
}