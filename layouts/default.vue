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
								<div class="col-span-16 h-[150px]">
									<div class="container-row h-full">
										<div class="col-span-full text-white flex justify-center items-end gap-3 pb-3">
											<p>Roslev Karosserifabrik a/s</p>
											<p>&#9679;</p>
											<p>Rybjergvej 22, 7870 Roslev</p>
											<p>&#9679;</p>
											<p>tlf. <a class="underline" href="tel:97571411">97 57 14 11</a></p>
											<p>&#9679;</p>
											<p>
												email:
												<a class="underline" href="mailto:roslev@roslev-karosseri.dk"
													>roslev@roslev-karosseri.dk</a
												>
											</p>
											<p>&#9679;</p>
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
