export async function get(url: string) {
    const responce = await fetch(url);

    if (!responce.ok) {
        throw new Error('Failed to fetch data!');
    }
    const data = responce.json() as unknown;
    return data;
}