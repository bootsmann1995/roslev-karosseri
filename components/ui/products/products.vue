<template>
	<section class="w-full flex justify-center items-center pt-[100px] pb-[250px]">
		<div class="grid grid-cols-12 max-w-[1240px] mx-3 lg:mx-6 gap-1 mx-6">
			<div class="text-center col-span-full mt-10 mb-12">
				<h2 class="text-center text-d3 font-normal" :data-speed="`clamp(0.9)`">Produkter</h2>
			</div>
			<div
				v-for="(item, index) in products"
				:key="`product-${index}`"
				class="col-span-6 lg:col-span-3 block"
				:data-speed="isLargeScreen ? 'clamp(0.8)' : 'clamp(1)'"
			>
				<NuxtLink
					class="bg-white p-2 hover:bg-slate-200 transition-all ease-locomotive-ease duration-300 block border-[2px] rounded-lg h-full"
					:to="`/${item.parent ? item.parent.slug + '/' : ''}${item.slug}`"
				>
					<div class="w-full aspect-4/3">
						<datocms-image
							v-if="item.icon?.responsiveImage"
							class="w-full h-full [&>picture>img]:object-contain"
							:data="item.icon?.responsiveImage"
						/>
					</div>
					<h3 class="text-t3 text-center mb-3">{{ item.overskrift }}</h3>
					<p class="text-p2 line-clamp-2 text-center">{{ item.introText }}</p>
					<!-- <DatocmsImage :data="item.introImage[0].responsiveImage" /> -->
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
<script lang="ts" src="./products.component.ts" />
