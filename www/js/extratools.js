/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	console.log('HELLO WORLD FROM ES6');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _superagent = __webpack_require__(2);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _toCamelCase = __webpack_require__(5);
	
	var _toCamelCase2 = _interopRequireDefault(_toCamelCase);
	
	var _queryString = __webpack_require__(8);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// https://esdiscuss.org/topic/es6-iteration-over-object-values
	var entries = regeneratorRuntime.mark(function entries(obj) {
	  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;
	
	  return regeneratorRuntime.wrap(function entries$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _iteratorNormalCompletion = true;
	          _didIteratorError = false;
	          _iteratorError = undefined;
	          _context.prev = 3;
	          _iterator = Object.keys(obj)[Symbol.iterator]();
	
	        case 5:
	          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	            _context.next = 12;
	            break;
	          }
	
	          key = _step.value;
	          _context.next = 9;
	          return [key, obj[key]];
	
	        case 9:
	          _iteratorNormalCompletion = true;
	          _context.next = 5;
	          break;
	
	        case 12:
	          _context.next = 18;
	          break;
	
	        case 14:
	          _context.prev = 14;
	          _context.t0 = _context['catch'](3);
	          _didIteratorError = true;
	          _iteratorError = _context.t0;
	
	        case 18:
	          _context.prev = 18;
	          _context.prev = 19;
	
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	
	        case 21:
	          _context.prev = 21;
	
	          if (!_didIteratorError) {
	            _context.next = 24;
	            break;
	          }
	
	          throw _iteratorError;
	
	        case 24:
	          return _context.finish(21);
	
	        case 25:
	          return _context.finish(18);
	
	        case 26:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, entries, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});
	var ApiParameters = {
	  imdb: 'i',
	  title: 't',
	  type: 'type', // movie, series, episode
	  year: 'y',
	  plot: 'plot', // short, full
	  return_type: 'r', // json, xml
	  tomatoes: 'tomatoes', // true, false
	  callback: 'callback', // JSONP callback
	  version: 'v' // API version, default 1
	};
	var DefaultParams = {
	  imdb: '',
	  title: '',
	  type: '',
	  year: '',
	  plot: 'short',
	  return_type: 'json',
	  tomatoes: 'true',
	  callback: '',
	  version: '1'
	};
	
	var Omdb = (function () {
	  function Omdb() {
	    var apiurl = arguments.length <= 0 || arguments[0] === undefined ? 'http://www.omdbapi.com/' : arguments[0];
	
	    _classCallCheck(this, Omdb);
	
	    this.apiurl = apiurl;
	  }
	
	  _createClass(Omdb, [{
	    key: 'parseMovie',
	    value: function parseMovie(response) {
	      return new Promise(function (resolve, reject) {
	        resolve(response.map(function (field) {
	          var movie = {};
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;
	
	          try {
	            for (var _iterator2 = entries(JSON.parse(field.text))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var _step2$value = _slicedToArray(_step2.value, 2);
	
	              var prop = _step2$value[0];
	              var value = _step2$value[1];
	
	              movie[(0, _toCamelCase2.default)(prop)] = value;
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }
	
	          return movie;
	        }));
	      });
	    }
	  }, {
	    key: 'newOptions',
	    value: function newOptions(params) {
	      var p = params || DefaultParams;
	
	      var opts = {};
	      for (var param in ApiParameters) {
	        opts[ApiParameters[param]] = p[param] || DefaultParams[param];
	      }
	      return opts;
	    }
	  }, {
	    key: 'get',
	    value: function get(params) {
	      var _this = this;
	
	      return new Promise(function (resolve, reject) {
	        // dirty hack
	        _superagent2.default.get(_this.apiurl + '?' + _queryString2.default.stringify(params)).end(function (err, resp) {
	          if (!err) {
	            resolve(resp);
	          } else {
	            reject(err);
	          }
	        });
	      });
	    }
	  }]);
	
	  return Omdb;
	})();
	
	exports.default = new Omdb();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(3);
	var reduce = __webpack_require__(4);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return obj === Object(obj);
	}
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Force given parser
	 * 
	 * Sets the body parser no matter type.
	 * 
	 * @param {Function}
	 * @api public
	 */
	
	Response.prototype.parse = function(fn){
	  this.parser = fn;
	  return this;
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = this.parser || request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Allow for extension
	 */
	
	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */
	
	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};
	
	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  xhr.open(this.method, this.url, true);
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }
	
	  return new Request(method, url);
	}
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.del = function(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * Expose `request`.
	 */
	
	module.exports = request;


/***/ },
/* 3 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	var toSpace = __webpack_require__(6);
	
	
	/**
	 * Expose `toCamelCase`.
	 */
	
	module.exports = toCamelCase;
	
	
	/**
	 * Convert a `string` to camel case.
	 *
	 * @param {String} string
	 * @return {String}
	 */
	
	
	function toCamelCase (string) {
	  return toSpace(string).replace(/\s(\w)/g, function (matches, letter) {
	    return letter.toUpperCase();
	  });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	var clean = __webpack_require__(7);
	
	
	/**
	 * Expose `toSpaceCase`.
	 */
	
	module.exports = toSpaceCase;
	
	
	/**
	 * Convert a `string` to space case.
	 *
	 * @param {String} string
	 * @return {String}
	 */
	
	
	function toSpaceCase (string) {
	  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
	    return match ? ' ' + match : '';
	  });
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	
	/**
	 * Expose `toNoCase`.
	 */
	
	module.exports = toNoCase;
	
	
	/**
	 * Test whether a string is camel-case.
	 */
	
	var hasSpace = /\s/;
	var hasCamel = /[a-z][A-Z]/;
	var hasSeparator = /[\W_]/;
	
	
	/**
	 * Remove any starting case from a `string`, like camel or snake, but keep
	 * spaces and punctuation that may be important otherwise.
	 *
	 * @param {String} string
	 * @return {String}
	 */
	
	function toNoCase (string) {
	  if (hasSpace.test(string)) return string.toLowerCase();
	
	  if (hasSeparator.test(string)) string = unseparate(string);
	  if (hasCamel.test(string)) string = uncamelize(string);
	  return string.toLowerCase();
	}
	
	
	/**
	 * Separator splitter.
	 */
	
	var separatorSplitter = /[\W_]+(.|$)/g;
	
	
	/**
	 * Un-separate a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */
	
	function unseparate (string) {
	  return string.replace(separatorSplitter, function (m, next) {
	    return next ? ' ' + next : '';
	  });
	}
	
	
	/**
	 * Camelcase splitter.
	 */
	
	var camelSplitter = /(.)([A-Z]+)/g;
	
	
	/**
	 * Un-camelcase a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */
	
	function uncamelize (string) {
	  return string.replace(camelSplitter, function (m, previous, uppers) {
	    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
	  });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(9);
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return {};
		}
	
		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
	
			return ret;
		}, {});
	};
	
	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return key;
			}
	
			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}
	
			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16);
		});
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _superagent = __webpack_require__(2);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var host = 'http://localhost:8888';
	var API = host + '/api';
	var PrivateAPI = host + '/api/private';
	
	exports.default = {
	  LoginUser: function LoginUser(payload) {
	    return Public.methods.loginUser(payload);
	  },
	  RegisterUser: function RegisterUser(payload) {
	    return Public.methods.registerUser(payload);
	  },
	  UserInfo: function UserInfo() {
	    return Private.methods.userInfo();
	  },
	  UserLists: function UserLists(token) {
	    return Private.methods.userLists(token);
	  },
	  GetList: function GetList(title) {
	    return Private.methods.getList(title);
	  },
	  AddList: function AddList(payload, t) {
	    return Private.methods.newList(payload, t);
	  },
	  DeleteList: function DeleteList(id, t) {
	    return Private.methods.deleteList(id, t);
	  }
	};
	
	var Public = {
	  methods: {
	    loginUser: function loginUser(data) {
	      var params = Object.assign({}, Public.params.loginUser);
	      params.send = data;
	      return api.reqAPI(params);
	    },
	    registerUser: function registerUser(data) {
	      var params = Object.assign({}, Public.params.registerUser);
	      params.send = data;
	      return api.reqAPI(params);
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
	};
	
	var Private = {
	  methods: {
	    userInfo: function userInfo(t) {
	      return api.reqPrivateAPI(Private.params.userInfo, t);
	    },
	    userLists: function userLists(t) {
	      return api.reqPrivateAPI(Private.params.userLists, t);
	    },
	    getList: function getList(title, t) {
	      var params = Object.assign({}, Private.params.List);
	      params.path = params.path + title;
	      return api.reqPrivateAPI(params, t);
	    },
	    deleteList: function deleteList(id, t) {
	      var params = Object.assign({}, Private.params.deleteList);
	      params.path = params.path + id;
	      return api.reqPrivateAPI(params, t);
	    },
	    newList: function newList(payload, t) {
	      var params = Object.assign({}, Private.params.newList);
	      params.send = payload;
	      return api.reqPrivateAPI(params, t);
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
	};
	var api = {
	  authHeader: 'Authorization',
	  reqAPI: function reqAPI(params) {
	    var req = this.req(params).use(this.prefix(API));
	    return new Promise(function (resolve, reject) {
	      req.end(function (err, resp) {
	        if (err) {
	          reject(err);
	        }
	        resolve(resp);
	      });
	    });
	  },
	  reqPrivateAPI: function reqPrivateAPI(params, t) {
	    var req = this.req(params).use(this.prefix(PrivateAPI)).use(this.authReq(t));
	    return new Promise(function (resolve, reject) {
	      req.end(function (err, resp) {
	        if (err) {
	          reject(err);
	        }
	        resolve(resp);
	      });
	    });
	  },
	  req: function req(params) {
	    var req = (0, _superagent2.default)(params.method, params.path).use(this.defaults);
	    // FIXME
	    if (params.send) {
	      req.send(params.send);
	    } else if (params.set) {
	      req.set(params.set);
	    } else if (params.query) {
	      req.query(params.query);
	    }
	    return req;
	  },
	  defaults: function defaults(req) {
	    // default request settings
	    return function (req) {
	      req.set('Accept', 'application/json');
	      return req;
	    };
	  },
	  prefix: function prefix(_prefix) {
	    // copied from superagent-prefix
	    return function (req) {
	      if (req.url[0] === '/') {
	        req.url = _prefix + req.url;
	      }
	      return req;
	    };
	  },
	  authReq: function authReq(token) {
	    return function (req) {
	      var header = api.authHeader;
	      return req.set('' + header, 'Bearer ' + token);
	    };
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _omdb = __webpack_require__(1);
	
	var _omdb2 = _interopRequireDefault(_omdb);
	
	var _api = __webpack_require__(10);
	
	var _api2 = _interopRequireDefault(_api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('starter.controllers', []).controller('SignInCtrl', function ($scope, $state, $localstorage, $ionicPopup) {
	  var showAlert = function showAlert(title, template) {
	    var alertPopup = $ionicPopup.alert({
	      title: title,
	      template: template
	    });
	    alertPopup.then(function (res) {});
	  };
	  $scope.signIn = function (user) {
	    _api2.default.LoginUser(user).catch(function (e) {
	      return console.log('Handle error ' + e);
	    }).then(checkResponse).then(function (t) {
	      $localstorage.set('token', t);
	      $state.go('lists');
	    }, function (_ref) {
	      var error = _ref.error;
	      var errors = _ref.errors;
	
	      if (errors) {
	        var ems = errors.map(function (e) {
	          return '<p> ' + e + ' </p>';
	        });
	        showAlert('Validation Errors', ems);
	      } else if (error) {
	        showAlert('Error', 'Incorrect input or credentials');
	      }
	    });
	  };
	}).controller('RegistCtrl', function ($scope, $state, $localstorage, $ionicPopup) {
	  var showAlert = function showAlert(title, template) {
	    var alertPopup = $ionicPopup.alert({
	      title: title,
	      template: template
	    });
	    alertPopup.then(function (res) {});
	  };
	  $scope.newUser = function (user) {
	    _api2.default.RegisterUser(user).catch(function (e) {
	      return console.log('Handle error ' + e);
	    }).then(checkResponse).then(function (t) {
	      $localstorage.set('token', t);
	      $state.go('lists');
	    }, function (_ref2) {
	      var error = _ref2.error;
	      var errors = _ref2.errors;
	
	      if (errors) {
	        var ems = errors.map(function (e) {
	          return '<p> ' + e + ' </p>';
	        });
	        showAlert('Validation Errors', ems);
	      } else if (error) {
	        showAlert('Error', 'Incorrect input or credentials');
	      }
	    });
	  };
	}).controller('NewListCtrl', function ($scope, $state, $localstorage, $window, User) {
	  $scope.back = function () {
	    $state.go('lists');
	  };
	  $scope.newList = function (list) {
	    if (list || list.length > 1) {
	      _api2.default.AddList(list, $localstorage.get('token', '')).then(function (r) {
	        $state.go('lists');
	      }).catch(function (e) {
	        console.log(e);
	      });
	    }
	  };
	}).controller('ListsCtrl', function ($scope, $state, $window, $ionicPopup, $localstorage, User) {
	  var confirmPopup = function confirmPopup(title, template) {
	    return $ionicPopup.confirm({
	      title: title,
	      template: template
	    });
	  };
	  User.AllLists().then(function (r) {
	    $scope.lists = JSON.parse(r.text);
	    $scope.$apply();
	  });
	  $scope.logout = function () {
	    $localstorage.set('token', '');
	    $state.go('signin');
	  };
	  $scope.shouldShowDelete = false;
	  $scope.listCanSwipe = true;
	  $scope.newList = function () {
	    $state.go('#/lists/new');
	  };
	  $scope.edit = function (list) {
	    console.log(list);
	  };
	  $scope.delete = function (list) {
	    confirmPopup('Delete', 'Are you sure you want to delete list ' + list.title).then(function (res) {
	      if (res) {
	        _api2.default.DeleteList(list.id, $localstorage.get('token', ''));
	        $window.location.reload(true);
	      }
	    });
	  };
	}).controller('ListCtrl', function ($scope, $state, $stateParams, $ionicHistory, User, Movies) {
	  $scope.back = function () {
	    $state.go('lists');
	  };
	  $scope.shouldShowDelete = false;
	  $scope.listCanSwipe = true;
	  Movies.All().then(function (data) {
	    $scope.movies = data;
	    $scope.$apply();
	  });
	  User.List($stateParams.title).then(function (l) {
	    $scope.list = l;
	    $scope.$apply();
	  });
	});
	var checkResponse = function checkResponse(r) {
	  return new Promise(function (resolve, reject) {
	    var _JSON$parse = JSON.parse(r.text);
	
	    var bearer = _JSON$parse.bearer;
	    var errors = _JSON$parse.errors;
	    var error = _JSON$parse.error;
	
	    if (error || errors) {
	      reject({ error: error, errors: errors });
	    }
	    if (bearer && bearer.length) {
	      resolve(bearer);
	    }
	  });
	};
	function hanldeErrors(_ref3) {
	  var error = _ref3.error;
	  var errors = _ref3.errors;
	
	  if (error) incorrectCred(error);
	  if (errors) validationErrors(errors);
	}
	var incorrectCred = function incorrectCred(e) {
	  console.log('Incorrect credentials');
	};
	var validationErrors = function validationErrors(e) {
	  console.log('Validation errors', e);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _api = __webpack_require__(10);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _omdb = __webpack_require__(1);
	
	var _omdb2 = _interopRequireDefault(_omdb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('starter.services', []).factory('Movies', function () {
	  var fake = [{
	    imdb: 'tt2379713',
	    user_rating: 8.7
	  }, {
	    imdb: 'tt2249007',
	    user_rating: 8.7
	  }, {
	    imdb: 'tt3659388',
	    user_rating: 1.0
	  }, {
	    imdb: 'tt0185906',
	    user_rating: 8.7
	  }, {
	    imdb: 'tt0903747',
	    user_rating: 8.7
	  }, {
	    imdb: 'tt0944947',
	    user_rating: 1.0
	  }];
	  var requests = [];
	  fake.forEach(function (um) {
	    requests.push(_omdb2.default.get(_omdb2.default.newOptions({ imdb: um.imdb })));
	  });
	  return {
	    All: function All() {
	      return Promise.all(requests).then(_omdb2.default.parseMovie);
	    }
	  };
	}).factory('$localstorage', ['$window', function ($window) {
	  return {
	    set: function set(key, value) {
	      $window.localStorage[key] = value;
	    },
	    get: function get(key, defaultValue) {
	      return $window.localStorage[key] || defaultValue;
	    },
	    setObject: function setObject(key, value) {
	      $window.localStorage[key] = JSON.stringify(value);
	    },
	    getObject: function getObject(key) {
	      return JSON.parse($window.localStorage[key] || '{}');
	    }
	  };
	}]).factory('User', ['$localstorage', function ($localstorage) {
	  var token = $localstorage.get('token', '');
	  var lists = [];
	  return {
	    AllLists: function AllLists() {
	      return _api2.default.UserLists(token);
	    },
	    NewList: function NewList(list) {
	      return _api2.default.AddList(list, t);
	    },
	    List: function List(title) {
	      return new Promise(function (resolve, reject) {
	        _api2.default.UserLists(token).then(function (r) {
	          var lists = JSON.parse(r.text);
	          lists.forEach(function (l) {
	            if (l.title === title) {
	              resolve(l);
	            }
	          });
	        });
	      });
	    }
	  };
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmNkN2IzOTdjYWY1NTk3YzRkZmYiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2VzNi9tYWluLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9lczYvb21kYi5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3RvLWNhbWVsLWNhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90by1zcGFjZS1jYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdG8tbm8tY2FzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9lczYvYXBpLmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9lczYvY29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2VzNi9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQSxRQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0duQyxLQUFJLE9BQU8sMkJBQUcsU0FBVixPQUFPLENBQWMsR0FBRzt1RkFDaEIsR0FBRzs7Ozs7Ozs7Ozt1QkFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFBdkIsY0FBRzs7a0JBQ0osQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRnRCLE9BQU87RUFJVjtBQUNELEtBQU0sYUFBYSxHQUFHO0FBQ3BCLE9BQUksRUFBRSxHQUFHO0FBQ1QsUUFBSyxFQUFFLEdBQUc7QUFDVixPQUFJLEVBQUUsTUFBTTtBQUNaLE9BQUksRUFBRSxHQUFHO0FBQ1QsT0FBSSxFQUFFLE1BQU07QUFDWixjQUFXLEVBQUUsR0FBRztBQUNoQixXQUFRLEVBQUUsVUFBVTtBQUNwQixXQUFRLEVBQUUsVUFBVTtBQUNwQixVQUFPLEVBQUUsR0FBRztBQUFBLEVBQ2I7QUFDRCxLQUFNLGFBQWEsR0FBRztBQUNwQixPQUFJLEVBQUUsRUFBRTtBQUNSLFFBQUssRUFBRSxFQUFFO0FBQ1QsT0FBSSxFQUFFLEVBQUU7QUFDUixPQUFJLEVBQUUsRUFBRTtBQUNSLE9BQUksRUFBRSxPQUFPO0FBQ2IsY0FBVyxFQUFFLE1BQU07QUFDbkIsV0FBUSxFQUFFLE1BQU07QUFDaEIsV0FBUSxFQUFFLEVBQUU7QUFDWixVQUFPLEVBQUUsR0FBRztFQUNiOztLQUNLLElBQUk7QUFDUixZQURJLElBQUksR0FDeUM7U0FBcEMsTUFBTSx5REFBRyx5QkFBeUI7OzJCQUQzQyxJQUFJOztBQUVOLFNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUNyQjs7Z0JBSEcsSUFBSTs7Z0NBSUksUUFBUSxFQUFFO0FBQ3BCLGNBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGdCQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFLLEVBQUk7QUFDNUIsZUFBSSxLQUFLLEdBQUcsRUFBRTs7Ozs7O0FBQ2QsbUNBQTBCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxtSUFBRTs7O21CQUFqRCxJQUFJO21CQUFFLEtBQUs7O0FBQ25CLG9CQUFLLENBQUMsMkJBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLO2NBQzNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Qsa0JBQU8sS0FBSztVQUNiLENBQUMsQ0FBQztRQUNKLENBQUM7TUFDSDs7O2dDQUNXLE1BQU0sRUFBRTtBQUNsQixXQUFJLENBQUMsR0FBRyxNQUFNLElBQUksYUFBYTs7QUFFL0IsV0FBSSxJQUFJLEdBQUcsRUFBRTtBQUNiLFlBQUssSUFBSSxLQUFLLElBQUksYUFBYSxFQUFFO0FBQy9CLGFBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5RDtBQUNELGNBQU8sSUFBSTtNQUNaOzs7eUJBQ0ksTUFBTSxFQUFFOzs7QUFDWCxjQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSzs7QUFFdEMsOEJBQVEsR0FBRyxDQUFDLE1BQUssTUFBTSxHQUFHLEdBQUcsR0FBRyxzQkFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDcEQsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUksRUFBSztBQUNsQixlQUFJLENBQUMsR0FBRyxFQUFFO0FBQ1Isb0JBQU8sQ0FBQyxJQUFJLENBQUM7WUFDZCxNQUFNO0FBQ0wsbUJBQU0sQ0FBQyxHQUFHLENBQUM7WUFDWjtVQUNGLENBQUM7UUFDSCxDQUFDO01BQ0g7OztVQXBDRyxJQUFJOzs7bUJBc0NLLElBQUksSUFBSSxFQUFFLEM7Ozs7OztBQ3RFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0EsRUFBQyx3Q0FBd0M7QUFDekM7QUFDQSxFQUFDLE9BQU87QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxlQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxVQUFTLCtDQUErQyxFQUFFO0FBQzFELFVBQVMsZ0RBQWdELEVBQUU7QUFDM0QsVUFBUyxnREFBZ0QsRUFBRTtBQUMzRCxVQUFTLDRDQUE0QyxFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUIsaUJBQWlCO0FBQ2xDLGtCQUFpQixzQ0FBc0M7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWM7O0FBRWQsc0NBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsYUFBYTtBQUM5QiwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixhQUFhLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQixhQUFhO0FBQ3ZDLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQixhQUFhLGlCQUFpQjtBQUN4RDtBQUNBLFlBQVcsZUFBZTtBQUMxQixZQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQztBQUMzQztBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7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QUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsZ0JBQUssQ0FBQyxPQUFPLENBQUUsV0FBQyxFQUFJO0FBQ2xCLGlCQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO0FBQ3JCLHNCQUFPLENBQUMsQ0FBQyxDQUFDO2NBQ1g7WUFDRixDQUFDO1VBQ0gsQ0FBQztRQUNILENBQUM7TUFDSDtJQUNGO0VBQ0YsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiZXh0cmF0b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmNkN2IzOTdjYWY1NTk3YzRkZmZcbiAqKi8iLCJpbXBvcnQgJy4vY29udHJvbGxlcnMuanMnXG5pbXBvcnQgJy4vc2VydmljZXMuanMnXG5jb25zb2xlLmxvZygnSEVMTE8gV09STEQgRlJPTSBFUzYnKVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3d3dy9qcy9lczYvbWFpbi5qc1xuICoqLyIsImltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnXG5pbXBvcnQgY2FtZWwgZnJvbSAndG8tY2FtZWwtY2FzZSdcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnXG5cbi8vIGh0dHBzOi8vZXNkaXNjdXNzLm9yZy90b3BpYy9lczYtaXRlcmF0aW9uLW92ZXItb2JqZWN0LXZhbHVlc1xudmFyIGVudHJpZXMgPSBmdW5jdGlvbiogKG9iaikge1xuICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICAgeWllbGQgW2tleSwgb2JqW2tleV1dO1xuICAgfVxufVxuY29uc3QgQXBpUGFyYW1ldGVycyA9IHtcbiAgaW1kYjogJ2knLFxuICB0aXRsZTogJ3QnLFxuICB0eXBlOiAndHlwZScsIC8vIG1vdmllLCBzZXJpZXMsIGVwaXNvZGVcbiAgeWVhcjogJ3knLFxuICBwbG90OiAncGxvdCcsIC8vIHNob3J0LCBmdWxsXG4gIHJldHVybl90eXBlOiAncicsIC8vIGpzb24sIHhtbFxuICB0b21hdG9lczogJ3RvbWF0b2VzJywgLy8gdHJ1ZSwgZmFsc2VcbiAgY2FsbGJhY2s6ICdjYWxsYmFjaycsIC8vIEpTT05QIGNhbGxiYWNrXG4gIHZlcnNpb246ICd2JyAvLyBBUEkgdmVyc2lvbiwgZGVmYXVsdCAxXG59XG5jb25zdCBEZWZhdWx0UGFyYW1zID0ge1xuICBpbWRiOiAnJyxcbiAgdGl0bGU6ICcnLFxuICB0eXBlOiAnJyxcbiAgeWVhcjogJycsXG4gIHBsb3Q6ICdzaG9ydCcsXG4gIHJldHVybl90eXBlOiAnanNvbicsXG4gIHRvbWF0b2VzOiAndHJ1ZScsXG4gIGNhbGxiYWNrOiAnJyxcbiAgdmVyc2lvbjogJzEnXG59XG5jbGFzcyBPbWRiIHtcbiAgY29uc3RydWN0b3IgKGFwaXVybCA9ICdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLycpIHtcbiAgICB0aGlzLmFwaXVybCA9IGFwaXVybFxuICB9XG4gIHBhcnNlTW92aWUgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UubWFwKGZpZWxkID0+IHtcbiAgICAgICAgbGV0IG1vdmllID0ge31cbiAgICAgICAgZm9yIChsZXQgW3Byb3AsIHZhbHVlXSBvZiBlbnRyaWVzKEpTT04ucGFyc2UoZmllbGQudGV4dCkpKSB7XG4gICAgICAgICAgbW92aWVbY2FtZWwocHJvcCldID0gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92aWVcbiAgICAgIH0pKVxuICAgIH0pXG4gIH1cbiAgbmV3T3B0aW9ucyAocGFyYW1zKSB7XG4gICAgbGV0IHAgPSBwYXJhbXMgfHwgRGVmYXVsdFBhcmFtc1xuXG4gICAgdmFyIG9wdHMgPSB7fVxuICAgIGZvciAobGV0IHBhcmFtIGluIEFwaVBhcmFtZXRlcnMpIHtcbiAgICAgIG9wdHNbQXBpUGFyYW1ldGVyc1twYXJhbV1dID0gcFtwYXJhbV0gfHwgRGVmYXVsdFBhcmFtc1twYXJhbV1cbiAgICB9XG4gICAgcmV0dXJuIG9wdHNcbiAgfVxuICBnZXQgKHBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBkaXJ0eSBoYWNrXG4gICAgICByZXF1ZXN0LmdldCh0aGlzLmFwaXVybCArICc/JyArIHFzLnN0cmluZ2lmeShwYXJhbXMpKVxuICAgICAgLmVuZCgoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IE9tZGIoKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi93d3cvanMvZXM2L29tZGIuanNcbiAqKi8iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgncmVkdWNlJyk7XG5cbi8qKlxuICogUm9vdCByZWZlcmVuY2UgZm9yIGlmcmFtZXMuXG4gKi9cblxudmFyIHJvb3Q7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gQnJvd3NlciB3aW5kb3dcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IC8vIFdlYiBXb3JrZXJcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgeyAvLyBPdGhlciBlbnZpcm9ubWVudHNcbiAgcm9vdCA9IHRoaXM7XG59XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBub29wKCl7fTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBUT0RPOiBmdXR1cmUgcHJvb2YsIG1vdmUgdG8gY29tcG9lbnQgbGFuZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0hvc3Qob2JqKSB7XG4gIHZhciBzdHIgPSB7fS50b1N0cmluZy5jYWxsKG9iaik7XG5cbiAgc3dpdGNoIChzdHIpIHtcbiAgICBjYXNlICdbb2JqZWN0IEZpbGVdJzpcbiAgICBjYXNlICdbb2JqZWN0IEJsb2JdJzpcbiAgICBjYXNlICdbb2JqZWN0IEZvcm1EYXRhXSc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgYWRkZWQgdG8gc3VwcG9ydCBJRS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHRyaW0gPSAnJy50cmltXG4gID8gZnVuY3Rpb24ocykgeyByZXR1cm4gcy50cmltKCk7IH1cbiAgOiBmdW5jdGlvbihzKSB7IHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSB0aGUgZ2l2ZW4gYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG9iaikge1xuICBpZiAoIWlzT2JqZWN0KG9iaikpIHJldHVybiBvYmo7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG51bGwgIT0gb2JqW2tleV0pIHtcbiAgICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICAgICAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuIHJlcXVlc3Quc2VyaWFsaXplT2JqZWN0ID0gc2VyaWFsaXplO1xuXG4gLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFydHM7XG4gIHZhciBwYWlyO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ2FwcGxpY2F0aW9uL3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAnZm9ybS1kYXRhJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbi8qKlxuICogRGVmYXVsdCBzZXJpYWxpemF0aW9uIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5zZXJpYWxpemVbJ2FwcGxpY2F0aW9uL3htbCddID0gZnVuY3Rpb24ob2JqKXtcbiAqICAgICAgIHJldHVybiAnZ2VuZXJhdGVkIHhtbCBoZXJlJztcbiAqICAgICB9O1xuICpcbiAqL1xuXG4gcmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnN0cmluZ2lmeVxuIH07XG5cbiAvKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgbGluZXMucG9wKCk7IC8vIHRyYWlsaW5nIENSTEZcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHlwZShzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJhbXMoc3RyKXtcbiAgcmV0dXJuIHJlZHVjZShzdHIuc3BsaXQoLyAqOyAqLyksIGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLylcbiAgICAgICwga2V5ID0gcGFydHMuc2hpZnQoKVxuICAgICAgLCB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZXEgPSByZXE7XG4gIHRoaXMueGhyID0gdGhpcy5yZXEueGhyO1xuICAvLyByZXNwb25zZVRleHQgaXMgYWNjZXNzaWJsZSBvbmx5IGlmIHJlc3BvbnNlVHlwZSBpcyAnJyBvciAndGV4dCcgYW5kIG9uIG9sZGVyIGJyb3dzZXJzXG4gIHRoaXMudGV4dCA9ICgodGhpcy5yZXEubWV0aG9kICE9J0hFQUQnICYmICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgID8gdGhpcy54aHIucmVzcG9uc2VUZXh0XG4gICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIHRoaXMuc2V0U3RhdHVzUHJvcGVydGllcyh0aGlzLnhoci5zdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuc2V0SGVhZGVyUHJvcGVydGllcyh0aGlzLmhlYWRlcik7XG4gIHRoaXMuYm9keSA9IHRoaXMucmVxLm1ldGhvZCAhPSAnSEVBRCdcbiAgICA/IHRoaXMucGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnNldEhlYWRlclByb3BlcnRpZXMgPSBmdW5jdGlvbihoZWFkZXIpe1xuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB0eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgdmFyIG9iaiA9IHBhcmFtcyhjdCk7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHRoaXNba2V5XSA9IG9ialtrZXldO1xufTtcblxuLyoqXG4gKiBGb3JjZSBnaXZlbiBwYXJzZXJcbiAqIFxuICogU2V0cyB0aGUgYm9keSBwYXJzZXIgbm8gbWF0dGVyIHR5cGUuXG4gKiBcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGZuKXtcbiAgdGhpcy5wYXJzZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBib2R5IGBzdHJgLlxuICpcbiAqIFVzZWQgZm9yIGF1dG8tcGFyc2luZyBvZiBib2RpZXMuIFBhcnNlcnNcbiAqIGFyZSBkZWZpbmVkIG9uIHRoZSBgc3VwZXJhZ2VudC5wYXJzZWAgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2UucHJvdG90eXBlLnBhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cil7XG4gIHZhciBwYXJzZSA9IHRoaXMucGFyc2VyIHx8IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDtcblxuICAvLyBzdGF0dXMgLyBjbGFzc1xuICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXNUeXBlID0gdHlwZTtcblxuICAvLyBiYXNpY3NcbiAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICB0aGlzLm9rID0gMiA9PSB0eXBlO1xuICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICB0aGlzLnNlcnZlckVycm9yID0gNSA9PSB0eXBlO1xuICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgPyB0aGlzLnRvRXJyb3IoKVxuICAgIDogZmFsc2U7XG5cbiAgLy8gc3VnYXJcbiAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gIHRoaXMubm9Db250ZW50ID0gMjA0ID09IHN0YXR1cztcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEFjY2VwdGFibGUgPSA0MDYgPT0gc3RhdHVzO1xuICB0aGlzLm5vdEZvdW5kID0gNDA0ID09IHN0YXR1cztcbiAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307XG4gIHRoaXMuX2hlYWRlciA9IHt9O1xuICB0aGlzLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGVyciA9IG5ldyBFcnJvcignUGFyc2VyIGlzIHVuYWJsZSB0byBwYXJzZSB0aGUgcmVzcG9uc2UnKTtcbiAgICAgIGVyci5wYXJzZSA9IHRydWU7XG4gICAgICBlcnIub3JpZ2luYWwgPSBlO1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ3Jlc3BvbnNlJywgcmVzKTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgcmV0dXJuIHNlbGYuY2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNldCB0aW1lb3V0IHRvIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uKG1zKXtcbiAgdGhpcy5fdGltZW91dCA9IG1zO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fdGltZW91dCA9IDA7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuYWJvcnRlZCkgcmV0dXJuO1xuICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICB0aGlzLnhoci5hYm9ydCgpO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihmaWVsZCwgdmFsKXtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldID0gdmFsO1xuICB0aGlzLmhlYWRlcltmaWVsZF0gPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbihmaWVsZCl7XG4gIGRlbGV0ZSB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG4gIGRlbGV0ZSB0aGlzLmhlYWRlcltmaWVsZF07XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3NcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcyl7XG4gIHZhciBzdHIgPSBidG9hKHVzZXIgKyAnOicgKyBwYXNzKTtcbiAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIHN0cik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4qIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4qXG4qIEV4YW1wbGVzOlxuKlxuKiAgIHJlcXVlc3QuZ2V0KCcvc2hvZXMnKVxuKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbipcbiogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4qIEBhcGkgcHVibGljXG4qL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAgZm9yIFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gKiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIHRoaXMuX2Zvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYGZpbGVuYW1lYC5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2gobmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIGZpbGVuYW1lKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB0aGlzLl9mb3JtRGF0YS5hcHBlbmQoZmllbGQsIGZpbGUsIGZpbGVuYW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgLCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIHF1ZXJ5c3RyaW5nXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbXVsdGlwbGUgZGF0YSBcIndyaXRlc1wiXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3NlYXJjaCcpXG4gKiAgICAgICAgIC5zZW5kKHsgc2VhcmNoOiAncXVlcnknIH0pXG4gKiAgICAgICAgIC5zZW5kKHsgcmFuZ2U6ICcxLi41JyB9KVxuICogICAgICAgICAuc2VuZCh7IG9yZGVyOiAnZGVzYycgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBtYW51YWwganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdqc29uJylcbiAqICAgICAgICAgLnNlbmQoJ3tcIm5hbWVcIjpcInRqXCJ9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICogICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAgKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gICogICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBkYXRhXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgb2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuXG4gIC8vIG1lcmdlXG4gIGlmIChvYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuZ2V0SGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghb2JqIHx8IGlzSG9zdChkYXRhKSkgcmV0dXJuIHRoaXM7XG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJbnZva2UgdGhlIGNhbGxiYWNrIHdpdGggYGVycmAgYW5kIGByZXNgXG4gKiBhbmQgaGFuZGxlIGFyaXR5IGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gcmVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uKGVyciwgcmVzKXtcbiAgdmFyIGZuID0gdGhpcy5fY2FsbGJhY2s7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ09yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnRpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcigndGltZW91dCBvZiAnICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHhociA9IHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICB2YXIgdGltZW91dCA9IHRoaXMuX3RpbWVvdXQ7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIGlmICg0ICE9IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoMCA9PSBzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0KSByZXR1cm4gc2VsZi50aW1lb3V0RXJyb3IoKTtcbiAgICAgIGlmIChzZWxmLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTtcblxuICAvLyBwcm9ncmVzc1xuICB2YXIgaGFuZGxlUHJvZ3Jlc3MgPSBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS50b3RhbCA+IDApIHtcbiAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICB9XG4gICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICB9O1xuICBpZiAodGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKHhoci51cGxvYWQgJiYgdGhpcy5oYXNMaXN0ZW5lcnMoJ3Byb2dyZXNzJykpIHtcbiAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICB9XG5cbiAgLy8gdGltZW91dFxuICBpZiAodGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYudGltZWRvdXQgPSB0cnVlO1xuICAgICAgc2VsZi5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSByZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdChxdWVyeSk7XG4gICAgdGhpcy51cmwgKz0gfnRoaXMudXJsLmluZGV4T2YoJz8nKVxuICAgICAgPyAnJicgKyBxdWVyeVxuICAgICAgOiAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIC8vIGluaXRpYXRlIHJlcXVlc3RcbiAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCdHRVQnICE9IHRoaXMubWV0aG9kICYmICdIRUFEJyAhPSB0aGlzLm1ldGhvZCAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgZGF0YSAmJiAhaXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5nZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIHZhciBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG4gICAgaWYgKHNlcmlhbGl6ZSkgZGF0YSA9IHNlcmlhbGl6ZShkYXRhKTtcbiAgfVxuXG4gIC8vIHNldCBoZWFkZXIgZmllbGRzXG4gIGZvciAodmFyIGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKG51bGwgPT0gdGhpcy5oZWFkZXJbZmllbGRdKSBjb250aW51ZTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG4gIHhoci5zZW5kKGRhdGEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmF1eCBwcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcbiAgcmV0dXJuIHRoaXMuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgZXJyID8gcmVqZWN0KGVycikgOiBmdWxmaWxsKHJlcyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdGAuXG4gKi9cblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuLyoqXG4gKiBJc3N1ZSBhIHJlcXVlc3Q6XG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgcmVxdWVzdCgnR0VUJywgJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycpLmVuZChjYWxsYmFjaylcbiAqICAgIHJlcXVlc3QoJy91c2VycycsIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB1cmwgb3IgY2FsbGJhY2tcbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIHVybCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbn1cblxuLyoqXG4gKiBHRVQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gZGF0YSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBkYXRhIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbil7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmRlbCA9IGZ1bmN0aW9uKHVybCwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBkYXRhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgZm4gPSBkYXRhLCBkYXRhID0gbnVsbDtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSBmbiA9IGRhdGEsIGRhdGEgPSBudWxsO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IGRhdGEgb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pe1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUFVUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIGZuID0gZGF0YSwgZGF0YSA9IG51bGw7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVlc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdXBlcmFnZW50L2xpYi9jbGllbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuLyoqXG4gKiBSZWR1Y2UgYGFycmAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxcbiAqXG4gKiBUT0RPOiBjb21iYXRpYmxlIGVycm9yIGhhbmRsaW5nP1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBmbiwgaW5pdGlhbCl7ICBcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgY3VyciA9IGFyZ3VtZW50cy5sZW5ndGggPT0gM1xuICAgID8gaW5pdGlhbFxuICAgIDogYXJyW2lkeCsrXTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgY3VyciA9IGZuLmNhbGwobnVsbCwgY3VyciwgYXJyW2lkeF0sICsraWR4LCBhcnIpO1xuICB9XG4gIFxuICByZXR1cm4gY3Vycjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVkdWNlLWNvbXBvbmVudC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxudmFyIHRvU3BhY2UgPSByZXF1aXJlKCd0by1zcGFjZS1jYXNlJyk7XG5cblxuLyoqXG4gKiBFeHBvc2UgYHRvQ2FtZWxDYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQ2FtZWxDYXNlO1xuXG5cbi8qKlxuICogQ29udmVydCBhIGBzdHJpbmdgIHRvIGNhbWVsIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gdG9DYW1lbENhc2UgKHN0cmluZykge1xuICByZXR1cm4gdG9TcGFjZShzdHJpbmcpLnJlcGxhY2UoL1xccyhcXHcpL2csIGZ1bmN0aW9uIChtYXRjaGVzLCBsZXR0ZXIpIHtcbiAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RvLWNhbWVsLWNhc2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbnZhciBjbGVhbiA9IHJlcXVpcmUoJ3RvLW5vLWNhc2UnKTtcblxuXG4vKipcbiAqIEV4cG9zZSBgdG9TcGFjZUNhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9TcGFjZUNhc2U7XG5cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHN0cmluZ2AgdG8gc3BhY2UgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiB0b1NwYWNlQ2FzZSAoc3RyaW5nKSB7XG4gIHJldHVybiBjbGVhbihzdHJpbmcpLnJlcGxhY2UoL1tcXFdfXSsoLnwkKS9nLCBmdW5jdGlvbiAobWF0Y2hlcywgbWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2ggPyAnICcgKyBtYXRjaCA6ICcnO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90by1zcGFjZS1jYXNlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG4vKipcbiAqIEV4cG9zZSBgdG9Ob0Nhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9Ob0Nhc2U7XG5cblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYSBzdHJpbmcgaXMgY2FtZWwtY2FzZS5cbiAqL1xuXG52YXIgaGFzU3BhY2UgPSAvXFxzLztcbnZhciBoYXNDYW1lbCA9IC9bYS16XVtBLVpdLztcbnZhciBoYXNTZXBhcmF0b3IgPSAvW1xcV19dLztcblxuXG4vKipcbiAqIFJlbW92ZSBhbnkgc3RhcnRpbmcgY2FzZSBmcm9tIGEgYHN0cmluZ2AsIGxpa2UgY2FtZWwgb3Igc25ha2UsIGJ1dCBrZWVwXG4gKiBzcGFjZXMgYW5kIHB1bmN0dWF0aW9uIHRoYXQgbWF5IGJlIGltcG9ydGFudCBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRvTm9DYXNlIChzdHJpbmcpIHtcbiAgaWYgKGhhc1NwYWNlLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChoYXNTZXBhcmF0b3IudGVzdChzdHJpbmcpKSBzdHJpbmcgPSB1bnNlcGFyYXRlKHN0cmluZyk7XG4gIGlmIChoYXNDYW1lbC50ZXN0KHN0cmluZykpIHN0cmluZyA9IHVuY2FtZWxpemUoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xufVxuXG5cbi8qKlxuICogU2VwYXJhdG9yIHNwbGl0dGVyLlxuICovXG5cbnZhciBzZXBhcmF0b3JTcGxpdHRlciA9IC9bXFxXX10rKC58JCkvZztcblxuXG4vKipcbiAqIFVuLXNlcGFyYXRlIGEgYHN0cmluZ2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHVuc2VwYXJhdGUgKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uoc2VwYXJhdG9yU3BsaXR0ZXIsIGZ1bmN0aW9uIChtLCBuZXh0KSB7XG4gICAgcmV0dXJuIG5leHQgPyAnICcgKyBuZXh0IDogJyc7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogQ2FtZWxjYXNlIHNwbGl0dGVyLlxuICovXG5cbnZhciBjYW1lbFNwbGl0dGVyID0gLyguKShbQS1aXSspL2c7XG5cblxuLyoqXG4gKiBVbi1jYW1lbGNhc2UgYSBgc3RyaW5nYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdW5jYW1lbGl6ZSAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShjYW1lbFNwbGl0dGVyLCBmdW5jdGlvbiAobSwgcHJldmlvdXMsIHVwcGVycykge1xuICAgIHJldHVybiBwcmV2aW91cyArICcgJyArIHVwcGVycy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcnKS5qb2luKCcgJyk7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RvLW5vLWNhc2UvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcblxuZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCc/JylbMV0gfHwgJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRyZXR1cm4gc3RyLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uIChyZXQsIHBhcmFtKSB7XG5cdFx0dmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcblx0XHQvLyBGaXJlZm94IChwcmUgNDApIGRlY29kZXMgYCUzRGAgdG8gYD1gXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvcHVsbC8zN1xuXHRcdHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkO1xuXG5cdFx0a2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuXHRcdGlmICghcmV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldFtrZXldID0gdmFsO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcblx0XHRcdHJldFtrZXldLnB1c2godmFsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldDtcblx0fSwge30pO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqKSB7XG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWwgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0cmV0dXJuIHZhbC5zb3J0KCkubWFwKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdHJldHVybiBzdHJpY3RVcmlFbmNvZGUoa2V5KSArICc9JyArIHN0cmljdFVyaUVuY29kZSh2YWwyKTtcblx0XHRcdH0pLmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc3RyaWN0VXJpRW5jb2RlKGtleSkgKyAnPScgKyBzdHJpY3RVcmlFbmNvZGUodmFsKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0fSkuam9pbignJicpIDogJyc7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcXVlcnktc3RyaW5nL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7XG5cdH0pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCdcbmNvbnN0IGhvc3QgPSAnaHR0cDovL2xvY2FsaG9zdDo4ODg4J1xuY29uc3QgQVBJID0gYCR7aG9zdH0vYXBpYFxuY29uc3QgUHJpdmF0ZUFQSSA9IGAke2hvc3R9L2FwaS9wcml2YXRlYFxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExvZ2luVXNlciAocGF5bG9hZCkge1xuICAgIHJldHVybiBQdWJsaWMubWV0aG9kcy5sb2dpblVzZXIocGF5bG9hZClcbiAgfSxcbiAgUmVnaXN0ZXJVc2VyIChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIFB1YmxpYy5tZXRob2RzLnJlZ2lzdGVyVXNlcihwYXlsb2FkKVxuICB9LFxuICBVc2VySW5mbyAoKSB7XG4gICAgcmV0dXJuIFByaXZhdGUubWV0aG9kcy51c2VySW5mbygpXG4gIH0sXG4gIFVzZXJMaXN0cyAodG9rZW4pIHtcbiAgICByZXR1cm4gUHJpdmF0ZS5tZXRob2RzLnVzZXJMaXN0cyh0b2tlbilcbiAgfSxcbiAgR2V0TGlzdCAodGl0bGUpIHtcbiAgICByZXR1cm4gUHJpdmF0ZS5tZXRob2RzLmdldExpc3QodGl0bGUpXG4gIH0sXG4gIEFkZExpc3QgKHBheWxvYWQsIHQpIHtcbiAgICByZXR1cm4gUHJpdmF0ZS5tZXRob2RzLm5ld0xpc3QocGF5bG9hZCwgdClcbiAgfSxcbiAgRGVsZXRlTGlzdCAoaWQsIHQpIHtcbiAgICByZXR1cm4gUHJpdmF0ZS5tZXRob2RzLmRlbGV0ZUxpc3QoaWQsIHQpXG4gIH0sXG59XG5sZXQgUHVibGljID0ge1xuICBtZXRob2RzOiB7XG4gICAgbG9naW5Vc2VyIChkYXRhKSB7XG4gICAgICBsZXQgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgUHVibGljLnBhcmFtcy5sb2dpblVzZXIpXG4gICAgICBwYXJhbXMuc2VuZCA9IGRhdGFcbiAgICAgIHJldHVybiBhcGkucmVxQVBJKHBhcmFtcylcbiAgICB9LFxuICAgIHJlZ2lzdGVyVXNlciAoZGF0YSkge1xuICAgICAgbGV0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIFB1YmxpYy5wYXJhbXMucmVnaXN0ZXJVc2VyKVxuICAgICAgcGFyYW1zLnNlbmQgPSBkYXRhXG4gICAgICByZXR1cm4gYXBpLnJlcUFQSShwYXJhbXMpXG4gICAgfVxuICB9LFxuICBwYXJhbXM6IHtcbiAgICBsb2dpblVzZXI6IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICBzZW5kOiB7fVxuICAgIH0sXG4gICAgcmVnaXN0ZXJVc2VyOiB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHBhdGg6ICcvcmVnaXN0ZXInLFxuICAgICAgc2VuZDoge31cbiAgICB9XG4gIH1cbn1cblxubGV0IFByaXZhdGUgPSB7XG4gIG1ldGhvZHM6IHtcbiAgICB1c2VySW5mbyAodCkge1xuICAgICAgcmV0dXJuIGFwaS5yZXFQcml2YXRlQVBJKFByaXZhdGUucGFyYW1zLnVzZXJJbmZvLCB0KVxuICAgIH0sXG4gICAgdXNlckxpc3RzICh0KSB7XG4gICAgICByZXR1cm4gYXBpLnJlcVByaXZhdGVBUEkoUHJpdmF0ZS5wYXJhbXMudXNlckxpc3RzLCB0KVxuICAgIH0sXG4gICAgZ2V0TGlzdCAodGl0bGUsIHQpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBQcml2YXRlLnBhcmFtcy5MaXN0KVxuICAgICAgcGFyYW1zLnBhdGggPSBwYXJhbXMucGF0aCArIHRpdGxlXG4gICAgICByZXR1cm4gYXBpLnJlcVByaXZhdGVBUEkocGFyYW1zLCB0KVxuICAgIH0sXG4gICAgZGVsZXRlTGlzdCAoaWQsIHQpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBQcml2YXRlLnBhcmFtcy5kZWxldGVMaXN0KVxuICAgICAgcGFyYW1zLnBhdGggPSBwYXJhbXMucGF0aCArIGlkXG4gICAgICByZXR1cm4gYXBpLnJlcVByaXZhdGVBUEkocGFyYW1zLCB0KVxuICAgIH0sXG4gICAgbmV3TGlzdCAocGF5bG9hZCwgdCkge1xuICAgICAgbGV0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIFByaXZhdGUucGFyYW1zLm5ld0xpc3QpXG4gICAgICBwYXJhbXMuc2VuZCA9IHBheWxvYWRcbiAgICAgIHJldHVybiBhcGkucmVxUHJpdmF0ZUFQSShwYXJhbXMsIHQpXG4gICAgfVxuICB9LFxuICBwYXJhbXM6IHtcbiAgICB1c2VySW5mbzoge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHBhdGg6ICcvdXNlcidcbiAgICB9LFxuICAgIHVzZXJMaXN0czoge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHBhdGg6ICcvdXNlci9saXN0cydcbiAgICB9LFxuICAgIExpc3Q6IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXRoOiAnL3VzZXIvbGlzdHMvJ1xuICAgIH0sXG4gICAgbmV3TGlzdDoge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXRoOiAnL3VzZXIvbGlzdHMvbmV3JyxcbiAgICAgIHNlbmQ6IHt9XG4gICAgfSxcbiAgICBkZWxldGVMaXN0OiB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgcGF0aDogJy91c2VyL2xpc3RzLydcbiAgICB9XG4gIH1cbn1cbmNvbnN0IGFwaSA9IHtcbiAgYXV0aEhlYWRlcjogJ0F1dGhvcml6YXRpb24nLFxuICByZXFBUEkgKHBhcmFtcykge1xuICAgIGxldCByZXEgPSB0aGlzLnJlcShwYXJhbXMpXG4gICAgLnVzZSh0aGlzLnByZWZpeChBUEkpKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXEuZW5kKChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXNwKVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuICByZXFQcml2YXRlQVBJIChwYXJhbXMsIHQpIHtcbiAgICBsZXQgcmVxID0gdGhpcy5yZXEocGFyYW1zKVxuICAgIC51c2UodGhpcy5wcmVmaXgoUHJpdmF0ZUFQSSkpXG4gICAgLnVzZSh0aGlzLmF1dGhSZXEodCkpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcS5lbmQoKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3ApXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG4gIHJlcSAocGFyYW1zKSB7XG4gICAgbGV0IHJlcSA9IHJlcXVlc3QocGFyYW1zLm1ldGhvZCwgcGFyYW1zLnBhdGgpXG4gICAgLnVzZSh0aGlzLmRlZmF1bHRzKVxuICAgIC8vIEZJWE1FXG4gICAgaWYgKHBhcmFtcy5zZW5kKSB7XG4gICAgICByZXEuc2VuZChwYXJhbXMuc2VuZClcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5zZXQpIHtcbiAgICAgIHJlcS5zZXQocGFyYW1zLnNldClcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5xdWVyeSkge1xuICAgICAgcmVxLnF1ZXJ5KHBhcmFtcy5xdWVyeSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcVxuICB9LFxuICBkZWZhdWx0cyAocmVxKSB7XG4gICAgLy8gZGVmYXVsdCByZXF1ZXN0IHNldHRpbmdzXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgIHJlcS5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcbiAgICAgIHJldHVybiByZXFcbiAgICB9XG4gIH0sXG4gIHByZWZpeCAocHJlZml4KSB7XG4gICAgLy8gY29waWVkIGZyb20gc3VwZXJhZ2VudC1wcmVmaXhcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgaWYgKHJlcS51cmxbMF0gPT09ICcvJykge1xuICAgICAgICByZXEudXJsID0gcHJlZml4ICsgcmVxLnVybFxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcVxuICAgIH1cbiAgfSxcbiAgYXV0aFJlcSAodG9rZW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgbGV0IGhlYWRlciA9IGFwaS5hdXRoSGVhZGVyXG4gICAgICByZXR1cm4gcmVxLnNldChgJHtoZWFkZXJ9YCwgYEJlYXJlciAke3Rva2VufWApXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3d3dy9qcy9lczYvYXBpLmpzXG4gKiovIiwiaW1wb3J0IG9tZGIgZnJvbSAnLi9vbWRiLmpzJ1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaS5qcydcblxuYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuY29udHJvbGxlcnMnLCBbXSlcbi5jb250cm9sbGVyKCdTaWduSW5DdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAgJHN0YXRlLCAkbG9jYWxzdG9yYWdlLCAkaW9uaWNQb3B1cCkge1xuICAgbGV0IHNob3dBbGVydCA9IGZ1bmN0aW9uKHRpdGxlLCB0ZW1wbGF0ZSkge1xuICAgICBsZXQgYWxlcnRQb3B1cCA9ICRpb25pY1BvcHVwLmFsZXJ0KHtcbiAgICAgICB0aXRsZSxcbiAgICAgICB0ZW1wbGF0ZSxcbiAgICAgfSlcbiAgICAgYWxlcnRQb3B1cC50aGVuKChyZXMpID0+IHtcbiAgICAgfSlcbiAgfVxuICAkc2NvcGUuc2lnbkluID0gZnVuY3Rpb24odXNlcikge1xuICAgIGFwaS5Mb2dpblVzZXIodXNlcilcbiAgICAuY2F0Y2goIGUgPT4gY29uc29sZS5sb2coYEhhbmRsZSBlcnJvciAke2V9YCkgKVxuICAgIC50aGVuKGNoZWNrUmVzcG9uc2UpXG4gICAgLnRoZW4oIHQgPT4ge1xuICAgICAgJGxvY2Fsc3RvcmFnZS5zZXQoJ3Rva2VuJywgdClcbiAgICAgICRzdGF0ZS5nbygnbGlzdHMnKVxuICAgIH0sXG4gICAgKHtlcnJvciwgZXJyb3JzfSkgPT4ge1xuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBsZXQgZW1zID0gZXJyb3JzLm1hcChlID0+IGA8cD4gJHtlfSA8L3A+YClcbiAgICAgICAgc2hvd0FsZXJ0KCdWYWxpZGF0aW9uIEVycm9ycycsZW1zIClcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IpIHsgXG4gICAgICAgIHNob3dBbGVydCgnRXJyb3InLCAnSW5jb3JyZWN0IGlucHV0IG9yIGNyZWRlbnRpYWxzJyk7XG4gICAgICB9IFxuICAgIH0pXG4gIH07XG59KVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICAkc3RhdGUsICRsb2NhbHN0b3JhZ2UsICRpb25pY1BvcHVwKSB7XG4gICBsZXQgc2hvd0FsZXJ0ID0gZnVuY3Rpb24odGl0bGUsIHRlbXBsYXRlKSB7XG4gICAgIGxldCBhbGVydFBvcHVwID0gJGlvbmljUG9wdXAuYWxlcnQoe1xuICAgICAgIHRpdGxlLFxuICAgICAgIHRlbXBsYXRlLFxuICAgICB9KVxuICAgICBhbGVydFBvcHVwLnRoZW4oKHJlcykgPT4ge1xuICAgICB9KVxuICB9XG4gICRzY29wZS5uZXdVc2VyID0gZnVuY3Rpb24odXNlcikge1xuICAgIGFwaS5SZWdpc3RlclVzZXIodXNlcilcbiAgICAuY2F0Y2goIGUgPT4gY29uc29sZS5sb2coYEhhbmRsZSBlcnJvciAke2V9YCkgKVxuICAgIC50aGVuKGNoZWNrUmVzcG9uc2UpXG4gICAgLnRoZW4oIHQgPT4ge1xuICAgICAgJGxvY2Fsc3RvcmFnZS5zZXQoJ3Rva2VuJywgdClcbiAgICAgICRzdGF0ZS5nbygnbGlzdHMnKVxuICAgIH0sXG4gICAgKHtlcnJvciwgZXJyb3JzfSkgPT4ge1xuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICBsZXQgZW1zID0gZXJyb3JzLm1hcChlID0+IGA8cD4gJHtlfSA8L3A+YClcbiAgICAgICAgc2hvd0FsZXJ0KCdWYWxpZGF0aW9uIEVycm9ycycsZW1zIClcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IpIHsgXG4gICAgICAgIHNob3dBbGVydCgnRXJyb3InLCAnSW5jb3JyZWN0IGlucHV0IG9yIGNyZWRlbnRpYWxzJyk7XG4gICAgICB9IFxuICAgIH0pXG4gIH07XG59KVxuLmNvbnRyb2xsZXIoJ05ld0xpc3RDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRsb2NhbHN0b3JhZ2UsICR3aW5kb3csICBVc2VyKSB7XG4gICRzY29wZS5iYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgJHN0YXRlLmdvKCdsaXN0cycpXG4gIH1cbiAgJHNjb3BlLm5ld0xpc3QgPSBmdW5jdGlvbihsaXN0KSB7XG4gICAgaWYgKGxpc3QgfHwgbGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICBhcGkuQWRkTGlzdChsaXN0LCAkbG9jYWxzdG9yYWdlLmdldCgndG9rZW4nLCAnJykpIFxuICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAkc3RhdGUuZ28oJ2xpc3RzJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkd2luZG93LCAkaW9uaWNQb3B1cCwgJGxvY2Fsc3RvcmFnZSwgVXNlcikge1xuICAgbGV0IGNvbmZpcm1Qb3B1cCA9ICh0aXRsZSwgdGVtcGxhdGUpID0+IHsgXG4gICAgIHJldHVybiAkaW9uaWNQb3B1cC5jb25maXJtKHtcbiAgICAgICB0aXRsZSxcbiAgICAgICB0ZW1wbGF0ZSxcbiAgICAgfSlcbiAgIH1cbiAgVXNlci5BbGxMaXN0cygpXG4gIC50aGVuKChyKSA9PiAge1xuICAgICRzY29wZS5saXN0cyA9IEpTT04ucGFyc2Uoci50ZXh0KVxuICAgICRzY29wZS4kYXBwbHkoKVxuICB9KVxuICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xuICAgICRsb2NhbHN0b3JhZ2Uuc2V0KCd0b2tlbicsICcnKVxuICAgICRzdGF0ZS5nbygnc2lnbmluJylcbiAgfVxuICAkc2NvcGUuc2hvdWxkU2hvd0RlbGV0ZSA9IGZhbHNlO1xuICAkc2NvcGUubGlzdENhblN3aXBlID0gdHJ1ZVxuICAkc2NvcGUubmV3TGlzdCA9ICgpID0+IHtcbiAgICAkc3RhdGUuZ28oJyMvbGlzdHMvbmV3JylcbiAgfVxuICAkc2NvcGUuZWRpdCA9IChsaXN0KSA9PiB7XG4gICAgY29uc29sZS5sb2cobGlzdClcbiAgfVxuICAkc2NvcGUuZGVsZXRlID0gKGxpc3QpID0+IHtcbiAgICBjb25maXJtUG9wdXAoJ0RlbGV0ZScsIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGxpc3QgJHtsaXN0LnRpdGxlfWApXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgYXBpLkRlbGV0ZUxpc3QobGlzdC5pZCwgJGxvY2Fsc3RvcmFnZS5nZXQoJ3Rva2VuJywnJykpXG4gICAgICAgICR3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbi5jb250cm9sbGVyKCdMaXN0Q3RybCcsIGZ1bmN0aW9uKFxuICAkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkaW9uaWNIaXN0b3J5LFxuICBVc2VyLCBNb3ZpZXNcbiAgKSB7XG4gICRzY29wZS5iYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgJHN0YXRlLmdvKCdsaXN0cycpXG4gIH1cbiAgJHNjb3BlLnNob3VsZFNob3dEZWxldGUgPSBmYWxzZTtcbiAgJHNjb3BlLmxpc3RDYW5Td2lwZSA9IHRydWVcbiAgTW92aWVzLkFsbCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgJHNjb3BlLm1vdmllcyA9IGRhdGFcbiAgICAkc2NvcGUuJGFwcGx5KClcbiAgfSlcbiAgVXNlci5MaXN0KCRzdGF0ZVBhcmFtcy50aXRsZSkudGhlbihsID0+IHtcbiAgICAkc2NvcGUubGlzdCA9IGxcbiAgICAkc2NvcGUuJGFwcGx5KClcbiAgfSlcbn0pO1xubGV0IGNoZWNrUmVzcG9uc2UgPSByID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgeyBiZWFyZXIsIGVycm9ycywgZXJyb3IgfSA9IEpTT04ucGFyc2Uoci50ZXh0KVxuICAgIGlmIChlcnJvciB8fCBlcnJvcnMpICB7XG4gICAgICByZWplY3Qoe2Vycm9yLCBlcnJvcnN9KVxuICAgIH1cbiAgICBpZiAoYmVhcmVyICYmIGJlYXJlci5sZW5ndGgpIHtcbiAgICAgIHJlc29sdmUoYmVhcmVyKVxuICAgIH1cbiAgfSlcbn1cbmZ1bmN0aW9uIGhhbmxkZUVycm9ycyh7ZXJyb3IsIGVycm9yc30pIHtcbiAgaWYgKGVycm9yKSBpbmNvcnJlY3RDcmVkKGVycm9yKTtcbiAgaWYgKGVycm9ycykgdmFsaWRhdGlvbkVycm9ycyhlcnJvcnMpO1xufVxubGV0IGluY29ycmVjdENyZWQgPSBlID0+IHtcbiAgY29uc29sZS5sb2coJ0luY29ycmVjdCBjcmVkZW50aWFscycpXG59XG5sZXQgdmFsaWRhdGlvbkVycm9ycyA9IGUgPT4ge1xuICBjb25zb2xlLmxvZygnVmFsaWRhdGlvbiBlcnJvcnMnLCBlKVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3d3dy9qcy9lczYvY29udHJvbGxlcnMuanNcbiAqKi8iLCJpbXBvcnQgYXBpIGZyb20gJy4vYXBpLmpzJ1xuaW1wb3J0IG9tZGIgZnJvbSAnLi9vbWRiLmpzJ1xuYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuc2VydmljZXMnLCBbXSlcbi5mYWN0b3J5KCdNb3ZpZXMnLCBmdW5jdGlvbigpIHtcbiAgIGxldCBmYWtlID0gIFtcbiAgICAgICAge1xuICAgICAgICAgIGltZGI6ICd0dDIzNzk3MTMnLFxuICAgICAgICAgIHVzZXJfcmF0aW5nOiA4LjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltZGI6ICd0dDIyNDkwMDcnLFxuICAgICAgICAgIHVzZXJfcmF0aW5nOiA4LjdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGltZGI6ICd0dDM2NTkzODgnLFxuICAgICAgICAgIHVzZXJfcmF0aW5nOiAxLjAgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpbWRiOiAndHQwMTg1OTA2JyxcbiAgICAgICAgICB1c2VyX3JhdGluZzogOC43XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpbWRiOiAndHQwOTAzNzQ3JyxcbiAgICAgICAgICB1c2VyX3JhdGluZzogOC43XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpbWRiOiAndHQwOTQ0OTQ3JyxcbiAgICAgICAgICB1c2VyX3JhdGluZzogMS4wIFxuICAgICAgICB9XG4gICAgICBdIFxuICAgbGV0ICByZXF1ZXN0cyA9IFtdXG4gICBmYWtlLmZvckVhY2godW0gPT4ge1xuICAgICAgcmVxdWVzdHMucHVzaChvbWRiLmdldChvbWRiLm5ld09wdGlvbnMoeyBpbWRiOiB1bS5pbWRiIH0pKSkgXG4gICB9KVxuICByZXR1cm4ge1xuICAgIEFsbDogZnVuY3Rpb24oKSB7XG4gICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cylcbiAgICAgLnRoZW4ob21kYi5wYXJzZU1vdmllKVxuICAgIH1cbiAgfVxufSlcbi5mYWN0b3J5KCckbG9jYWxzdG9yYWdlJywgWyckd2luZG93JywgZnVuY3Rpb24oJHdpbmRvdykge1xuICByZXR1cm4ge1xuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuICR3aW5kb3cubG9jYWxTdG9yYWdlW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH0sXG4gICAgc2V0T2JqZWN0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAkd2luZG93LmxvY2FsU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH0sXG4gICAgZ2V0T2JqZWN0OiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKCR3aW5kb3cubG9jYWxTdG9yYWdlW2tleV0gfHwgJ3t9Jyk7XG4gICAgfVxuICB9XG59XSlcbi5mYWN0b3J5KCdVc2VyJywgWyckbG9jYWxzdG9yYWdlJywgZnVuY3Rpb24oJGxvY2Fsc3RvcmFnZSkge1xuICBsZXQgdG9rZW4gPSAkbG9jYWxzdG9yYWdlLmdldCgndG9rZW4nLCAnJylcbiAgbGV0IGxpc3RzID0gW11cbiAgcmV0dXJuIHtcbiAgICBBbGxMaXN0czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXBpLlVzZXJMaXN0cyh0b2tlbilcbiAgICB9LFxuICAgIE5ld0xpc3Q6IGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgIHJldHVybiBhcGkuQWRkTGlzdChsaXN0LCB0KVxuICAgIH0sXG4gICAgTGlzdDogZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGFwaS5Vc2VyTGlzdHModG9rZW4pXG4gICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgIGxldCBsaXN0cyA9IEpTT04ucGFyc2Uoci50ZXh0KSBcbiAgICAgICAgICBsaXN0cy5mb3JFYWNoKCBsID0+IHtcbiAgICAgICAgICAgIGlmIChsLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICAgICAgICByZXNvbHZlKGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3d3dy9qcy9lczYvc2VydmljZXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9