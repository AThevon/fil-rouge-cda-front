<template>
	<div
		class="min-h-[50vh] flex flex-col items-center justify-center px-4"
	>
		<!-- Header -->
		<h2 class="text-4xl font-extrabold text-main-600 mb-6">
			Paiement Réussi !
		</h2>

		<!-- Success Icon -->
		<div class="bg-main-100 dark:bg-main-800 text-main-950 rounded-full p-4 mb-6">
			<BadgeCheck class="w-12 h-12" />
		</div>

		<!-- Success Message -->
		<p class="text-lg mb-8 text-center">
			Merci pour votre achat ! Nous avons bien reçu votre paiement. Vous
			recevrez un email de confirmation dans les prochaines minutes.
		</p>

		<!-- Button to Go Back -->
		<NuxtLink
			to="/"
			class="inline-block bg-main-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-main-700 transition"
		>
			Retour à l'accueil
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	import { BadgeCheck } from 'lucide-vue-next';
</script>
