export default {
	actions: {
		async fetchPosts({commit}) {
			const res = await fetch(
				"https://picsum.photos/v2/list?limit=24"
			)
			const images = await res.json()
			commit('updateImages', images)
		}
	},
	mutations: {
		updateImages(state, images) {
			setTimeout(() => {
				state.loading = false
			}, 500)
			state.images = images
		}
	},
	state: {
		loading: true,
		images: []
	},
	getters: {
		getPageImages: state => id => {
			return state.images.slice(id * 6, (id * 6) + 6)
		},
		allImages(state) {
			return state.images
		},
		getImageById: state => id => {
			let imageObj
			state.images.forEach(image => {
				if (image.id === id) {
					imageObj = image
				}
			})
			return imageObj
		},
		isLoading(state) {
			return state.loading
		}
	}
}