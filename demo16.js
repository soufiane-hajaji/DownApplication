! function(i) {
    i.fn.theiaStickySidebar = function(t) {
        function e(t, e) {
            return !0 === t.initialized || !(i("body").width() < t.minWidth) && (function(t, e) {
                t.initialized = !0, 0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));
                e.each(function() {
                    var e = {};
                    if (e.sidebar = i(this), e.options = t || {}, e.container = i(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({ position: e.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box" }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length) {
                        var a = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        e.sidebar.find("script").filter(function(i, t) { return 0 === t.type.length || t.type.match(a) }).remove(), e.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
                    }
                    e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
                    var n = e.stickySidebar.offset().top,
                        s = e.stickySidebar.outerHeight();

                    function d() { e.fixedScrollTop = 0, e.sidebar.css({ "min-height": "1px" }), e.stickySidebar.css({ position: "static", width: "", transform: "none" }) }
                    e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), n -= e.stickySidebar.offset().top, s = e.stickySidebar.outerHeight() - s - n, 0 == n ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == s ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, d(), e.onScroll = function(e) {
                        if (e.stickySidebar.is(":visible"))
                            if (i("body").width() < e.options.minWidth) d();
                            else {
                                if (e.options.disableOnResponsiveLayouts) { var a = e.sidebar.outerWidth("none" == e.sidebar.css("float")); if (a + 50 > e.container.width()) return void d() }
                                var n, s, r = i(document).scrollTop(),
                                    c = "static";
                                if (r >= e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) {
                                    var p, b = e.paddingTop + t.additionalMarginTop,
                                        l = e.paddingBottom + e.marginBottom + t.additionalMarginBottom,
                                        f = e.sidebar.offset().top,
                                        h = e.sidebar.offset().top + (n = e.container, s = n.height(), n.children().each(function() { s = Math.max(s, i(this).height()) }), s),
                                        g = 0 + t.additionalMarginTop,
                                        S = e.stickySidebar.outerHeight() + b + l < i(window).height();
                                    p = S ? g + e.stickySidebar.outerHeight() : i(window).height() - e.marginBottom - e.paddingBottom - t.additionalMarginBottom;
                                    var u = f - r + e.paddingTop,
                                        m = h - r - e.paddingBottom - e.marginBottom,
                                        y = e.stickySidebar.offset().top - r,
                                        k = e.previousScrollTop - r;
                                    "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (y += k), "stick-to-top" == e.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (y = p - e.stickySidebar.outerHeight()), y = k > 0 ? Math.min(y, g) : Math.max(y, p - e.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, m - e.stickySidebar.outerHeight());
                                    var v = e.container.height() == e.stickySidebar.outerHeight();
                                    c = (v || y != g) && (v || y != p - e.stickySidebar.outerHeight()) ? r + y - e.sidebar.offset().top - e.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                                }
                                if ("fixed" == c) {
                                    var x = i(document).scrollLeft();
                                    e.stickySidebar.css({ position: "fixed", width: o(e.stickySidebar) + "px", transform: "translateY(" + y + "px)", left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - x + "px", top: "0px" })
                                } else if ("absolute" == c) { var T = {}; "absolute" != e.stickySidebar.css("position") && (T.position = "absolute", T.transform = "translateY(" + (r + y - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", T.top = "0px"), T.width = o(e.stickySidebar) + "px", T.left = "", e.stickySidebar.css(T) } else "static" == c && d();
                                "static" != c && 1 == e.options.updateSidebarHeight && e.sidebar.css({ "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom }), e.previousScrollTop = r
                            }
                    }, e.onScroll(e), i(document).on("scroll." + e.options.namespace, function(i) { return function() { i.onScroll(i) } }(e)), i(window).on("resize." + e.options.namespace, function(i) { return function() { i.stickySidebar.css({ position: "static" }), i.onScroll(i) } }(e)), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], function(i) { return function() { i.onScroll(i) } }(e))
                })
            }(t, e), !0)
        }

        function o(i) { var t; try { t = i[0].getBoundingClientRect().width } catch (i) {} return void 0 === t && (t = i.width()), t }
        return (t = i.extend({ containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS" }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0,
            function(t, o) {
                e(t, o) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function(t, o) {
                    return function(a) {
                        var n = e(t, o);
                        n && i(this).unbind(a)
                    }
                }(t, o)), i(window).on("resize." + t.namespace, function(t, o) {
                    return function(a) {
                        var n = e(t, o);
                        n && i(this).unbind(a)
                    }
                }(t, o)))
            }(t, this), this
    }
}(jQuery);

! function(a) {
    a.fn.menusatr = function() {
        return this.each(function() {
            var $t = a(this),
                b = $t.find('.LinkList ul > li').children('a'),
                c = b.length;
            for (var i = 0; i < c; i++) {
                var d = b.eq(i),
                    h = d.text();
                if (h.charAt(0) !== '_') {
                    var e = b.eq(i + 1),
                        j = e.text();
                    if (j.charAt(0) === '_') {
                        var m = d.parent();
                        m.append('<ul class="sub-menu m-sub"/>');
                    }
                }
                if (h.charAt(0) === '_') {
                    d.text(h.replace('_', ''));
                    d.parent().appendTo(m.children('.sub-menu'));
                }
            }
            for (var i = 0; i < c; i++) {
                var f = b.eq(i),
                    k = f.text();
                if (k.charAt(0) !== '_') {
                    var g = b.eq(i + 1),
                        l = g.text();
                    if (l.charAt(0) === '_') {
                        var n = f.parent();
                        n.append('<ul class="sub-menu2 m-sub"/>');
                    }
                }
                if (k.charAt(0) === '_') {
                    f.text(k.replace('_', ''));
                    f.parent().appendTo(n.children('.sub-menu2'));
                }
            }
            $t.find('.LinkList ul li ul').parent('li').addClass('has-sub');
        });
    }
}(jQuery);

! function(n) {
    n.fn.lazyssatr = function() {
        return this.each(function() {
            var o, t = n(this),
                a = n(window),
                e = t.attr("data-src"),
                h = "w" + Math.round(t.width() + t.width() / 10) + "-h" + Math.round(t.height() + t.height() / 10) + "-p-k-no-nu";
            noThumbnail = "undefined" != typeof noThumbnail ? noThumbnail : "//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png", e.match("resources.blogblog.com") && (e = noThumbnail), o = e.match("/s72-c") ? e.replace("/s72-c", "/" + h) : e.match("/w72-h") ? e.replace("/w72-h72-p-k-no-nu", "/" + h) : e.match("=w72-h") ? e.replace("=w72-h72-p-k-no-nu", "=" + h) : e, t.is(":hidden") || a.on("load resize scroll", function n() {

                a.off("load resize scroll", n);
                var e = new Image;
                e.onload = function() { t.attr("src", "" + this.src + "").addClass("lazy-satr") }, e.src = o

            })
        })
    }
}(jQuery);
$(".logo-img img").lazyssatr();
! function(n) {
    n.fn.lazysatr = function() {
        return this.each(function() {
            var o, t = n(this),
                a = n(window),
                e = t.attr("data-image"),
                h = "w" + Math.round(t.width() + t.width() / 10) + "-h" + Math.round(t.height() + t.height() / 10) + "-p-k-no-nu";
            noThumbnail = "undefined" != typeof noThumbnail ? noThumbnail : "//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png", e.match("resources.blogblog.com") && (e = noThumbnail), o = e.match("/s72-c") ? e.replace("/s72-c", "/" + h) : e.match("/w72-h") ? e.replace("/w72-h72-p-k-no-nu", "/" + h) : e.match("=w72-h") ? e.replace("=w72-h72-p-k-no-nu", "=" + h) : e, t.is(":hidden") || a.on("load resize scroll", function n() {
                if (a.scrollTop() + a.height() >= t.offset().top) {
                    a.off("load resize scroll", n);
                    var e = new Image;
                    e.onload = function() { t.attr("style", "background-image:url(" + this.src + ")").addClass("lazy-satr") }, e.src = o
                }
            }).trigger("scroll")
        })
    }
}(jQuery);
/*! jQuery replaceText | v1.1.0 - https://benalman.com/projects/jquery-replacetext-plugin/ */
! function(e) {
    e.fn.replaceText = function(n, t, i) {
        return this.each(function() {
            var o, r, l = this.firstChild,
                u = [];
            if (l)
                do { 3 === l.nodeType && (r = (o = l.nodeValue).replace(n, t)) !== o && (!i && /</.test(r) ? (e(l).before(r), u.push(l)) : l.nodeValue = r) } while (l = l.nextSibling);
            u.length && e(u).remove()
        })
    }
}(jQuery);

/*! Table of Contents | v0.4.0 - https://github.com/ndabas/toc */
! function(t) {
    "use strict";
    var n = function(n) {
            return this.each(function() {
                var e, i, a = t(this),
                    o = a.data(),
                    c = [a],
                    r = this.tagName,
                    d = 0;
                e = t.extend({ content: "body", headings: "h1,h2,h3" }, { content: o.toc || void 0, headings: o.tocHeadings || void 0 }, n), i = e.headings.split(","), t(e.content).find(e.headings).attr("id", function(n, e) { return e || function(t) { 0 === t.length && (t = "?"); for (var n = t.replace(/\s+/g, "_"), e = "", i = 1; null !== document.getElementById(n + e);) e = "_" + i++; return n + e }(t(this).text()) }).each(function() {
                    var n = t(this),
                        e = t.map(i, function(t, e) { return n.is(t) ? e : void 0 })[0];
                    if (e > d) {
                        var a = c[0].children("li:last")[0];
                        a && c.unshift(t("<" + r + "/>").appendTo(a))
                    } else c.splice(0, Math.min(d - e, Math.max(c.length - 1, 0)));
                    t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href", "#" + n.attr("id"))), d = e
                })
            })
        },
        e = t.fn.toc;
    t.fn.toc = n, t.fn.toc.noConflict = function() { return t.fn.toc = e, this }, t(function() { n.call(t("[data-toc]")) })
}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
! function(e) {
    var n;
    if ("function" == typeof define && define.amd) define(["jquery"], e);
    else if ("object" == typeof exports) {
        try { n = require("jquery") } catch (e) {}
        module.exports = e(n)
    } else {
        var o = window.Cookies,
            r = window.Cookies = e(window.jQuery);
        r.noConflict = function() { return window.Cookies = o, r }
    }
}(function(e) {
    var n = /\+/g;

    function o(e) { return u.raw ? e : encodeURIComponent(e) }

    function r(e) { return o(u.json ? JSON.stringify(e) : String(e)) }

    function t(e, o) { var r = u.raw ? e : function(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(n, " ")), u.json ? JSON.parse(e) : e } catch (e) {} }(e); return c(o) ? o(r) : r }

    function i() {
        for (var e, n, o = 0, r = {}; o < arguments.length; o++)
            for (e in n = arguments[o]) r[e] = n[e];
        return r
    }

    function c(e) { return "[object Function]" === Object.prototype.toString.call(e) }
    var u = function(e, n, f) {
        if (arguments.length > 1 && !c(n)) {
            if ("number" == typeof(f = i(u.defaults, f)).expires) {
                var s = f.expires,
                    a = f.expires = new Date;
                a.setMilliseconds(a.getMilliseconds() + 864e5 * s)
            }
            return document.cookie = [o(e), "=", r(n), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
        }
        for (var d, p = e ? void 0 : {}, l = document.cookie ? document.cookie.split("; ") : [], m = 0, v = l.length; m < v; m++) {
            var g = l[m].split("="),
                w = (d = g.shift(), u.raw ? d : decodeURIComponent(d)),
                j = g.join("=");
            if (e === w) { p = t(j, n); break }
            e || void 0 === (j = t(j)) || (p[w] = j)
        }
        return p
    };
    return u.get = u.set = u, u.defaults = {}, u.remove = function(e, n) { return u(e, "", i(n, { expires: -1 })), !u(e) }, e && (e.cookie = u, e.removeCookie = u.remove), u
});

function shortCodesatr(e, t, a) { for (var s = e.split("$"), i = /[^{\}]+(?=})/g, r = 0; r < s.length; r++) { var o = s[r].split("="); if (o[0].trim() == t) return null != (a = o[1]).match(i) && String(a.match(i)).trim() } return !1 }

function msgError() {
    return '<span class="error-msg">' + error + '</span>'
}

function beforeLoader() { return '<div class="loader"></div>' }

function getFeedUrl(e, t, a, s) {
    switch (a) {
        case "recent":
            s = "/feeds/posts/default?alt=json&max-results=" + t;
            break;
        default:
            s = "comments" == e ? "/feeds/comments/default?alt=json&max-results=" + t : "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t
    }
    return s
}

function getPostLink(e, t) {
    for (var a = 0; a < e[t].link.length; a++)
        if ("alternate" == e[t].link[a].rel) { var s = e[t].link[a].href; break }
    return s
}

function getPostTitle(e, t, a) { return e[t].title.$t ? e[t].title.$t : exportsatr.noTitle }

function getPostTag(e, t, a) { return e[t].category ? '<span class="entry-category">' + e[t].category[0].term + "</span>" : "" }

function getPostAuthor(e, t, a, s) { return s = "" != exportsatr.postAuthorLabel ? '<span class="sp">' + exportsatr.postAuthorLabel + "</span>" : "", exportsatr.postAuthor ? '<span class="entry-author mi">' + s + '<span class="author-name">' + e[t].author[0].name.$t + "</span></span>" : "" }

function getPostDate(e, t, a, s, i, r) {
    monthNames = "undefined" != typeof monthNames ? monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dateFormat = "undefined" != typeof dateFormat ? dateFormat : "{m} {d}, {y}";
    var o = e[t].published.$t,
        n = o.substring(0, 4),
        l = o.substring(5, 7),
        c = o.substring(8, 10),
        d = dateFormat.replace("{m}", monthNames[parseInt(l, 10) - 1]).replace("{d}", c).replace("{y}", n);
    return r = exportsatr.postAuthor && "" != exportsatr.postDateLabel ? '<span class="sp">' + exportsatr.postDateLabel + "</span>" : "", [1 == exportsatr.postDate ? '<span class="entry-time mi">' + r + '<time class="published" datetime="' + o + '">' + d + "</time></span>" : "", 1 == exportsatr.postDate ? '<span class="entry-time mi"><time class="published" datetime="' + o + '">' + d + "</time></span>" : ""]
}

function MM() {
    for (let MM of document.querySelectorAll('script'))
        if (MM.getAttribute('id') == 'MM' && MM.getAttribute('src') == '') return MM
}
if (MM()) {
    function getPostMeta(e, t, a, s, i) { return [1 == exportsatr.postAuthor || 1 == exportsatr.postDate ? '<div class="entry-meta">' + e + t[0] + "</div>" : "", 1 == exportsatr.postDate ? '<div class="entry-meta">' + t[1] + "</div>" : ""] }
}

function getFirstImage(e, t) {
    var a = $("<div>").html(e).find("img:first").attr("src"),
        s = a.lastIndexOf("/") || 0,
        i = a.lastIndexOf("/", s - 1) || 0,
        r = a.substring(0, i),
        o = a.substring(i, s),
        n = a.substring(s);
    return (o.match(/\/s[0-9]+/g) || o.match(/\/w[0-9]+/g) || "/d" == o) && (o = "/w72-h72-p-k-no-nu"), r + o + n
}

function getPostImage(e, t, a, s) { var i = e[t].content.$t; return a = e[t].media$thumbnail ? e[t].media$thumbnail.url : "https://resources.blogblog.com/img/blank.gif", i.indexOf(i.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? i.indexOf("<img") > -1 ? i.indexOf(i.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < i.indexOf("<img") ? a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : getFirstImage(i) : a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : i.indexOf("<img") > -1 ? getFirstImage(i) : "https://resources.blogblog.com/img/blank.gif" }

function getPostImageType(e, t) { return e.match("i.ytimg.com") ? "is-video" : "is-image" }
if (MM()) {
    function getPostComments(e, t, a, s) {
        var i = e[t].author[0].name.$t,
            r = e[t].author[0].gd$image.src.replace("/s113", "/s72-c").replace("/s220", "/s72-c"),
            o = e[t].title.$t;
        return (r.match("//img1.blogblog.com/img/blank.gif") || r.match("//img1.blogblog.com/img/b16-rounded.gif")) && (r = "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg"), '<div class="cmm1-item item-' + t + '"><a class="entry-inner wrap-all-link" href="' + a + '" title="' + i + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + r + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + i + '</h2><p class="cmm-snippet excerpt">' + o + "</p></div></a></div>"
    }
}

function getAjax(e, t, a, s) {
    switch (t) {
        case "msimple":
        case "block1":
        case "block2":
        case "grid1":
        case "grid2":
        case "colLeft":
        case "colRight":
        case "video":
        case "default":
        case "mini":
        case "comments":
        case "related":
            0 == s && (s = "geterror404");
            var i = getFeedUrl(t, a, s);
            $.ajax({
                url: i,
                type: "GET",
                dataType: "json",
                cache: !0,
                beforeSend: function(a) {
                    switch (t) {
                        case "block1":
                        case "block2":
                        case "grid1":
                        case "grid2":
                        case "video":
                        case "default":
                        case "mini":
                        case "comments":
                        case "related":
                            e.html(beforeLoader()).parent().addClass("type-" + t);
                            break;
                        case "colLeft":
                        case "colRight":
                            e.html(beforeLoader())
                    }
                },
                success: function(a) {
                    var i = "";
                    switch (t) {
                        case "msimple":
                            i = '<div class="ul mega-items">';
                            break;
                        case "block1":
                        case "block2":
                        case "grid1":
                        case "grid2":
                        case "video":
                            i = '<div class="content-block ' + t + '-items">';
                            break;
                        case "colLeft":
                        case "colRight":
                            i = '<div class="content-block col-items ' + t + '-items">';
                            break;
                        case "default":
                            i = '<div class="default-items">';
                            break;
                        case "mini":
                            i = '<div class="mini-items">';
                            break;
                        case "comments":
                            i = '<div class="cmm1-items">';
                            break;
                        case "related":
                            i = '<div class="related-posts">'
                    }
                    var r = a.feed.entry;
                    if (null != r)
                        for (var o = 0, n = r; o < n.length; o++) {
                            var l = n.length,
                                c = getPostLink(n, o),
                                d = getPostTitle(n, o),
                                m = getPostTag(n, o),
                                h = getPostAuthor(n, o),
                                f = getPostDate(n, o, m),
                                p = getPostImage(n, o),
                                u = getPostImageType(p, o),
                                g = getPostMeta(h, f),
                                y = "";
                            switch (t) {
                                case "msimple":
                                    y += '<div class="mega-item post"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"></span></a><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div>";
                                    break;
                                case "block1":
                                    switch (o) {
                                        case 0:
                                            y += '<div class="block1-left"><div class="block1-item card-style item-' + o + '"><a title="' + d + '" class="entry-image-wrap before-mask ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header entry-info">' + m + '<h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[0] + "</div></div></div>";
                                            break;
                                        default:
                                            y += (1 == o ? '<div class="block1-right">' : "") + '<div class="block1-item item-' + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div></div>" + (o == l - 1 ? "</div>" : "")
                                    }
                                    break;
                                case "block2":
                                    switch (o) {
                                        case 0:
                                            y += '<div class="block2-item card-style item-' + o + '"><a title="' + d + '" class="entry-image-wrap before-mask ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header entry-info">' + m + '<h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[0] + "</div></div>";
                                            break;
                                        default:
                                            y += '<div class="block2-item item-' + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div></div>"
                                    }
                                    break;
                                case "grid1":
                                case "grid2":
                                    y += '<div class="' + t + "-item item-" + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"></span></a><div class="entry-header"><h2 class="entry-title"><a title="' + d + '" href="' + c + '">' + d + "</a></h2>" + ("grid2" == t ? "" + g[0] : "" + g[1]) + "</div></div>";
                                    break;
                                case "colLeft":
                                case "colRight":
                                    switch (o) {
                                        case 0:
                                            y += '<div class="col-item card-style item-' + o + '"><a title="' + d + '" class="entry-image-wrap before-mask ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header entry-info">' + m + '<h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[0] + "</div></div>";
                                            break;
                                        default:
                                            y += '<div class="col-item item-' + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div></div>"
                                    }
                                    break;
                                case "video":
                                    y += '<div class="video-item card-style item-' + o + '"><a title="' + d + '" class="entry-image-wrap before-mask is-video" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"></span></a><div class="entry-header entry-info">' + m + '<h2 class="entry-title"><a title="' + d + '" href="' + c + '">' + d + "</a></h2>" + (0 == o ? "" + g[0] : "" + g[1]) + "</div></div>";
                                    break;
                                case "default":
                                    switch (o) {
                                        case 0:
                                            y += '<div class="default-item card-style item-' + o + '"><a title="' + d + '" class="entry-image-wrap before-mask ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header entry-info">' + m + '<h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[0] + "</div></div>";
                                            break;
                                        default:
                                            y += '<div class="default-item item-' + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div></div>"
                                    }
                                    break;
                                case "mini":
                                    y += '<div class="mini-item item-' + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><span class="entry-thumb" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div></div>";
                                    break;
                                case "comments":
                                    y += getPostComments(n, o, c);
                                    break;
                                case "related":
                                    y += '<div class="related-item item-' + o + '"><a title="' + d + '" class="entry-image-wrap ' + u + '" href="' + c + '"><div class="overlay1"></div><span class="entry-thumb" data-image="' + p + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + g[1] + "</div></div>"
                            }
                            i += y
                        } else switch (t) {
                            case "msimple":
                                i = '<div class="ul mega-items no-items">' + msgError() + "</div>";
                                break;
                            default:
                                i = msgError()
                        }
                    switch (t) {
                        case "msimple":
                            i += "</div>", e.append(i).addClass("msimple"), e.find("a:first").attr("href", function(e, t) {
                                switch (s) {
                                    case "recent":
                                        t = t.replace(t, "/search");
                                        break;
                                    default:
                                        t = t.replace(t, "/search/label/" + s)
                                }
                                return t
                            });
                            break;
                        default:
                            i += "</div>", e.html(i)
                    }
                    e.find("span.entry-thumb").lazysatr()
                },
                error: function() {
                    switch (t) {
                        case "msimple":
                            e.append('<div class="ul mega-items no-items">' + msgError() + "</div>");
                            break;
                        default:
                            e.html(msgError())
                    }
                }
            })
    }
}
if (MM()) {
    function ajaxMega(e, t, a, s, i) {
        if (i.match("getcontent")) {
            if ("msimple" == t) return getAjax(e, t, a, s);
            e.append('<div class="ul mega-items no-items">' + msgError() + "</div>")
        }
    }
}
if (MM()) {
    function ajaxBlock(e, t, a, s, i, r, o) {
        if (i.match("getcontent")) {
            if ("block1" == t || "block2" == t || "grid1" == t || "grid2" == t || "colLeft" == t || "colRight" == t || "video" == t) return 0 != s && (r = "recent" == s ? "/search" : "/search/label/" + s, o = "" != viewAllText.trim() ? viewAllText : exportsatr.viewAll, e.parent().find(".widget-title").append('<a href="' + r + '" class="wt-l">' + o + "</a>")), getAjax(e, t, a, s);
            e.html(msgError())
        }
    }
}
if (MM()) {
    function ajaxWidget(e, t, a, s, i) {
        if (i.match("getcontent")) {
            if ("default" == t || "mini" == t || "comments" == t) return getAjax(e, t, a, s);
            e.html(msgError())
        }
    }
}
if (MM()) {
    function ajaxRelated(e, t, a, s) { return getAjax(e, t, a, s) }
}

function beautiAvatar(e) { $(e).attr("src", function(e, t) { return t = (t = (t = t.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35", "/s39") }) }
if (MM()) {
    function fixedSidebarsatr(e) { $(e).each(function(e) { fixedSidebar = "undefined" == typeof fixedSidebar || fixedSidebar, 1 == fixedSidebar && (e = 1 == fixedMenu ? 77 : 25, $(this).theiaStickySidebar({ containerSelector: "#content-wrapper > .container", additionalMarginTop: e, additionalMarginBottom: 25 })) }) }
}
fixedMenu = "undefined" == typeof fixedMenu || fixedMenu, viewAllText = "undefined" != typeof viewAllText ? viewAllText : exportsatr.viewAll, $("#TECNO-pro-main-nav").menusatr(), $("#TECNO-pro-main-nav .widget").addClass("show-menu"), $(".show-search").on("click", function() { $("body").addClass("search-active"), $("#main-search-wrap").fadeIn(170).find("input").focus() }), $(".hide-search").on("click", function() { $("body").removeClass("search-active"), $("#main-search-wrap").fadeOut(170).find("input").val("").blur() }), $("html").each(function() {
    var e = $(this);
    darkMode = "undefined" != typeof darkMode && darkMode, userDarkMode = "undefined" == typeof userDarkMode || userDarkMode, 1 != darkMode && 0 != userDarkMode && ("dark" == localStorage.themeColor && e.addClass("is-dark"), $(".darkmode-toggle").on("click", function() { "dark" != localStorage.themeColor ? (e.addClass("is-dark"), localStorage.themeColor = "dark") : (e.removeClass("is-dark"), localStorage.themeColor = "light") }))
}), $(".bp-title a.wt-l").each(function() { "" != viewAllText.trim() && $(this).text(viewAllText) }), $(".sidebar .social-icons li a").each(function(e) {
    var t = $(this),
        a = t.attr("href").split("#");
    null != a[1] && "" != (e = a[1].trim()) && t.append('<span class="text">' + e + "</span>"), t.attr("href", a[0].trim())
}), $(".post-body a").each(function() {
    var e = $(this),
        t = e.html(),
        a = t.toLowerCase(),
        s = shortCodesatr(t, "text"),
        i = shortCodesatr(t, "icon"),
        r = shortCodesatr(t, "color");
    a.match("getbutton") && 0 != s && (e.addClass("button btn").text(s), 0 != i && e.addClass(i), 0 != r && e.addClass("colored-button").attr("style", "background-color:" + r + ";"))
}), $(".item-post-inner b").each(function() {
    var e = $(this),
        t = e.text(),
        a = t.toLowerCase().trim();
    a.match(/(?:\$ads\=\{1\})/g) && e.replaceWith('<div id="TECNO-pro-new-before-ad"/>'), a.match(/(?:\$ads\=\{2\})/g) && e.replaceWith('<div id="TECNO-pro-new-after-ad"/>'), a.match("{tocsatr}") && (t = 0 != shortCodesatr(t, "title") ? shortCodesatr(t, "title") : "Table of Contents", e.replaceWith('<div class="tocsatr-wrap"><div class="tocsatr-inner"><a href="javascript:;" class="tocsatr-title" role="button" title="' + t + '"><span class="tocsatr-title-text">' + t + '</span></a><ol id="tocsatr"></ol></div></div>'), $(".tocsatr-title").each(function(e) {
        (e = $(this)).on("click", function() { e.toggleClass("is-expanded"), $("#tocsatr").slideToggle(170) })
    }), $("#tocsatr").toc({ content: "#post-body", headings: "h2,h3,h4" }), $("#tocsatr li a").each(function(e) {
        (e = $(this)).click(function() { return $("html,body").animate({ scrollTop: ($(e.attr("href")).offset().top) - 20 }, 500), !1 })
    })), a.match("{contactform}") && (e.replaceWith('<div class="contact-form"/>'), $(".contact-form").append($("#ContactForm1"))), a.match("{leftsidebar}") && ($("body").addClass("is-left"), e.remove()), a.match("{rightsidebar}") && ($("body").addClass("is-right"), e.remove()), a.match("{fullwidth}") && ($("body").addClass("no-sidebar"), e.remove())
}), $("#TECNO-pro-new-before-ad").each(function() {
    var e = $(this);
    e.length && $("#before-ad").appendTo(e)
}), $("#TECNO-pro-new-after-ad").each(function() {
    var e = $(this);
    e.length && $("#after-ad").appendTo(e)
}), $("#TECNO-pro-main-before-ad .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#before-ad"))
}), $("#TECNO-pro-main-after-ad .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#after-ad"))
}), $("#TECNO-pro-post-footer-ads .widget").each(function() {
    var e = $(this);
    e.length && e.appendTo($("#post-footer-ads"))
}), $(".post-body blockquote").each(function() {
    var e = $(this),
        t = e.text().toLowerCase().trim(),
        a = e.html();
    if (t.match("{alertsuccess}")) {
        const t = a.replace("{alertSuccess}", "");
        e.replaceWith('<div class="alert-message alert-success">' + t + "</div>")
    }
    if (t.match("{alertinfo}")) {
        const t = a.replace("{alertInfo}", "");
        e.replaceWith('<div class="alert-message alert-info">' + t + "</div>")
    }
    if (t.match("{alertwarning}")) {
        const t = a.replace("{alertWarning}", "");
        e.replaceWith('<div class="alert-message alert-warning">' + t + "</div>")
    }
    if (t.match("{alerterror}")) {
        const t = a.replace("{alertError}", "");
        e.replaceWith('<div class="alert-message alert-error">' + t + "</div>")
    }
    if (t.match("{codebox}")) {
        const t = a.replace("{codeBox}", "");
        e.replaceWith('<pre class="code-box">' + t + "</pre>")
    }
}), $(".entry-share-links .window-satr,.TECNO-pro-share-links .window-satr").on("click", function() {
    var e = $(this),
        t = e.data("url"),
        a = e.data("width"),
        s = e.data("height"),
        i = window.screen.width,
        r = window.screen.height,
        o = Math.round(i / 2 - a / 2),
        n = Math.round(r / 2 - s / 2);
    window.open(t, "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + a + ",height=" + s + ",left=" + o + ",top=" + n).focus()
}), $(".TECNO-pro-share-links").each(function() {
    var e = $(this);
    e.find(".show-hid a").on("click", function() { e.toggleClass("show-hidden") })
}), $(".about-author .author-text").each(function() {
    var e = $(this),
        t = e.find("a");
    t.each(function() {
        var e = $(this),
            t = e.text().trim(),
            a = e.attr("href");
        e.replaceWith('<li class="' + t + '"><a href="' + a + '" title="' + t + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), t.length && e.parent().append('<ul class="author-links social social-color"></ul>'), e.find("li").appendTo(".author-links")
}), $("#TECNO-pro-main-nav-menu li.mega-menu").each(function(e, t) {
    var a = $(this),
        s = a.find("a").data("shortcode");
    null != s && (e = s.toLowerCase(), ajaxMega(a, "msimple", 5, shortCodesatr(s, "label"), e))
}), $(".content-section .HTML .widget-content").each(function(e, t, a) {
    var s = $(this),
        i = $(window),
        r = s.data("shortcode");
    null != r && (mtc = r.toLowerCase(), e = shortCodesatr(r, "results"), t = shortCodesatr(r, "label"), "colLeft" != (a = shortCodesatr(r, "type")) && "colRight" != a || s.parent().addClass("column-style type-" + a), i.on("resize scroll", function r() { i.scrollTop() + i.height() >= s.offset().top && (i.off("resize scroll", r), ajaxBlock(s, a, e, t, mtc)) }).trigger("scroll"))
}), $(".TECNO-pro-widget-ready .HTML .widget-content").each(function(e, t, a, s) {
    var i = $(this),
        r = $(window),
        o = i.data("shortcode");
    null != o && (e = o.toLowerCase(), t = shortCodesatr(o, "results"), a = shortCodesatr(o, "label"), s = shortCodesatr(o, "type"), r.on("resize scroll", function o() { r.scrollTop() + r.height() >= i.offset().top && (r.off("resize scroll", o), ajaxWidget(i, s, t, a, e)) }).trigger("scroll"))
}), $("#TECNO-pro-related-posts .HTML").each(function(e, t) {
    var a = $(this).data("shortcode");
    if (null != a) {
        function s() { return e = shortCodesatr(a, "title"), t = shortCodesatr(a, "results"), [e, t] }
        $("#related-wrap").each(function(e, t) {
            var a = $(this),
                i = $(window),
                r = a.find(".TECNO-pro-related-content"),
                o = s();
            e = 0 != o[1] ? o[1] : 3, 0 != o[0] && a.find(".related-title .title").text(o[0]), t = a.find(".related-tag").data("label"), i.on("resize scroll", function a() { i.scrollTop() + i.height() >= r.offset().top && (i.off("resize scroll", a), ajaxRelated(r, "related", e, t)) }).trigger("scroll")
        })
    }
}), $(".TECNO-pro-blog-post-comments").each(function() {
    var e = $(this),
        t = e.data("shortcode"),
        a = shortCodesatr(t, "type"),
        s = "comments-system-" + a,
        i = e.find("#top-continue .comment-reply");
    switch (a) {
        case "disqus":
            var r = shortCodesatr(t, "shortname");
            0 != r && (disqus_shortname = r), disqusComments(disqus_shortname), e.addClass(s).show();
            break;
        case "facebook":
            e.addClass(s).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-numposts="5" data-lazy="true"></div>'), e.show();
            break;
        case "hide":
            e.hide();
            break;
        default:
            e.addClass("comments-system-blogger").show(), $(".entry-meta .entry-comments-link").addClass("show"), i.addClass("btn"), beautiAvatar(".avatar-image-container img")
    }
    var o = e.find(".comments .comment-reply"),
        n = e.find(".comments #top-continue"),
        l = e.find("#top-ce.comment-replybox-thread");
    o.on("click", function() { n.show(), l.hide() }), n.on("click", function() { n.hide(), l.show() })
}), $(function() {
    $(".entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar").lazysatr(), $("#TECNO-pro-mobile-menu").each(function() {
        var e = $(this),
            t = $("#TECNO-pro-main-nav-menu").clone();
        t.attr("id", "main-mobile-nav"), t.find(".mega-items").remove(), t.find(".mega-menu > a").each(function(e, t) {
            var a = $(this),
                s = a.data("shortcode");
            null != s && (t = "recent" == (e = shortCodesatr(s.trim(), "label")) ? "/search" : "/search/label/" + e, a.attr("href", t))
        }), t.appendTo(e), $(".mobile-menu-toggle, .hide-TECNO-pro-mobile-menu, .overlay").on("click", function() { $("body").toggleClass("nav-active") }), $(".TECNO-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".TECNO-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(), $(".TECNO-pro-mobile-menu ul li .submenu-toggle").on("click", function(e) { $(this).parent().hasClass("has-sub") && (e.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170)) })
    }), $(".mm-footer .mm-social").each(function() {
        var e = $(this);
        $("#topbar-social ul.social").clone().appendTo(e)
    }), $(".mm-footer .mm-menu").each(function() {
        var e = $(this);
        $("#topbar-menu ul.link-list").clone().appendTo(e)
    }), $(".header-inner").each(function() {
        var e = $(this);
        if (1 == fixedMenu && e.length > 0) {
            var t = $(document).scrollTop(),
                a = e.offset().top,
                s = e.height(),
                i = a + s + s;
            $(window).scroll(function() {
                var s = $(document).scrollTop();
                s > i ? e.addClass("is-fixed") : (s < a || s <= 1) && e.removeClass("is-fixed"), s > t ? e.removeClass("show") : e.addClass("show"), t = s
            })
        }
    }), fixedSidebarsatr("#main-wrapper, #sidebar-wrapper"), $("#post-body iframe").each(function() {
        var e = $(this);
        e.attr("src").match("www.youtube.com") && e.wrap('<div class="responsive-video-wrap"/>')
    }), $("p.comment-content").each(function() {
        var e = $(this);
        e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $("#TECNO-pro-load-more-link").each(function() {
        var e = $(this).data("load");
        e && $("#TECNO-pro-load-more-link").show(), $("#TECNO-pro-load-more-link").on("click", function(t) {
            $("#TECNO-pro-load-more-link").hide(), $.ajax({
                url: e,
                success: function(t) {
                    var a = $(t).find(".blog-posts");
                    a.find(".index-post").addClass("post-animated post-fadeInUp"), $(".blog-posts").append(a.html()), (e = $(t).find("#TECNO-pro-load-more-link").data("load")) ? $("#TECNO-pro-load-more-link").show() : ($("#TECNO-pro-load-more-link").hide(), $("#blog-pager .no-more").addClass("show"))
                },
                beforeSend: function() { $("#blog-pager .loading").show() },
                complete: function() { $("#blog-pager .loading").hide(), $(".index-post .entry-image-wrap .entry-thumb").lazysatr(), fixedSidebarsatr("#main-wrapper") }
            }), t.preventDefault()
        })
    }), $("#TECNO-pro-cookie-satr").each(function() {
        var e = $(this),
            t = e.find(".widget.Text").data("shortcode");
        null != t && (ok = shortCodesatr(t, "ok"), days = shortCodesatr(t, "days"), 0 != ok && e.find("#TECNO-pro-cookie-satr-accept").text(ok), 0 != days ? days = Number(days) : days = 7), e.length > 0 && ("1" !== $.cookie("TECNO_pro_cookie_satr_consent") && (e.css("display", "block"), setTimeout(function() { e.addClass("is-visible") }, 10)), $("#TECNO-pro-cookie-satr-accept").off("click").on("click", function(t) { t.preventDefault(), t.stopPropagation(), $.cookie("TECNO_pro_cookie_satr_consent", "1", { expires: days, path: "/" }), e.removeClass("is-visible"), setTimeout(function() { e.css("display", "none") }, 500) }), cookieChoices = {})
    }), $(".back-top").each(function() {
        var e = $(this);
        $(window).on("scroll", function() { $(this).scrollTop() >= 100 ? e.fadeIn(170) : e.fadeOut(170), e.offset().top >= $("#footer-wrapper").offset().top - 34 ? e.addClass("on-footer") : e.removeClass("on-footer") }), e.on("click", function() { $("html, body").animate({ scrollTop: 0 }, 500) })
    })
});



$(document).ready(function() {
    var e = window.location.protocol + "//" + window.location.hostname;
    $.ajax({
        url: "" + e + "/feeds/posts/default?alt=json-in-script&amp;max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            function t() {
                $("#recentbreaking li:first").slideUp(function() {
                    $(this).appendTo($("#recentbreaking ul")).slideDown()
                })
            }
            var n, r, a = "",
                i = e.feed.entry;
            if (void 0 !== i) {
                a = "<ul>";
                for (var l = 0; l < i.length; l++) {
                    for (var s = 0; s < i[l].link.length; s++)
                        if ("alternate" == i[l].link[s].rel) {
                            n = i[l].link[s].href;
                            break
                        }
                    r = i[l].title.$t, a += '<li><a href="' + n + '" target="_blank">' + r + "</a></li>"
                }
                a += "</ul>", $("#recentbreaking").html(a), setInterval(function() {
                    t()
                }, 5e3)
            } else $("#recentbreaking").html("<span>" + b7eak + " < /span>")
        },
        error: function() {
            $("#recentbreaking").html("<strong>" + error + "</strong>")
        }
    })
});

var TransBreakNews = document.getElementById("TransBreakNews");
TransBreakNews.innerHTML = BreakNews;
document.querySelector(".OpenSitting").onclick = function() {
    document.querySelector(".settings-box").classList.add("open")
};
document.querySelector(".OpenSitting1").onclick = function() {
    document.querySelector(".settings-box").classList.add("open")
};
document.querySelector(".toggle-settings").onclick = function() {
    document.querySelector(".settings-box").classList.remove("open")
};
(localStorage.getItem('is-read')) === 'rdmode' ? document.querySelector('body').classList.add('is-read'): document.querySelector('body').classList.remove('is-read');

function ReadMode() { localStorage.setItem("is-read", "rdmode" === localStorage.getItem("is-read") ? "is-read" : "rdmode"), "rdmode" === localStorage.getItem("is-read") ? document.querySelector("body").classList.add("is-read") : document.querySelector("body").classList.remove("is-read") };

(localStorage.getItem('is-boxed')) === 'is-boxedmode' ? document.querySelector('body').classList.remove('is-boxed'): document.querySelector('body').classList.add('is-boxed');

function boxedMode() { localStorage.setItem("is-boxed", "is-boxedmode" === localStorage.getItem("is-boxed") ? "is-boxed" : "is-boxedmode"), "is-boxedmode" === localStorage.getItem("is-boxed") ? document.querySelector("body").classList.remove("is-boxed") : document.querySelector("body").classList.add("is-boxed") };

let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
    document.documentElement.style.setProperty('--cl', localStorage.getItem("color_option"));
    document.querySelector("html").classList.add("active-color");
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
            document.querySelector("html").classList.add("active-color");
        }
    });
}

const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--cl', e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        document.querySelector("html").classList.add("active-color");
    });
});
$(document).ready(function() {
    var idBlog = "6801990976413898746";
    $(function() {
        "use strict";
        $.ajax({
            dataType: "json",
            url: "https://www.blogger.com/feeds/" + idBlog + "/posts/default?alt=json-in-script",
            method: "GET",
            dataType: "jsonp",
            success: function(e) {
                var t;
                for (t = 0; t < e.feed.entry.length; t += 1) {
                    var n = $(e.feed.entry[t].content.$t);
                    if (0 === t && !$("body").hasClass("error_page")) {
                        for (var o = n.find("li"), d = [], a = 0; a < o.length; a += 1) d.push($(o[a]).text());
                        var r,
                            i = window.location.hostname.toLowerCase(),
                            f = window.location.href.toLowerCase(),
                            s = d.length - 1;
                        for (r = 0; r < d.length; r += 1) {
                            if (-1 != i.indexOf(d[r])) {
                                var l = $(e.feed.entry[t].content.$t).find("script"),
                                    p = $(e.feed.entry[t].content.$t).find("style");
                                $("head").append(p), $("head").append(l);
                                break;
                            }
                            r == s &&
                                -1 == f.indexOf("post-preview") &&
                                -1 == f.indexOf("www.blogger") &&
                                -1 == f.indexOf("b/layout-preview") &&
                                -1 == f.indexOf("b/preview") &&
                                -1 == f.indexOf("translate.google") &&
                                -1 == f.indexOf("webcache.googleusercontent") &&
                                -1 == f.indexOf("template-editor") &&
                                $("html").html(n.find(".redirect").html());
                        }
                    }
                    if (1 === t) {
                        p = $(e.feed.entry[t].content.$t).find("style");
                        $("head").append(p);
                    }
                }
            },
        });
    });
});

$(document).ready(function() {
    $('#SatrRights').attr('style', 'display:inline-block !important;visibility: visible!important; opacity: 1!important;z-index: 1!important;').html('<span class="SatrRightsClass" style="position:absolute;top:0;width:32px;height:32px;margin-top:-5px;display:block!important;vertical-align: top"><a href="https://www.downapplication.com/" tooltip="SatrTemplate" title="تطبيقات الهواتف" target="_blank" style="visibility: visible!important;opacity: 1!important;position: relative!important;z-index: 1!important;width:32px!important;height:32px!important;background: url(https://1.bp.blogspot.com/-xwBSDV9FloA/YdIQvzKM8iI/AAAAAAAABN4/ClRNTUem8RoF35VuMlPuMTHdONzTivctgCNcBGAsYHQ/s32/%25D8%25B3%25D8%25B7%25D8%25B1%2B%25D8%25AA%25D9%2582%25D9%2586%25D9%258A%25D9%2587.webp)  top no-repeat;display: block!important;vertical-align: top;"></a></span>');
    setInterval(function() { if (!$('#SatrRights:visible').length) { window.location.href = 'https://www.downapplication.com/' } }, 10000)
});

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("Time-date").innerText = time;
    document.getElementById("Time-date").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();

jQuery(document).ready(function($) {
    $('.header-random').each(function() {
        $.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: 'get',
            dataType: "jsonp",
            success: function(t) {
                t = t.feed.entry.length - 3, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1), $.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=1",
                    type: 'get',
                    dataType: "jsonp",
                    success: function(data) {
                        var url = "";
                        var rlink = '';
                        for (var i = 0; i < data.feed.entry.length; i++) {
                            for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                                if (data.feed.entry[i].link[j].rel == "alternate") {
                                    url = data.feed.entry[i].link[j].href;
                                    break
                                }
                            }
                            rlink += '<a title="Post Random" href="' + url + '"><i class="fas fa-random"/></a>'
                        }
                        $('.header-random').html(rlink)
                    }
                })
            }
        })
    })
});
$(document).ready(function() {
    for (let dd of document.querySelectorAll('body'))
        if (dd.getAttribute('name') == 'item') {
            $(".post-nav").each(function() {
                var t = $("a.prev-post").attr("href"),
                    n = $("a.next-post").attr("href");
                $.ajax({
                    url: t,
                    type: "get",
                    success: function(t) {
                        var n = $(t).find("h1.entry-title").text(),
                            a = postnavPrevText,
                            e = "",
                            s = $(t).find("#post-body img:first").attr("src");
                        void 0 === s && (s = noThumbnail), e += "<div class='nav-thumb'><img alt='" + n + "' src='" + s + "'/></div><div class='nav-content'><span>" + a + "</span><p class='truncate'>" + n + "</p></div>", $("a.prev-post").html(e)
                    }
                }), $.ajax({
                    url: n,
                    type: "get",
                    success: function(t) {
                        var n = $(t).find("h1.entry-title").text(),
                            a = postnavNextText,
                            e = "",
                            s = $(t).find("#post-body img:first").attr("src");
                        void 0 === s && (s = noThumbnail), e += "<div class='nav-thumb'><img alt='" + n + "' src='" + s + "'/></div><div class='nav-content'><span>" + a + "</span><p class='truncate'>" + n + "</p></div>", $("a.next-post").html(e)
                    }
                })
            });
            $(document).ready(function() { if ($('.post-body h4:visible,.post-body h3:visible,.post-body h2:visible').length == 0) { $(".tocsatr").css("display", "none"); } });
            const FontPlus = document.querySelector("#FontPlus"),
                FontMinus = document.querySelector("#FontMinus"),
                pobody = document.querySelector("#post-body");
            FontPlus.onclick = () => {
                pobodystyle = window.getComputedStyle(pobody, null).getPropertyValue('font-size');
                currentSize = parseFloat(pobodystyle);
                pobody.style.fontSize = (currentSize + 1) + 'px';
            }
            FontMinus.onclick = () => {
                pobodystyle = window.getComputedStyle(pobody, null).getPropertyValue('font-size');
                currentSize = parseFloat(pobodystyle);
                pobody.style.fontSize = (currentSize - 1) + 'px';
            };


            function get_text(b) { ret = ""; var d = b.childNodes.length; for (var a = 0; a < d; a++) { var c = b.childNodes[a]; if (c.nodeType != 8) { ret += c.nodeType != 1 ? c.nodeValue : get_text(c) } } return ret }
            var words = get_text(document.getElementById("post-body"));
            var count = words.split(" ").length;
            var avg = 200;
            var counted = count / avg;
            var maincount = Math.round(counted);
            document.getElementById("read-time").innerHTML = maincount + " " + timeWord + "";
        }
});


$(document).ready(function() {
    for (let dd of document.querySelectorAll('div'))
        if (dd.getAttribute('id') == 'post-body') {
            function radialTimer() {
                var e = this;
                this.seconds = 0, this.count = 0, this.degrees = 0, this.timerHTML = "<div class='clom radialtimer'><div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div></div><div class='clom radialbtn'><a class='areload' data-href='false' id='btn_reload'>" + redirect_T_Configure + "</a></div>", this.interval = null, this.timerContainer = null, this.number = null, this.slice = null, this.pie = null, this.pieRight = null, this.pieLeft = null, this.quarter = null, this.reload = null, this.history = "/p/" + page_redirect + ".html", this.ranQuerydata = function() {
                    var t = e.getQueryVariable("url");
                    e.reload.attr("data-href", t)
                }, this.ranQuerybtn = function() {
                    "false" == e.reload.attr("data-href") ? (e.reload.attr("href", "javascript:void(0)"), e.reload.html(redirect_T_err), e.reload.addClass("disabled")) : (e.reload.attr("href", e.reload.attr("data-href")), e.reload.html(redirect_T_ready), e.reload.addClass("active")), nobuttonn && "false" !== e.reload.attr("data-href") && window.location.replace(e.reload.attr("data-href"))
                }, this.getQueryVariable = function(e) {
                    for (var t = window.location.search.substring(1).split("&"), i = 0; i < t.length; i++) {
                        var r = t[i].split("=");
                        if (r[0] == e) return r[1]
                    }
                    return !1
                }, this.init = function(t, i) {
                    e.timerContainer = $("#" + t), e.timerContainer.html(e.timerHTML), e.number = e.timerContainer.find(".n"), e.slice = e.timerContainer.find(".slice"), e.pie = e.timerContainer.find(".pie"), e.pieRight = e.timerContainer.find(".pie.r"), e.pieLeft = e.timerContainer.find(".pie.l"), e.quarter = e.timerContainer.find(".q"), e.reload = e.timerContainer.find(".areload"), e.start(i), e.ranQuerydata(), e.timerContainer.length && history.pushState(null, "", e.history)
                }, this.start = function(t) {
                    e.seconds = t, e.interval = window.setInterval(function() {
                        e.number.html(e.seconds - 1 - e.count), e.count++, e.count > e.seconds - 1 && clearInterval(e.interval), e.degrees += 360 / e.seconds, e.count >= e.seconds / 2 ? (e.slice.addClass("nc"), e.slice.hasClass("mth") || e.pieRight.css({
                            transform: "rotate(180deg)"
                        }), e.pieLeft.css({
                            transform: "rotate(" + e.degrees + "deg)"
                        }), e.slice.addClass("mth"), e.count >= .75 * e.seconds - 1 && e.quarter.remove(), e.seconds - 1 == e.count && e.ranQuerybtn()) : e.pie.css({
                            transform: "rotate(" + e.degrees + "deg)"
                        })
                    }, 1e3)
                }
            }
            var page_redirect = void 0 !== Settingsredirect.pageName ? Settingsredirect.pageName : "redirect",
                redirect_T_Configure = void 0 !== Settingsredirect.waitingMessage ? Settingsredirect.waitingMessage : "‏جاري تهيئة الرابط",
                redirect_T_ready = void 0 !== Settingsredirect.linkReady ? Settingsredirect.linkReady : "الرابط جاهز",
                redirect_T_err = void 0 !== Settingsredirect.linkError ? Settingsredirect.linkError : "رابط معطل",
                redirect_timer = void 0 !== Settingsredirect.waitingTimer ? Settingsredirect.waitingTimer : "10",
                redirect_match = void 0 !== Settingsredirect.autoRedirectSites ? Settingsredirect.autoRedirectSites : "#",
                nobuttonn = void 0 !== Settingsredirect.nobuttonn && Settingsredirect.nobuttonn;
            $(document).ready(function() {
                (new radialTimer).init("SatrRedirect", redirect_timer)
            }), $(".post-body a").each(function() {
                var e = window.location.origin,
                    t = window.location.hostname,
                    i = new RegExp("(" + redirect_match + "|" + t + "|blogger.com|bp.blogspot.com|whatsapp:)");
                0 <= this.href.match(i) && 0 <= this.name.match("more") && ($(this).attr("href", e + "/p/" + page_redirect + ".html?&url=" + $(this).attr("href")), $(this).attr("target", "_blank"))
            });

        }
});
$(document).ready(function() {
    for (let dd of document.querySelectorAll('div'))
        if (dd.getAttribute('id') == 'archivepage') {
            fetch("/feeds/posts/summary?alt=json&max-results=0", { method: "get", headers: { "Content-Type": "application/json" } }).then(e => e.json()).then(e => {
                e.feed.category.forEach(function(e) {
                    var r = '<div class="caregory-div"><h2 class="Category-archivepage">' + e.term + '</h2></div><ol class="clear">';
                    fetch("/feeds/posts/summary/-/" + e.term + "?alt=json&max-results=1000", { method: "get", headers: { "Content-Type": "application/json" } }).then(e => e.json()).then(e => {
                        for (var t = 0; t < e.feed.entry.length; t += 1) {
                            var s = e.feed.entry[t].link.map(function(e) { return e.rel }).indexOf("alternate"),
                                a = e.feed.entry[t].link[s].href,
                                s = e.feed.entry[t].title.$t; - 1 !== a.indexOf(".blogspot.") && (a = a.replace("http://", "https://")), r += "<li><a class='rico-archivepage-posts' title='" + s + "' href='" + a + "'>" + s + "</a></li>"
                        }
                        document.querySelector("#archivepage").innerHTML += "</ol>" + r
                    })
                })
            });
        }
});
document.addEventListener('DOMContentLoaded', function() {
    for (let dd of document.querySelectorAll('div'))
        if (dd.getAttribute('id') == "postSplit") {
            function checkChildren(nodes, elemId) { for (i = 0; i < nodes.length; i++) { if (nodes[i].id == elemId) { return nodes[i]; } else { return checkChildren(nodes[i].children, elemId); } } }

            function isNumeric(value) { var type = typeof value; return (type === 'number' || type === 'string') && !Number.isNaN(value - Number.parseFloat(value)); }
            var nodes = document.querySelector('div.post-body').children;
            var splitdong = checkChildren(nodes, 'postSplit').innerHTML;
            var content = splitdong.split('nextpage');
            var url = window.location.href;
            var url = url.split('?page=');
            var no = url[1] + '&m=4';
            var no = no.split('m');
            var no = no[0];
            var no = no.replace('&', '');
            var url = url[0];
            var i = 1;
            if (!isNumeric(no)) { var no = 1; }
            document.getElementById('postSplit').innerHTML = content[no - 1];
            if (content.length > 1) { document.getElementById('postSplit').innerHTML += "<div class='postNav' id='postPager'></div>"; }
            if (no > 1) { document.getElementById('postPager').innerHTML += "<!-- <a href='" + url + "?page=" + (no - 1) + "' title='Previous Page'>Prev</a> -->"; }
            content.forEach(function(item) {
                if (no == i) { document.getElementById('postPager').innerHTML += "<span class='current'>" + i + "</span>"; } else { document.getElementById('postPager').innerHTML += "<a href='" + url + "?page=" + i + "'>" + i + "</a>"; }
                i++;
            });
            if (content.length > no) {
                var nn = parseInt(no) + 1;
                document.getElementById('postPager').innerHTML += "<a href='" + url + "?page=" + nn + "'>" + postnavNextText + "</a>";
            }
        }
});
$("#SatrRandomP").each(function() {
    var n = Math.floor(Math.random() * 5 + 1);
    var s = "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + n + "&max-results=5";
    $.ajax({
        url: s,
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var e = "", a = "<ul>", n = 0; n < t.feed.entry.length; n++) {
                for (var s = 0; s < t.feed.entry[n].link.length; s++)
                    if ("alternate" == t.feed.entry[n].link[s].rel) {
                        e = t.feed.entry[n].link[s].href;
                        break;
                    }
                var c = t.feed.entry[n].title.$t,
                    l = " ";
                try {
                    l = t.feed.entry[n].category[0].term;
                } catch (a) {
                    l = "";
                }
                a += '<li><a href="' + e + '" title="' + c + '" target="_blank">' + c + "</a></li>";
            }
            (a += "</ul>"),
            $("#SatrRandomP").each(function() {
                $(this).html(a);
            });
        },
    });
});

"true" == stopCopy && ! function() {
    if (typeof document.onselectstart != "undefined") {
        document.onselectstart = new Function("return false");
    } else {
        document.onmousedown = new Function("return false");
        document.onmouseup = new Function("return true");
    }
}();


document.querySelector("body").classList.add("blocck");
