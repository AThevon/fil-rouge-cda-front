<template>
	<div class="font-main min-h-screen flex flex-col">
		<!-- <BurgerMenu :links="links" /> -->
		<nav class="relative flex justify-between items-center my-4 px-6">
			<NuxtLink
				to="/"
				class="flex items-end gap-1 transition-all active:scale-[0.98]"
			>
				<NuxtImg
					src="/wooden-icon.png"
					alt="Logo de Wooden Factory"
					width="auto"
					height="auto"
					class="object-contain w-12 h-12"
				/>
				<h1 class="text-2xl mb-[2px] font-bold font-second">Wooden Factory</h1>
			</NuxtLink>
			<ul class="flex gap-5 absolute inset-x-0 mx-auto w-max">
				<li v-for="link in links" :key="link.to">
					<NuxtLink
						:to="link.to"
						class="flex gap-2 w-fit text-xl transition-all opacity-60 hover:opacity-100 hover:scale-[1.05] active:scale-100"
						:class="{
							'!opacity-100 font-bold':
								$route.path === link.to ||
								($route.path.startsWith('/catalog') && link.to === '/catalog'),
						}"
					>
						<!-- <component :is="link.icon" class="w-6 h-6" /> -->
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
			<div v-if="!isAuthenticated" class="flex space-x-2">
				<UButton to="/register" class="btn text-sm"> S'inscrire </UButton>
				<UButton to="/login" class="btn text-sm"> Se connecter </UButton>
			</div>
			<div v-else class="flex space-x-2">
				<UButton to="/profile" class="btn text-sm"> Mon compte </UButton>
				<UButton @click="logout" class="text-sm"> Se déconnecter </UButton>
			</div>
		</nav>
		<main class="h-full flex-1">
			<slot />
		</main>
		<footer class="relative flex justify-center items-center h-16">
			<p class="absolute inset-x-0 text-sm text-center text-gray-500">
				&copy; 2024 Wooden Factory. Tous droits réservés.
			</p>
			<div class="z-10 ml-auto mr-4 mb-2">
				<ThemeToggle />
			</div>
		</footer>
	</div>
</template>

<script lang="ts" setup>
	import {
		Amphora,
		FlameKindling,
		Home,
		PencilRuler,
		Send,
	} from 'lucide-vue-next';

	export type Link = {
		name: string;
		to: string;
		icon: any;
	};

	const { logout, isAuthenticated } = useSanctumAuth();

	const links: Link[] = [
		{ name: 'Accueil', to: '/', icon: Home },
		{ name: 'Catalogue', to: '/catalog', icon: Amphora },
		{ name: 'Créer', to: '/custom-request', icon: PencilRuler },
		{ name: 'À propos', to: '/about', icon: FlameKindling },
		{ name: 'Contact', to: '/contact', icon: Send },
	];
</script>
