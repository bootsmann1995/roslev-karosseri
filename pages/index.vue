<template>
	<div>
		<UiHero v-if="hero" :data="hero" />
		<UiSalesPoints v-if="salesPoints" :data="salesPoints" />
	</div>
</template>
<script lang="ts" src="./index.page"></script>
