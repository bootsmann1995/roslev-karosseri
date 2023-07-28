<template>
	<div class="fixed w-screen left-0 top-0 z-10">
		<div class="container">
			<header class="container-row">
				<div class="col-span-8 lg:col-span-3 flex justify-start items-center">
					<div class="h-6 w-10">
						<NuxtIcon name="roslev-logo" />
					</div>
				</div>
				<nav class="col-span-10 pt-3 pb-3">
					<ul v-if="data?.mainMenu" class="flex gap-5 items-center flex-row justify-center h-full">
						<li>
							<button>Produkter</button>
						</li>
						<template v-for="item in data?.mainMenu">
							<li v-if="item.link" :key="item.link.id">
								<NuxtLink
									:to="
										`/${item.link.parent != null ? item.link.parent.slug + '/' : ''}` +
										item.link.slug +
										'/'
									"
									>{{ item.link.headline ?? item.link.overskrift }}</NuxtLink
								>
							</li>
						</template>
					</ul>
				</nav>
				<div class="col-span-3 flex justify-end items-center">search</div>
				<!-- <ul v-if="data?.productMenu">
			<template v-for="item in data?.productMenu">
				<li v-if="item.menuLink" :key="item.menuLink.id">
					<NuxtLink
						:to="
							`/${item.menuLink.parent != null ? item.menuLink.parent.slug + '/' : ''}` +
							item.menuLink.slug +
							'/'
						"
						>{{ item.menuLink.headline ?? item.menuLink.overskrift }}</NuxtLink
					>
				</li>
				<li v-for="child in item.childMenuLinks" :key="child.link.id" class="pl-2">
					<NuxtLink
						v-if="child && child.link"
						:to="
							`/${child.link.parent != null ? child.link.parent.slug + '/' : ''}` + child.link.slug + '/'
						"
						>{{ child.link.headline ?? child.link.overskrift }}</NuxtLink
					>
				</li>
			</template>
		</ul> -->
			</header>
		</div>
	</div>
</template>
<script lang="ts" src="./theHeader.component" />
