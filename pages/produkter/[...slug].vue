<template>
	<div>
		<div class="relative mb-[50px] lg:mb-[100px] flex items-center">
			<div
				class="w-screen rounded-br-xxxl lg:rounded-br-xxxxl overflow-hidden h-screen max-h-[350px] lg:max-h-[800px] min-h-[600px] [&_img]:object-cover bg-overlay-gradient relative"
			>
				<div class="bg-overlay-gradient w-full h-full absolute top-0 left-0 z-10"></div>
				<DatocmsImage
					v-if="data?.introImage[0]"
					class="w-full h-full"
					:data="data?.introImage[0].responsiveImage"
				/>
			</div>
			<div class="container absolute -translate-x-1/2 left-1/2 w-screen text-white z-20">
				<div class="container-row">
					<div class="col-span-full lg:col-span-10 flex items-center">
						<div>
							<h1 class="text-h2 mb-4">{{ data?.overskrift }}</h1>
							<p class="font-medium text-t3">{{ data?.introText }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<UiBlockRouter :data="data?.blokListe"></UiBlockRouter>
		<div class="container mt-[50px] lg:mt-[100px]">
			<div class="container-row">
				<div class="col-start-3 col-end-14 bg-gray-200 px-5 py-7 rounded-xl">
					<h2 class="text-h2-sm lg:text-h2 text-center mb-3">Spørgsmål?</h2>
					<p class="text-center">
						Kontakt os hvis du har nogle spørgsmål eller du ønsker at høre mere om vores produkter/løsninger
					</p>
					<div class="flex items-center justify-center my-2">
						<NuxtLink
							class="bg-blue-500 text-white w-max px-2 py-1 rounded-full mt-2"
							:to="data.contactPageUrl"
							>Kontakt os</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
		<div class="pb-[100px] lg:pb-[300px]"></div>
	</div>
</template>
<script lang="ts" src="./[...slug].component.ts" />
