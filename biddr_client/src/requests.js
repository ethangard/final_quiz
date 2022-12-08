const baseURL = `http://127.0.0.1:3000/api/v1`

export const Auction = {
  async index() {
    const req = await fetch(`${baseURL}/auctions`)
    const data = await req.json()
    return data
  },
  // async create(params) {
  //   const req = await fetch(`${baseURL}/auctions`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(params),
  //   })
  //   const data = await req.json()
  //   return data
  // },
  create(params) {
    return fetch(`${baseURL}/auctions`, {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },
  show(id) {
    return fetch(`${baseURL}/auctions/${id}`).then((res) => res.json())
  },
}

/* Bids request page */

export const Bid = {
  async index() {
    const req = await fetch(`${baseURL}/bids`)
    const data = await req.json()
    return data
  },
  async create(params) {
    const req = await fetch(`${baseURL}/bids`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    const data = await req.json()
    return data
  },
}

/* Users and Sessions Requests */

export const Session = {
  create(params) {
    return fetch(`${baseURL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then((res) => res.json())
  },
  destroy() {
    return fetch(`${baseURL}/session`, {
      method: 'DELETE',
      credentials: 'include',
    }).then((res) => res.json())
  },
}

export const User = {
  current() {
    return fetch(`${baseURL}/users/current`, {
      credentials: 'include',
    }).then((res) => res.json())
  },
  create(params) {
    return fetch(`${baseURL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params }),
    }).then((res) => res.json())
  },
}
