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
								<div class="col-span-16 h-[300px]"></div>
							</div>
						</div>
					</footer>
				</main>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./default.layout"></script>
