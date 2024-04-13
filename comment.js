! function(N, c) {
	"use strict";
	var t, a, B, i, m = "commento",
		d = "commento-main-area",
		l = "commento-login",
		T = "commento-login-box-container",
		H = "commento-login-box",
		C = "commento-login-box-email-subtitle",
		L = "commento-login-box-email-input",
		s = "commento-login-box-password-input",
		u = "commento-login-box-name-input",
		p = "commento-login-box-website-input",
		M = "commento-login-box-email-button",
		S = "commento-login-box-forgot-link-container",
		E = "commento-login-box-login-link-container",
		D = "commento-login-box-sso-pretext",
		A = "commento-login-box-sso-buttton-container",
		R = "commento-login-box-hr1",
		I = "commento-login-box-oauth-pretext",
		O = "commento-login-box-oauth-buttons-container",
		P = "commento-login-box-hr2",
		v = "commento-mod-tools",
		f = "commento-mod-tools-lock-button",
		h = "commento-error",
		g = "commento-logged-container",
		x = "commento-pre-comments-area",
		b = "commento-comments-area",
		k = "commento-textarea-super-container-",
		w = "commento-textarea-",
		y = "commento-anonymous-checkbox-",
		U = "commento-sort-policy-",
		q = "commento-comment-card-",
		j = "commento-comment-text-",
		W = "commento-comment-score-",
		Y = "commento-comment-edit-",
		_ = "commento-comment-reply-",
		F = "commento-comment-collapse-",
		J = "commento-comment-upvote-",
		V = "commento-comment-downvote-",
		X = "commento-comment-approve-",
		z = "commento-comment-sticky-",
		G = "commento-comment-children-",
		$ = "commento-comment-name-",
		K = "commento-markdown-button-",
		Q = "commento-markdown-help-",
		Z = "https://commento.io",
		ee = "https://cdn.commento.io",
		oe = null,
		ne = parent.location.pathname,
		te = !1,
		ie = [],
		re = {},
		ce = {},
		ae = !0,
		me = !1,
		de = !1,
		le = !1,
		se = !1,
		ue = "none",
		pe = {},
		r = {},
		ve = {},
		fe = !1,
		he = "login",
		ge = !1,
		xe = "score-desc",
		be = void 0,
		we = null,
		ye = 1;

	function ke(e) {
		return c.getElementById(e)
	}

	function Te(e, o) {
		e.prepend(o)
	}

	function He(e, o) {
		e.appendChild(o)
	}

	function Ce(e, o) {
		e.parentNode.insertBefore(o, e.nextSibling)
	}

	function Le(e, o) {
		e.classList.add("commento-" + o)
	}

	function Me(e, o) {
		null !== e && e.classList.remove("commento-" + o)
	}

	function Se(e) {
		return c.createElement(e)
	}

	function Ne(e) {
		null !== e && e.parentNode.removeChild(e)
	}

	function Be(e, o) {
		o = e.attributes[o];
		if (void 0 !== o) return o.value
	}

	function Ee(e) {
		if (null !== e) {
			var o = e.cloneNode(!0);
			if (null !== e.parentNode) return e.parentNode.replaceChild(o, e), o
		}
		return e
	}

	function De(e, o, n) {
		e.addEventListener("click", function() {
			o(n)
		}, !1)
	}

	function Ae(e, o, n) {
		e.setAttribute(o, n)
	}

	function Re(e, o, n) {
		var t = new XMLHttpRequest;
		t.open("POST", e, !0), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.onload = function() {
			n(JSON.parse(t.response))
		}, t.send(JSON.stringify(o))
	}

	function Ie(e) {
		"function" == typeof e && e()
	}

	function Oe(e, o) {
		var n, t = new Date;
		t.setTime(t.getTime() + 31536e6), n = "; expires=" + t.toUTCString(), c.cookie = e + "=" + o + n + "; path=/"
	}

	function Pe() {
		var e = function(e) {
			if (2 === (e = ("; " + c.cookie).split("; " + e + "=")).length) return e.pop().split(";").shift()
		}("commentoCommenterToken");
		return void 0 === e ? "anonymous" : e
	}

	function Ue() {
		window.open(Z + "/profile?commenterToken=" + Pe(), "_blank")
	}

	function qe(e) {
		window.open(Z + "/unsubscribe?unsubscribeSecretHex=" + e, "_blank")
	}

	function je(e, o) {
		var n = Se("div");
		return n.style.background = e, n.innerText = o.toUpperCase(), "?" === o && (n.style["font-weight"] = "bold"), Le(n, "avatar"), n
	}

	function We(e, o) {
		ce[e.commenterHex] = e, be = e.commenterHex;
		var n = Se("div"),
			t = Se("div"),
			i = "undefined" !== e.link ? Se("a") : Se("div"),
			r = Se("div"),
			c = Se("div"),
			a = Se("div"),
			m = eo(e.commenterHex + "-" + e.name);
		n.id = g, Le(n, "logged-container"), Le(t, "logged-in-as"), Le(i, "name"), Le(r, "profile-button"), Le(c, "profile-button"), Le(a, "profile-button"), i.innerText = e.name, r.innerText = "Notification Settings", c.innerText = "Edit Profile", a.innerText = "Logout", De(a, N.logout), De(r, qe, o.unsubscribeSecretHex), De(c, Ue), Ae(n, "style", "display: none"), "undefined" !== e.link && Ae(i, "href", e.link), m = je(m, e.name[0]), "undefined" !== e.photo && fo(m, ee + "/api/commenter/photo?commenterHex=" + e.commenterHex), He(t, m), He(t, i), He(n, t), He(n, a), "commento" === e.provider && He(n, c), He(n, r), Te(oe, n), te = !0
	}

	function Ye(o) {
		if ("anonymous" === Pe()) return te = !1, void Ie(o);
		var e = {
			commenterToken: Pe()
		};
		Re(Z + "/api/commenter/self", e, function(e) {
			return e.success ? (We(e.commenter, e.email), po()) : Oe("commentoCommenterToken", "anonymous"), void Ie(o)
		})
	}

	function _e(e, o) {
		var n, t, i = Se("link"),
			r = c.getElementsByTagName("head")[0];
		i.type = "text/css", Ae(i, "href", e), Ae(i, "rel", "stylesheet"), n = o, i.addEventListener("load", function() {
			n(t)
		}), He(r, i)
	}

	function Fe(o) {
		var e = {
			commenterToken: Pe(),
			domain: parent.location.host,
			path: ne
		};
		Re(Z + "/api/comment/list", e, function(e) {
			e.success ? (Ve(), ae = e.requireIdentification, me = e.isModerator, de = e.isFrozen, se = e.attributes.isLocked, ue = e.attributes.stickyCommentHex, ie = e.comments, ce = Object.assign({}, ce, e.commenters), ve = e.configuredOauths, xe = e.defaultSortPolicy, Ie(o)) : Je(e.message)
		})
	}

	function Je(e) {
		var o = ke(h);
		o.innerText = e, Ae(o, "style", "display: block;")
	}

	function Ve() {
		Ae(ke(h), "style", "display: none;")
	}

	function Xe(e) {
		var o = ke(k + e),
			n = ke(K + e),
			t = Se("table"),
			i = Se("tr"),
			r = Se("td"),
			c = Se("td"),
			a = Se("tr"),
			m = Se("td"),
			d = Se("td"),
			l = Se("tr"),
			s = Se("td"),
			u = Se("td"),
			p = Se("tr"),
			v = Se("td"),
			f = Se("td"),
			h = Se("tr"),
			g = Se("td"),
			x = Se("td"),
			b = Se("tr"),
			w = Se("td"),
			y = Se("td");
		t.id = Q + e, Le(t, "markdown-help"), m.innerHTML = "<b>bold</b>", d.innerHTML = "surround text with <pre>**two asterisks**</pre>", r.innerHTML = "<i>italics</i>", c.innerHTML = "surround text with <pre>*asterisks*</pre>", s.innerHTML = "<pre>code</pre>", u.innerHTML = "surround text with <pre>`backticks`</pre>", v.innerHTML = "<strike>strikethrough</strike>", f.innerHTML = "surround text with <pre>~~two tilde characters~~</pre>", g.innerHTML = '<a href="https://example.com">hyperlink</a>', x.innerHTML = "<pre>[hyperlink](https://example.com)</pre> or just a bare URL", w.innerHTML = "<blockquote>quote</blockquote>", y.innerHTML = "prefix with <pre>&gt;</pre>", De(Ee(n), ze, e), He(i, r), He(i, c), He(t, i), He(a, m), He(a, d), He(t, a), He(h, g), He(h, x), He(t, h), He(l, s), He(l, u), He(t, l), He(p, v), He(p, f), He(t, p), He(b, w), He(b, y), He(t, b), He(o, t)
	}

	function ze(e) {
		var o = ke(K + e),
			n = ke(Q + e);
		De(o = Ee(o), Xe, e), Ne(n)
	}

	function Ge(e, o) {
		var n, t = Se("div"),
			i = Se("div"),
			r = Se("textarea"),
			c = Se("div"),
			a = Se("input"),
			m = Se("label"),
			d = Se("button"),
			l = Se("a");
		return t.id = k + e, i.id = "commento-textarea-container-" + e, r.id = w + e, a.id = y + e, d.id = "commento-submit-button-" + e, l.id = K + e, Le(i, "textarea-container"), Le(c, "round-check"), Le(c, "anonymous-checkbox-container"), Le(d, "button"), Le(d, "submit-button"), Le(l, "markdown-button"), Le(t, "button-margin"), Ae(r, "placeholder", "Add a comment"), Ae(a, "type", "checkbox"), Ae(m, "for", y + e), m.innerText = "Comment anonymously", d.innerText = !0 === o ? "Save Changes" : "Add Comment", l.innerHTML = "<b>M &#8595;</b> &nbsp; Markdown", fe && (a.checked = !0, a.setAttribute("disabled", !0)), r.oninput = (n = r, function() {
			n.style.height = "", n.style.height = Math.min(Math.max(n.scrollHeight, 75), 400) + "px"
		}), De(d, !0 === o ? io : mo, e), De(l, Xe, e), He(i, r), He(t, i), He(c, a), He(c, m), He(t, d), ae || !0 === o || He(t, c), He(t, l), t
	}
	N.logout = function() {
		Oe("commentoCommenterToken", "anonymous"), me = te = !1, be = void 0, o()
	};
	var $e = {
		"score-desc": "Upvotes",
		"creationdate-desc": "Newest",
		"creationdate-asc": "Oldest"
	};

	function Ke(e) {
		Me(ke(U + xe), "sort-policy-button-selected");
		var o = ke(b);
		o.innerHTML = "", xe = e;
		var n = no(ro(ie), "root");
		n && He(o, n), Le(ke(U + e), "sort-policy-button-selected")
	}

	function Qe(e) {
		var o = Se("div"),
			n = Se("div"),
			t = ke(d),
			i = Se("div"),
			r = Se("div");
		o.id = l, i.id = x, r.id = b, Le(o, "login"), Le(n, "login-text"), Le(r, "comments"), n.innerText = "Login", r.innerHTML = "", De(n, N.loginBoxShow, null);
		var c = 0;
		Object.keys(ve).forEach(function(e) {
			ve[e] && c++
		}), 0 < c ? He(o, n) : ae || (fe = !0), se || de ? te || le ? (He(t, Ze("This thread is locked. You cannot add new comments.")), Ne(ke(l))) : (He(t, o), He(t, Ge("root"))) : (te ? Ne(ke(l)) : He(t, o), He(t, Ge("root"))), 0 < ie.length && He(t, function() {
			var e, o = Se("div"),
				n = Se("div");
			for (e in Le(o, "sort-policy-buttons-container"), Le(n, "sort-policy-buttons"), $e) {
				var t = Se("a");
				t.id = U + e, Le(t, "sort-policy-button"), e === xe && Le(t, "sort-policy-button-selected"), t.innerText = $e[e], De(t, Ke, e), He(n, t)
			}
			return He(o, n), o
		}()), He(t, i), He(t, r), He(oe, t), Ie(e)
	}

	function Ze(e) {
		var o = Se("div");
		return Le(o, "moderation-notice"), o.innerText = e, o
	}

	function eo(e) {
		for (var o = ["#396ab1", "#da7c30", "#3e9651", "#cc2529", "#922428", "#6b4c9a", "#535154"], n = 0, t = 0; t < e.length; t++) n += e.charCodeAt(t);
		return o[n % o.length]
	}

	function oo(e) {
		return 1 !== e ? e + " points" : e + " point"
	}
	N.commentNew = function(t, i, r) {
		var e, c = ke(k + t),
			a = ke(w + t),
			m = ke(_ + t),
			d = a.value;
		"" !== d ? (Me(a, "red-border"), e = {
			commenterToken: i,
			domain: parent.location.host,
			path: ne,
			parentHex: t,
			markdown: d
		}, Re(Z + "/api/comment/new", e, function(e) {
			var o, n;
			e.success ? (Ve(), o = "", "unapproved" === e.state ? o = "Your comment is under moderation." : "flagged" === e.state && (o = "Your comment was flagged as spam and is under moderation."), "" !== o && Te(ke(k + t), Ze(o)), n = be, n = no({
				root: [o = {
					commentHex: e.commentHex,
					commenterHex: n = void 0 === n || "anonymous" === i ? "anonymous" : n,
					markdown: d,
					html: e.html,
					parentHex: "root",
					score: 0,
					state: "approved",
					direction: 0,
					creationDate: new Date
				}]
			}, "root"), re[e.commentHex] = o, "root" !== t ? (c.replaceWith(n), pe[t] = !1, Le(m, "option-reply"), Me(m, "option-cancel"), m.title = "Reply to this comment", De(m, N.replyShow, t)) : (a.value = "", Ce(ke(x), n)), Ie(r)) : Je(e.message)
		})) : Le(a, "red-border")
	};
	var n = {
		"score-desc": function(e, o) {
			return o.score - e.score
		},
		"creationdate-desc": function(e, o) {
			return e.creationDate < o.creationDate ? 1 : -1
		},
		"creationdate-asc": function(e, o) {
			return e.creationDate < o.creationDate ? -1 : 1
		}
	};

	function no(C, L) {
		var e = C[L];
		if (!e || !e.length) return null;
		e.sort(function(e, o) {
			return e.deleted || e.commentHex !== ue ? o.deleted || o.commentHex !== ue ? n[xe](e, o) : 1 / 0 : -1 / 0
		});
		var M = (new Date).getTime(),
			S = Se("div");
		return e.forEach(function(e) {
			var o, n, t = ce[e.commenterHex],
				i = Se("div"),
				r = Se("div"),
				c = Se("div"),
				a = Se("div"),
				m = Se("div"),
				d = Se("div"),
				l = Se("div"),
				s = Se("div"),
				u = Se("button"),
				p = Se("button"),
				v = Se("button"),
				f = Se("button"),
				h = Se("button"),
				g = Se("button"),
				x = Se("button"),
				b = Se("button"),
				w = no(C, e.commentHex),
				y = Se("div"),
				k = eo(e.commenterHex + "-" + t.name),
				T = "undefined" !== t.link && "https://undefined" !== t.link && "" !== t.link ? Se("a") : Se("div");
			i.id = q + e.commentHex, d.id = "commento-comment-body-" + e.commentHex, l.id = j + e.commentHex, c.id = "commento-comment-subtitle-" + e.commentHex, a.id = "commento-comment-timeago-" + e.commentHex, m.id = W + e.commentHex, s.id = "commento-comment-options-" + e.commentHex, u.id = Y + e.commentHex, p.id = _ + e.commentHex, v.id = F + e.commentHex, f.id = J + e.commentHex, h.id = V + e.commentHex, g.id = X + e.commentHex, x.id = "commento-comment-remove-" + e.commentHex, b.id = z + e.commentHex, w && (w.id = G + e.commentHex), y.id = "commento-comment-contents-" + e.commentHex, T.id = $ + e.commentHex, v.title = "Collapse children", f.title = "Upvote", h.title = "Downvote", u.title = "Edit", p.title = "Reply", g.title = "Approve", x.title = "Remove", ue === e.commentHex ? b.title = me ? "Unsticky" : "This comment has been stickied" : b.title = "Sticky", a.title = e.creationDate.toString(), i.style.borderLeft = "2px solid " + k, e.deleted ? T.innerText = "[deleted]" : T.innerText = t.name, l.innerHTML = e.html, a.innerText = (o = e.creationDate, n = 2592e6, (o = M - o) < 5e3 ? "just now" : o < 12e4 ? Math.round(o / 1e3) + " seconds ago" : o < 72e5 ? Math.round(o / 6e4) + " minutes ago" : o < 1728e5 ? Math.round(o / 36e5) + " hours ago" : o < 5184e6 ? Math.round(o / 864e5) + " days ago" : o < 62208e6 ? Math.round(o / n) + " months ago" : Math.round(o / 31104e6) + " years ago"), m.innerText = oo(e.score), o = je(k, "anonymous" === e.commenterHex ? "?" : t.name[0]), "undefined" !== t.photo && fo(o, ee + "/api/commenter/photo?commenterHex=" + t.commenterHex), Le(i, "card"), me && "approved" !== e.state && Le(i, "dark-card"), t.isModerator && Le(T, "moderator"), "flagged" === e.state && Le(T, "flagged"), Le(r, "header"), Le(T, "name"), Le(c, "subtitle"), Le(a, "timeago"), Le(m, "score"), Le(d, "body"), Le(s, "options"), we && Le(s, "options-mobile"), Le(u, "option-button"), Le(u, "option-edit"), Le(p, "option-button"), Le(p, "option-reply"), Le(v, "option-button"), Le(v, "option-collapse"), Le(f, "option-button"), Le(f, "option-upvote"), Le(h, "option-button"), Le(h, "option-downvote"), Le(g, "option-button"), Le(g, "option-approve"), Le(x, "option-button"), Le(x, "option-remove"), Le(b, "option-button"), ue === e.commentHex ? Le(b, "option-unsticky") : Le(b, "option-sticky"), te && (0 < e.direction ? Le(f, "upvoted") : e.direction < 0 && Le(h, "downvoted")), De(u, N.editShow, e.commentHex), De(v, N.commentCollapse, e.commentHex), De(g, N.commentApprove, e.commentHex), De(x, N.commentDelete, e.commentHex), De(b, N.commentSticky, e.commentHex), te ? (f = (k = to(f, h, e.commentHex, e.direction))[0], h = k[1]) : (De(f, N.loginBoxShow, null), De(h, N.loginBoxShow, null)), De(p, N.replyShow, e.commentHex), "undefined" !== t.link && "https://undefined" !== t.link && "" !== t.link && Ae(T, "href", t.link), He(s, v), e.deleted || (He(s, h), He(s, f)), e.commenterHex === be ? He(s, u) : e.deleted || He(s, p), !e.deleted && me && "root" === L && He(s, b), e.deleted || !me && e.commenterHex !== be || He(s, x), me && "approved" !== e.state && He(s, g), e.deleted || me || ue !== e.commentHex || He(s, b), Ae(s, "style", "width: " + 32 * (s.childNodes.length + 1) + "px;");
			for (var H = 0; H < s.childNodes.length; H++) Ae(s.childNodes[H], "style", "right: " + 32 * H + "px;");
			He(c, m), He(c, a), we || He(r, s), He(r, o), He(r, T), He(r, c), He(d, l), He(y, d), we && (He(y, s), Le(d = Se("div"), "options-clearfix"), He(y, d)), w && (Le(w, "body"), He(y, w)), He(i, r), He(i, y), e.deleted && ("true" === B || null === w) || He(S, i)
		}), 0 === S.childNodes.length ? null : S
	}

	function to(e, o, n, t) {
		return e = Ee(e), o = Ee(o), 0 < t ? (De(e, N.vote, [n, [1, 0]]), De(o, N.vote, [n, [1, -1]])) : t < 0 ? (De(e, N.vote, [n, [-1, 1]]), De(o, N.vote, [n, [-1, 0]])) : (De(e, N.vote, [n, [0, 1]]), De(o, N.vote, [n, [0, -1]])), [e, o]
	}

	function io(t) {
		var e, o = ke(w + t),
			i = o.value;
		"" !== i ? (Me(o, "red-border"), e = {
			commenterToken: Pe(),
			commentHex: t,
			markdown: i
		}, Re(Z + "/api/comment/edit", e, function(e) {
			var o, n;
			e.success ? (Ve(), re[t].markdown = i, re[t].html = e.html, n = ke(Y + t), (o = ke(k + t)).innerHTML = re[t].html, o.id = j + t, delete r[t], Le(n, "option-edit"), Me(n, "option-cancel"), n.title = "Edit comment", De(n = Ee(n), N.editShow, t), n = "", "unapproved" === e.state ? n = "Your comment is under moderation." : "flagged" === e.state && (n = "Your comment was flagged as spam and is under moderation."), "" !== n && Te(ke(k + t), Ze(n))) : Je(e.message)
		})) : Le(o, "red-border")
	}

	function ro(e) {
		var n = {};
		return e.forEach(function(e) {
			var o = e.parentHex;
			o in n || (n[o] = []), e.creationDate = new Date(e.creationDate), n[o].push(e), re[e.commentHex] = {
				html: e.html,
				markdown: e.markdown
			}
		}), n
	}

	function co() {
		var e = ke(b);
		e.innerHTML = "";
		var o = no(ro(ie), "root");
		o && He(e, o)
	}

	function ao(e) {
		te ? N.commentNew(e, Pe()) : N.loginBoxShow(e)
	}

	function mo(e) {
		var o, n;
		ae ? ao(e) : (o = ke(y + e), "" !== (n = ke(w + e)).value ? (Me(n, "red-border"), o.checked ? (le = !0, N.commentNew(e, "anonymous")) : ao(e)) : Le(n, "red-border"))
	}

	function o(e) {
		ke(m).innerHTML = "", pe = {}, N.main(e)
	}

	function lo(e, o, n) {
		Re(Z + "/api/commenter/login", {
			email: e,
			password: o
		}, function(e) {
			return e.success ? (Ve(), Oe("commentoCommenterToken", e.commenterToken), We(e.commenter, e.email), po(), Ne(ke(l)), void(null !== n ? N.commentNew(n, e.commenterToken, function() {
				N.loginBoxClose(), Fe(co)
			}) : (N.loginBoxClose(), Fe(co)))) : (N.loginBoxClose(), void Je(e.message))
		})
	}

	function so(o) {
		var e = {
				isLocked: se,
				stickyCommentHex: ue
			},
			e = {
				commenterToken: Pe(),
				domain: parent.location.host,
				path: ne,
				attributes: e
			};
		Re(Z + "/api/page/update", e, function(e) {
			e.success ? (Ve(), Ie(o)) : Je(e.message)
		})
	}

	function uo() {
		void 0 === t ? po() : _e(t, po)
	}

	function po() {
		var e = ke(d),
			o = ke(v),
			n = ke(g);
		Ae(e, "style", ""), me && Ae(o, "style", ""), n && Ae(n, "style", "")
	}

	function e() {
		for (var e, o = c.getElementsByTagName("script"), n = 0; n < o.length; n++) o[n].src.match(/\/js\/commento\.js$/) && (void 0 !== (e = Be(o[n], "data-page-id")) && (ne = e), t = Be(o[n], "data-css-override"), i = Be(o[n], "data-auto-init"), void 0 === (m = Be(o[n], "data-id-root")) && (m = "commento"), a = Be(o[n], "data-no-fonts"), B = Be(o[n], "data-hide-deleted"))
	}

	function vo(e, i) {
		e.forEach(function(n) {
			var t;
			n.isIntersecting && ((t = new Image).src = Be(n.target, "data-observable-avatar"), t.onload = function() {
				var e, o;
				Le(t, "avatar-img"), e = n.target, o = t, null !== e && null !== o && null !== e.parentNode && e.parentNode.replaceChild(o, e), i.unobserve(n.target)
			})
		})
	}

	function fo(e, o) {
		Ae(e, "data-observable-avatar", o), ye.observe(e)
	}
	N.commentApprove = function(i) {
		var e = {
			commenterToken: Pe(),
			commentHex: i
		};
		Re(Z + "/api/comment/approve", e, function(e) {
			var o, n, t;
			e.success ? (Ve(), o = ke(q + i), n = ke($ + i), t = ke(X + i), Me(o, "dark-card"), Me(n, "flagged"), Ne(t)) : Je(e.message)
		})
	}, N.commentDelete = function(o) {
		var e;
		confirm("Are you sure you want to delete this comment?") && (e = {
			commenterToken: Pe(),
			commentHex: o
		}, Re(Z + "/api/comment/delete", e, function(e) {
			e.success ? (Ve(), ke(j + o).innerText = "[deleted]") : Je(e.message)
		}))
	}, N.vote = function(e) {
		var o = e[0],
			n = e[1][0],
			t = e[1][1],
			i = ke(J + o),
			r = ke(V + o),
			c = ke(W + o),
			a = {
				commenterToken: Pe(),
				commentHex: o,
				direction: t
			},
			e = to(i, r, o, t),
			i = e[0],
			r = e[1];
		Me(i, "upvoted"), Me(r, "downvoted"), 0 < t ? Le(i, "upvoted") : t < 0 && Le(r, "downvoted"), c.innerText = oo(parseInt(c.innerText.replace(/[^\d-.]/g, "")) + t - n), Re(Z + "/api/comment/vote", a, function(e) {
			e.success ? Ve() : (Je(e.message), Me(i, "upvoted"), Me(r, "downvoted"), c.innerText = oo(parseInt(c.innerText.replace(/[^\d-.]/g, "")) - t + n), to(i, r, o, n))
		})
	}, N.editShow = function(e) {
		var o;
		e in r && r[e] || (o = ke(j + e), r[e] = !0, o.replaceWith(Ge(e, !0)), ke(w + e).value = re[e].markdown, Me(o = ke(Y + e), "option-edit"), Le(o, "option-cancel"), o.title = "Cancel edit", De(o = Ee(o), N.editCollapse, e))
	}, N.editCollapse = function(e) {
		var o = ke(Y + e),
			n = ke(k + e);
		n.innerHTML = re[e].html, n.id = j + e, delete r[e], Le(o, "option-edit"), Me(o, "option-cancel"), o.title = "Edit comment", De(o = Ee(o), N.editShow, e)
	}, N.replyShow = function(e) {
		var o;
		e in pe && pe[e] || (Ce(ke(j + e), Ge(e)), pe[e] = !0, Me(o = ke(_ + e), "option-reply"), Le(o, "option-cancel"), o.title = "Cancel reply", De(o = Ee(o), N.replyCollapse, e))
	}, N.replyCollapse = function(e) {
		var o = ke(_ + e);
		ke(k + e).remove(), delete pe[e], Le(o, "option-reply"), Me(o, "option-cancel"), o.title = "Reply to this comment", De(o = Ee(o), N.replyShow, e)
	}, N.commentCollapse = function(e) {
		var o = ke(G + e),
			n = ke(F + e);
		o && Le(o, "hidden"), Me(n, "option-collapse"), Le(n, "option-uncollapse"), n.title = "Expand children", De(n = Ee(n), N.commentUncollapse, e)
	}, N.commentUncollapse = function(e) {
		var o = ke(G + e),
			n = ke(F + e);
		o && Me(o, "hidden"), Me(n, "option-uncollapse"), Le(n, "option-collapse"), n.title = "Collapse children", De(n = Ee(n), N.commentCollapse, e)
	}, N.commentoAuth = function(e) {
		var o, n, t = e.provider,
			i = e.id,
			r = window.open("", "_blank");
		e = Z + "/api/commenter/token/new", o = function(o) {
			var e;
			o.success ? (Ve(), Oe("commentoCommenterToken", o.commenterToken), r.location = Z + "/api/oauth/" + t + "/redirect?commenterToken=" + o.commenterToken, e = setInterval(function() {
				r.closed && (clearInterval(e), Ye(function() {
					var e = ke(g);
					e && Ae(e, "style", ""), "anonymous" !== Pe() && Ne(ke(l)), null !== i ? N.commentNew(i, o.commenterToken, function() {
						N.loginBoxClose(), Fe(co)
					}) : (N.loginBoxClose(), Fe(co))
				}))
			}, 250)) : Je(o.message)
		}, (n = new XMLHttpRequest).open("GET", e, !0), n.onload = function() {
			o(JSON.parse(n.response))
		}, n.send(null)
	}, N.popupRender = function(n) {
		var e = ke(T),
			o = Se("div"),
			t = Se("div"),
			i = Se("div"),
			r = Se("div"),
			c = Se("hr"),
			a = Se("div"),
			m = Se("div"),
			d = Se("div"),
			l = Se("hr"),
			s = Se("div"),
			u = Se("div"),
			p = Se("div"),
			v = Se("input"),
			f = Se("button"),
			h = Se("div"),
			g = Se("a"),
			x = Se("div"),
			b = Se("a"),
			w = Se("div");
		o.id = H, s.id = C, v.id = L, f.id = M, h.id = S, x.id = E, i.id = A, t.id = D, c.id = R, a.id = I, m.id = O, l.id = P, Le(e, "login-box-container"), Le(o, "login-box"), Le(s, "login-box-subtitle"), Le(u, "email-container"), Le(p, "email"), Le(v, "input"), Le(f, "email-button"), Le(h, "forgot-link-container"), Le(g, "forgot-link"), Le(x, "login-link-container"), Le(b, "login-link"), Le(t, "login-box-subtitle"), Le(i, "oauth-buttons-container"), Le(r, "oauth-buttons"), Le(a, "login-box-subtitle"), Le(m, "oauth-buttons-container"), Le(d, "oauth-buttons"), Le(w, "login-box-close"), Le(oe, "root-min-height"), g.innerText = "Forgot your password?", b.innerText = "Don't have an account? Sign up.", s.innerText = "Login with your email address", f.innerText = "Continue", a.innerText = "Proceed with social login", t.innerText = "Proceed with " + parent.location.host + " authentication", De(f, N.passwordAsk, n), De(g, N.forgotPassword, n), De(b, N.popupSwitch, n), De(w, N.loginBoxClose), Ae(e, "style", "display: none; opacity: 0;"), Ae(v, "name", "email"), Ae(v, "placeholder", "Email address"), Ae(v, "type", "text");
		var y, k = 0;
		["google", "twitter", "github", "gitlab"].forEach(function(e) {
			var o;
			ve[e] && (Le(o = Se("button"), "button"), Le(o, e + "-button"), o.innerText = e, De(o, N.commentoAuth, {
				provider: e,
				id: n
			}), He(d, o), k++)
		}), ve.sso && (Le(y = Se("button"), "button"), Le(y, "sso-button"), y.innerText = "Single Sign-On", De(y, N.commentoAuth, {
			provider: "sso",
			id: n
		}), He(r, y), He(i, r), He(o, t), He(o, i), (0 < k || ve.commento) && He(o, c)), ge = 0 < k && (He(o, a), He(m, d), He(o, m), !0), He(p, v), He(p, f), He(u, p), He(h, g), He(x, b), 0 < k && ve.commento && He(o, l), ve.commento && (He(o, s), He(o, u), He(o, h), He(o, x)), He(o, w), he = "login", e.innerHTML = "", He(e, o)
	}, N.forgotPassword = function() {
		window.open("", "_blank").location = Z + "/forgot?commenter=true", N.loginBoxClose()
	}, N.popupSwitch = function(e) {
		var o = ke(C);
		ge && (Ne(ke(O)), Ne(ke(I)), Ne(ke(R)), Ne(ke(P))), ve.sso && (Ne(ke(A)), Ne(ke(D)), Ne(ke(R)), Ne(ke(P))), Ne(ke(E)), Ne(ke(S)), o.innerText = "Create an account", he = "signup", N.passwordAsk(e), ke(L).focus()
	}, N.login = function(e) {
		var o = ke(L),
			n = ke(s);
		lo(o.value, n.value, e)
	}, N.signup = function(o) {
		var n = ke(L),
			e = ke(u),
			t = ke(p),
			i = ke(s),
			t = {
				email: n.value,
				name: e.value,
				website: t.value,
				password: i.value
			};
		Re(Z + "/api/commenter/new", t, function(e) {
			return e.success ? (Ve(), void lo(n.value, i.value, o)) : (N.loginBoxClose(), void Je(e.message))
		})
	}, N.passwordAsk = function(e) {
		var o, n, t, i, r = ke(H),
			c = ke(C);
		Ne(ke(M)), Ne(ke(E)), Ne(ke(S)), ge && 0 < ve.length && (Ne(ke(R)), Ne(ke(P)), Ne(ke(I)), Ne(ke(O))), i = "signup" === he ? (o = ["name", "website", "password"], n = [u, p, s], t = ["text", "text", "password"], ["Real Name", "Website (Optional)", "Password"]) : (o = ["password"], n = [s], t = ["password"], ["Password"]), c.innerText = "signup" === he ? "Finish the rest of your profile to complete." : "Enter your password to log in.";
		for (var a = 0; a < o.length; a++) {
			var m = Se("div"),
				d = Se("div"),
				l = Se("input");
			l.id = n[a], Le(m, "email-container"), Le(d, "email"), Le(l, "input"), Ae(l, "name", o[a]), Ae(l, "type", t[a]), Ae(l, "placeholder", i[a]), He(d, l), He(m, d), "password" === o[a] && (Le(l = Se("button"), "email-button"), l.innerText = he, De(l, "signup" === he ? N.signup : N.login, e), He(d, l)), He(r, m)
		}
		ke("signup" === he ? u : s).focus()
	}, N.threadLockToggle = function() {
		var e = ke(f);
		se = !se, e.disabled = !0, so(function() {
			e.disabled = !1, o()
		})
	}, N.commentSticky = function(o) {
		var e;
		"none" !== ue && (null === (e = ke(z + ue)) ? ue = "none" : (Me(e, "option-unsticky"), Le(e, "option-sticky"))), ue = ue === o ? "none" : o, so(function() {
			var e = ke(z + o);
			ue === o ? (Me(e, "option-sticky"), Le(e, "option-unsticky")) : (Me(e, "option-unsticky"), Le(e, "option-sticky"))
		})
	}, N.loginBoxClose = function() {
		var e = ke(d),
			o = ke(T);
		Me(e, "blurred"), Me(oe, "root-min-height"), Ae(o, "style", "display: none")
	}, N.loginBoxShow = function(e) {
		var o = ke(d),
			n = ke(T);
		N.popupRender(e), Le(o, "blurred"), Ae(n, "style", ""), window.location.hash = T, ke(L).focus()
	};
	var ho = !(N.main = function(n) {
		var t, e, o, i, r;
		null !== (oe = ke(m)) ? (null === we && (we = oe.getBoundingClientRect().width < 450), Le(oe, "root"), "true" !== a && Le(oe, "root-font"), ye = new IntersectionObserver(vo), (o = Se("div")).id = T, He(oe, o), (i = Se("div")).id = h, Le(i, "error-box"), Ae(i, "style", "display: none;"), He(oe, i), (r = Se("div")).id = d, Le(r, "main-area"), Ae(r, "style", "display: none"), He(oe, r), e = Se("div"), o = Se("div"), i = Se("a"), r = Se("span"), e.id = "commento-footer", Le(e, "footer"), Le(o, "logo-container"), Le(i, "logo"), Le(r, "logo-text"), Ae(i, "href", "https://commento.io"), Ae(i, "target", "_blank"), r.innerText = "Commento", He(i, r), He(o, i), He(e, o), t = e, _e(ee + "/css/commento.css", uo), Ye(function() {
			Fe(function() {
				var e, o;
				e = Se("div"), o = Se("button"), e.id = v, o.id = f, Le(e, "mod-tools"), o.innerText = se ? "Unlock Thread" : "Lock Thread", De(o, N.threadLockToggle), Ae(e, "style", "display: none"), He(e, o), He(oe, e), Qe(function() {
					var e, o;
					co(), He(oe, t), window.location.hash && (window.location.hash.startsWith("#commento-") ? (e = window.location.hash.split("-")[1], null !== (o = ke(q + e)) ? (Le(o, "highlighted-card"), o.scrollIntoView(!0)) : 64 === e.length && Je("The comment you're looking for no longer exists or was deleted.")) : window.location.hash.startsWith("#commento") && oe.scrollIntoView(!0)), po(),
						function() {
							for (var e = c.getElementsByClassName("commento-name"), o = 0; o < e.length; o++) Ae(e[o], "style", "max-width: " + (e[o].getBoundingClientRect().width + 20) + "px;")
						}(), Ie(n)
				})
			})
		})) : console.log("[commento] error: no root element with ID '" + m + "' found")
	});

	function go() {
		ho || (ho = !0, e(), "true" === i || void 0 === i ? N.main(void 0) : "false" !== i && console.log("[commento] error: invalid value for data-auto-init; allowed values: true, false"))
	}

	function xo() {
		var e = c.readyState;
		"loading" === e ? c.addEventListener("readystatechange", xo) : "interactive" !== e && "complete" !== e || go()
	}
	xo()
}(window.commento, document);
