<template>
	<div class="flex justify-center items-center">
		<div v-if="data" class="grid grid-cols-1 w-full px-2 lg:px-0 lg:grid-cols-3 lg:w-4/5 gap-3 relative z-10">
			<div
				v-for="(item, i) in data.usp"
				ref="uItem"
				:key="item.id"
				class="rounded-xl bg-gray-200 p-3 h-[200px] grid grid-rows-2 mb-8 last-of-type:mb-0"
				data-speed="clamp(0.8)"
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
