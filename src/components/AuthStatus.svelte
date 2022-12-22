<script lang="ts">
  import { auth } from "../stores/auth";
</script>

<div class="my-4">
  {#if $auth}
    <div class="text-gray-400">
      Authenticated as <span class="font-bold text-black">{$auth.email}</span>
    </div>
  {:else}
    <div class="text-gray-400">
      No one is authenticated
    </div>
  {/if}
</div>

