<template>
	<div class="container-row ml-3 relative lg:ml-6 !mr-0 my-[100px] overflow-hidden">
		<NuxtLink to="/cases/" class="absolute right-3 top-5 text-blue-500 font-bold group flex items-center">
			Se alle nyheder
			<IconCSS
				class="group-hover:translate-x-[5px] transition-transform ease-lait-ease duration-300"
				name="tabler:arrow-right"
			></IconCSS>
		</NuxtLink>
		<div class="col-span-full">
			<h2 class="text-h2">Nyheder</h2>
		</div>
		<div class="col-span-full relative lg:col-span-16 my-4 lg:my-6 cursor-grab">
			<Swiper
				:space-between="12"
				:breakpoints="{ 0: { slidesPerView: 1.5 }, 768: { slidesPerView: 4.5 } }"
				class="w-full"
			>
				<SwiperSlide v-for="(item, index) in data.allCases" :key="index" class="group flex !h-auto">
					<NuxtLink :to="createLink(item)" class="">
						<div>
							<div class="overflow-hidden">
								<DatocmsImage
									v-if="item.billede && item.billede.responsiveImage"
									class="rounded-tl-md rounded-tr-md group-hover:scale-[1.05] transition-transform duration-300 ease-locomotive-ease"
									:data="item.billede.responsiveImage"
								/>
							</div>

							<div>
								<h3 class="text-t3 text-[16px] text-night-black-500 mb-1 mt-3">
									{{ item.overskrift }}
								</h3>
								<p class="text-[14px] text-gray-500 line-clamp-3">{{ item.teaser }}</p>
							</div>
						</div>
						<p>læs mere</p>
					</NuxtLink>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>
<script lang="ts" src="./casesSlider.component.ts"></script>
