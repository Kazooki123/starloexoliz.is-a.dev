import { marked } from 'marked';

const posts = import.meta.glob('$lib/blog/*.md', {
    as: 'raw'
});

export async function load() {
    const blogs = [];

    for (const path in posts) {
        const raw = await posts[path]();

        const match = raw.match(/---([\s\S]*?)---([\s\S]*)/);

        let metadata: any = {};
        let content = raw;

        if (match) {
            const [, frontmatter, body] = match;
            content = body;

            frontmatter.split('\n').forEach((line) => {
                const [key, ...value] = line.split(':');
                if (key && value.length) {
                    metadata[key.trim()] = value.join(':').trim();
                }
            });
        }

        blogs.push({
            slug: path.split('/').pop()?.replace('.md', ''),
            html: marked.parse(content), ...metadata
        });
    }

    return {
        blogs
    };
}

