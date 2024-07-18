<template>
	<div class="overflow-hidden">
		<div v-if="data" class="relative mb-[40px] lg:mb-[60px]">
			<div class="w-screen h-screen">
				<DatocmsImage
					class="w-full h-full [&_img]:object-cover relative"
					:data="data.image.responsiveImage"
					:layout="'responsive'"
				/>
			</div>

			<h1 class="text-white absolute z-10 bottom-[20vh] ml-4 text-d1-sm lg:text-d1 font-thin">
				{{ data?.overskrift }}
			</h1>
		</div>
	</div>
</template>
<script lang="ts" src="./hero.component.ts" />
