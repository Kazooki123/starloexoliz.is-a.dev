<script>
  import { base } from '$app/paths';
  export let data;
</script>

<div class="page">
  <header class="site-header">
    <div class="name">StarloExoliz</div>
    <nav>
      <a href="{base}/">Home</a>
      <a href="{base}/about">About</a>
      <a href="{base}/contacts">Contact</a>
    </nav>
  </header>

  <main>
    <h1>Blogs 📖</h1>
    
    <div class="blogs-grid">
      {#each data.blogs as blog (blog.slug)}
        <article class="blog-card">
          <div class="card-header">
            <h2>{blog.title || 'Untitled'}</h2>
            {#if blog.date}
              <p class="date">{blog.date}</p>
            {/if}
          </div>
          
          <div class="content">
            {@html blog.html}
          </div>
        </article>
      {/each}
    </div>
  </main>
</div>

<style>
  :root{
    --bg: rgb(228, 195, 157); /* background */
    --card: #fffaf6;
    --primary: #c69c6d; /* cozy color :3 */
    --muted: #6b5a4a;
    --text: #2f2a26;
    --radius: 12px;
    --maxwidth: 900px;
    --glass: rgba(255,255,255,0.6);
    color-scheme: light;
  }

  .page {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Maple Mono', monospace;
    padding: 2rem;
  }

  .site-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    max-width: var(--maxwidth);
    margin: 0 auto;
    width: 100%
  }

  .name{
    font-weight: 700;
    color: var(--text)
  }

  main {
    max-width: var(--maxwidth);
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--text);
  }

  nav, a {
    margin-left: 18px;
    text-decoration: none;
    color: var(--muted);
    font-weight: 600;
  }

  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .blog-card {
    background: var(--card);
    border-radius: var(--radius);
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid rgba(198, 156, 109, 0.2);
  }

  .blog-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .card-header {
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.75rem;
  }

  .blog-card h2 {
    font-size: 1.3rem;
    margin: 0 0 0.5rem 0;
    color: var(--text);
  }

  .date {
    font-size: 0.85rem;
    color: var(--muted);
    margin: 0;
  }

  .content {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .content :global(h1) {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .content :global(h2) {
    font-size: 1.2rem;
    margin-top: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .content :global(h3) {
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .content :global(p) {
    margin: 0.5rem 0;
  }

  .content :global(ul),
  .content :global(ol) {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  .content :global(li) {
    margin: 0.25rem 0;
  }

  .content :global(code) {
    background: rgba(198, 156, 109, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .content :global(pre) {
    background: rgba(47, 42, 38, 0.05);
    padding: 1rem;
    border-radius: var(--radius);
    overflow-x: auto;
    margin: 0.5rem 0;
  }

  .content :global(blockquote) {
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
    margin: 0.5rem 0;
    color: var(--muted);
    font-style: italic;
  }
</style>
