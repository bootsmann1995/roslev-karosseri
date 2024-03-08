<template>
	<div>
		<div class="container">
			<div class="container-row pt-[100px] lg:pt-[180px]">
				<h1 :data-speed="isMobile === true ? 'clamp(1.0)' : `clamp(1)`" class="col-span-12 text-h2 mb-7">
					{{ data?.page?.overskrift }}
				</h1>
			</div>
			<div class="container-row mb-8 lg:mb-12">
				<div class="col-span-16 lg:col-span-8">
					<h2 class="text-t2 mb-4">Info</h2>
					<p class="flex items-center mb-1">
						<span class="font-bold">Adresse: </span>
						<span class="ml-1"> {{ data?.company?.address }}</span>
					</p>
					<p class="flex items-center mb-1">
						<span class="font-bold">Email: </span>
						<span class="ml-1"> {{ data?.company?.email }}</span>
					</p>
					<p class="flex items-center mb-1">
						<span class="font-bold">Tel: </span>
						<span class="ml-1"> {{ data?.company?.phone }}</span>
					</p>
					<p class="flex items-center mb-1">
						<span class="font-bold">Cvr: </span>
						<span class="ml-1"> {{ data?.company?.companyNumber }}</span>
					</p>
				</div>
				<NuxtLink
					:to="data.page?.googleMapsLink"
					target="_blank"
					:data-speed="isMobile === true ? 'clamp(1.0)' : `clamp(1.2)`"
					class="col-span-16 max-lg:mt-5 lg:col-span-8 flex items-center justify-center relative overflow-hidden rounded group"
				>
					<p
						class="absolute text-white z-20 opacity-0 group-hover:opacity-100 transition-all ease-lait-ease duration-200"
					>
						Vis vej
					</p>
					<div
						class="opacity-0 group-hover:opacity-80 bg-black absolute top-0 left-0 w-full h-full z-10 transition-all ease-lait-ease duration-200"
					></div>
					<DatocmsImage :data="data?.page?.kort?.responsiveImage" />
				</NuxtLink>
			</div>
			<div class="container-row mb-8 lg:mb-12" :data-speed="isMobile === true ? 'clamp(1.0)' : `clamp(1.1)`">
				<h2 class="col-span-16 text-t1 mb-8">Mød Teamet</h2>
				<div class="col-span-16 grid grid-cols-1 lg:grid-cols-3 gap-3 gap-y-4">
					<div v-for="person in data?.page?.contactPersons" :key="person.name">
						<DatocmsImage class="rounded-tl-xl rounded-tr-xl" :data="person.avatar?.responsiveImage" />
						<h3 class="text-t3 my-3 mb-1">{{ person.name }}</h3>
						<p class="mb-1">{{ person.jobTitle }}</p>
						<p>{{ person.jobArea }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./index.page.ts" />
