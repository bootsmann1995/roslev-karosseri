<template>
	<div>
		<UiHero v-if="hero" :data="hero" />
		<div class="pb-[100px] lg:pb-[300px]"></div>
		<UiSalesPoints v-if="salesPoints" :data="salesPoints" />
		<UiProducts :products="data?.products" />
		<UiCasesSlider :data="data?.latestCases" />
		<UiTestimonial :data="data?.citater" />
	</div>
</template>
<script lang="ts" src="./index.page"></script>
