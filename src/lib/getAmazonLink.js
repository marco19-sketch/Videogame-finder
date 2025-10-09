export default function AmazonLink(title, platform ) {
    const amazonTag = 'gamequest-21'
    const query = encodeURIComponent(`${title}`);
    // const query = encodeURIComponent(`${title} ${platform}`);
    return `https://www.amazon.it/s?k=${query}&tag=${amazonTag}`;
}