<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<style>
	@font-face {
		font-family: 'Maple Mono';
		src: url('/font/MapleMono-SemiBold.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	:global(html) {
		font-family: 'Maple Mono', monospace;
	}
</style>

{@render children()}
