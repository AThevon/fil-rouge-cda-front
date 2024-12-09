<template>
	<div class="max-w-4xl bg-red-400 mx-auto px-6 py-12">
		<h1 class="text-3xl font-bold mb-6">Conditions générales d'utilisation</h1>
		<p class="leading-relaxed mb-4">
			Bienvenue sur notre site de vente en ligne dédié à l'artisanat et aux
			produits faits main. En accédant à ce site, vous acceptez de respecter les
			présentes conditions générales d'utilisation. Veuillez les lire
			attentivement.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">1. Accès au site</h2>
		<p class="leading-relaxed mb-4">
			L'accès au site est réservé aux utilisateurs âgés de 18 ans et plus. En
			utilisant ce site, vous confirmez être majeur et capable de conclure des
			transactions légales.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">2. Propriété intellectuelle</h2>
		<p class="leading-relaxed mb-4">
			Tous les éléments de ce site, y compris les produits, descriptions,
			images, et logos, sont protégés par des droits de propriété
			intellectuelle. Toute reproduction, utilisation ou distribution non
			autorisée est strictement interdite.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">
			3. Commandes et personnalisation
		</h2>
		<p class="leading-relaxed mb-4">
			Les commandes passées sur ce site sont considérées comme définitives une
			fois le paiement validé. Les demandes de personnalisation (avec formulaire
			et photos) seront examinées et traitées selon les spécifications fournies
			par l'utilisateur.
		</p>
		<p class="leading-relaxed mb-4">
			Veuillez noter que nous nous réservons le droit de refuser toute demande
			qui ne respecte pas les valeurs ou les contraintes techniques de notre
			service.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">4. Responsabilités</h2>
		<p class="leading-relaxed mb-4">
			Nous déclinons toute responsabilité en cas de :
		</p>
		<ul class="pl-5 leading-relaxed mb-4">
			<li>⮕ Mauvaise utilisation du site ou des produits.</li>
			<li>⮕ Défaillances techniques hors de notre contrôle.</li>
			<li>
				⮕ Problèmes liés aux fichiers téléchargés via le formulaire (photos ou
				autres).
			</li>
		</ul>
		<h2 class="text-xl font-semibold mt-6 mb-4">
			5. Paiement et remboursement
		</h2>
		<p class="leading-relaxed mb-4">
			Les paiements effectués sur ce site sont sécurisés. Les remboursements
			seront étudiés au cas par cas pour les produits non conformes ou
			endommagés, à condition qu'une preuve soit fournie.
		</p>
		<h2 class="text-xl font-semibold mt-6 mb-4">6. Modifications</h2>
		<p class="leading-relaxed mb-4">
			Nous nous réservons le droit de modifier ces conditions générales à tout
			moment. Les utilisateurs seront informés des changements significatifs via
			une notification sur le site.
		</p>
		<p class="leading-relaxed">
			Pour toute question ou réclamation, contactez-nous à l'adresse suivante :
			<a :href="`mailto:${contactEmail}`" class="text-primary underline">{{
				contactEmail
			}}</a
			>.
		</p>
	</div>
</template>

<script setup lang="ts">
	const contactEmail = useRuntimeConfig().public.contactEmail;
</script>
