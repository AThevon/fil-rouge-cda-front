<template>
	<div
		class="min-h-[50vh] flex flex-col items-center justify-center px-4"
	>
		<!-- Header -->
		<h1 class="text-4xl font-extrabold text-red-600 mb-6">
			Paiement Annulé
		</h1>

		<!-- Cancel Icon -->
		<div class="bg-red-100 dark:bg-red-800 text-red-600 rounded-full p-4 mb-6">
			<XCircle class="w-12 h-12" />
		</div>

		<!-- Cancel Message -->
		<p class="text-lg mb-8 text-center">
			Votre paiement a été annulé. Si vous avez besoin d'assistance ou souhaitez réessayer, veuillez nous contacter ou recommencer le processus de paiement.
		</p>

		<!-- Button to Go Back -->
		<NuxtLink
			to="/"
			class="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
		>
			Retour à l'accueil
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	import { XCircle } from 'lucide-vue-next';
</script>
