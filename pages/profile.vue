<template>
	<div v-if="user">
		<h1>Profil</h1>
		<p>Nom : {{ user.name }}</p>
		<p>Email : {{ user.email }}</p>
	</div>
</template>

<script setup lang="ts">
	import type { User } from '~/types';

	const user = useSanctumUser<{ user: User }>().value?.user;
</script>
