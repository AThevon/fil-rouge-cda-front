<template>
	<div class="max-w-4xl mx-auto px-6 py-12">
		<h1 class="text-3xl font-bold mb-6">Politique de confidentialité</h1>
		<p class="leading-relaxed mb-4">
			Nous attachons une grande importance à la protection de vos données
			personnelles. Cette politique de confidentialité décrit les types de données
			que nous collectons, comment nous les utilisons et les mesures que nous
			prenons pour les protéger.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">1. Données collectées</h2>
		<p class="leading-relaxed mb-4">
			Dans le cadre de l'utilisation de notre site, nous pouvons collecter les
			données suivantes :
		</p>
		<ul class="pl-5 leading-relaxed mb-4">
			<li>Votre nom, adresse email et mot de passe lors de la création de votre compte.</li>
			<li>Votre adresse postale et informations de paiement pour les commandes.</li>
			<li>
				Les photos et descriptions envoyées via les demandes personnalisées.
			</li>
			<li>
				Des données techniques telles que votre adresse IP, le type d'appareil
				et de navigateur, ainsi que des informations sur votre navigation.
			</li>
		</ul>
		<h2 class="text-xl font-semibold mt-6 mb-4">2. Utilisation des données</h2>
		<p class="leading-relaxed mb-4">
			Les données collectées sont utilisées pour :
		</p>
		<ul class="pl-5 leading-relaxed mb-4">
			<li>⮕ Gérer votre compte utilisateur et votre panier.</li>
			<li>⮕ Traiter vos commandes et demandes personnalisées.</li>
			<li>⮕ Communiquer avec vous pour le suivi de vos commandes ou demandes.</li>
			<li>⮕ Améliorer nos services et analyser l'expérience utilisateur.</li>
		</ul>
		<h2 class="text-xl font-semibold mt-6 mb-4">3. Partage des données</h2>
		<p class="leading-relaxed mb-4">
			Nous nous engageons à ne pas vendre ou louer vos données personnelles à des
			tiers. Cependant, nous pouvons partager vos données avec des partenaires de
			confiance dans les cas suivants :
		</p>
		<ul class="pl-5 leading-relaxed mb-4">
			<li>
				⮕ Fournisseurs de services essentiels (hébergement, traitement des paiements, transporteurs).
			</li>
			<li>
				⮕ Respect des obligations légales ou demandes des autorités.
			</li>
		</ul>
		<h2 class="text-xl font-semibold mt-6 mb-4">4. Vos droits</h2>
		<p class="leading-relaxed mb-4">
			Conformément au RGPD, vous disposez des droits suivants :
		</p>
		<ul class="pl-5 leading-relaxed mb-4">
			<li>⮕ Accéder à vos données personnelles et en demander une copie.</li>
			<li>⮕ Rectifier ou supprimer vos données.</li>
			<li>⮕ Vous opposer à certains traitements ou retirer votre consentement.</li>
		</ul>
		<p class="leading-relaxed mb-4">
			Pour exercer ces droits ou poser des questions, vous pouvez nous contacter
			à l'adresse suivante : 
			<a :href="`mailto:${contactEmail}`" class="text-primary underline"
				>{{ contactEmail }}</a
			>.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">5. Sécurité des données</h2>
		<p class="leading-relaxed mb-4">
			Nous utilisons des mesures techniques et organisationnelles pour protéger
			les données que vous nous confiez, notamment en chiffrant les données
			sensibles et en limitant l'accès à vos informations.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">6. Modification de la politique</h2>
		<p class="leading-relaxed mb-4">
			Cette politique de confidentialité peut être mise à jour. Nous vous
			informerons de tout changement significatif via notre site.
		</p>
	</div>
</template>

<script setup lang="ts">
	const contactEmail = useRuntimeConfig().public.contactEmail;
</script>