<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import CardServices from '../components/card-services.svelte';
    import CardLogo from '../components/card-logo.svelte';
    import HeaderTitle from '../components/header-title.svelte';
    import GridLayout from '../components/grid-layout.svelte';
    import Icon from '../components/icon.svelte';
	let init = false;
    // @ts-ignore
    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
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
                <nav class="hidden md:block">
                    <ul class="flex flex-row justify-end">
                        <li class="mx-5"><a href="#servicos" on:click|preventDefault={scrollIntoView} class="text-white">Serviços</a></li>
                        <li class="mx-5"><a href="#colaboradores" on:click|preventDefault={scrollIntoView} class="text-white">Colaboradores</a></li>
                        <li class="mx-5"><a href="#clientes" on:click|preventDefault={scrollIntoView} class="text-white">Clientes</a></li>
                        <li class="mx-5"><a href="#contato" on:click|preventDefault={scrollIntoView} class="text-white">Contato</a></li>
                    </ul>
                </nav>
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
						href="#servicos" on:click|preventDefault={scrollIntoView}
						transition:fade={{ delay: 750, duration: 300 }}
						class="bg-orange-500 rounded text-white font-bold p-5"
						>Descubra o que é logística avançada</a
					>
				</div>
			</div>
		</div>
	</div>
	<section id="servicos" class="bg-slate-50 min-h-screen">
		<div class="pt-20 container mx-auto sm: p-5 text-center">
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
    <section id="colaboradores" class="bg-slate-50 min-h-screen bg-cover" style="background-image: url('./background.jpg')" >
        <div class="pt-20 container mx-auto sm: px-5 text-left">
            <HeaderTitle title='Nossos colaboradores estão prontos para lhe melhor atender'/>
            <div class="flex flex-nowrap text-left mt-10 rounded-lg border-2 px-3 my-5 bg-orange-500 text-white">
                <img src="./man.png" alt="" class=" pl-5 pt-5 hidden lg:block w-2/6"/>
                <div class="p-10">
                    <ul class="list-disc text-xl lg:text-3xl">
                        <li class="md:my-10">Para facilitar nosso
                            contato, cada
                            colaborador possui
                            <b>número individual (CLARO/NEXTEL)</b></li>
                        <li class="md:my-10">Monitoramento atravéz de <b>OMNILINK, SASCAR, ONIXSAT,</b> Entre outros</li>
                        <li class="md:my-10">Seguro de carga pela <b>Porto Seguro</b></li>
                        <li class="md:my-10">Gerenciamento de risco <b>Golden Service</b></li>
                    </ul>
                </div>
            </div>
            
            
        </div>

    </section>
	<section id="clientes" class="bg-white min-h-screen">
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
    <section id="contato" class="bg-slate-800 bg-cover bg-blend-overlay min-h-screen" style="background-image: url('./bg2.jpg')">
        <div class="pt-20 container mx-auto sm: p-5 text-center">
            <HeaderTitle title='Precisa de ajuda? entre em contato'/>
                <div class="mt-5 text-left md:p-20">
                    <form action="">
                        <div class="flex flex-col">
                            <label class="text-orange-500 my-2" for="name">Nome</label>
                            <input type="text" name="name" id="name" class="border-2 rounded-lg p-2" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-orange-500 my-2" for="email">E-mail</label>
                            <input type="email" name="email" id="email" class="border-2 rounded-lg p-2" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-orange-500 my-2" for="phone">Telefone</label>
                            <input type="text" name="phone" id="phone" class="border-2 rounded-lg p-2" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-orange-500 my-2" for="message">Mensagem</label>
                            <textarea name="message" id="message" cols="30" rows="10" class="border-2 rounded-lg p-2"></textarea>
                        </div>
                        <div class="flex justify-center mt-5">
                            <button class="bg-orange-500 rounded w-full text-white font-bold p-3 md:w-1/2">Enviar</button>
                        </div>
                    </form>
                </div>
        </div>
    </section>
    <section class="bg-black text-white">
        <div class="pt-20 container mx-auto sm: p-5 text-left">
            <HeaderTitle title='TRO EXPRESS'/>
            <div class="mt-5 divide-y-2 divide-x-0 md:grid grid-cols-2 grid-rows-1 divide-x-2 divide-y-0 divide-gray-600">
                <div class="">
                    <div class="flex flex-row my-5">
                        <Icon cssOptions='basis-1/4' icon={'pin_drop'} />
                        <p class="basis-1/2 font-bold">RUA GARDÊNIA, 345 - JD. DAS FLORES -
                            OSASCO - SP</p>
                    </div>
                
                    <div class="flex flex-row my-5">
                        <Icon cssOptions='basis-1/4' icon={'phone_iphone'} />
                        <p class="basis-1/2">FONE: <b>(11) 3603-1367</b></p>
                    </div>
                    <div class="flex flex-row my-5">
                        <Icon cssOptions='basis-1/4' icon={'mail'} />
                        <p class="basis-1/2">
                            EMAIL: <b>TRO.EXPRESS@TROEXPRESS.COM.BR</b></p>
                    </div>
                     
                </div>
                
                <div class=" mt-5 text-left p-5">
                    <iframe class="w-full h-64" title="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9290382005483!2d-46.79587602385448!3d-23.535054560627803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffaf72e6fd53%3A0xb60d2efd2dcaf67c!2sR.%20Gard%C3%AAnia%2C%20345%20-%20Jardim%20das%20Flores%2C%20Osasco%20-%20SP%2C%2006110-240!5e0!3m2!1spt-BR!2sbr!4v1689395473943!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <footer>
                <div class="mt-5 text-center">
                    <p class="text-xs">© 2023 TRO EXPRESS. TODOS OS DIREITOS RESERVADOS.</p>
                </div>
            </footer>
    </section>
{/if}
