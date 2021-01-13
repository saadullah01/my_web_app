<script>
  import { onMount } from "svelte";
  import { goto, stores } from "@sapper/app";
  import {currentUser} from "../stores/user";

  const { page } = stores();
  onMount(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      currentUser.signIn(user);
      if ($page.query.redirect) {
        goto($page.query.redirect);
      }
    } else {
      currentUser.signOut();
    }
    });
  });
</script>