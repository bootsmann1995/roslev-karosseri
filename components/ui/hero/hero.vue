<template>
	<div>
		<div v-if="data" class="relative" data-speed="clamp(0.8)">
			<UiImage
				class="w-screen h-screen -z-10 relative object-cover"
				:src="data.image?.url"
				fit="crop"
				:modifiers="{ auto: 'format,compress', crop: 'focalpoint', ar: 4 / 3 }"
			/>
			<h1 class="text-white -translate-y-[35vh] ml-4 text-d1 font-thin" data-speed="clamp(1.1)">
				{{ data?.overskrift }}
			</h1>
			<div class="px-5 pb-12 -translate-y-10 bg-white" data-speed="clamp(1.0)">
				<p class="text-center text-d3 font-thin tracking-wider">{{ data?.text }}</p>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./hero.component.ts" />
