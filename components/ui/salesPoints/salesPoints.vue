<template>
	<div class="pb-11 flex justify-center items-center">
		<div v-if="data" class="grid grid-cols-3 w-4/5 gap-3">
			<div
				v-for="(item, i) in data.usp"
				:key="item.id"
				:data-speed="`clamp(0.${8 - i})`"
				class="rounded-xl bg-gray-200 p-3 h-[200px] flex flex-col items-center justify-center grid grid-rows-2"
			>
				<div class="row-start-1 grid place-items-center">
					<IconCSS class="!w-9 !h-9 !bg-blue-500 mt-2" :name="iconList[i]" />
				</div>
				<p class="text-t2 text-center font-thin row-start-2 leading-normal">{{ item.text }}</p>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./salesPoints.component.ts" />
