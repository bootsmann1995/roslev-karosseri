<template>
	<div class="container-row ml-3 lg:ml-6 !mr-0 mb-[120px]">
		<div class="col-span-full">
			<h2 class="text-h2">Se vores seneste arbejde</h2>
		</div>
		<div class="col-span-16 my-8 lg:my-11 cursor-grab">
			<Swiper
				:space-between="12"
				:breakpoints="{ 0: { slidesPerView: 1.5 }, 768: { slidesPerView: 4.5 } }"
				class="w-full"
			>
				<SwiperSlide v-for="(item, index) in data.allCases" :key="index">
					<NuxtLink :to="createLink(item)">
						<DatocmsImage
							v-if="item.billede && item.billede.responsiveImage"
							class="rounded-tl-md rounded-tr-md"
							:data="item.billede.responsiveImage"
						/>
						<div>
							<h3 class="text-t3 text-[16px] text-night-black-500 mb-1 mt-3">{{ item.overskrift }}</h3>
							<p class="text-[14px]">{{ item.teaser }}</p>
						</div>
					</NuxtLink>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>
<script lang="ts" src="./casesSlider.component.ts"></script>
