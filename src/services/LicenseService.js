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

import axios from 'axios';

// returns all declared licenses from network
function getLicenses() {
	const config = {
		url: '/licenses',
		method: 'GET',
		params: {
			full: false
		}
	};

	return axios
		.request(config)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return Promise.reject(err);
		});
}

// returns all computed licenses from network
function getComputedLicenses() {
	const config = {
		url: '/getalllicenses?location=*',
		method: 'GET'
	};

	return axios
		.request(config)
		.then(res => {
			const licenses = res.data;
			return licenses;
		})
		.catch(err => {
			return Promise.reject(err);
		});
}

// merge the two flows
function mergeLicenses() {
	return getLicenses();
}

function saveLicenses(licenses) {
	const config = {
		url: '/licenses',
		method: 'PUT',
		data: licenses
	};

	return axios
		.request(config)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return Promise.reject(err);
		});
}

// returns all hosts using a license
function getHostUsingLicense(lc) {
	const config = {
		url: '/getallhostusinglicense',
		method: 'GET',
		params: {
			license: lc
		}
	};

	return axios
		.request(config)
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return Promise.reject(err);
		});
}

export default {
	saveLicenses,
	mergeLicenses,
	getHostUsingLicense
};
