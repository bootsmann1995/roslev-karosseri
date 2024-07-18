<template>
	<div v-if="data">
		<div class="overflow-hidden relative mb-[40px] lg:mb-[80px]">
			<div class="absolute bg-overlay-gradient left-0 top-0 w-full h-full z-10 opacity-50"></div>
			<div class="w-screen h-screen max-h-[500px] lg:max-h-[720px] [&_img]:object-cover">
				<DatocmsImage class="h-full" layout="responsive" :data="data.page?.billede?.responsiveImage" />
			</div>
			<div
				class="container absolute bottom-[60px] lg:bottom-[60px] left-1/2 -translate-x-1/2 w-full z-20 text-white"
			>
				<div class="container-row">
					<h1 class="col-span-12 text-h2">{{ data.page?.overskrift }}</h1>
					<p class="col-span-full lg:col-span-12">{{ data.page?.teaser }}</p>
				</div>
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
							class="block rounded-xxl overflow-hidden mb-2 group relative after:content-[''''] after:absolute"
						>
							<div
								class="aspect-3/4 [&_img]:object-cover group-hover:scale-[1.05] transition-all duration-200 ease-locomotive-ease"
							>
								<DatocmsImage class="h-full w-full" :data="card.billede?.responsiveImage" />
							</div>
							<h2
								class="absolute bottom-4 left-2 text-white text-t2 right-2 leading-8 z-10 group-hover:lg:opacity-100 transition-all ease-lait-ease duration-300"
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
		<div class="h-[50px] lg:h-[100px]"></div>
	</div>
</template>
<script lang="ts" src="./index.page.ts" />
