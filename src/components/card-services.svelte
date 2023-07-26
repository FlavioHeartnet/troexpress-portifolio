<script>
	import Saos from "saos";
    import Icon from './icon.svelte';
	export let icon = 'local_shipping';
	export let title = 'Frota terceirizada e/ou própria';
	export let subtitle = 'Transporte de cargas fracionadas e lotação, com segurança e agilidade.';
</script>
<Saos once={true} animation={'slide-in-top 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}>
<div  class="border-2 rounded-lg m-5 p-5">
	<Icon icon={icon}/>
	<div class="mx-2">
		<h1 class="text-orange-500 text-2xl">{title}</h1>
		<p class="mt-5 text-justify">{subtitle}</p>
	</div>
</div>
</Saos>