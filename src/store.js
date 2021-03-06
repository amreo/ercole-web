// Copyright (c) 2019 Sorint.lab S.p.A.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import Vue from 'vue';
import Vuex from 'vuex';
import AlertService from '@/services/AlertService.js';

import dashboard from '@/components/dashboard/store';

Vue.use(Vuex);

export default new Vuex.Store({
	// eslint-disable-next-line
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		dashboard
	},
	state: {
		sidebarVisible: true,
		notifications: [],
		totalNotifications: 0
	},
	getters: {
		sidebarVisible: state => {
			return state.sidebarVisible;
		},
		notifications: state => {
			return state.notifications;
		},
		totalNotifications: state => {
			return state.totalNotifications;
		}
	},
	mutations: {
		toggleSidebar: state => {
			state.sidebarVisible = !state.sidebarVisible;
		},
		setNotifications: (state, payload) => {
			state.notifications = payload.notifications;
			state.totalNotifications = payload.total;
		}
	},
	actions: {
		loadNotifications({ commit }) {
			AlertService.getNewAlerts().then(res => {
				commit('setNotifications', {
					notifications: res._embedded.alerts,
					total: res.page.totalElements
				});
			}).catch(() => {
				this.$noty.error('Unable retrieve alerts');
			});
		}
	}
});
