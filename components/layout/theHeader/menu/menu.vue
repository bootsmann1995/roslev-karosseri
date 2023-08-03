<template>
	<div
		class="navigation-menu fixed h-screen w-screen top-0 left-0 z-10 pt-[15vh]"
		:class="[{ 'is-open': isActive === true }, `bg-[${currentColor}]`]"
	>
		<div class="grid grid-cols-2 px-8">
			<div class="col-start-1">
				<div>
					<ul>
						<li v-for="item in data.mainMenu" :key="item.link.id">
							{{ item.link.headline ?? item.link.overskrift }}
						</li>
					</ul>
				</div>
			</div>
			<nav class="col-start-2">
				<template v-for="(item, index) in data.productMenu" :key="item.menuLink.id">
					<li class="list-none pl-0 navigation-link">
						<NuxtLink
							class="text-[52px] uppercase mb-5 hover:text-white transition-[color] duration-[200ms] ease-locomotive-ease"
							:to="(item.menuLink.parent != null ? item.menuLink.parent + '/' : '') + item.menuLink.slug"
							@mouseover="setHoverColor(index)"
							@mouseleave="setHoverColor(-1)"
						>
							{{ item.menuLink.overskrift ?? item.menuLink.headline }}</NuxtLink
						>
					</li>
					<li
						v-for="(child, _index) in item.childMenuLinks"
						:key="child.link.id"
						class="list-none pl-10 navigation-link"
					>
						<NuxtLink
							class="text-[32px] hover:text-white transition-[color] duration-[500ms] ease-locomotive-ease"
							:to="(child.link.parent != null ? child.link.parent?.slug + '/' : '') + child.link.slug"
							@mouseover="setHoverColor(_index)"
							@mouseleave="setHoverColor(-1)"
						>
							{{ child.link.overskrift ?? child.link.headline }}</NuxtLink
						>
					</li>
				</template>
			</nav>
		</div>
		<div class="absolute bottom-0 pb-10 flex justify-end px-10 w-full">
			<NuxtLink v-for="social in socialLinks" :key="social.name" to="/" class="social-link">
				<IconCSS
					class="!w-7 !h-7 mr-5 transition-[background-color] duration-[350ms] ease-locomotive-ease hover:!bg-blue-500"
					:class="[{ '!bg-white': currentColor != '#F7F7FF' }, { '!bg-gray-500': currentColor == '#F7F7FF' }]"
					:name="social.name"
				/>
			</NuxtLink>
		</div>
		<span
			class="hidden bg-[#60656F] bg-[#C49991] bg-[#F7F7FF] bg-[#eff3f6] bg-[#60656F] bg-[#91C499] bg-[#0275bf] bg-[#9991C4]"
		></span>
	</div>
</template>
<script lang="ts" src="./menu.component.ts" />
<style lang="scss" src="./menu.scss"></style>
