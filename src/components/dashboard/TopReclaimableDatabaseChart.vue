<!--
Copyright (c) 2019 Sorint.lab S.p.A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

<template>
	<div>
		<h4>Top reclaimable database storage (Gb)</h4>
		<PieChart :height="300" :chart-data="data" v-if="widget" :display-legend="false"></PieChart>
		<vue-simple-spinner v-if="spinner" size="big" message="Loading..."></vue-simple-spinner>
		<b-alert :show="alert" variant="danger">
			Unable to load file.
		</b-alert>
	</div>
</template>

<script>
export default {
	computed: {
		data() {
			const data = this.$store.getters['dashboard/topReclaimableDatabaseChart/data'];
			return JSON.parse(JSON.stringify(data));
		},
		spinner() {
			return this.$store.getters['dashboard/topReclaimableDatabaseChart/spinner'];
		},
		widget() {
			return this.$store.getters['dashboard/topReclaimableDatabaseChart/widget'];
		},
		alert() {
			return this.$store.getters['dashboard/topReclaimableDatabaseChart/alert'];
		}
	}
};
</script>

<style scoped>
</style>
