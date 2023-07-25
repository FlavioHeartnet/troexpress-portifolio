<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
    import { backOut } from 'svelte/easing'
	import CardServices from '../components/card-services.svelte';
    import CardLogo from '../components/card-logo.svelte';
    import HeaderTitle from '../components/header-title.svelte';
    import GridLayout from '../components/grid-layout.svelte';
    import Icon from '../components/icon.svelte';
	import Countup from '../components/countup.svelte';
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
<svelte:head>
	<title>TRO Express</title>
</svelte:head>
{#if init}
	<div class="min-h-screen w-full bg-cover" style="background-image: url('./background.jpg')">
		<div class="pt-5 container mx-auto p-5">
			<div class="flex space-between">
				<div class="w-1/4">
					<img class="drop-shadow-2xl w-20" src="./logo.png" alt="">
				</div>
                <nav class="hidden md:block">
                    <ul class="flex flex-row justify-end">
                        <li class="mx-5"><a href="#servicos" on:click|preventDefault={scrollIntoView} class="text-white">Sobre nós</a></li>
                        <li class="mx-5"><a href="#oferecemos" on:click|preventDefault={scrollIntoView} class="text-white">Serviços</a></li>
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
		<div class="grid min-h-screen pt-5 container mx-auto p-0">
			<div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 content-center h-4/5 pt-20">
				<div class="ml-5">
					<p
						transition:fly={{ delay: 400, y: 100, easing: backOut }}
						class="text-orange-500 text-2lx font-bold"
					>
                        Logística e Transporte
					</p>
					<h1
						transition:fly={{ delay: 500, y: 100, easing: backOut }}
						class="text-white mt-1 text-3xl xl:text-5xl md:text-4xl"
					>
                    TRANSPORTANDO PARA SEU LADO
					</h1>
                    <div class="mx-auto mt-10 hidden lg:block">
                        <a
                            href="#servicos" on:click|preventDefault={scrollIntoView}
                            transition:fade={{ delay: 750, duration: 300 }}
                            class="bg-orange-500 rounded text-white font-bold p-5"
                            >QUEM NOS SOMOS</a
                        >
                    </div>
				</div>
                <div class="overflow-hidden w-full h-[44vh] relative top-[3.5em] xl:h-[86vh] lg:h-[66vh] sm:h-[30vh]">
                    <img
                    transition:fly={{ delay: 850, x: 100, duration: 1000, easing: backOut }} 
                    class="drop-shadow-2xl absolute left-1/2 md:left-0" src="./truck.png" alt="">
                </div>
				<div />
			</div>
			<div class="grid mt-0 xl: mt-20 lg:hidden">
				<div class="mx-auto">
					<a
						href="#servicos" on:click|preventDefault={scrollIntoView}
						transition:fade={{ delay: 750, duration: 300 }}
						class="bg-orange-500 rounded text-white font-bold p-5"
						>QUEM NOS SOMOS</a
					>
				</div>
			</div>
		</div>
	</div>
	<section id="servicos" class="bg-slate-50 min-h-screen">
		<div class="pt-20 container mx-auto sm: p-5 text-center">
			<HeaderTitle title='QUEM NÓS SOMOS'/>
			<p class="mt-5 mb-5 text-justify">
				O Troexpress é um <b class="text-orange-500">serviço de transporte eficiente e confiável</b>, projetado para atender 
                às necessidades de <b class="text-orange-500">empresas e indivíduos</b> que desejam enviar mercadorias de forma 
                <b class="text-orange-500">rápida e segura.</b> Com uma equipe altamente capacitada e veículos modernos, garantimos que suas 
                encomendas <b class="text-orange-500">cheguem ao destino desejado no prazo estipulado</b>. Além disso, oferecemos 
                <b class="text-orange-500">rastreamento em tempo real</b> para que você possa acompanhar o status de suas remessas 
                a qualquer momento. Priorizamos a <b class="text-orange-500">segurança dos produtos transportados</b>, utilizando 
                embalagens adequadas e <b class="text-orange-500">técnicas especiais</b> para garantir que tudo chegue intacto. 
                Escolha o <b class="text-orange-500">Troexpress</b> e tenha a certeza de que suas mercadorias serão entregues com 
                rapidez, segurança e cuidado.
			</p>
            <div class="mt-5 grid grid-flow-row-dense grid-rows-1 grid-cols-1 justify-items-center xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
				<CardServices icon={'language'} title={'MISSÃO'} subtitle={'Superar as expectativas de nossos clientes quanto à qualidade e agilidade na entrega de seus produtos agregando preços competitivos com a agilidade, confiança, credibilidade e eficiência, atendendo às suas necessidades de mobilidade e contribuindo para o desenvolvimento econômico e social das regiões em que atua.'} />
				<CardServices icon={'track_changes'} title={'VISÃO'} subtitle={'Ser referência no segmento de transportes, logística e armazéns gerais em todo território nacional e atender todas as necessidades de nossos clientes, colaboradores e parceiros, oferecendo soluções inovadoras e sustentáveis para seus clientes, garantindo a satisfação e fidelidade dos mesmos, e se destacando pela excelência operacional e pela qualidade do serviço prestado.'}/>
				<CardServices icon={'favorite'} title={'VALORES'} subtitle={'Competência, Segurança, Ética, Responsabilidade, Inovação e Compromisso esses são os nossos pilares que trabalhamos diariamente para alcançá-los e entregar ao nossos parceiros.'} />
			</div>
            
		</div>
	</section>
    <section id="oferecemos" class="bg-white min-h-screen">
        <div class="pt-20 container mx-auto sm: p-5 text-center">
            <HeaderTitle title='O QUE NÓS OFERECEMOS'/>
			<GridLayout>
				<CardServices icon={'local_shipping'} subtitle={'Contamos com frota própria e 	terceirizada colaboradores dedicados, dispomos de veículos diversificados desde Fiorinos a Carretas e, por isso trabalhamos com grande variedade de Carga. Dispomos de Baús Cabideiros com Redes e Divisórias para contenção, separação e proteção das cargas. Nossos veículos possuem travas de proteção que são acionadas através da gerenciadora de risco no caso de qualquer problema. Os mesmos saem devidamente lacrados e rastreados da origem de carregamento até o destino. Nosso sistema de gerenciamento de risco é informatizado, os veículos são monitorados por uma central 24 horas.'} />
				<CardServices icon={'groups'} title={'Equipe para gestão operacional'}  subtitle={"Atuamos no setor de transportes desde 2010 e estamos sempre em busca de novos desafios, nos renovando para atender da melhor forma nossos clientes e parceiros. Dispomos de equipe própria dentro dos CD’s de nossos clientes para conferência, carregamento e liberação de toda documentação para que os veículos possam seguir suas entregas com agilidade. Rastreamento e Monitoramento Nossos veículos possuem rastreamento e monitoramento 24 horas pro dia, garantindo a segurança e a qualidade no tempo de entrega, trazendo conforto ao nosso cliente. "}/>
				<CardServices icon={'lock'} title={'Mercadoria assegurada'} subtitle={'Mercadorias asseguradas pela Porto seguro, garantindo segurança e tranquilidade para você.'}/>
				<CardServices icon={'home'} title={'Armazenamento / cross-docking'} subtitle={"Nosso objetivo é realizar todo o processo com qualidade e no menor tempo possível. Oferecemos Serviços de Cross Doking para CD’s (centros de distribuições), empresas de logística e transportadoras que necessitam deste serviço para suas operações, agilizamos a movimentação dos produtos ou mercadorias do ponto de recebimento ou coleta, diretamente para o ponto de expedição e entrega, com tempo de estoque limitado contamos com uma equipe para a preparação/separação de mercadorias, agendamento das entregas, carregamento e distribuição."} />
				<CardServices icon={'settings'} title={'Sistema WMS'} subtitle={'sistema de gerenciamento de armazém integrado para controle de rotação de estoque.'} />
                <CardServices icon={'factory'} title={'Nossas filiais'} subtitle={'Temos base na grandes capitais do pais como São Paulo que é matris, Rio de janeiro, Rio grande do sul, Santa  Catarina e Parana.'} />
			</GridLayout>
        </div>
    </section>
    <section id="fun-facts" class="bg-cover" style="background-image: url('./shape-bg.jpg')">
        <div class="pt-20 container mx-auto sm: p-5 text-center">
            <HeaderTitle title='Somos especialistas em transporte'/>
            <h1 class="text-4xl md:text-6xl">Pode confiar, nós temos a sua logística coberta.</h1>
            <div class="mt-5 grid grid-flow-row-dense grid-rows-1 grid-cols-1 justify-items-center xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                <div class="m-5 p-5">
                    <h1 class="text-orange-500 text-4xl font-bold">+ <Countup value={10}/></h1>
                    <p class="mt-5 text-center font-bold">Anos de experiência</p>
                </div>
                <div class="m-5 p-5">
                    <h1 class="text-orange-500 text-4xl font-bold">+ <Countup value={100}/></h1>
                    <p class="mt-5 text-center font-bold">Veículos</p>
                </div>
                <div class="m-5 p-5">
                    <h1 class="text-orange-500 text-4xl font-bold">+ <Countup value={1000}/></h1>
                    <p class="mt-5 text-center font-bold">Clientes satisfeitos</p>
                </div>
        </div>
        
    </section>
    <section id="colaboradores" class="bg-slate-50 bg-cover pb-5" style="background-image: url('./background.jpg')" >
        <div class="pt-20 container mx-auto sm: px-5 text-left">
            <HeaderTitle title='Nossos colaboradores estão prontos para melhor lhe atender'/>
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
            <HeaderTitle title='Conte-nos mais sobre suas demandas e como podemos ajudar'/>
                <div class="mt-5 text-left md:p-20">
                    <form method="post">
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
    <section class="bg-zinc-800 text-gray-400">
        <div class="pt-20 container mx-auto sm: p-5 text-left">
            <div class="flex flex-row my-5">
                <img class="drop-shadow-2xl w-20" src="./logo.png" alt=""><h1 class="text-2xl font-bold mt-5">TRO Express</h1>
            </div>
              
            <p class="font-bold">Seu negócio não pode parar. Confie em nossa transportadora para entregar seus produtos com segurança, agilidade e pontualidade.</p>
            <div class="mt-5 md:grid grid-cols-2 grid-rows-1">
                <div class="">
                    <div class="flex flex-row my-5">
                        <Icon cssOptions='basis' icon={'pin_drop'} />
                        <p class="basis-1/2">RUA GARDÊNIA, 345 - JD. DAS FLORES -
                            OSASCO - SP</p>
                    </div>
                
                    <div class="flex flex-row my-5">
                        <Icon cssOptions='basis' icon={'phone_iphone'} />
                        <p class="basis-1/2 mt-3">(11) 3603-1367</p>
                    </div>
                    <div class="flex flex-row my-5">
                        <Icon cssOptions='basis' icon={'mail'} />
                        <p class="basis-1/2 mt-3">
                        TRO.EXPRESS@TROEXPRESS.COM.BR</p>
                    </div>
                     
                </div>
                
                <div class=" mt-5 text-left p-5">
                    <iframe class="w-full h-64" title="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9290382005483!2d-46.79587602385448!3d-23.535054560627803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffaf72e6fd53%3A0xb60d2efd2dcaf67c!2sR.%20Gard%C3%AAnia%2C%20345%20-%20Jardim%20das%20Flores%2C%20Osasco%20-%20SP%2C%2006110-240!5e0!3m2!1spt-BR!2sbr!4v1689395473943!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <footer>
                <div class="mt-5 text-center">
                    <p class="text-xs">© 2023 TRO EXPRESS - SERVIÇOS DE LOGÍSTICA. TODOS OS DIREITOS RESERVADOS.</p>
                </div>
            </footer>
    </section>
{/if}
