<script>
	import { fade } from "svelte/transition";

    export let title = 'Quem nós somos';
</script>
<h1 transition:fade={{delay: 50, duration: 500}}  class="text-orange-500 text-2xl font-bold uppercase">{title}</h1>