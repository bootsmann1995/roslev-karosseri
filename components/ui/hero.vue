<template>
	<div v-if="data" class="col-span-full bg-[#fff] p-3 rounded-xxl">
		<div class="grid grid-cols-6">
			<div class="col-span-5 md:col-span-2 flex items-start flex-col justify-center pl-4">
				<h1 class="text-d3-sm lg:text-d3 block mb-4">{{ data.overskrift }}</h1>
				<p class="text-t3-light">{{ data.text }}</p>
			</div>
			<div
				class="mt-4 md:mt-0 col-start-0 row-start-2 col-span-full md:col-start-4 md:row-start-1 md:col-span-3 bg-blue-500 aspect-1/2"
			>
				<UiImage
					class="rounded-xxl"
					:src="data.image?.url"
					fit="crop"
					:modifiers="{ auto: 'format,compress', crop: 'focalpoint', ar: 4 / 3 }"
				/>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./hero.component.ts" />
