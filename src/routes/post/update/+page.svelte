<script lang="ts">
  let id = $state(0)
  let title = $state("");
  let content = $state("");

  async function addPost() {
    await fetch("/api/posts/update", {
      method: "POST",
      body: JSON.stringify({ id, title, content }),
    });
  }
</script>

<div>
  ID: <input class="input" type="number" bind:value={id} />
</div>

<div>
  Title: <input class="input" bind:value={title} />
</div>

<div class="p-2">
  <textarea class="textarea" bind:value={content}></textarea>
</div>

<button class="btn" onclick={addPost}>Update post</button>
