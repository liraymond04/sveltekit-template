<!-- TODO -->
<!---->
<!-- Defines the layout template of child pages -->
<!---->
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from '$lib/components/Navbar.svelte';
	
	let { children } = $props();
</script>

<Navbar></Navbar>

<svelte:head>
	<title>Test Application</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
