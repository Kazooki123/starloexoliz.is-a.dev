<script>
    import { base } from '$app/paths';

    import crabbylogo from '$lib/assets/crabbylogo.png'
    import yuri from '$lib/assets/yuri.png'
    import sixchan from '$lib/assets/6chan.png'
    import oakwood from '$lib/assets/oakwood.jpg'

    const projects = [
        {
            title: 'Crabby',
            desc: 'A Programming Language written in Rust.',
            img: crabbylogo,
            url: 'https://codeberg.org/crabby-lang/crabby'
        },
        {
            title: 'Yurilang',
            desc: 'An Esoteric Programming Language about Yuri.',
            img: yuri,
            url: 'https://codeberg.org/Kazooki123/yurilang'
        },
        {
            title: '6chan',
            desc: 'A 4chan-style imageboard.',
            img: sixchan,
            url: 'https://codeberg.org/Kazooki123/6chan'
        },
        {
            title: 'OakWood',
            desc: 'A Voxel Engine written on Odin.',
            img: oakwood,
            url: 'https://codeberg.org/Kazooki123/oakwood'
        }
    ];

    const coolpeople = [
      {
        name: "jamiw",
        desc: "Closest and comfortable friend, he makes awesome stuffs as well!",
        link: 'https://isuckat.dev'
      },
      {
        name: "snarkydev",
        desc: "My new friend, also a genius one! :]",
        link: 'https://owo.sh'
      },
      {
        name: "yazn",
        desc: "Arabic dude who does insane things in hardware & software, be careful he's an unexpected one o~^",
        link: 'https://yazn.iso'
      },
      {
        name: "caelondev",
        desc: "Also known as Jericho, he's a nerd/geek at low level topics, you should check his stuffs!",
        link: 'https://caelondev.is-a.dev'
      },
      {
        name: "luna",
        desc: "One of the best friends i have, he makes fanfics, and is also a web developer!",
        link: 'https://nightrunners.eu'
      },
      {
        name: "jasper",
        desc: "Cool twink, minecraft player, somehow uses java or kotlin, but he's genuinely nice.",
        link: 'https://github.com/mcl-playz'
      },
      {
        name: "ethan",
        desc: "Likes turtles, is also a fedora guy, go check his YouTube and projects as well!",
        link: "https://leethana.is-a.dev"
      },
      {
        name: "thatonejack",
        desc: "Also known as just jack, he makes random stuffs, is a nerd also :p",
        link: "https://github.com/ItsThatOneJack-Dev"
      }
    ]
</script>

<div class="page">
    <header class="site-header">
        <div class="name">StarloExoliz</div>
        <nav>
            <a href="{base}/about">About Me</a>
            <a href="https://github.com/Kazooki123">Github</a>
            <a href="https://codeberg.org/Kazooki123">Codeberg</a>
            <a href="{base}/blogs">Blogs</a>
            <a href="{base}/contacts">Contact</a>
        </nav>
    </header>

    <main class="container">
        <section id="about" class="hero">
            <h1>Hello!! :3</h1>
            <h2>I'm StarloExoliz</h2>
            <p class="lead">I make random stuffs, usually software and web related, currently living in hell because of school.</p>
        </section>

        <section id="projects" class="projects">
            <h2>My Projects ☕</h2>
            <div class="grid">
                {#each projects as p}
                    <article class="card">
                        <div class="imgwrap">
                            <img src={p.img} alt={p.title} loading="lazy"/>
                        </div>
                        <h3>{p.title}</h3>
                        <p class="muted">{p.desc}</p>
                        <a class="btn" href={p.url}>View</a>
                    </article>
                {/each}
            </div>
        </section>

        <section id="shoutouts" class="shoutouts">
            <h2>Cool People 🎀</h2>
            <div class="grid">
                {#each coolpeople as c}
                    <article class="card">
                        <h3>{c.name}</h3>
                        <p class="muted">{c.desc}</p>
                        <a class="btn" href={c.link}>View</a>
                    </article>
                {/each}
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div>Made with ☕ Svelte • © {new Date().getFullYear()} AGPLv3 All Rights Reserved.</div>
    </footer>
</div>

<style>
    /* I have to lowkirkuinely search for the Catppuccin colors within hours this is insane*/
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

    *{box-sizing:border-box}
    body, html, #svelte{
        height:100%
    }

    .page{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        color: var(--text);
        font-family: 'Maple Mono';
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
    
    nav a{
        margin-left: 18px;
        text-decoration: none;
        color: var(--muted);
        font-weight: 600
    }

    .container{
        flex: 1;
        max-width: var(--maxwidth);
        margin: 24px auto;
        padding: 28px
    }

    .hero{
        padding: 48px 24px;
        border-radius: var(--radius);
        background: linear-gradient(180deg, var(--card), rgba(255,255,255,0.4));
        box-shadow: 0 6px 18px rgba(47,42,38,0.06);
        text-align: center
    }

    .hero h1{
        margin:0;
        font-size:2.1rem
    }

    .lead{
        margin-top: 10px;
        color: var(--muted)
    }

    .projects{margin-top: 32px}

    .projects h2{
        font-size: 1.2rem;
        margin: 0 0 12px 0
    }

    .shoutouts{margin-top: 32px}

    .shoutouts h2{
        font-size: 1.2rem;
        margin: 0 0 12px 0
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
        gap: 16px
    }

    .card{
        background: var(--card);
        padding: 14px;
        border-radius: 10px;
        box-shadow: 0 6px 14px rgba(47,42,38,0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center
    }

    .imgwrap{
        width: 100%;
        height: 140px;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px
    }

    .imgwrap img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block
    }

    .card h3{
        margin: 0;
        font-size: 1rem
    }

    .muted{
        color: var(--muted);
        font-size: 0.9rem;
        margin: 8px 0
    }

    .btn{
        margin-top: auto;
        display: inline-block;
        padding: 8px 14px;
        border-radius: 8px;
        background: var(--primary);
        color: white;
        text-decoration: none;
        font-weight: 700;
        font-size: 0.9rem
    }

    .site-footer{
        padding: 18px;
        text-align: center;
        color: var(--muted);
        font-size: 0.9rem
    }

    @media (min-width:900px){
        .hero{padding:64px}
    }
</style>
