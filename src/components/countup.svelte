<script>
    import Countup from "svelte-countup";
    export let value = 0;
</script>
<Countup value={value} duration={2000}/>