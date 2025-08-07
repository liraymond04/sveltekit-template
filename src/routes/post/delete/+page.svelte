<script lang="ts">
  let id = $state(0);

  async function deletePost() {
    await fetch("/api/posts/delete", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
  }
</script>

<div>
  ID: <input class="input" type="number" bind:value={id} />
</div>

<button class="btn" onclick={deletePost}>Delete post</button>
