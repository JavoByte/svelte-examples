<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { initFirebase } from '$lib/client/firebase';
  import { onAuthStateChanged, getAuth } from 'firebase/auth';
  import { auth } from '../stores/auth'
  import Navbar from '../ui/Navbar.svelte';
  
  onMount(initFirebase);
</script>

<Navbar />

<slot />
