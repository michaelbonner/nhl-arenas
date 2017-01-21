<template>
	<gmap-map
	:center="center"
	:zoom="7"
	>
	<gmap-marker
	v-for="m in markers"
	:position="m.position"
	:clickable="true"
	:draggable="true"
	@click="center=m.position"
	></gmap-marker>
	</gmap-map>
</template>

<script>
	import * as VueGoogleMaps from 'vue2-google-maps';
	import Vue from 'vue';

	Vue.use(VueGoogleMaps, {
		load: {
			key: 'AIzaSyAYGe5aS07NFhhITkwac8OQKazamMW3SNU',
			v: '3',
		}
	});

	export default {
		data () {
			return {
				center: {lat: 40.6219519, lng: -112.0416754},
				markers: [{
					position: {lat: 40.6219519, lng: -112.0416754}
				}, {
					position: {lat: 41.6219519, lng: -113.0416754}
				}]
			}
		}
	}
</script>
