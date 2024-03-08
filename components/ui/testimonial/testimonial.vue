<template>
	<div class="container mb-[100px]">
		<div class="container-row" :data-speed="`clamp(1)`">
			<div class="col-span-full lg:col-span-11 lg:col-start-3">
				<div class="w-full relative block">
					<Swiper
						:space-between="30"
						:effect="'fade'"
						:navigation="true"
						:pagination="{
							clickable: true,
						}"
						:modules="[SwiperEffectFade, SwiperNavigation]"
						@init="initSwiper"
					>
						<SwiperSlide v-for="testimonial in data" :key="testimonial.reference" class="h-full bg-white">
							<div class="grid grid-cols-11 gap-x-3 bg-white">
								<div class="row-start-1 col-span-full h-[44px] max-lg:hidden"></div>
								<div
									class="col-start-2 col-span-10 row-start-1 row-span-3 bg-gray-200 rounded-md max-lg:hidden"
								></div>
								<div
									class="col-span-full max-lg:-mb-[25px] max-lg:flex max-lg:justify-center lg:col-start-1 lg:col-span-2 lg:row-start-2"
								>
									<DatocmsImage
										v-if="testimonial.avatar?.responsiveImage"
										class="w-[180px] md:w-[290px] lg:w-[180px]"
										:data="testimonial.avatar?.responsiveImage"
									/>
								</div>
								<div
									class="col-span-full max-lg:pt-[40px] max-lg:pb-8 max-lg:px-2 max-lg:bg-light-grey max-lg:rounded-md lg:col-start-4 lg:col-span-7 lg:row-start-2"
								>
									<h2 class="text-h3-sm lg:text-h3 text-blue-500 mb-2">
										{{ testimonial.qouteText }}
									</h2>
									<p class="text-rich-black text-t3-sm lg:text-t3">
										{{ testimonial.reference }}
									</p>
									<div v-if="swiper" class="flex mt-6 lg:mt-9">
										<button
											class="mr-6 rounded-full text-white flex items-center justify-center w-[36px] h-[36px] bg-blue-500 disabled:bg-[#B1ABAB]"
											:disabled="swiper.activeIndex === 0"
											@click="swiper.slidePrev(400, true)"
										>
											<IconCSS name="formkit:arrowleft" filled />
										</button>
										<button
											:disabled="swiper.activeIndex === data.length - 1"
											class="rounded-full text-white flex items-center justify-center w-[36px] h-[36px] bg-blue-500 disabled:bg-[#B1ABAB]"
											@click="swiper.slideNext(400, true)"
										>
											<IconCSS name="formkit:arrowright" filled />
										</button>
									</div>
								</div>
								<div class="row-start-3 col-span-full h-[44px] max-lg:hidden"></div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./testimonial.component.ts" />
<style>
.swiper-slide {
	opacity: 0 !important;
}
.swiper-slide-active {
	opacity: 1 !important;
}
.swiper-button-prev,
.swiper-button-next {
	display: none;
}
</style>
