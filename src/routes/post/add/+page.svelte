<script lang="ts">
  let title = $state("");
  let content = $state("");

  async function addPost() {
    await fetch("/api/posts/add", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
  }
</script>

<div>
  Title: <input class="input" bind:value={title} />
</div>

<div class="p-2">
  <textarea class="textarea" bind:value={content}></textarea>
</div>

<button class="btn" onclick={addPost}>Add post</button>
