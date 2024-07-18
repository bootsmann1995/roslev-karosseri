<template>
	<div
		class="navigation-menu fixed h-screen w-screen top-0 left-0 z-10 pt-[125px] lg:pt-[15vh] max-h-screen overflow-y-auto"
		:class="[{ 'is-open': isActive === true }, `bg-[${currentColor}]`]"
	>
		<div class="relative z-[9] pl-5 px-2 lg:px-8">
			<nav class="elative max-lg:row-start-2">
				<template v-for="(item, index) in data.productMenu" :key="item.menuLink.id">
					<li
						v-if="item.childMenuLinks && item.childMenuLinks.length === 0"
						class="list-none pl-0 navigation-link"
					>
						<NuxtLink
							class="text-[18px] lg:text-[22px] uppercase mb-5 hover:text-white transition-[color] duration-[200ms] ease-locomotive-ease"
							:to="menuPrefix(item.menuLink)"
							@mouseover="setHoverColor(index)"
							@mouseleave="setHoverColor(-1)"
						>
							{{ item.menuLink.overskrift ?? item.menuLink.headline }}</NuxtLink
						>
					</li>
					<template v-else>
						<AccordionItem :title="item.menuLink.overskrift ?? item.menuLink.headline">
							<div class="pt-[2px] pb-3 pl-1">
								<li class="list-none navigation-link">
									<NuxtLink
										class="font-medium mb-5 hover:text-white transition-[color] duration-[200ms] ease-locomotive-ease"
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
										class="list-none navigation-link"
									>
										<NuxtLink
											class="text-[14px] lg:text-[16px] hover:text-white transition-[color] duration-[500ms] ease-locomotive-ease"
											:to="menuPrefix(child.link)"
											@mouseover="setHoverColor(_index)"
											@mouseleave="setHoverColor(-1)"
										>
											{{ child.link.overskrift ?? child.link.headline }}</NuxtLink
										>
									</li>
								</template>
							</div>
						</AccordionItem>
					</template>
				</template>
				<li
					v-for="(item, index) in data.mainMenu"
					:key="item.link.id"
					class="navigation-link list-none"
					:class="{ 'mt-4': index === 0 }"
				>
					<NuxtLink
						class="text-[18px] !font-normal"
						:to="menuPrefix(item.link)"
						:class="{ 'border-t border-gray-500 pt-2 pr-2': index === 0 }"
					>
						{{ item.link.headline ?? item.link.overskrift }}
					</NuxtLink>
				</li>
			</nav>
			<div class="col-start-1 max-lg:row-start-2">
				<div>
					<ul class="max-lg:mt-3"></ul>
				</div>
			</div>
		</div>
		<span
			class="hidden bg-[#60656F] bg-[#C49991] bg-[#F7F7FF] bg-[#eff3f6] bg-[#60656F] bg-[#91C499] bg-[#0275bf] bg-[#9991C4]"
		></span>
	</div>
</template>
<script lang="ts" src="./menu.component.ts" />
<style lang="scss" src="./menu.scss"></style>
