<script lang="ts">
	import { applyAction } from "$app/forms";
	import { goto } from "$app/navigation";
  import type { ActionResult } from "@sveltejs/kit";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
	import { onMount } from "svelte";
  import { auth } from '../../stores/auth'
  
  // We are typing this as any, as we don't have any form actions, so there is no ActionData.
  // Also, this won't be our final approach, so it's "ok" for now. We will fix this on our next commit.
  export let form: any;

  onMount(() => {
    return auth.subscribe((user) => {
      if (user) {
        goto('/')
      }
    });
  });

  const login = async (email: string | undefined, password: string | undefined): Promise<ActionResult> => {
    if (!email || !password) {
      return {
        type: 'error',
        error: 'Email and password are required'
      };
    }

    const auth = getAuth();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return {
        type: 'success',
        status: 200,
        data: { user },
      }
    } catch (error) {
      return {
        type: 'success',
        status: 403,
        data: {
          errorMessage: (error as Error).message
        }
      }
    }
  }
  
  async function handleSubmit(this: HTMLFormElement, event: unknown): Promise<void> {
    const formData = new FormData(this);

    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    const result = await login(email, password);

    applyAction(result);
  }
</script>


<div class="container mt-8 mx-auto">
  <div class="w-1/3 mx-auto">
    {#if form?.errorMessage}
      <div class="text-red-700">
        {form.errorMessage}
      </div>
    {/if}

    <form class="mt-4" method="POST" on:submit|preventDefault="{handleSubmit}">
      <div>
        <label>
          Email
          <input class="block border border-gray-400 rounded py-1 px-2 mt-2 mb-4 w-full" name="email" type="email" required />
        </label>
      </div>
      <div>
        <label>
          Password
          <input class="block border border-gray-400 rounded py-1 px-2 mt-2 mb-4 w-full" name="password" type="password" required />
        </label>
      </div>
      
      <div>
        <button class="block mx-auto bg-indigo-700 hover:bg-indigo-600 text-gray-200 hover:text-white rounded py-2 px-4" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
