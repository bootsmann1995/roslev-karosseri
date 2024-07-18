<template>
	<section class="w-full flex justify-center items-center pt-[70px] lg:pt-[100px] pb-[100px] lg:pb-[100px]">
		<div class="grid grid-cols-12 max-w-[1240px] mx-3 lg:mx-6 gap-1">
			<div class="text-center col-span-full mb-4 lg:mb-8">
				<h2 class="text-center max-lg:text-d2-sm lg:text-d3 lg:!font-normal" :data-speed="`clamp(0.9)`">
					Produkter
				</h2>
			</div>
			<template v-for="(item, index) in products" :key="`product-${index}`">
				<div
					v-if="item.icon"
					class="col-span-6 lg:col-span-3 block"
					:data-speed="isLargeScreen ? 'clamp(0.8)' : 'clamp(1)'"
				>
					<NuxtLink
						class="bg-white p-2 hover:bg-slate-200 transition-all ease-locomotive-ease duration-300 block border-[2px] rounded-lg h-full"
						:to="linkMap(item)"
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
			</template>
		</div>
	</section>
</template>
<script lang="ts" src="./products.component.ts" />
