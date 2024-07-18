<template>
	<div
		class="overflow-hidden transition-all ease-lait-ease rounded navigation-link navigation-link--accordion"
		:style="{ height: `${activeHeight}px` }"
	>
		<button ref="header" class="flex w-full items-center gap-1" @click="accordionOpen = !accordionOpen">
			<span class="flex items-center gap-4 lg:gap-6 text-left text-[18px] lg:text-[22px] uppercase">
				{{ title }}
			</span>
			<IconCSS class="!w-[16px] !h-[16px]" :class="{ 'rotate-180': accordionOpen }" name="tabler:chevron-down" />
		</button>
		<div ref="body">
			<slot></slot>
		</div>
		<span class="!duration-300 !delay-0"></span>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		default: "",
	},
	count: {
		type: Number,
		default: null,
	},
});

const header = ref<HTMLButtonElement | null>(null);
const body = ref<HTMLDivElement | null>(null);
const accordionOpen = ref(false);
const windowSize = ref(0);

onMounted(() => {
	window.addEventListener("resize", () => {
		windowSize.value = 1;
		windowSize.value = 0;
	});
});

const headerHeight = computed(() => {
	if (header.value) {
		return header.value.clientHeight + windowSize.value;
	}
	return 84;
});

const bodyHeight = computed(() => {
	if (body.value) {
		return body.value.clientHeight + windowSize.value;
	}
	return 0;
});

const activeHeight = computed(() => {
	if (accordionOpen.value) {
		return headerHeight.value + bodyHeight.value;
	}
	return headerHeight.value + windowSize.value;
});
</script>
