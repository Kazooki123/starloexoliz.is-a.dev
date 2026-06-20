import { base } from '$app/paths';

<script>
    const awesomeskills = [
        'Writer',
        'Frontend Development',
        'Svelte / Vue',
        'Lang Dev'
    ];
</script>

<div class="page">
    <header class="site-header">
        <div class="name">StarloExoliz</div>
        <nav>
            <a href="{base}/">Home</a>
            <a href="{base}/about">About</a>
            <a href="{base}/blogs">Blogs</a>
        </nav>
    </header>

    <main class="container">
        <section class="about-hero">
            <h1>About Me 🩷</h1>
        </section>

        <section class="about-content">
            <article class="about-section">
                <h2>Who Am I?</h2>
                <p>
                    Hello! I'm StarloExoliz.. But you can call me Anthony! I'm a Senior High student passionate at creating stuffs that i like, usually random or specific.
                    I usually do gaming and chatting with my friends at social media when im bored or
                    not in the mood of coding :p
                </p>
                <p>Additional Notes: uhh... Wuh Luh Wuh!! &gt;.&lt; </p>
            </article>

            <article class="about-section">
                <h2>Journey</h2>
                <p>
                    Back then, i really never took programming seriously, ever, until one day one of my friends
                    at Discord when i was 14-15 years old, chose me to make a Discord bot written in python, at first i thought i could never make such a thing, i was dumb, i was clumsy, i was very naive of what i do when i first started coding (I mean, don't we all? :p), but then something changed, days later i started to get addicted at watching Youtubers like Fireship, Tscoding, and reading about Python syntaxes and grammar. I made my first github repo called <b>"alexa-with-python"</b>, it was made by just
                    following tutorials in Youtube as i was very dependent at tutorials.
                </p>
                <hr>
                <p>
                    From then, i realized that i can use other programming languages; Java, PHP, Go, Rust, Ruby, Javascript, and Typescript, you name it. I got into web development months later and first made a search engine only written in HTML, CSS, and a bunch of horrible ass Javascript codes.
                </p>
                <hr>
                <p>
                    Months later passed by, i then began and got interested at making 3D games, i first used Unity and made 'Forest Camp', which until this day is still unfinished, or maybe even abandoned at this point, i then also use Godot for months or years later on because of its lightweight size, i also learned a lot of 3D editing skills in Blender or other Game Engines because of tutorials and documentation.
                </p>
                <hr>
                <p>
                   By early/mid 2023 i came back to making more horrible ass websites but mostly i loved to experiment at designs and learn from my mistakes back then, i also became in loved with Typescript so much i created a small program written in TS that converts a JS code to TS, its still in development and experimental, which till this day experiences bugs for a reason. 
                </p>
                <hr>
                <p>
                    By late 2023 to mid-2024, i got interested at deeper Programming Languages like C, C++, and assembly. It made me went to a rabbit hole about learning or even leaned into the concepts of programming languages, this is where my friends online began writing their own programming language which inspired me to make my own also, which is the reason i made Crabby, at first and yes i admit, its AI-generated, but at the same time i learned that its a horrible idea and a mistake that i already addressed it to this day, and so now the codebase is still ongoing in changes and updates, although due to my academic stress and pressure, i sometimes and temporary halt the development of the project... 
                </p>
                <hr>
                <p>
                    In the future, i'll never know where i go as well, fully employed? homeless in the streets? struggling in life? who knows? life is full of wonders, and that's why i never ever waste them until now. I still wish for a better life, and so as the people reading my postfolio.. 🩷🦋
                </p>
            </article>

            <article class="about-section">
                <h2>Skills & Interests</h2>
                <div class="skills-list">
                    {#each awesomeskills as skill}
                        <span class="skill-tag">{skill}</span>
                    {/each}
                </div>
                <p>
                    I'm usually interested at learning Programming Language Theory, I even made a proglang for it.
                    I'm interested at making websites, cli tools, softwares, and C libraries just for fun.
                </p>
                <hr>
                <p>
                    I also write game fiction and stories but i do it rarely nowadays so yeah..
                </p>
            </article>

            <article class="about-section">
                <h2>Other Stuffs</h2>
                <p>
                    When i'm not designing websites or code other stuff, I usually play random games i like or play music that i archive (fun fact: Archiving and ripping CD music is my hobby).
                </p>
                <hr>
                <p>
                    I love skateboarding and collecting retro music formats, and I'm a big fan of Kanye West, Jay-Z and others like underground artists (e.g. 1oneam, 2slimey, rexv2, yung fazo, and more).
                </p>
            </article>
        </section>
    </main>

    <footer class="site-footer">
        <div>Made with ☕ Svelte • © {new Date().getFullYear()} AGPLv3 All Rights Reserved.</div>
    </footer>
</div>

<style>
    :root {
        --bg: rgb(228, 195, 157);
        --card: #fffaf6;
        --primary: #c69c6d;
        --muted: #6b5a4a;
        --text: #2f2a26;
        --radius: 12px;
        --maxwidth: 900px;
        color-scheme: light;
    }

    * { box-sizing: border-box; }
    body, html, #svelte { height: 100%; }

    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        color: var(--text);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }

    .site-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        max-width: var(--maxwidth);
        margin: 0 auto;
        width: 100%;
    }

    .name {
        font-weight: 700;
        color: var(--text);
    }

    nav a {
        margin-left: 18px;
        text-decoration: none;
        color: var(--muted);
        font-weight: 600;
    }

    nav a:hover {
        color: var(--primary);
    }

    .container {
        flex: 1;
        max-width: var(--maxwidth);
        margin: 24px auto;
        padding: 0 28px;
        width: 100%;
    }

    .about-hero {
        padding: 48px 24px;
        border-radius: var(--radius);
        background: linear-gradient(180deg, var(--card), rgba(255, 255, 255, 0.4));
        box-shadow: 0 6px 18px rgba(47, 42, 38, 0.06);
        text-align: center;
        margin-bottom: 32px;
    }

    .about-hero h1 {
        margin: 0;
        font-size: 2.1rem;
    }

    .about-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .about-section {
        padding: 24px;
        background: var(--card);
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(47, 42, 38, 0.04);
    }

    .about-section h2 {
        margin: 0 0 12px 0;
        font-size: 1.3rem;
        color: var(--primary);
    }

    .about-section p {
        margin: 0;
        line-height: 1.6;
        color: var(--text);
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 12px 0;
    }

    .skill-tag {
        display: inline-block;
        padding: 6px 12px;
        background: rgba(198, 156, 109, 0.1);
        color: var(--primary);
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.85rem;
    }

    .site-footer {
        padding: 18px;
        text-align: center;
        color: var(--muted);
        font-size: 0.9rem;
    }

    @media (min-width: 900px) {
        .about-hero {
            padding: 64px;
        }
    }
</style>
