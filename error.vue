<template>
	<div class="bg-white min-h-screen font-quicksand">
		<main class="bg-white min-h-screen flex flex-col">
			<div class="h-full flex flex-col flex-grow items-center justify-center">
				<h1 class="text-blue-500 text-[26px] mb-4 font-bold">404 - UPS... siden eksisterer ikke</h1>
				<NuxtLink
					class="bg-blue-500 py-2 px-5 text-white rounded-md hover:bg-blue-400 transition-all ease-in-out"
					to="/"
				>
					Gå til forsiden
				</NuxtLink>
			</div>
			<footer class="bg-slate-800" data-scroll>
				<div class="container">
					<div class="container-row">
						<div class="col-span-16 lg:h-[150px] max-lg:py-4">
							<div class="container-row h-full">
								<div
									class="col-span-full text-white max-lg:flex-col flex items-start justify-center lg:items-end lg:gap-3 pb-3"
								>
									<p>Roslev Karosserifabrik a/s</p>
									<p class="max-lg:hidden">&#9679;</p>
									<p>Rybjergvej 22, 7870 Roslev</p>
									<p class="max-lg:hidden">&#9679;</p>
									<p>Tlf: <a class="underline" href="tel:97571411">97 57 14 11</a></p>
									<p class="max-lg:hidden">&#9679;</p>
									<p>
										Email:
										<a class="underline" href="mailto:roslev@roslev-karosseri.dk"
											>roslev@roslev-karosseri.dk</a
										>
									</p>
									<p class="max-lg:hidden">&#9679;</p>
									<p>CVR: 38 84 33 11</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</main>
	</div>
</template>
<script lang="ts" setup>
definePageMeta({
	layout: "default",
});
</script>
