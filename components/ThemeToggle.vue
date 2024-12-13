<template>
	<div ref="iconComponent" class="w-8 h-8 cursor-pointer">
		<Icon
			:name="icon"
			:is="icon"
			@click="toggleDarkMode"
			class="w-full h-full transition-all opacity-60 hover:opacity-100 active:scale-110"
		/>
	</div>
</template>

<script setup>
	import { ref, computed, onMounted, nextTick } from 'vue';
	import gsap from 'gsap';

	const isDarkMode = ref(false);
	const iconComponent = ref(null);

	const icon = computed(() =>
		isDarkMode.value ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid',
	);

	onMounted(() => {
		if (localStorage.getItem('theme') === 'dark') {
			isDarkMode.value = true;
			document.documentElement.classList.add('dark');
		}
	});

	const animateIcon = async () => {
		// Première partie de l'animation : réduire l'icône actuelle à 0
		await gsap.to(iconComponent.value, {
			scale: 0,
			duration: 0.15,
			ease: 'power2.in',
		});

		// Attendre la prochaine mise à jour du DOM
		await nextTick();

		// Deuxième partie de l'animation : faire apparaître la nouvelle icône
		gsap.fromTo(
			iconComponent.value,
			{
				scale: 0,
			},
			{
				scale: 1,
				duration: 0.15,
				ease: 'elastic.out(1, 0.5)',
			},
		);
	};

	const toggleDarkMode = async () => {
		await animateIcon();

		isDarkMode.value = !isDarkMode.value;

		if (isDarkMode.value) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};
</script>
