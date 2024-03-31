<template>
	<div class="bg-white min-h-screen font-quicksand">
		<LayoutTheHeader />
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<main class="bg-white">
					<NuxtPage />
					<footer class="bg-slate-800">
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
		</div>
	</div>
</template>
<script lang="ts" src="./default.layout"></script>
