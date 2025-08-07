<script lang="ts">
  const { data } = $props();
</script>

<div class="p-8">
  <h2 class="font-mono font-bold text-4xl">
    {data.post.title}
  </h2>

  <div>
    {data.post.content}
  </div>
</div>
