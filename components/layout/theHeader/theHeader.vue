<template>
	<div class="fixed w-screen left-0 top-0 z-10">
		<div class="px-5 relative z-50">
			<header
				class="relative grid grid-cols-3 justify-between items-center header-comp mt-2 p-3"
				:class="{ 'is-scrolled': headerIsScrolledBy && !menuIsOpen }"
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
							<div class="burger-x flex items-center justify-center absolute -rotate-45 w-6 h-6">
								<div></div>
							</div>
							<div class="burger-x flex items-center justify-center absolute rotate-45 w-6 h-6">
								<div></div>
							</div>
						</div>
						<p class="ml-5">Menu</p>
					</button>
				</div>
				<NuxtLink to="/" class="block">
					<img class="w-full h-6 object-contain" src="~/assets/images/logo.png" alt="logo" />
				</NuxtLink>
				<div class="flex justify-end">
					<IconCSS
						name="majesticons:search-line"
						class="transition-all ease-locomotive-ease-2 duration-[350ms]"
						:class="[
							{ '!bg-night-black-500': headerIsScrolledBy || menuIsOpen || activeMenuClass },
							{ '!bg-white': !headerIsScrolledBy && !menuIsOpen && !activeMenuClass },
						]"
					/>
				</div>
			</header>
		</div>
		<LayoutTheHeaderMenu :data="menu" :is-active="menuIsOpen" />
	</div>
</template>
<script lang="ts" src="./theHeader.component" />
<style lang="scss" src="./theHeader.scss"></style>
