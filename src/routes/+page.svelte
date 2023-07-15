<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import CardServices from '../components/card-services.svelte';
    import CardLogo from '../components/card-logo.svelte';
    import HeaderTitle from '../components/header-title.svelte';
    import GridLayout from '../components/grid-layout.svelte';
	let init = false;

	onMount(() => {
		init = true;
	});
</script>

{#if init}
	<div class="min-h-screen w-full bg-cover" style="background-image: url('./background.jpg')">
		<div class="pt-5 container mx-auto p-5">
			<div class="flex space-between">
				<div class="w-1/4">
					<h1 class="text-2xl font-bold text-orange-500">TRO Express</h1>
				</div>
				<div class="w-3/4">
					<div class="flex justify-end">
						<button class="btn btn-primary text-orange-500 font-bold">(11) 3603-1367</button>
					</div>
				</div>
			</div>
		</div>
		<div class="grid content-center min-h-screen pt-5 container mx-auto sm: p-5">
			<div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 content-center h-4/5 pt-20">
				<div>
					<p
						transition:fade={{ delay: 250, duration: 300 }}
						class="text-orange-500 text-2lx font-bold"
					>
						Logística especializada
					</p>
					<h1
						transition:fade={{ delay: 500, duration: 300 }}
						class="text-white mt-1 text-3xl md:text-5xl"
					>
						O NOSSO COMPROMISSO É A SUA SATISFAÇÃO!
					</h1>
				</div>
				<div />
			</div>
			<div class="grid content-end h-56 mt-0">
				<div class="mx-auto">
					<a
						href="#servicos"
						transition:fade={{ delay: 750, duration: 300 }}
						class="bg-orange-500 rounded text-white font-bold p-5"
						>Descubra o que é logística avançada</a
					>
				</div>
			</div>
		</div>
	</div>
	<section id="servicos" class="bg-slate-50">
		<div class="pt-40 container mx-auto sm: p-5 text-center">
			<HeaderTitle title='Quem nós somos'/>
			<p class="mt-5">
				Somos especializados em serviços de logística e transportes rodoviários no território
				nacional. Integramos estes fatores de maneira lógica, para melhor atendermos nossos
				clientes. Priorizamos o comprometimento e satisfação de nossos colaboradores, fazendo-se
				assim, uma parceria eficaz!
			</p>
			<GridLayout>
				<CardServices icon={'local_shipping'} />
				<CardServices icon={'groups'} title={'Equipe para gestão operacional'} />
				<CardServices icon={'lock'} title={'Mercadoria assegurada'} />
				<CardServices icon={'home'} title={'Armazenamento / cross-docking'} />
				<CardServices icon={'settings'} title={'Sistema WMS'} />
			</GridLayout>
		</div>
	</section>
	<section id="clientes" class="bg-white">
		<div class="pt-20 container mx-auto sm: p-5 text-center">
			<HeaderTitle title='Nossos Clientes'/>
			<GridLayout>
                <CardLogo image={'./ceadis.png'} />
                <CardLogo image={'./renner.png'} />
                <CardLogo image={'./torra.png'} />
                <CardLogo image={'./caedu.png'} />
                <CardLogo image={'./c-e-a-logo.png'} />
                <CardLogo image={'./esplanada-moveis.png'} />
                <CardLogo image={'./Magalu.png'} />
            </GridLayout>

		</div>
	</section>
{/if}
