<template>
	<div
		class="navigation-menu fixed h-screen w-screen top-0 left-0 z-10 pt-[15vh] max-h-screen"
		:class="[{ 'is-open': isActive === true }, `bg-[${currentColor}]`]"
	>
		<div class="grid grid-cols-1 lg:grid-cols-2 px-2 lg:px-8 h-full">
			<div class="col-start-1 max-lg:row-start-2">
				<div>
					<ul class="max-lg mt-5">
						<li v-for="item in data.mainMenu" :key="item.link.id">
							<NuxtLink class="max-lg:text-t3 lg:text-h2-sm !font-normal" :to="menuPrefix(item.link)">
								{{ item.link.headline ?? item.link.overskrift }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>

			<nav class="lg:col-start-2 relative max-lg:row-start-1 h-full">
				<template v-for="(item, index) in data.productMenu" :key="item.menuLink.id">
					<li class="list-none pl-0 navigation-link">
						<NuxtLink
							class="text-[24px] lg:text-[22px] uppercase mb-5 hover:text-white transition-[color] duration-[200ms] ease-locomotive-ease"
							:to="menuPrefix(item.menuLink)"
							@mouseover="setHoverColor(index)"
							@mouseleave="setHoverColor(-1)"
						>
							{{ item.menuLink.overskrift ?? item.menuLink.headline }}</NuxtLink
						>
					</li>
					<template v-for="(child, _index) in item.childMenuLinks">
						<li
							v-if="child && child.link"
							:key="child.link.id"
							class="list-none pl-2 lg:pl-10 navigation-link"
						>
							<NuxtLink
								class="text-[20px] lg:text-[16px] hover:text-white transition-[color] duration-[500ms] ease-locomotive-ease"
								:to="menuPrefix(child.link)"
								@mouseover="setHoverColor(_index)"
								@mouseleave="setHoverColor(-1)"
							>
								{{ child.link.overskrift ?? child.link.headline }}</NuxtLink
							>
						</li>
					</template>
				</template>
			</nav>
		</div>
		<div class="absolute bottom-0 pb-10 flex lg:justify-end px-2 lg:px-10 w-full">
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
