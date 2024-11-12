<template>
	<div v-if="data">
		<div class="container pt-[100px] lg:pt-12">
			<div class="container-row">
				<div class="col-span-16 lg:col-span-10 mb-6">
					<h1 class="text-h3 lg:text-h2 mb-3 break-words">{{ data?.overskrift }}</h1>
					<p class="text-t3 font-normal">{{ data?.teaser }}</p>
				</div>
				<div class="col-span-16">
					<DatocmsImage class="rounded-xxl" :data="data?.billede?.responsiveImage" />
				</div>
			</div>
		</div>
		<UiBlockRouter :data="data?.indhold"></UiBlockRouter>
		<div class="h-[5vh] lg:h-[10vh]"></div>
	</div>
</template>
<script lang="ts" src="./index.page.ts" />
