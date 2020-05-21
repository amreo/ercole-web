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

import axios from "axios";

// returns user informations (works only if logged)
export default {
  getUserInformations,
  login
};

function getUserInformations(cfg) {
  const config = {
    url: "/whoami",
    method: "GET"
  };

  return axios
    .create(cfg)
    .request(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

function login(cfg, user, password) {
  const config = {
    url: "/user/login",
    method: "POST",
    data: {
      Username: user,
      Password: password
    }
  };

  return axios
    .create(cfg)
    .request(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}