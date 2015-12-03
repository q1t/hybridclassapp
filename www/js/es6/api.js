import request from 'superagent'
const host = 'http://localhost:8888'
const API = `${host}/api`
const PrivateAPI = `${host}/api/private`

export default {
  LoginUser (payload) {
    return Public.methods.loginUser(payload)
  },
  RegisterUser (payload) {
    return Public.methods.registerUser(payload)
  },
  UserInfo () {
    return Private.methods.userInfo()
  },
  UserLists (token) {
    return Private.methods.userLists(token)
  },
  GetList (title) {
    return Private.methods.getList(title)
  },
  AddList (payload, t) {
    return Private.methods.newList(payload, t)
  },
  DeleteList (id, t) {
    return Private.methods.deleteList(id, t)
  },
}
let Public = {
  methods: {
    loginUser (data) {
      let params = Object.assign({}, Public.params.loginUser)
      params.send = data
      return api.reqAPI(params)
    },
    registerUser (data) {
      let params = Object.assign({}, Public.params.registerUser)
      params.send = data
      return api.reqAPI(params)
    }
  },
  params: {
    loginUser: {
      method: 'POST',
      path: '/login',
      send: {}
    },
    registerUser: {
      method: 'POST',
      path: '/register',
      send: {}
    }
  }
}

let Private = {
  methods: {
    userInfo (t) {
      return api.reqPrivateAPI(Private.params.userInfo, t)
    },
    userLists (t) {
      return api.reqPrivateAPI(Private.params.userLists, t)
    },
    getList (title, t) {
      let params = Object.assign({}, Private.params.List)
      params.path = params.path + title
      return api.reqPrivateAPI(params, t)
    },
    deleteList (id, t) {
      let params = Object.assign({}, Private.params.deleteList)
      params.path = params.path + id
      return api.reqPrivateAPI(params, t)
    },
    newList (payload, t) {
      let params = Object.assign({}, Private.params.newList)
      params.send = payload
      return api.reqPrivateAPI(params, t)
    }
  },
  params: {
    userInfo: {
      method: 'GET',
      path: '/user'
    },
    userLists: {
      method: 'GET',
      path: '/user/lists'
    },
    List: {
      method: 'GET',
      path: '/user/lists/'
    },
    newList: {
      method: 'POST',
      path: '/user/lists/new',
      send: {}
    },
    deleteList: {
      method: 'DELETE',
      path: '/user/lists/'
    }
  }
}
const api = {
  authHeader: 'Authorization',
  reqAPI (params) {
    let req = this.req(params)
    .use(this.prefix(API))
    return new Promise((resolve, reject) => {
      req.end((err, resp) => {
        if (err) {
          reject(err)
        }
        resolve(resp)
      })
    })
  },
  reqPrivateAPI (params, t) {
    let req = this.req(params)
    .use(this.prefix(PrivateAPI))
    .use(this.authReq(t))
    return new Promise((resolve, reject) => {
      req.end((err, resp) => {
        if (err) {
          reject(err)
        }
        resolve(resp)
      })
    })
  },
  req (params) {
    let req = request(params.method, params.path)
    .use(this.defaults)
    // FIXME
    if (params.send) {
      req.send(params.send)
    } else if (params.set) {
      req.set(params.set)
    } else if (params.query) {
      req.query(params.query)
    }
    return req
  },
  defaults (req) {
    // default request settings
    return function (req) {
      req.set('Accept', 'application/json')
      return req
    }
  },
  prefix (prefix) {
    // copied from superagent-prefix
    return function (req) {
      if (req.url[0] === '/') {
        req.url = prefix + req.url
      }
      return req
    }
  },
  authReq (token) {
    return function (req) {
      let header = api.authHeader
      return req.set(`${header}`, `Bearer ${token}`)
    }
  }
}
