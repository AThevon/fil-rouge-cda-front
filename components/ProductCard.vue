<template>
	<div
		class="relative p-4 rounded-lg group"
		@mouseenter="animateIn"
		@mouseleave="animateOut"
	>
		<!-- Image Section -->
		<div class="relative overflow-hidden rounded-lg">
			<NuxtImg
				:src="product.images[0]?.url"
				:alt="product.name"
				width="auto"
				height="auto"
				class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
			></div>
		</div>

		<!-- Content Section -->
		<div class="mt-4">
			<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
				{{ product.name }}
			</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
				{{ product.description }}
			</p>
		</div>

		<div class="flex items-center justify-between">
			<p
				class="text-lg font-bold text-main-600 dark:text-main-400"
			>
				{{ product.price / 100 }} €
			</p>
			<UButton :to="`/catalog/${product.id}`" class="btn">
				Voir le produit
			</UButton>
		</div>
		<!-- CTA Button -->
	</div>
</template>

<script setup lang="ts">
	import gsap from 'gsap';

	// Props
	defineProps({
		product: {
			type: Object,
			required: true,
		},
	});

	// Animation functions
	const animateIn = (event: MouseEvent) => {
		const card = event.currentTarget as HTMLElement;
		gsap.to(card, {
			scale: 1.03,
			boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
			duration: 0.3,
		});
	};

	const animateOut = (event: MouseEvent) => {
		const card = event.currentTarget as HTMLElement;
		gsap.to(card, {
			scale: 1,
			boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
			border: 'none',
			duration: 0.3,
		});
	};
</script>

<style scoped>
	.group:hover .group-hover\:scale-110 {
		transform: scale(1.05);
	}
</style>
