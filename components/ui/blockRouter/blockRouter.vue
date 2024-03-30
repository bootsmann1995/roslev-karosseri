<template>
	<div class="container">
		<div class="container-row">
			<template v-for="item in data">
				<div
					v-if="item._modelApiKey === 'text_block'"
					:key="item.id"
					:data-speed="isMobile ? 'clamp(1)' : 'clamp(1.1)'"
					class="col-span-16 lg:col-start-2 lg:col-span-14 mb-6 mt-6 lg:mt-11 lg:mb-8"
				>
					<div v-if="!item.grBaggrund" class="container-row">
						<h2 class="col-span-full text-h3-sm lg:text-h3 mb-2 break-words hyphens-auto" lang="da">
							{{ item.overskrift }}
						</h2>
						<UtilsStructuredText
							class="col-span-full break-words hyphens-auto"
							:text="item.text"
							lang="da"
							:unique-key="item.id"
						/>
					</div>
					<div v-else class="container-row">
						<UtilsStructuredText
							class="col-span-full lg:col-start-2 lg:col-span-13 break-words hyphens-auto bg-gray-200 p-4 rounded-xxl"
							:text="item.text"
							lang="da"
							:unique-key="item.id"
						/>
					</div>
				</div>
				<div
					v-if="item._modelApiKey === 'text_block'"
					:key="item.id"
					:data-speed="isMobile ? 'clamp(1)' : 'clamp(1.1)'"
				></div>
				<div
					v-if="item._modelApiKey === 'fifty_block'"
					:key="item.id"
					class="col-span-16 grid grid-cols-1 lg:grid-cols-4 gap-5 my-0 lg:my-9"
				>
					<div class="col-span-2" :data-speed="isMobile ? 'clamp(1)' : 'clamp(1.2)'">
						<DatocmsImage class="rounded-xxl" :data="item.image?.responsiveImage"></DatocmsImage>
					</div>
					<div
						class="col-span-2 flex flex-col justify-center"
						:data-speed="isMobile ? 'clamp(1)' : 'clamp(1.1)'"
					>
						<h2 class="mb-2 text-h3-sm">{{ item.headline }}</h2>
						<DatocmsStructuredText
							:data="item.text"
							:render-inline-record="renderInlineRecord"
							:render-link-to-record="renderLinkToRecord"
						/>
					</div>
				</div>
				<div
					v-if="item._modelApiKey === 'gallery_block'"
					:key="item.id"
					class="col-span-16 grid grid-cols-2 lg:grid-cols-3 my-9 gap-2"
				>
					<div
						v-for="(image, index) in item.images"
						:key="index + 'imAge'"
						class="col-span-1"
						:data-speed="isMobile ? 'clamp(1)' : `clamp(1.1${index})`"
					>
						<div class="relative group h-full bg-gray-100" @click="openModal(image.responsiveImage)">
							<DatocmsImage
								class="rounded-xxl h-full aspect-4/3 [&_img]:object-cover cursor-pointer group-hover:lg:brightness-50 lg:brightness-100 brightness-50 transition-all duration-300 ease-lait-ease"
								:data="image.responsiveImage"
							></DatocmsImage>
							<p
								:class="{ '-order-1': item.reverse }"
								class="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-all duration-300 ease-lait-ease lg:opacity-0"
							>
								Se billede
							</p>
						</div>

						<teleport to="body">
							<div
								v-if="isRevealed"
								class="modal-bg bg-[rgba(0,0,0,0.3)] fixed left-0 top-0 w-full h-full flex items-center justify-center z-50"
								@click.self="cancel()"
							>
								<div class="modal relative w-[100vw] p-4 h-[80vh]">
									<button class="absolute right-7 top-6 z-20 font-bold p-4" @click="confirm()">
										<span class="absolute right-2 top-2 w-3 h-[2px] rotate-45 bg-black"></span>
										<span class="absolute right-2 top-2 w-3 h-[2px] -rotate-45 bg-black"></span>
									</button>
									<div class="flex items-center justify-center w-full h-full">
										<DatocmsImage
											v-if="currentImage"
											class="h-full [&_img]:w-auto [&_img]:h-auto [&_img]:object-cover"
											:data="currentImage"
										></DatocmsImage>
									</div>
								</div>
							</div>
						</teleport>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
<script lang="ts" src="./blockRouter.component.ts" />
