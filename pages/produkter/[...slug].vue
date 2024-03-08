<template>
	<div>
		<div class="container pt-[100px] lg:pt-[180px] mb-6 lg:mb-12">
			<div class="container-row">
				<div class="col-span-full max-lg:mb-7 lg:col-span-6 flex items-center">
					<div>
						<h1 class="text-h2 mb-4">{{ data?.overskrift }}</h1>
						<p class="font-medium text-t3">{{ data?.introText }}</p>
					</div>
				</div>
				<div class="col-span-full lg:col-start-8 lg:col-span-9">
					<DatocmsImage
						class="block relative [&_img]:!relative"
						:data="data?.introImage[0].responsiveImage"
					/>
				</div>
			</div>
		</div>
		<UiBlockRouter :data="data?.blokListe"></UiBlockRouter>
		<div class="pb-[100px] lg:pb-[300px]"></div>
	</div>
</template>
<script lang="ts" src="./[...slug].component.ts" />
