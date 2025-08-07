<script lang="ts">
	const { data } = $props();

	$effect(() => console.log(data));
</script>

{#each data.posts as post}
	<div>
		<a href={`/p/${post.id}`} class="link">{post.title}</a>
	</div>
{/each}
