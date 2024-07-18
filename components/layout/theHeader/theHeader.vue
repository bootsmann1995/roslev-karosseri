<template>
	<div class="fixed w-screen left-0 top-0 z-50">
		<div class="px-2 lg:px-5 relative z-50">
			<header
				class="relative grid grid-cols-3 justify-between items-center header-comp mt-2 p-2 lg:p-3"
				:class="{ 'is-scrolled ': (headerIsScrolledBy && !menuIsOpen) || (lightMode && !menuIsOpen) }"
			>
				<div class="">
					<button
						type="button"
						class="flex items-center justify-center group burger-wrap"
						:class="[{ 'is-active': menuIsOpen }, { 'is-sub': activeMenuClass }]"
						@click="openMenu"
					>
						<div class="burger">
							<span></span>
							<span></span>
							<div
								class="burger-x flex items-center justify-center absolute -rotate-45 w-3 h-3 lg:w-6 lg:h-6"
							>
								<div></div>
							</div>
							<div
								class="burger-x flex items-center justify-center absolute rotate-45 h-3 w-3 lg:w-6 lg:h-6"
							>
								<div></div>
							</div>
						</div>
						<p class="ml-2 lg:ml-5">Menu</p>
					</button>
				</div>
				<NuxtLink to="/" class="block">
					<img class="w-full h-5 lg:h-6 object-contain" src="~/assets/images/logo.png" alt="logo" />
				</NuxtLink>
				<div class="flex justify-end"></div>
			</header>
		</div>
		<LayoutTheHeaderMenu :data="menu" :is-active="menuIsOpen" @close-menu="menuIsOpen = false" />
	</div>
</template>
<script lang="ts" src="./theHeader.component" />
<style lang="scss" src="./theHeader.scss"></style>
