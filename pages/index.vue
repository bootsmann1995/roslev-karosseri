<template>
	<div>
		<UiHero v-if="hero" :data="hero" />
		<div class="container">
			<div class="container-row">
				<div class="col-span-full lg:col-start-2 lg:col-span-14">
					<p
						class="text-center text-d3-sm font-thin lg:text-d3 lg:font-thin tracking-wider pt-6 lg:pt-0 px-2"
					>
						{{ data?.text }}
					</p>
				</div>
			</div>
		</div>
		<UiCasesSlider :data="data?.latestCases" />
		<UiSalesPoints v-if="salesPoints" :data="salesPoints" />
		<UiProducts :products="data?.products" />
		<UiTestimonial :data="data?.citater" />
	</div>
</template>
<script lang="ts" src="./index.page"></script>
