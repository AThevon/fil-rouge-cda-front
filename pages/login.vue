<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="w-full max-w-md p-8 bg-white rounded shadow-md">
			<h2 class="mb-6 text-2xl font-bold text-center">Connexion</h2>
			<form @submit.prevent="handleLogin">
				<div class="mb-4">
					<label for="email" class="block mb-2 text-sm font-medium"
						>Email</label
					>
					<input
						v-model="email"
						id="email"
						type="email"
						placeholder="Votre email"
						class="w-full p-2 border rounded"
						required
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="block mb-2 text-sm font-medium"
						>Mot de passe</label
					>
					<input
						v-model="password"
						id="password"
						type="password"
						placeholder="Votre mot de passe"
						class="w-full p-2 border rounded"
						required
					/>
				</div>
				<button
					type="submit"
					class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
				>
					Se connecter
				</button>
			</form>
			<div v-if="errorMessage" class="mt-4 text-sm text-red-600">
				{{ errorMessage }}
			</div>

			<!-- Bouton Google Login -->
			<div class="mt-6 text-center">
				<button
					@click="handleGoogleLogin"
					class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
				>
					Connexion avec Google
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { useAuth } from '~/composables/useAuth';
	import { navigateTo } from '#app';

	const email = ref('');
	const password = ref('');
	const errorMessage = ref('');

	const { login, googleLogin } = useAuth();

	const handleLogin = async () => {
		try {
			await login({ email: email.value, password: password.value });
			navigateTo('/');
		} catch (error) {
			errorMessage.value =
				'Échec de la connexion. Veuillez vérifier vos identifiants.';
		}
	};

	const handleGoogleLogin = async () => {
		try {
			await googleLogin();
		} catch (error) {
			errorMessage.value = 'Échec de la connexion avec Google.';
		}
	};
</script>
