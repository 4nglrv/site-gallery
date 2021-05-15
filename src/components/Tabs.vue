<template>
	<div class="tabs" style="width: 100%">
		<v-tabs
			right
			grow
			v-model="tab"
		>
		<v-tab
			v-for="n in 4"
			:key="n"
		>
			{{ 'Категория ' + n }}
		</v-tab>

		<v-tab-item
			v-for="n in 4"
			:key="n"
		>
			<v-container fluid>
				<v-row>
					<v-col
						v-for="image in getImages"
						:key="image.id"
						cols="12"
						md="4"
						class="image-container"
					>
						<v-img
							:lazy-src="'https://picsum.photos/id/' + image.id + '/300/300'"
							:src="image.download_url" 
							:alt="image.title"
							aspect-ratio="1"
						>
							<template v-slot:placeholder>
								<v-row
								class="fill-height ma-0"
								align="center"
								justify="center"
								>
								<v-progress-circular
									indeterminate
									color="grey lighten-5"
								></v-progress-circular>
								</v-row>
							</template>
							<v-btn
								class="custom-btn"
								:to="'/image/' + image.id"
							>
								Подробнее
							</v-btn>
						</v-img>
					</v-col>
				</v-row>
			</v-container>
		</v-tab-item>
		</v-tabs>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
      return {
        tab: 0
      }
    },
	computed: {
		...mapGetters(['getPageImages']),
		getImages() {
			return this.getPageImages(this.tab)
		}
	}
}
</script>
<style scoped>
	.image-container {
		position: relative;
	}
	.custom-btn {
		position: absolute;
		width: 100%;
		z-index: 1;
		color: white;
		margin-top: auto;
		bottom: 0;
		border-radius: 0;
		opacity: 0;
		transition: .22s ease-in-out;
	}
	.image-container:hover .custom-btn {
		opacity: 80%;
	}
</style>