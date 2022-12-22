<script lang="ts">
  import { getAuth, signOut } from 'firebase/auth';
  import { auth } from '../stores/auth'

  const logout = () => {
    const firebaseAuth = getAuth();

    signOut(firebaseAuth);
  }
</script>
<div class="bg-slate-700">
  <div class="container flex items-center mx-auto py-4 text-gray-400">
    <div class="mr-12">
      <a href="/" class="text-gray-300 text-xl">Svelte Examples</a>
    </div>
    <div class="flex-1 flex gap-6">
      <div>
        <a href="/" class="hover:text-gray-300">Home</a>
      </div>
      <div>
        <a href="/about" class="hover:text-gray-300">About</a>
      </div>
      <div>
        <a href="/contact" class="hover:text-gray-300">Contact</a>
      </div>
    </div>
    <div>
      {#if $auth !== null}
        <button class="hover:text-gray-300" on:click={logout}>
          Log out
        </button>
      {:else}
      <a href="/login" class="hover:text-gray-300">Log in</a>
      {/if}
    </div>
  </div>
</div>
