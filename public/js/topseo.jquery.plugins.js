var $ = jQuery.noConflict();
// Accordion jQuery Plugin v1.3
! function(c) {
    c.fn.smk_Accordion = function(a) {
        if (this.length > 1) return this.each(function() {
            c(this).smk_Accordion(a)
        }), this;
        var e = c.extend({
            animation: !0,
            showIcon: !0,
            closeAble: !1,
            closeOther: !0,
            slideSpeed: 150,
            activeIndex: !1
        }, a);
        c(this).data("close-able") && (e.closeAble = c(this).data("close-able")), c(this).data("animation") && (e.animation = c(this).data("animation")), c(this).data("show-icon") && (e.showIcon = c(this).data("show-icon")), c(this).data("close-other") && (e.closeOther = c(this).data("close-other")), c(this).data("slide-speed") && (e.slideSpeed = c(this).data("slide-speed")), c(this).data("active-index") && (e.activeIndex = c(this).data("active-index"));
        var i = this,
            n = function() {
                i.createStructure(), i.clickHead()
            };
        return this.createStructure = function() {
            i.addClass("smk_accordion"), e.showIcon && i.addClass("acc_with_icon"), i.find(".accordion_in").length < 1 && i.children().addClass("accordion_in"), i.find(".accordion_in").each(function(a, e) {
                var i = c(e).children();
                c(i[0]).addClass("acc_head"), c(i[1]).addClass("acc_content")
            }), e.showIcon && i.find(".acc_head").prepend('<span class="acc_icon_expand"></span>'), i.find(".accordion_in .acc_content").not(".acc_active .acc_content").hide(), e.activeIndex === parseInt(e.activeIndex) && (0 === e.activeIndex ? (i.find(".accordion_in").addClass("acc_active").show(), i.find(".accordion_in .acc_content").addClass("acc_active").show()) : (i.find(".accordion_in").eq(e.activeIndex - 1).addClass("acc_active").show(), i.find(".accordion_in .acc_content").eq(e.activeIndex - 1).addClass("acc_active").show()))
        }, this.clickHead = function() {
            i.on("click", ".acc_head", function() {
                var a = c(this).parent();
                0 == a.hasClass("acc_active") && e.closeOther && (i.find(".acc_content").slideUp(e.slideSpeed), i.find(".accordion_in").removeClass("acc_active")), a.hasClass("acc_active") ? !1 !== e.closeAble && (a.children(".acc_content").slideUp(e.slideSpeed), a.removeClass("acc_active")) : (c(this).next(".acc_content").slideDown(e.slideSpeed), a.addClass("acc_active"))
            })
        }, n(), this
    }
}(jQuery);
// Slick carousel 1.6.0
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() {
                    c.animate({
                        opacity: 0
                    }, 100, function() {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function() {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }), b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }, e.onerror = function() {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
// Owl carousel
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
// Isotope
! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, n) {
            var o, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function() {} : function(t) {
            s.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                var r = s && s[o];
                r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; h > e; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
        }
    }

    function s(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = n(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; h > l; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments,
                s = this;
            this[o] = setTimeout(function() {
                n.apply(s, e), delete s[o]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[r],
        h = {
            transform: a,
            transition: r,
            transitionDuration: r + "Duration",
            transitionProperty: r + "Property",
            transitionDelay: r + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
        r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[o];
        e[s] = this.getXValue(a), e[r] = "";
        var u = n ? "paddingTop" : "paddingBottom",
            h = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = parseInt(t, 10),
            s = parseInt(e, 10),
            r = o === this.position.x && s === this.position.y;
        if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
        var a = t - i,
            u = e - n,
            h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to: h,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
        return e(t, i, n, o, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function s(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, f[o] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var u = t.console,
        h = t.jQuery,
        d = function() {},
        l = 0,
        f = {};
    s.namespace = "outlayer", s.Item = o, s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    n.extend(c, e.prototype), c.option = function(t) {
        n.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var s = e[o],
                r = new i(s, this);
            n.push(r)
        }
        return n
    }, c._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            r++, r == s && i()
        }
        var o = this,
            s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h)
            if (this.$element = this.$element || h(this.element), e) {
                var o = h.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            s = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return s
    }, c.handleEvent = n.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, n.debounceMethod(s, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function(t, e) {
        var i = r(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = o, s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype),
        n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData,
                e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments), this.css({
            display: ""
        })
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }
    var n = i.prototype,
        o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
        var i = t + e,
            n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function o() {
            i.apply(this, arguments)
        }
        return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            s = o / n,
            r = n - o % n,
            a = r && 1 > r ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
                x: this.columnWidth * r,
                y: s
            }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++) this.colYs[r + d] = u;
        return a
    }, i.prototype._getColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            s = o ? n.left : n.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"),
        n = i.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
    var r = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
            horizontalAlignment: 0
        }),
        i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;
        return this.y += t.size.outerHeight, {
            x: e,
            y: i
        }
    }, i._getContainerSize = function() {
        return {
            height: this.y
        }
    }, e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
        return e(t, i, n, o, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, s, r) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var s = t[o],
                    r = i.sortData[s],
                    a = n.sortData[s];
                if (r > a || a > r) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery,
        h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        d = e.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = r.modes[t],
            i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t)
        } : "function" == typeof t ? function(e) {
            return t(e.element)
        } : function(e) {
            return n(e.element, t)
        }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "),
                n = i[0],
                o = n.match(/^\[(.+)\]$/),
                s = o && o[1],
                r = e(s, n),
                a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            } : function(t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            } : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory),
                i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, l._mode = function() {
        var t = this.options.layoutMode,
            e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
            var s = this._filter(e).matches;
            for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
            var s = e[n];
            o.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});
// Wow js
(function() {
    var a, b, c, d, e, f = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [], this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                    var a, c, d, e;
                    for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.all = function() {
                    var a, c, d, e;
                    for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                    return e
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function(a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(a) {
                return window.requestAnimationFrame(a)
            } : function(a) {
                return a()
            }
        }(), e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                animationDuration: c
            }), d && this.vendorSet(a.style, {
                animationDelay: d
            }), e && this.vendorSet(a.style, {
                animationIterationCount: e
            }), this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
// Counter up 1.6.2
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke(this, "disable")
            },
            enable: function() {
                return d._invoke(this, "enable")
            },
            destroy: function() {
                return d._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}).call(this);
// counter up custom
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);
// Headroom menu sticky
! function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Headroom = b()
}(this, function() {
    "use strict";

    function a(a) {
        this.callback = a, this.ticking = !1
    }

    function b(a) {
        return a && "undefined" != typeof window && (a === window || a.nodeType)
    }

    function c(a) {
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        var d, e, f = a || {};
        for (e = 1; e < arguments.length; e++) {
            var g = arguments[e] || {};
            for (d in g) "object" != typeof f[d] || b(f[d]) ? f[d] = f[d] || g[d] : f[d] = c(f[d], g[d])
        }
        return f
    }

    function d(a) {
        return a === Object(a) ? a : {
            down: a,
            up: a
        }
    }

    function e(a, b) {
        b = c(b, e.options), this.lastKnownScrollY = 0, this.elem = a, this.tolerance = d(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop, this.onBottom = b.onBottom, this.onNotBottom = b.onNotBottom
    }
    var f = {
        bind: !! function() {}.bind,
        classList: "classList" in document.documentElement,
        rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
    };
    return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, a.prototype = {
        constructor: a,
        update: function() {
            this.callback && this.callback(), this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    }, e.prototype = {
        constructor: e,
        init: function() {
            return e.cutsTheMustard ? (this.debouncer = new a(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
        },
        destroy: function() {
            var a = this.classes;
            this.initialised = !1, this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.notTop, a.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            var a = this.elem.classList,
                b = this.classes;
            !a.contains(b.pinned) && a.contains(b.unpinned) || (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var a = this.elem.classList,
                b = this.classes;
            a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var a = this.elem.classList,
                b = this.classes;
            a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var a = this.elem.classList,
                b = this.classes;
            a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            var a = this.elem.classList,
                b = this.classes;
            a.contains(b.bottom) || (a.add(b.bottom), a.remove(b.notBottom), this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            var a = this.elem.classList,
                b = this.classes;
            a.contains(b.notBottom) || (a.add(b.notBottom), a.remove(b.bottom), this.onNotBottom && this.onNotBottom.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        getViewportHeight: function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        getElementPhysicalHeight: function(a) {
            return Math.max(a.offsetHeight, a.clientHeight)
        },
        getScrollerPhysicalHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
        },
        getDocumentHeight: function() {
            var a = document.body,
                b = document.documentElement;
            return Math.max(a.scrollHeight, b.scrollHeight, a.offsetHeight, b.offsetHeight, a.clientHeight, b.clientHeight)
        },
        getElementHeight: function(a) {
            return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(a) {
            var b = 0 > a,
                c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
            return b || c
        },
        toleranceExceeded: function(a, b) {
            return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b]
        },
        shouldUnpin: function(a, b) {
            var c = a > this.lastKnownScrollY,
                d = a >= this.offset;
            return c && d && b
        },
        shouldPin: function(a, b) {
            var c = a < this.lastKnownScrollY,
                d = a <= this.offset;
            return c && b || d
        },
        update: function() {
            var a = this.getScrollY(),
                b = a > this.lastKnownScrollY ? "down" : "up",
                c = this.toleranceExceeded(a, b);
            this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a)
        }
    }, e.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: window,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    }, e.cutsTheMustard = "undefined" != typeof f && f.rAF && f.bind && f.classList, e
});
// Headroom custom
! function(a) {
    a && (a.fn.headroom = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("headroom"),
                e = "object" == typeof b && b;
            e = a.extend(!0, {}, Headroom.options, e), d || (d = new Headroom(this, e), d.init(), c.data("headroom", d)), "string" == typeof b && (d[b](), "destroy" === b && c.removeData("headroom"))
        })
    }, a("[data-headroom]").each(function() {
        var b = a(this);
        b.headroom(b.data())
    }))
}(window.Zepto || window.jQuery);
// Slim menu mobile
! function(a, b, c, d) {
    "use strict";

    function e(b, c) {
        this.element = b, this.$elem = a(this.element), this.options = a.extend(h, c), this.init()
    }
    var f = "topseo_menu",
        g = 0,
        h = {
            resizeWidth: "767",
            initiallyVisible: !1,
            collapserTitle: "",
            animSpeed: "fast",
            easingEffect: "linear"
        };
    e.prototype = {
        init: function() {
            var c, d = a(b),
                e = this.options,
                f = this.$elem,
                g = '<div class="menu-collapser">' + e.collapserTitle + '<div class="collapse-button ion-android-menu"></div>';
            f.before(g), c = f.prev(".menu-collapser"), f.on("click", ".has-submenu > a", function(b) {
                b.preventDefault(), b.stopPropagation();
                var c = a(this).closest("li");
                c.children(".sub-toggle").hasClass("expanded") ? (c.children(".sub-toggle").removeClass("expanded"), c.find(">ul, .mega-menu").slideUp(e.animSpeed, e.easingEffect)) : (c.children(".sub-toggle").addClass("expanded"), c.find(">ul, .mega-menu").slideDown(e.animSpeed, e.easingEffect))
            }), c.on("click", ".collapse-button", function(a) {
                a.preventDefault(), f.slideToggle(e.animSpeed, e.easingEffect)
            }), this.resizeMenu(), d.on("resize", this.resizeMenu.bind(this)), d.trigger("resize")
        },
        resizeMenu: function() {
            var c = a(b),
                e = c.width(),
                f = this.options,
                h = a(this.element),
                i = a("body").find(".menu-collapser");
            b.innerWidth !== d && b.innerWidth > e && (e = b.innerWidth), e != g && (g = e, h.find("li").each(function() {
                a(this).has("ul, .mega-menu").length && (a(this).addClass("has-submenu").has(".sub-toggle").length ? a(this).children(".sub-toggle").html(f.expandIcon) : a(this).addClass("has-submenu").append('<span class="sub-toggle">' + f.expandIcon + "</span>")), a(this).children("ul, .mega-menu").hide().end().find(".sub-toggle").removeClass("expanded").html(f.expandIcon)
            }), f.resizeWidth >= e ? (h.addClass("collapsed").find("li").has("ul, .mega-menu").off("mouseenter mouseleave"), i.show(), f.initiallyVisible || h.hide()) : ($(".primary-menu ul, .primary-menu .mega-menu").show(), h.removeClass("collapsed").show(), i.hide()))
        }
    }, a.fn[f] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        })
    }
}(jQuery, window, document);
// Parallax 1.0.0 teamdf.com/jquery-plugins | teamdf.com/jquery-plugins/license */
function moveParallax(r) {
    var e = jQuery(r).visible(!0);
    if (e && jQuery(window).width() > 1024) {
        var a = parseInt(jQuery(r).position().top),
            o = a - jQuery(window).scrollTop(),
            i = -(o / 1.7),
            n = "50% " + i + "px";
        jQuery(r).css({
            backgroundPosition: n
        })
    }
}! function(r) {
    r.fn.visible = function(e, a) {
        var o = r(this).eq(0),
            i = o.get(0),
            n = r(window),
            t = n.scrollTop();
        n = t + n.height();
        var l = o.offset().top,
            u = l + o.height();
        return o = e === !0 ? u : l, l = e === !0 ? l : u, !!(a === !0 ? i.offsetWidth * i.offsetHeight : !0) && n >= l && o >= t
    }
}(jQuery),
function(r) {
    r.fn.extend({
        parallax: function(r) {
            return this.each(function() {
                var r = jQuery(this);
                moveParallax(r), jQuery(window).scroll(function() {
                    moveParallax(r)
                })
            })
        }
    })
}(jQuery), jQuery().parallax && jQuery(".parallax").parallax();
// Jquery tabs
! function(n) {
    n.organicTabs = function(t, e) {
        var a = this;
        a.$el = n(t), a.$nav = a.$el.find(".seotab-nav"), a.init = function() {
            a.options = n.extend({}, n.organicTabs.defaultOptions, e), a.$nav.delegate("li > a", "click", function() {
                var t = a.$el.find("a.current-tabs").attr("href").substring(1),
                    e = n(this),
                    i = e.attr("href").substring(1),
                    s = a.$el.find(".seotab-wrap"),
                    r = s.height();
                return s.show(r), i != t && 0 == a.$el.find(":animated").length && a.$el.find("#" + t).fadeOut(a.options.speed, function() {
                    a.$el.find("#" + i).fadeIn(a.options.speed), a.$el.find(".seotab-nav li a").removeClass("current-tabs"), e.addClass("current-tabs")
                }), !1
            })
        }, a.init()
    }, n.organicTabs.defaultOptions = {
        speed: 300
    }, n.fn.organicTabs = function(t) {
        return this.each(function() {
            new n.organicTabs(this, t)
        })
    }
}(jQuery);
// video control plyr.js 2.0.12
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
        return t(e, document)
    }) : e.plyr = t(e, document)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n() {
        var e, n, r, a = navigator.userAgent,
            s = navigator.appName,
            o = "" + parseFloat(navigator.appVersion),
            i = parseInt(navigator.appVersion, 10),
            l = !1,
            u = !1,
            c = !1,
            d = !1;
        return navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1 ? (l = !0, s = "IE", o = "11") : (n = a.indexOf("MSIE")) !== -1 ? (l = !0, s = "IE", o = a.substring(n + 5)) : (n = a.indexOf("Chrome")) !== -1 ? (c = !0, s = "Chrome", o = a.substring(n + 7)) : (n = a.indexOf("Safari")) !== -1 ? (d = !0, s = "Safari", o = a.substring(n + 7), (n = a.indexOf("Version")) !== -1 && (o = a.substring(n + 8))) : (n = a.indexOf("Firefox")) !== -1 ? (u = !0, s = "Firefox", o = a.substring(n + 8)) : (e = a.lastIndexOf(" ") + 1) < (n = a.lastIndexOf("/")) && (s = a.substring(e, n), o = a.substring(n + 1), s.toLowerCase() === s.toUpperCase() && (s = navigator.appName)), (r = o.indexOf(";")) !== -1 && (o = o.substring(0, r)), (r = o.indexOf(" ")) !== -1 && (o = o.substring(0, r)), i = parseInt("" + o, 10), isNaN(i) && (o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), {
            name: s,
            version: i,
            isIE: l,
            isFirefox: u,
            isChrome: c,
            isSafari: d,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
            isTouch: "ontouchstart" in t.documentElement
        }
    }

    function r(e, t) {
        var n = e.media;
        if ("video" === e.type) switch (t) {
            case "video/webm":
                return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case "video/mp4":
                return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case "video/ogg":
                return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
        } else if ("audio" === e.type) switch (t) {
            case "audio/mpeg":
                return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
            case "audio/ogg":
                return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case "audio/wav":
                return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
        }
        return !1
    }

    function a(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var n = t.createElement("script");
            n.src = e;
            var r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r)
        }
    }

    function s(e, t) {
        return Array.prototype.indexOf && e.indexOf(t) !== -1
    }

    function o(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
    }

    function i(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t,
                a = e[n],
                s = a.parentNode,
                o = a.nextSibling;
            return r.appendChild(a), o ? s.insertBefore(r, o) : s.appendChild(r), r
        }
    }

    function l(e) {
        e && e.parentNode.removeChild(e)
    }

    function u(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function c(e, t) {
        for (var n in t) e.setAttribute(n, O.boolean(t[n]) && t[n] ? "" : t[n])
    }

    function d(e, n, r) {
        var a = t.createElement(e);
        c(a, r), u(n, a)
    }

    function p(e) {
        return e.replace(".", "")
    }

    function m(e, t, n) {
        if (e)
            if (e.classList) e.classList[n ? "add" : "remove"](t);
            else {
                var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = r + (n ? " " + t : "")
            }
    }

    function f(e, t) {
        return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
    }

    function y(e, n) {
        var r = Element.prototype,
            a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function(e) {
                return [].indexOf.call(t.querySelectorAll(e), this) !== -1
            };
        return a.call(e, n)
    }

    function b(e, t, n, r, a) {
        g(e, t, function(t) {
            n && n.apply(e, [t]), r.apply(e, [t])
        }, a)
    }

    function v(e, t, n, r, a) {
        var s = t.split(" ");
        if (O.boolean(a) || (a = !1), e instanceof NodeList)
            for (var o = 0; o < e.length; o++) e[o] instanceof Node && v(e[o], arguments[1], arguments[2], arguments[3]);
        else
            for (var i = 0; i < s.length; i++) e[r ? "addEventListener" : "removeEventListener"](s[i], n, a)
    }

    function g(e, t, n, r) {
        e && v(e, t, n, !0, r)
    }

    function h(e, t, n, r) {
        if (e && t) {
            O.boolean(n) || (n = !1);
            var a = new CustomEvent(t, {
                bubbles: n,
                detail: r
            });
            e.dispatchEvent(a)
        }
    }

    function k(e, t) {
        if (e) return t = O.boolean(t) ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t
    }

    function w(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }

    function x() {
        var e = arguments;
        if (e.length) {
            if (1 === e.length) return e[0];
            for (var t = Array.prototype.shift.call(e), n = e.length, r = 0; r < n; r++) {
                var a = e[r];
                for (var s in a) a[s] && a[s].constructor && a[s].constructor === Object ? (t[s] = t[s] || {}, x(t[s], a[s])) : t[s] = a[s]
            }
            return t
        }
    }

    function T(e) {
        var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return e.match(t) ? RegExp.$2 : e
    }

    function S(e) {
        var t = /^.*(vimeo.com\/|video\/)(\d+).*/;
        return e.match(t) ? RegExp.$2 : e
    }

    function _() {
        var e = {
                supportsFullScreen: !1,
                isFullScreen: function() {
                    return !1
                },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: "",
                element: null,
                prefix: ""
            },
            n = "webkit o moz ms khtml".split(" ");
        if (O.undefined(t.cancelFullScreen))
            for (var r = 0, a = n.length; r < a; r++) {
                if (e.prefix = n[r], !O.undefined(t[e.prefix + "CancelFullScreen"])) {
                    e.supportsFullScreen = !0;
                    break
                }
                if (!O.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                    e.prefix = "ms", e.supportsFullScreen = !0;
                    break
                }
            } else e.supportsFullScreen = !0;
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function(e) {
            switch (O.undefined(e) && (e = t.body), this.prefix) {
                case "":
                    return t.fullscreenElement === e;
                case "moz":
                    return t.mozFullScreenElement === e;
                default:
                    return t[this.prefix + "FullscreenElement"] === e
            }
        }, e.requestFullScreen = function(e) {
            return O.undefined(e) && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }, e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }, e.element = function() {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
        }), e
    }

    function E(v, E) {
        function A(e, t, n, r) {
            h(e, t, n, x({}, r, {
                plyr: Ue
            }))
        }

        function j(t, n) {
            E.debug && e.console && (n = Array.prototype.slice.call(n), O.string(E.logPrefix) && E.logPrefix.length && n.unshift(E.logPrefix), console[t].apply(console, n))
        }

        function V() {
            return {
                url: E.iconUrl,
                absolute: 0 === E.iconUrl.indexOf("http") || Be.browser.isIE
            }
        }

        function R() {
            var e = [],
                t = V(),
                n = (t.absolute ? "" : t.url) + "#" + E.iconPrefix;
            return s(E.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), s(E.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + E.i18n.restart + "</span>", "</button>"), s(E.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + E.i18n.rewind + "</span>", "</button>"), s(E.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + E.i18n.pause + "</span>", "</button>"), s(E.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + E.i18n.forward + "</span>", "</button>"), s(E.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + E.i18n.buffered, "</progress>"), E.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), s(E.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), s(E.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), s(E.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleMute + "</span>", "</button>"), s(E.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + E.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + E.volumeMin + '" max="' + E.volumeMax + '" value="' + E.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + E.volumeMax + '" value="' + E.volumeMin + '" role="presentation"></progress>', "</span>"), s(E.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleCaptions + "</span>", "</button>"), s(E.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
        }

        function q() {
            if (Be.supported.full && ("audio" !== Be.type || E.fullscreen.allowAudio) && E.fullscreen.enabled) {
                var e = N.supportsFullScreen;
                e || E.fullscreen.fallback && !X() ? (Je((e ? "Native" : "Fallback") + " fullscreen enabled"), m(Be.container, E.classes.fullscreen.enabled, !0)) : Je("Fullscreen not supported and fallback disabled"), Be.buttons && Be.buttons.fullscreen && k(Be.buttons.fullscreen, !1), $()
            }
        }

        function D() {
            if ("video" === Be.type) {
                B(E.selectors.captions) || Be.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p(E.selectors.captions) + '"></div>'), Be.usingTextTracks = !1, Be.media.textTracks && (Be.usingTextTracks = !0);
                for (var e, t = "", n = Be.media.childNodes, r = 0; r < n.length; r++) "track" === n[r].nodeName.toLowerCase() && (e = n[r].kind, "captions" !== e && "subtitles" !== e || (t = n[r].getAttribute("src")));
                if (Be.captionExists = !0, "" === t ? (Be.captionExists = !1, Je("No caption track found")) : Je("Caption track found; URI: " + t), Be.captionExists) {
                    for (var a = Be.media.textTracks, s = 0; s < a.length; s++) a[s].mode = "hidden";
                    if (Y(Be), (Be.browser.isIE && Be.browser.version >= 10 || Be.browser.isFirefox && Be.browser.version >= 31) && (Je("Detected browser with known TextTrack issues - using manual fallback"), Be.usingTextTracks = !1), Be.usingTextTracks) {
                        Je("TextTracks supported");
                        for (var o = 0; o < a.length; o++) {
                            var i = a[o];
                            "captions" !== i.kind && "subtitles" !== i.kind || g(i, "cuechange", function() {
                                this.activeCues[0] && "text" in this.activeCues[0] ? H(this.activeCues[0].getCueAsHTML()) : H()
                            })
                        }
                    } else if (Je("TextTracks not supported so rendering captions manually"), Be.currentCaption = "", Be.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState)
                                if (200 === l.status) {
                                    var e, t = [],
                                        n = l.responseText,
                                        r = "\r\n";
                                    n.indexOf(r + r) === -1 && (r = n.indexOf("\r\r") !== -1 ? "\r" : "\n"), t = n.split(r + r);
                                    for (var a = 0; a < t.length; a++) {
                                        e = t[a], Be.captions[a] = [];
                                        var s = e.split(r),
                                            o = 0;
                                        s[o].indexOf(":") === -1 && (o = 1), Be.captions[a] = [s[o], s[o + 1]]
                                    }
                                    Be.captions.shift(), Je("Successfully loaded the caption file via AJAX")
                                } else ze(E.logPrefix + "There was a problem loading the caption file via AJAX")
                        }, l.open("get", t, !0), l.send()
                    }
                } else m(Be.container, E.classes.captions.enabled)
            }
        }

        function H(e) {
            var n = B(E.selectors.captions),
                r = t.createElement("span");
            n.innerHTML = "", O.undefined(e) && (e = ""), O.string(e) ? r.innerHTML = e.trim() : r.appendChild(e), n.appendChild(r);
            n.offsetHeight
        }

        function W(e) {
            function t(e, t) {
                var n = [];
                n = e.split(" --> ");
                for (var r = 0; r < n.length; r++) n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return a(n[t])
            }

            function n(e) {
                return t(e, 0)
            }

            function r(e) {
                return t(e, 1)
            }

            function a(e) {
                if (null === e || void 0 === e) return 0;
                var t, n = [],
                    r = [];
                return n = e.split(","), r = n[0].split(":"), t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2])
            }
            if (!Be.usingTextTracks && "video" === Be.type && Be.supported.full && (Be.subcount = 0, e = O.number(e) ? e : Be.media.currentTime, Be.captions[Be.subcount])) {
                for (; r(Be.captions[Be.subcount][0]) < e.toFixed(1);)
                    if (Be.subcount++, Be.subcount > Be.captions.length - 1) {
                        Be.subcount = Be.captions.length - 1;
                        break
                    }
                Be.media.currentTime.toFixed(1) >= n(Be.captions[Be.subcount][0]) && Be.media.currentTime.toFixed(1) <= r(Be.captions[Be.subcount][0]) ? (Be.currentCaption = Be.captions[Be.subcount][1], H(Be.currentCaption)) : H()
            }
        }

        function Y() {
            if (Be.buttons.captions) {
                m(Be.container, E.classes.captions.enabled, !0);
                var e = Be.storage.captionsEnabled;
                O.boolean(e) || (e = E.captions.defaultActive), e && (m(Be.container, E.classes.captions.active, !0), k(Be.buttons.captions, !0))
            }
        }

        function U(e) {
            return Be.container.querySelectorAll(e)
        }

        function B(e) {
            return U(e)[0]
        }

        function X() {
            try {
                return e.self !== e.top
            } catch (e) {
                return !0
            }
        }

        function $() {
            function e(e) {
                9 === e.which && Be.isFullscreen && (e.target !== r || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(), r.focus()) : (e.preventDefault(), n.focus()))
            }
            var t = U("input:not([disabled]), button:not([disabled])"),
                n = t[0],
                r = t[t.length - 1];
            g(Be.container, "keydown", e)
        }

        function J(e, t) {
            if (O.string(t)) d(e, Be.media, {
                src: t
            });
            else if (t.constructor === Array)
                for (var n = t.length - 1; n >= 0; n--) d(e, Be.media, t[n])
        }

        function z() {
            if (E.loadSprite) {
                var e = V();
                e.absolute ? (Je("AJAX loading absolute SVG sprite" + (Be.browser.isIE ? " (due to IE)" : "")), C(e.url, "sprite-plyr")) : Je("Sprite will be used as external resource directly")
            }
            var n = E.html;
            Je("Injecting custom controls"), n || (n = R()), n = o(n, "{seektime}", E.seekTime), n = o(n, "{id}", Math.floor(1e4 * Math.random()));
            var r;
            if (O.string(E.selectors.controls.container) && (r = t.querySelector(E.selectors.controls.container)), O.htmlElement(r) || (r = Be.container), r.insertAdjacentHTML("beforeend", n), E.tooltips.controls)
                for (var a = U([E.selectors.controls.wrapper, " ", E.selectors.labels, " .", E.classes.hidden].join("")), s = a.length - 1; s >= 0; s--) {
                    var i = a[s];
                    m(i, E.classes.hidden, !1), m(i, E.classes.tooltip, !0)
                }
        }

        function G() {
            try {
                return Be.controls = B(E.selectors.controls.wrapper), Be.buttons = {}, Be.buttons.seek = B(E.selectors.buttons.seek), Be.buttons.play = U(E.selectors.buttons.play), Be.buttons.pause = B(E.selectors.buttons.pause), Be.buttons.restart = B(E.selectors.buttons.restart), Be.buttons.rewind = B(E.selectors.buttons.rewind), Be.buttons.forward = B(E.selectors.buttons.forward), Be.buttons.fullscreen = B(E.selectors.buttons.fullscreen), Be.buttons.mute = B(E.selectors.buttons.mute), Be.buttons.captions = B(E.selectors.buttons.captions), Be.progress = {}, Be.progress.container = B(E.selectors.progress.container), Be.progress.buffer = {}, Be.progress.buffer.bar = B(E.selectors.progress.buffer), Be.progress.buffer.text = Be.progress.buffer.bar && Be.progress.buffer.bar.getElementsByTagName("span")[0], Be.progress.played = B(E.selectors.progress.played), Be.progress.tooltip = Be.progress.container && Be.progress.container.querySelector("." + E.classes.tooltip), Be.volume = {}, Be.volume.input = B(E.selectors.volume.input), Be.volume.display = B(E.selectors.volume.display), Be.duration = B(E.selectors.duration), Be.currentTime = B(E.selectors.currentTime), Be.seekTime = U(E.selectors.seekTime), !0
            } catch (e) {
                return ze("It looks like there is a problem with your controls HTML"), Q(!0), !1
            }
        }

        function K() {
            m(Be.container, E.selectors.container.replace(".", ""), Be.supported.full)
        }

        function Q(e) {
            e && s(E.types.html5, Be.type) ? Be.media.setAttribute("controls", "") : Be.media.removeAttribute("controls")
        }

        function Z(e) {
            var t = E.i18n.play;
            if (O.string(E.title) && E.title.length && (t += ", " + E.title, Be.container.setAttribute("aria-label", E.title)), Be.supported.full && Be.buttons.play)
                for (var n = Be.buttons.play.length - 1; n >= 0; n--) Be.buttons.play[n].setAttribute("aria-label", t);
            O.htmlElement(e) && e.setAttribute("title", E.i18n.frameTitle.replace("{title}", E.title))
        }

        function ee() {
            var t = null;
            Be.storage = {}, L.supported && E.storage.enabled && (e.localStorage.removeItem("plyr-volume"), t = e.localStorage.getItem(E.storage.key), t && (/^\d+(\.\d+)?$/.test(t) ? te({
                volume: parseFloat(t)
            }) : Be.storage = JSON.parse(t)))
        }

        function te(t) {
            L.supported && E.storage.enabled && (x(Be.storage, t), e.localStorage.setItem(E.storage.key, JSON.stringify(Be.storage)))
        }

        function ne() {
            if (!Be.media) return void ze("No media element found!");
            if (Be.supported.full && (m(Be.container, E.classes.type.replace("{0}", Be.type), !0), s(E.types.embed, Be.type) && m(Be.container, E.classes.type.replace("{0}", "video"), !0), m(Be.container, E.classes.stopped, E.autoplay), m(Be.container, E.classes.isIos, Be.browser.isIos), m(Be.container, E.classes.isTouch, Be.browser.isTouch), "video" === Be.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", E.classes.videoWrapper), i(Be.media, e), Be.videoContainer = e
            }
            s(E.types.embed, Be.type) && re()
        }

        function re() {
            var n, r = t.createElement("div"),
                s = Be.type + "-" + Math.floor(1e4 * Math.random());
            switch (Be.type) {
                case "youtube":
                    n = T(Be.embedId);
                    break;
                case "vimeo":
                    n = S(Be.embedId);
                    break;
                default:
                    n = Be.embedId
            }
            for (var o = U('[id^="' + Be.type + '-"]'), i = o.length - 1; i >= 0; i--) l(o[i]);
            if (m(Be.media, E.classes.videoWrapper, !0), m(Be.media, E.classes.embedWrapper, !0), "youtube" === Be.type) Be.media.appendChild(r), r.setAttribute("id", s), O.object(e.YT) ? se(n, r) : (a(E.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function() {
                se(n, r)
            }), e.onYouTubeIframeAPIReady = function() {
                e.onYouTubeReadyCallbacks.forEach(function(e) {
                    e()
                })
            });
            else if ("vimeo" === Be.type)
                if (Be.supported.full ? Be.media.appendChild(r) : r = Be.media, r.setAttribute("id", s), O.object(e.Vimeo)) oe(n, r);
                else {
                    a(E.urls.vimeo.api);
                    var u = e.setInterval(function() {
                        O.object(e.Vimeo) && (e.clearInterval(u), oe(n, r))
                    }, 50)
                }
            else if ("soundcloud" === Be.type) {
                var d = t.createElement("iframe");
                d.loaded = !1, g(d, "load", function() {
                    d.loaded = !0
                }), c(d, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + n,
                    id: s
                }), r.appendChild(d), Be.media.appendChild(r), e.SC || a(E.urls.soundcloud.api);
                var p = e.setInterval(function() {
                    e.SC && d.loaded && (e.clearInterval(p), ie.call(d))
                }, 50)
            }
        }

        function ae() {
            Be.supported.full && (We(), Ye()), Z(B("iframe"))
        }

        function se(t, n) {
            Be.embed = new e.YT.Player(n.id, {
                videoId: t,
                playerVars: {
                    autoplay: E.autoplay ? 1 : 0,
                    controls: Be.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: E.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function(e) {
                        A(Be.container, "error", !0, {
                            code: e.data,
                            embed: e.target
                        })
                    },
                    onReady: function(t) {
                        var n = t.target;
                        Be.media.play = function() {
                            n.playVideo(), Be.media.paused = !1
                        }, Be.media.pause = function() {
                            n.pauseVideo(), Be.media.paused = !0
                        }, Be.media.stop = function() {
                            n.stopVideo(), Be.media.paused = !0
                        }, Be.media.duration = n.getDuration(), Be.media.paused = !0, Be.media.currentTime = 0, Be.media.muted = n.isMuted(), E.title = n.getVideoData().title, Be.supported.full && Be.media.querySelector("iframe").setAttribute("tabindex", "-1"), ae(), A(Be.media, "timeupdate"), A(Be.media, "durationchange"), e.clearInterval(Xe.buffering), Xe.buffering = e.setInterval(function() {
                            Be.media.buffered = n.getVideoLoadedFraction(), (null === Be.media.lastBuffered || Be.media.lastBuffered < Be.media.buffered) && A(Be.media, "progress"), Be.media.lastBuffered = Be.media.buffered, 1 === Be.media.buffered && (e.clearInterval(Xe.buffering), A(Be.media, "canplaythrough"))
                        }, 200)
                    },
                    onStateChange: function(t) {
                        var n = t.target;
                        switch (e.clearInterval(Xe.playing), t.data) {
                            case 0:
                                Be.media.paused = !0, A(Be.media, "ended");
                                break;
                            case 1:
                                Be.media.paused = !1, Be.media.seeking && A(Be.media, "seeked"), Be.media.seeking = !1, A(Be.media, "play"), A(Be.media, "playing"), Xe.playing = e.setInterval(function() {
                                    Be.media.currentTime = n.getCurrentTime(), A(Be.media, "timeupdate")
                                }, 100), Be.media.duration !== n.getDuration() && (Be.media.duration = n.getDuration(), A(Be.media, "durationchange"));
                                break;
                            case 2:
                                Be.media.paused = !0, A(Be.media, "pause")
                        }
                        A(Be.container, "statechange", !1, {
                            code: t.data
                        })
                    }
                }
            })
        }

        function oe(t, n) {
            Be.embed = new e.Vimeo.Player(n, {
                id: parseInt(t),
                loop: E.loop,
                autoplay: E.autoplay,
                byline: !1,
                portrait: !1,
                title: !1
            }), Be.media.play = function() {
                Be.embed.play(), Be.media.paused = !1
            }, Be.media.pause = function() {
                Be.embed.pause(), Be.media.paused = !0
            }, Be.media.stop = function() {
                Be.embed.stop(), Be.media.paused = !0
            }, Be.media.paused = !0, Be.media.currentTime = 0, ae(), Be.embed.getCurrentTime().then(function(e) {
                Be.media.currentTime = e, A(Be.media, "timeupdate")
            }), Be.embed.getDuration().then(function(e) {
                Be.media.duration = e, A(Be.media, "durationchange")
            }), Be.embed.on("loaded", function() {
                O.htmlElement(Be.embed.element) && Be.supported.full && Be.embed.element.setAttribute("tabindex", "-1")
            }), Be.embed.on("play", function() {
                Be.media.paused = !1, A(Be.media, "play"), A(Be.media, "playing")
            }), Be.embed.on("pause", function() {
                Be.media.paused = !0, A(Be.media, "pause")
            }), Be.embed.on("timeupdate", function(e) {
                Be.media.seeking = !1, Be.media.currentTime = e.seconds, A(Be.media, "timeupdate")
            }), Be.embed.on("progress", function(e) {
                Be.media.buffered = e.percent, A(Be.media, "progress"), 1 === parseInt(e.percent) && A(Be.media, "canplaythrough")
            }), Be.embed.on("seeked", function() {
                Be.media.seeking = !1, A(Be.media, "seeked"), A(Be.media, "play")
            }), Be.embed.on("ended", function() {
                Be.media.paused = !0, A(Be.media, "ended")
            })
        }

        function ie() {
            Be.embed = e.SC.Widget(this), Be.embed.bind(e.SC.Widget.Events.READY, function() {
                Be.media.play = function() {
                    Be.embed.play(), Be.media.paused = !1
                }, Be.media.pause = function() {
                    Be.embed.pause(), Be.media.paused = !0
                }, Be.media.stop = function() {
                    Be.embed.seekTo(0), Be.embed.pause(), Be.media.paused = !0
                }, Be.media.paused = !0, Be.media.currentTime = 0, Be.embed.getDuration(function(e) {
                    Be.media.duration = e / 1e3, ae()
                }), Be.embed.getPosition(function(e) {
                    Be.media.currentTime = e, A(Be.media, "timeupdate")
                }), Be.embed.bind(e.SC.Widget.Events.PLAY, function() {
                    Be.media.paused = !1, A(Be.media, "play"), A(Be.media, "playing")
                }), Be.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                    Be.media.paused = !0, A(Be.media, "pause")
                }), Be.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    Be.media.seeking = !1, Be.media.currentTime = e.currentPosition / 1e3, A(Be.media, "timeupdate")
                }), Be.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    Be.media.buffered = e.loadProgress, A(Be.media, "progress"), 1 === parseInt(e.loadProgress) && A(Be.media, "canplaythrough")
                }), Be.embed.bind(e.SC.Widget.Events.FINISH, function() {
                    Be.media.paused = !0, A(Be.media, "ended")
                })
            })
        }

        function le() {
            "play" in Be.media && Be.media.play()
        }

        function ue() {
            "pause" in Be.media && Be.media.pause()
        }

        function ce(e) {
            return O.boolean(e) || (e = Be.media.paused), e ? le() : ue(), e
        }

        function de(e) {
            O.number(e) || (e = E.seekTime), me(Be.media.currentTime - e)
        }

        function pe(e) {
            O.number(e) || (e = E.seekTime), me(Be.media.currentTime + e)
        }

        function me(e) {
            var t = 0,
                n = Be.media.paused,
                r = fe();
            O.number(e) ? t = e : O.object(e) && s(["input", "change"], e.type) && (t = e.target.value / e.target.max * r), t < 0 ? t = 0 : t > r && (t = r), Ne(t);
            try {
                Be.media.currentTime = t.toFixed(4)
            } catch (e) {}
            if (s(E.types.embed, Be.type)) {
                switch (Be.type) {
                    case "youtube":
                        Be.embed.seekTo(t);
                        break;
                    case "vimeo":
                        Be.embed.setCurrentTime(t.toFixed(0));
                        break;
                    case "soundcloud":
                        Be.embed.seekTo(1e3 * t)
                }
                n && ue(), A(Be.media, "timeupdate"), Be.media.seeking = !0, A(Be.media, "seeking")
            }
            Je("Seeking to " + Be.media.currentTime + " seconds"), W(t)
        }

        function fe() {
            var e = parseInt(E.duration),
                t = 0;
            return null === Be.media.duration || isNaN(Be.media.duration) || (t = Be.media.duration), isNaN(e) ? t : e
        }

        function ye() {
            m(Be.container, E.classes.playing, !Be.media.paused), m(Be.container, E.classes.stopped, Be.media.paused), Me(Be.media.paused)
        }

        function be() {
            P = {
                x: e.pageXOffset || 0,
                y: e.pageYOffset || 0
            }
        }

        function ve() {
            e.scrollTo(P.x, P.y)
        }

        function ge(e) {
            var n = N.supportsFullScreen;
            if (n) {
                if (!e || e.type !== N.fullScreenEventName) return N.isFullScreen(Be.container) ? N.cancelFullScreen() : (be(), N.requestFullScreen(Be.container)), void(Be.isFullscreen = N.isFullScreen(Be.container));
                Be.isFullscreen = N.isFullScreen(Be.container)
            } else Be.isFullscreen = !Be.isFullscreen, t.body.style.overflow = Be.isFullscreen ? "hidden" : "";
            m(Be.container, E.classes.fullscreen.active, Be.isFullscreen), $(Be.isFullscreen), Be.buttons && Be.buttons.fullscreen && k(Be.buttons.fullscreen, Be.isFullscreen), A(Be.container, Be.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Be.isFullscreen && n && ve()
        }

        function he(e) {
            if (O.boolean(e) || (e = !Be.media.muted), k(Be.buttons.mute, e), Be.media.muted = e, 0 === Be.media.volume && ke(E.volume), s(E.types.embed, Be.type)) {
                switch (Be.type) {
                    case "youtube":
                        Be.embed[Be.media.muted ? "mute" : "unMute"]();
                        break;
                    case "vimeo":
                    case "soundcloud":
                        Be.embed.setVolume(Be.media.muted ? 0 : parseFloat(E.volume / E.volumeMax))
                }
                A(Be.media, "volumechange")
            }
        }

        function ke(e) {
            var t = E.volumeMax,
                n = E.volumeMin;
            if (O.undefined(e) && (e = Be.storage.volume), (null === e || isNaN(e)) && (e = E.volume), e > t && (e = t), e < n && (e = n), Be.media.volume = parseFloat(e / t), Be.volume.display && (Be.volume.display.value = e), s(E.types.embed, Be.type)) {
                switch (Be.type) {
                    case "youtube":
                        Be.embed.setVolume(100 * Be.media.volume);
                        break;
                    case "vimeo":
                    case "soundcloud":
                        Be.embed.setVolume(Be.media.volume)
                }
                A(Be.media, "volumechange")
            }
            0 === e ? Be.media.muted = !0 : Be.media.muted && e > 0 && he()
        }

        function we(e) {
            var t = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
            O.number(e) || (e = E.volumeStep), ke(t + e)
        }

        function xe(e) {
            var t = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
            O.number(e) || (e = E.volumeStep), ke(t - e)
        }

        function Te() {
            var e = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
            Be.supported.full && (Be.volume.input && (Be.volume.input.value = e), Be.volume.display && (Be.volume.display.value = e)), te({
                volume: e
            }), m(Be.container, E.classes.muted, 0 === e), Be.supported.full && Be.buttons.mute && k(Be.buttons.mute, 0 === e)
        }

        function Se(e) {
            Be.supported.full && Be.buttons.captions && (O.boolean(e) || (e = Be.container.className.indexOf(E.classes.captions.active) === -1), Be.captionsEnabled = e, k(Be.buttons.captions, Be.captionsEnabled), m(Be.container, E.classes.captions.active, Be.captionsEnabled), A(Be.container, Be.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0), te({
                captionsEnabled: Be.captionsEnabled
            }))
        }

        function _e(e) {
            var t = "waiting" === e.type;
            clearTimeout(Xe.loading), Xe.loading = setTimeout(function() {
                m(Be.container, E.classes.loading, t), Me(t)
            }, t ? 250 : 0)
        }

        function Ee(e) {
            if (Be.supported.full) {
                var t = Be.progress.played,
                    n = 0,
                    r = fe();
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                        if (Be.controls.pressed) return;
                        n = w(Be.media.currentTime, r), "timeupdate" === e.type && Be.buttons.seek && (Be.buttons.seek.value = n);
                        break;
                    case "playing":
                    case "progress":
                        t = Be.progress.buffer, n = function() {
                            var e = Be.media.buffered;
                            return e && e.length ? w(e.end(0), r) : O.number(e) ? 100 * e : 0
                        }()
                }
                Ce(t, n)
            }
        }

        function Ce(e, t) {
            if (Be.supported.full) {
                if (O.undefined(t) && (t = 0), O.undefined(e)) {
                    if (!Be.progress || !Be.progress.buffer) return;
                    e = Be.progress.buffer
                }
                O.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
            }
        }

        function Fe(e, t) {
            if (t) {
                isNaN(e) && (e = 0), Be.secs = parseInt(e % 60), Be.mins = parseInt(e / 60 % 60), Be.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(fe() / 60 / 60 % 60) > 0;
                Be.secs = ("0" + Be.secs).slice(-2), Be.mins = ("0" + Be.mins).slice(-2), t.innerHTML = (n ? Be.hours + ":" : "") + Be.mins + ":" + Be.secs
            }
        }

        function Ae() {
            if (Be.supported.full) {
                var e = fe() || 0;
                !Be.duration && E.displayDuration && Be.media.paused && Fe(e, Be.currentTime), Be.duration && Fe(e, Be.duration), Pe()
            }
        }

        function Ie(e) {
            Fe(Be.media.currentTime, Be.currentTime), e && "timeupdate" === e.type && Be.media.seeking || Ee(e)
        }

        function Ne(e) {
            O.number(e) || (e = 0);
            var t = fe(),
                n = w(e, t);
            Be.progress && Be.progress.played && (Be.progress.played.value = n), Be.buttons && Be.buttons.seek && (Be.buttons.seek.value = n)
        }

        function Pe(e) {
            var t = fe();
            if (E.tooltips.seek && Be.progress.container && 0 !== t) {
                var n = Be.progress.container.getBoundingClientRect(),
                    r = 0,
                    a = E.classes.tooltip + "--visible";
                if (e) r = 100 / n.width * (e.pageX - n.left);
                else {
                    if (!f(Be.progress.tooltip, a)) return;
                    r = Be.progress.tooltip.style.left.replace("%", "")
                }
                r < 0 ? r = 0 : r > 100 && (r = 100), Fe(t / 100 * r, Be.progress.tooltip), Be.progress.tooltip.style.left = r + "%", e && s(["mouseenter", "mouseleave"], e.type) && m(Be.progress.tooltip, a, "mouseenter" === e.type)
            }
        }

        function Me(t) {
            if (E.hideControls && "audio" !== Be.type) {
                var n = 0,
                    r = !1,
                    a = t,
                    o = f(Be.container, E.classes.loading);
                if (O.boolean(t) || (t && t.type ? (r = "enterfullscreen" === t.type, a = s(["mousemove", "touchstart", "mouseenter", "focus"], t.type), s(["mousemove", "touchmove"], t.type) && (n = 2e3), "focus" === t.type && (n = 3e3)) : a = f(Be.container, E.classes.hideControls)), e.clearTimeout(Xe.hover), a || Be.media.paused || o) {
                    if (m(Be.container, E.classes.hideControls, !1), Be.media.paused || o) return;
                    Be.browser.isTouch && (n = 3e3)
                }
                a && Be.media.paused || (Xe.hover = e.setTimeout(function() {
                    (!Be.controls.pressed && !Be.controls.hover || r) && m(Be.container, E.classes.hideControls, !0)
                }, n))
            }
        }

        function Oe(e) {
            if (!O.undefined(e)) return void Le(e);
            var t;
            switch (Be.type) {
                case "youtube":
                    t = Be.embed.getVideoUrl();
                    break;
                case "vimeo":
                    Be.embed.getVideoUrl.then(function(e) {
                        t = e
                    });
                    break;
                case "soundcloud":
                    Be.embed.getCurrentSound(function(e) {
                        t = e.permalink_url
                    });
                    break;
                default:
                    t = Be.media.currentSrc
            }
            return t || ""
        }

        function Le(e) {
            function n() {
                if (Be.embed = null, l(Be.media), "video" === Be.type && Be.videoContainer && l(Be.videoContainer), Be.container && Be.container.removeAttribute("class"), "type" in e && (Be.type = e.type, "video" === Be.type)) {
                    var n = e.sources[0];
                    "type" in n && s(E.types.embed, n.type) && (Be.type = n.type)
                }
                switch (Be.supported = F(Be.type), Be.type) {
                    case "video":
                        Be.media = t.createElement("video");
                        break;
                    case "audio":
                        Be.media = t.createElement("audio");
                        break;
                    case "youtube":
                    case "vimeo":
                    case "soundcloud":
                        Be.media = t.createElement("div"), Be.embedId = e.sources[0].src
                }
                u(Be.container, Be.media), O.boolean(e.autoplay) && (E.autoplay = e.autoplay), s(E.types.html5, Be.type) && (E.crossorigin && Be.media.setAttribute("crossorigin", ""), E.autoplay && Be.media.setAttribute("autoplay", ""), "poster" in e && Be.media.setAttribute("poster", e.poster), E.loop && Be.media.setAttribute("loop", "")), m(Be.container, E.classes.fullscreen.active, Be.isFullscreen), m(Be.container, E.classes.captions.active, Be.captionsEnabled), K(), s(E.types.html5, Be.type) && J("source", e.sources), ne(), s(E.types.html5, Be.type) && ("tracks" in e && J("track", e.tracks), Be.media.load()), (s(E.types.html5, Be.type) || s(E.types.embed, Be.type) && !Be.supported.full) && (We(), Ye()), E.title = e.title, Z()
            }
            return O.object(e) && "sources" in e && e.sources.length ? (m(Be.container, E.classes.ready, !1), ue(), Ne(), Ce(), qe(), void De(n, !1)) : void ze("Invalid source format")
        }

        function je(e) {
            "video" === Be.type && Be.media.setAttribute("poster", e)
        }

        function Ve() {
            function n() {
                var e = ce(),
                    t = Be.buttons[e ? "play" : "pause"],
                    n = Be.buttons[e ? "pause" : "play"];
                if (n = n && n.length > 1 ? n[n.length - 1] : n[0]) {
                    var r = f(t, E.classes.tabFocus);
                    setTimeout(function() {
                        n.focus(), r && (m(t, E.classes.tabFocus, !1), m(n, E.classes.tabFocus, !0))
                    }, 100)
                }
            }

            function r() {
                var e = t.activeElement;
                return e = e && e !== t.body ? t.querySelector(":focus") : null
            }

            function a(e) {
                return e.keyCode ? e.keyCode : e.which
            }

            function o(e) {
                for (var t in Be.buttons) {
                    var n = Be.buttons[t];
                    if (O.nodeList(n))
                        for (var r = 0; r < n.length; r++) m(n[r], E.classes.tabFocus, n[r] === e);
                    else m(n, E.classes.tabFocus, n === e)
                }
            }

            function i(e) {
                function t() {
                    var e = Be.media.duration;
                    O.number(e) && me(e / 10 * (n - 48))
                }
                var n = a(e),
                    r = "keydown" === e.type,
                    o = r && n === u;
                if (O.number(n))
                    if (r) {
                        var i = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                        switch (s(i, n) && (e.preventDefault(), e.stopPropagation()), n) {
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                o || t();
                                break;
                            case 32:
                            case 75:
                                o || ce();
                                break;
                            case 38:
                                we();
                                break;
                            case 40:
                                xe();
                                break;
                            case 77:
                                o || he();
                                break;
                            case 39:
                                pe();
                                break;
                            case 37:
                                de();
                                break;
                            case 70:
                                ge();
                                break;
                            case 67:
                                o || Se()
                        }!N.supportsFullScreen && Be.isFullscreen && 27 === n && ge(), u = n
                    } else u = null
            }
            var l = Be.browser.isIE ? "change" : "input";
            if (E.keyboardShorcuts.focused) {
                var u = null;
                E.keyboardShorcuts.global && g(e, "keydown keyup", function(e) {
                    var t = a(e),
                        n = r(),
                        o = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                        l = I().length;
                    1 !== l || !s(o, t) || O.htmlElement(n) && y(n, E.selectors.editable) || i(e)
                }), g(Be.container, "keydown keyup", i)
            }
            g(e, "keyup", function(e) {
                var t = a(e),
                    n = r();
                9 === t && o(n)
            }), g(t.body, "click", function() {
                m(B("." + E.classes.tabFocus), E.classes.tabFocus, !1)
            });
            for (var c in Be.buttons) {
                var d = Be.buttons[c];
                g(d, "blur", function() {
                    m(d, "tab-focus", !1);
                })
            }
            b(Be.buttons.play, "click", E.listeners.play, n), b(Be.buttons.pause, "click", E.listeners.pause, n), b(Be.buttons.restart, "click", E.listeners.restart, me), b(Be.buttons.rewind, "click", E.listeners.rewind, de), b(Be.buttons.forward, "click", E.listeners.forward, pe), b(Be.buttons.seek, l, E.listeners.seek, me), b(Be.volume.input, l, E.listeners.volume, function() {
                ke(Be.volume.input.value)
            }), b(Be.buttons.mute, "click", E.listeners.mute, he), b(Be.buttons.fullscreen, "click", E.listeners.fullscreen, ge), N.supportsFullScreen && g(t, N.fullScreenEventName, ge), b(Be.buttons.captions, "click", E.listeners.captions, Se), g(Be.progress.container, "mouseenter mouseleave mousemove", Pe), E.hideControls && (g(Be.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Me), g(Be.controls, "mouseenter mouseleave", function(e) {
                Be.controls.hover = "mouseenter" === e.type
            }), g(Be.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                Be.controls.pressed = s(["mousedown", "touchstart"], e.type)
            }), g(Be.controls, "focus blur", Me, !0)), g(Be.volume.input, "wheel", function(e) {
                e.preventDefault();
                var t = e.webkitDirectionInvertedFromDevice,
                    n = E.volumeStep / 5;
                (e.deltaY < 0 || e.deltaX > 0) && (t ? xe(n) : we(n)), (e.deltaY > 0 || e.deltaX < 0) && (t ? we(n) : xe(n))
            })
        }

        function Re() {
            if (g(Be.media, "timeupdate seeking", Ie), g(Be.media, "timeupdate", W), g(Be.media, "durationchange loadedmetadata", Ae), g(Be.media, "ended", function() {
                    "video" === Be.type && E.showPosterOnEnd && ("video" === Be.type && H(), me(), Be.media.load())
                }), g(Be.media, "progress playing", Ee), g(Be.media, "volumechange", Te), g(Be.media, "play pause ended", ye), g(Be.media, "waiting canplay seeked", _e), E.clickToPlay && "audio" !== Be.type) {
                var e = B("." + E.classes.videoWrapper);
                if (!e) return;
                e.style.cursor = "pointer", g(e, "click", function() {
                    E.hideControls && Be.browser.isTouch && !Be.media.paused || (Be.media.paused ? le() : Be.media.ended ? (me(), le()) : ue())
                })
            }
            E.disableContextMenu && g(Be.media, "contextmenu", function(e) {
                e.preventDefault()
            }), g(Be.media, E.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                A(Be.container, e.type, !0)
            })
        }

        function qe() {
            if (s(E.types.html5, Be.type)) {
                for (var e = Be.media.querySelectorAll("source"), t = 0; t < e.length; t++) l(e[t]);
                Be.media.setAttribute("src", E.blankUrl), Be.media.load(), Je("Cancelled network requests")
            }
        }

        function De(n, r) {
            function a() {
                clearTimeout(Xe.cleanUp), O.boolean(r) || (r = !0), O.function(n) && n.call($e), r && (Be.init = !1, Be.container.parentNode.replaceChild($e, Be.container), t.body.style.overflow = "", A($e, "destroyed", !0))
            }
            if (!Be.init) return null;
            switch (Be.type) {
                case "youtube":
                    e.clearInterval(Xe.buffering), e.clearInterval(Xe.playing), Be.embed.destroy(), a();
                    break;
                case "vimeo":
                    Be.embed.unload().then(a), Xe.cleanUp = e.setTimeout(a, 200);
                    break;
                case "video":
                case "audio":
                    Q(!0), a()
            }
        }

        function He() {
            if (Be.init) return null;
            if (N = _(), Be.browser = n(), O.htmlElement(Be.media)) {
                ee();
                var e = v.tagName.toLowerCase();
                "div" === e ? (Be.type = v.getAttribute("data-type"), Be.embedId = v.getAttribute("data-video-id"), v.removeAttribute("data-type"), v.removeAttribute("data-video-id")) : (Be.type = e, E.crossorigin = null !== v.getAttribute("crossorigin"), E.autoplay = E.autoplay || null !== v.getAttribute("autoplay"), E.loop = E.loop || null !== v.getAttribute("loop")), Be.supported = F(Be.type), Be.supported.basic && (Be.container = i(v, t.createElement("div")), Be.container.setAttribute("tabindex", 0), K(), Je("" + Be.browser.name + " " + Be.browser.version), ne(), (s(E.types.html5, Be.type) || s(E.types.embed, Be.type) && !Be.supported.full) && (We(), Ye(), Z()), Be.init = !0)
            }
        }

        function We() {
            if (!Be.supported.full) return ze("Basic support only", Be.type), l(B(E.selectors.controls.wrapper)), l(B(E.selectors.buttons.play)), void Q(!0);
            var e = !U(E.selectors.controls.wrapper).length;
            e && z(), G() && (e && Ve(), Re(), Q(), q(), D(), ke(), Te(), Ie(), ye())
        }

        function Ye() {
            e.setTimeout(function() {
                A(Be.media, "ready")
            }, 0), m(Be.media, M.classes.setup, !0), m(Be.container, E.classes.ready, !0), Be.media.plyr = Ue, E.autoplay && le()
        }
        var Ue, Be = this,
            Xe = {};
        Be.media = v;
        var $e = v.cloneNode(!0),
            Je = function() {
                j("log", arguments)
            },
            ze = function() {
                j("warn", arguments)
            };
        return Je("Config", E), Ue = {
            getOriginal: function() {
                return $e
            },
            getContainer: function() {
                return Be.container
            },
            getEmbed: function() {
                return Be.embed
            },
            getMedia: function() {
                return Be.media
            },
            getType: function() {
                return Be.type
            },
            getDuration: fe,
            getCurrentTime: function() {
                return Be.media.currentTime
            },
            getVolume: function() {
                return Be.media.volume
            },
            isMuted: function() {
                return Be.media.muted
            },
            isReady: function() {
                return f(Be.container, E.classes.ready)
            },
            isLoading: function() {
                return f(Be.container, E.classes.loading)
            },
            isPaused: function() {
                return Be.media.paused
            },
            on: function(e, t) {
                return g(Be.container, e, t), this
            },
            play: le,
            pause: ue,
            stop: function() {
                ue(), me()
            },
            restart: me,
            rewind: de,
            forward: pe,
            seek: me,
            source: Oe,
            poster: je,
            setVolume: ke,
            togglePlay: ce,
            toggleMute: he,
            toggleCaptions: Se,
            toggleFullscreen: ge,
            toggleControls: Me,
            isFullscreen: function() {
                return Be.isFullscreen || !1
            },
            support: function(e) {
                return r(Be, e)
            },
            destroy: De
        }, He(), Be.init ? Ue : null
    }

    function C(e, n) {
        var r = new XMLHttpRequest;
        if (!O.string(n) || !O.htmlElement(t.querySelector("#" + n))) {
            var a = t.createElement("div");
            a.setAttribute("hidden", ""), O.string(n) && a.setAttribute("id", n), t.body.insertBefore(a, t.body.childNodes[0]), "withCredentials" in r && (r.open("GET", e, !0), r.onload = function() {
                a.innerHTML = r.responseText
            }, r.send())
        }
    }

    function F(e) {
        var r = n(),
            a = r.isIE && r.version <= 9,
            s = r.isIos,
            o = r.isIphone,
            i = !!t.createElement("audio").canPlayType,
            l = !!t.createElement("video").canPlayType,
            u = !1,
            c = !1;
        switch (e) {
            case "video":
                u = l, c = u && !a && !o;
                break;
            case "audio":
                u = i, c = u && !a;
                break;
            case "vimeo":
                u = !0, c = !a && !s;
                break;
            case "youtube":
                u = !0, c = !a && !s, s && !o && r.version >= 10 && (c = !0);
                break;
            case "soundcloud":
                u = !0, c = !a && !o;
                break;
            default:
                u = i && l, c = u && !a
        }
        return {
            basic: u,
            full: c
        }
    }

    function A(e, n) {
        function r(e, t) {
            f(t, M.classes.hook) || a.push({
                target: e,
                media: t
            })
        }
        var a = [],
            s = [],
            o = [M.selectors.html5, M.selectors.embed].join(",");
        if (O.string(e) ? e = t.querySelectorAll(e) : O.htmlElement(e) ? e = [e] : O.nodeList(e) || O.array(e) || O.string(e) || (O.undefined(n) && O.object(e) && (n = e), e = t.querySelectorAll(o)), O.nodeList(e) && (e = Array.prototype.slice.call(e)), !F().basic || !e.length) return !1;
        for (var i = 0; i < e.length; i++) {
            var l = e[i],
                u = l.querySelectorAll(o);
            if (u.length)
                for (var c = 0; c < u.length; c++) r(l, u[c]);
            else y(l, o) && r(l, l)
        }
        return a.forEach(function(e) {
            var t = e.target,
                r = e.media,
                a = !1;
            r === t && (a = !0);
            var o = {};
            try {
                o = JSON.parse(t.getAttribute("data-plyr"))
            } catch (e) {}
            var i = x({}, M, n, o);
            if (!i.enabled) return null;
            var l = new E(r, i);
            if (O.object(l)) {
                if (i.debug) {
                    var u = i.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                    g(l.getContainer(), u.join(" "), function(e) {
                        console.log([i.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                    })
                }
                h(l.getContainer(), "setup", !0, {
                    plyr: l
                }), s.push(l)
            }
        }), s
    }

    function I(e) {
        if (O.string(e) ? e = t.querySelector(e) : O.undefined(e) && (e = t.body), O.htmlElement(e)) {
            var n = e.querySelectorAll("." + M.classes.setup),
                r = [];
            return Array.prototype.slice.call(n).forEach(function(e) {
                O.object(e.plyr) && r.push(e.plyr)
            }), r
        }
        return []
    }
    var N, P = {
            x: 0,
            y: 0
        },
        M = {
            enabled: !0,
            debug: !1,
            autoplay: !1,
            loop: !1,
            seekTime: 10,
            volume: 10,
            volumeMin: 0,
            volumeMax: 10,
            volumeStep: 1,
            duration: null,
            displayDuration: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/2.0.11/plyr.svg",
            blankUrl: "https://cdn.selz.com/plyr/blank.mp4",
            clickToPlay: !0,
            hideControls: !0,
            showPosterOnEnd: !1,
            disableContextMenu: !0,
            keyboardShorcuts: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            selectors: {
                html5: "video, audio",
                embed: "[data-type]",
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    seek: '[data-plyr="seek"]',
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    forward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]'
                },
                volume: {
                    input: '[data-plyr="volume"]',
                    display: ".plyr__volume--display"
                },
                progress: {
                    container: ".plyr__progress",
                    buffer: ".plyr__progress--buffer",
                    played: ".plyr__progress--played"
                },
                captions: ".plyr__captions",
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration"
            },
            classes: {
                setup: "plyr--setup",
                ready: "plyr--ready",
                videoWrapper: "plyr__video-wrapper",
                embedWrapper: "plyr__video-embed",
                type: "plyr--{0}",
                stopped: "plyr--stopped",
                playing: "plyr--playing",
                muted: "plyr--muted",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    active: "plyr--fullscreen-active"
                },
                tabFocus: "tab-focus"
            },
            captions: {
                defaultActive: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                allowAudio: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime} secs",
                play: "Play",
                pause: "Pause",
                forward: "Forward {seektime} secs",
                played: "played",
                buffered: "buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                toggleMute: "Toggle Mute",
                toggleCaptions: "Toggle Captions",
                toggleFullscreen: "Toggle Fullscreen",
                frameTitle: "Player for {title}"
            },
            types: {
                embed: ["youtube", "vimeo", "soundcloud"],
                html5: ["video", "audio"]
            },
            urls: {
                vimeo: {
                    api: "https://player.vimeo.com/api/player.js"
                },
                youtube: {
                    api: "https://www.youtube.com/iframe_api"
                },
                soundcloud: {
                    api: "https://w.soundcloud.com/player/api.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                forward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null
            },
            events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
            logPrefix: "[Plyr]"
        },
        O = {
            object: function(e) {
                return null !== e && "object" == typeof e
            },
            array: function(e) {
                return null !== e && "object" == typeof e && e.constructor === Array
            },
            number: function(e) {
                return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
            },
            string: function(e) {
                return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
            },
            boolean: function(e) {
                return null !== e && "boolean" == typeof e
            },
            nodeList: function(e) {
                return null !== e && e instanceof NodeList
            },
            htmlElement: function(e) {
                return null !== e && e instanceof HTMLElement
            },
            function: function(e) {
                return null !== e && "function" == typeof e
            },
            undefined: function(e) {
                return null !== e && "undefined" == typeof e
            }
        },
        L = {
            supported: function() {
                if (!("localStorage" in e)) return !1;
                try {
                    e.localStorage.setItem("___test", "OK");
                    var t = e.localStorage.getItem("___test");
                    return e.localStorage.removeItem("___test"), "OK" === t
                } catch (e) {
                    return !1
                }
                return !1
            }()
        };
    return {
        setup: A,
        supported: F,
        loadSprite: C,
        get: I
    }
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
}();
// media enquire
! function(a, b, c) {
    var d = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = c(d) : "function" == typeof define && define.amd ? define(function() {
        return b[a] = c(d)
    }) : b[a] = c(d)
}("enquire", this, function(a) {
    "use strict";

    function b(a, b) {
        var e, c = 0,
            d = a.length;
        for (c; c < d && (e = b(a[c], c), e !== !1); c++);
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.apply(a)
    }

    function d(a) {
        return "function" == typeof a
    }

    function e(a) {
        this.options = a, !a.deferSetup && this.setup()
    }

    function f(b, c) {
        this.query = b, this.isUnconditional = c, this.handlers = [], this.mql = a(b);
        var d = this;
        this.listener = function(a) {
            d.mql = a, d.assess()
        }, this.mql.addListener(this.listener)
    }

    function g() {
        if (!a) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !a("only all").matches
    }
    return e.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(a) {
            return this.options === a || this.options.match === a
        }
    }, f.prototype = {
        addHandler: function(a) {
            var b = new e(a);
            this.handlers.push(b), this.matches() && b.on()
        },
        removeHandler: function(a) {
            var c = this.handlers;
            b(c, function(b, d) {
                if (b.equals(a)) return b.destroy(), !c.splice(d, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            b(this.handlers, function(a) {
                a.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var a = this.matches() ? "on" : "off";
            b(this.handlers, function(b) {
                b[a]()
            })
        }
    }, g.prototype = {
        register: function(a, e, g) {
            var h = this.queries,
                i = g && this.browserIsIncapable;
            return h[a] || (h[a] = new f(a, i)), d(e) && (e = {
                match: e
            }), c(e) || (e = [e]), b(e, function(b) {
                d(b) && (b = {
                    match: b
                }), h[a].addHandler(b)
            }), this
        },
        unregister: function(a, b) {
            var c = this.queries[a];
            return c && (b ? c.removeHandler(b) : (c.clear(), delete this.queries[a])), this
        }
    }, new g
});