<script>
    import Icon from './icon.svelte';
	export let icon = 'local_shipping';
	export let title = 'Frota terceirizada e/ou própria';
	export let subtitle = 'Transporte de cargas fracionadas e lotação, com segurança e agilidade.';
</script>

<div class="border-2 rounded-lg m-5 p-5">
	<Icon icon={icon}/>
	<div class="ml-5">
		<h1 class="text-orange-500 text-2xl">{title}</h1>
		<p class="mt-5">{subtitle}</p>
	</div>
</div>
