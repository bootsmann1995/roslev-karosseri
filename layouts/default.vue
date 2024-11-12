<template>
	<div class="bg-white min-h-screen font-quicksand">
		<LayoutTheHeader :data="data" />
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<main class="bg-white">
					<NuxtPage />
					<footer class="bg-slate-800" data-scroll>
						<div class="container">
							<div class="container-row items-center">
								<div class="col-span-16 lg:h-[150px] max-lg:py-4 py-4">
									<div class="container-row mb-4 lg:mb-5">
										<div class="col-span-full">
											<NuxtLink to="/" class="block">
												<img
													class="lg:w-full h-5 lg:h-6 object-contain"
													src="~/assets/images/logo.png"
													alt="logo"
												/>
											</NuxtLink>
										</div>
									</div>
									<div class="container-row mb-2">
										<div
											class="col-span-full text-white max-lg:flex-col flex items-start justify-center lg:items-end lg:gap-3"
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
									<div class="flex lg:items-center lg:justify-center">
										<a
											href="https://www.facebook.com/profile.php?id=100089366253143"
											target="_blank"
											class="text-white flex items-center justify-center text-[14px]"
											><IconCSS
												name="ic:sharp-facebook"
												class="text-white !h-[25px] !w-[25px] mr-1"
											></IconCSS>
											Facebook</a
										>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</main>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./default.layout"></script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
