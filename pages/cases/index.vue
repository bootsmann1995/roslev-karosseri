<template>
	<div v-if="data">
		<div class="container mt-12">
			<div class="container-row" data-speed="clamp(0.8)">
				<h1 class="col-span-12 text-h2">{{ data.page?.overskrift }}</h1>
				<p class="col-span-full lg:col-span-12">{{ data.page?.teaser }}</p>
			</div>
		</div>
		<div class="container mt-8">
			<div class="container-row">
				<div class="col-span-16 grid grid-cols-1 lg:grid-cols-3 gap-2">
					<div
						v-for="(item, index) in data.cards"
						:key="'cards' + index"
						class="col-span-1 col-start-0"
						:data-speed="isMobile === true ? 'clamp(1.0)' : `clamp(0.${index === 1 ? 8 : 7})`"
					>
						<nuxt-link
							v-for="card in item"
							:key="card.slug ?? ''"
							:to="linkMap(card)"
							class="block rounded-xxl overflow-hidden mb-2 relative after:content-[''''] after:absolute group"
						>
							<DatocmsImage class="aspect-3/4" :data="card.billede?.responsiveImage" />
							<h2
								class="absolute bottom-4 left-2 text-white text-t2 right-2 leading-8 z-10 group-hover:lg:opacity-0 transition-all ease-lait-ease duration-300"
							>
								{{ card.overskrift }}
							</h2>
							<div
								class="absolute top-0 left-0 z-1 w-full h-full bg-gradient-to-b from-transparent to-black via-black opacity-50 transition-all ease-lait-ease duration-300 group-hover:lg:opacity-0"
							></div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="h-[10vh] lg:h-[60vh]"></div>
	</div>
</template>
<script lang="ts" src="./index.page.ts" />
