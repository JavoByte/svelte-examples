<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { initFirebase } from '$lib/client/firebase';
  import Navbar from '../ui/Navbar.svelte';
  
  onMount(initFirebase);
</script>

<Navbar />

<slot />
