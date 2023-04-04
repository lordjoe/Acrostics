!function () {
    var e, t = {
        8827: function (e, t, s) {
            "use strict";
            s(7422);
            const {$: i} = window, {_: n} = window, {Backbone: o} = window, {moment: r} = window, {LZString: a} = window;

            function l(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function c(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            Object.assign(String.prototype, {
                convertQuotesAndDashes() {
                    return this.replace(/([^-])--([^-])/g, "$1—$2").replace(/&quot;/g, '"').replace(/"(.*?\S)"/g, "“$1”").replace(/([A-Za-z0-9])'/g, "$1’").replace(/'(..*?\S)'/g, "‘$1’").replace(/'/g, "’")
                }
            }), Object.assign(Array.prototype, {
                prettyJoin() {
                    return 0 === this.length ? "" : 1 === this.length ? this[0].toString() : [this.slice(0, -1).join(", ")].concat(this.slice(-1)).join(" and ")
                }
            }), Object.assign(Date, {
                unix() {
                    return Math.round(this.now() / 1e3)
                }
            }), Object.assign(o.Collection.prototype, {
                next(e) {
                    return this.at(this.indexOf(e) + 1)
                }, prev(e) {
                    return this.at(this.indexOf(e) - 1)
                }
            }), Object.assign(o.Model.prototype, {
                toggle(e, t) {
                    const s = t ? function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(Object(s), !0).forEach((function (t) {
                                c(e, t, s[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                            }))
                        }
                        return e
                    }({}, t) : {};
                    return this.set(e, !this.get(e), s)
                },
                setMin(e, t) {
                    const s = this.get(e);
                    if (t) {
                        const i = s ? Math.min(t, s) : t;
                        return this.set(e, i)
                    }
                    return this
                },
                setToNowIfNotSet(e) {
                    return this.set(e, this.get(e) || Date.unix())
                },
                is(e, t) {
                    return !!this.get(e, t)
                },
                increment(e) {
                    return this.set(e, this.get(e) + 1)
                },
                decrement(e) {
                    return this.set(e, this.get(e) - 1)
                },
                persistantStates: ["confirmed", "checked", "modified", "revealed", "penciled"],
                ephemeralStates: ["active", "focused", "peripheral", "related"]
            }), o.puzzleState = new o.Model({
                activeSquare: null,
                inPencilMode: !1
            }), o.puzzleState.on({
                "erase:all": function () {
                    this.set("solved", !1)
                }
            });
            var d = s(5489), u = o.Collection.extend({
                at(e) {
                    let t = e;
                    switch (!0) {
                        case e < 0:
                            t += this.length;
                            break;
                        case e >= this.length:
                            t -= this.length
                    }
                    return this.models[t]
                }
            }), h = o.Model.extend({
                initialize() {
                    const e = n.throttle((() => this.set("timestamp", Date.unix())), 1e3);
                    this.listenTo(o.puzzleState, {
                        reveal(e) {
                            this.consider(e, "reveal")
                        }, check(e) {
                            this.consider(e, "check")
                        }, erase(e) {
                            this.consider(e, "erase")
                        }, "change:activeSquare": this.toggleActiveState
                    }), this.persistantStates.concat("guess").forEach((t => this.on("change:".concat(t), e))), this.containerViewMap = {}
                }, getSquareViewByContainer(e) {
                    return this.containerViewMap[e.get("containerId")]
                }, exportPersistantData() {
                    return n.pick(this.attributes, ["guess", "timestamp"].concat(this.persistantStates))
                }, update(e) {
                    return o.puzzleState.is("solved") || this.isLocked() ? this : this.set({
                        modified: this.is("checked"),
                        penciled: !!e && o.puzzleState.is("inPencilMode"),
                        guess: e
                    })
                }, consider(e, t) {
                    let s;
                    switch (e) {
                        case"letter":
                            s = this.is("active");
                            break;
                        case"word":
                            s = this.is("focused");
                            break;
                        case"partial":
                            if (this.is("focused") && "erase" === t) return this.clearPartial();
                            break;
                        case"most":
                            s = o.puzzleState.get("activeSquare") !== this;
                            break;
                        case"puzzle":
                        case"all":
                            if (s = !0, "erase" === t) return this.reset()
                    }
                    s && this[t]()
                }, fillAnswer() {
                    this.set("guess", this.getSolutionString())
                }, reveal() {
                    if (this.isLocked()) return;
                    const e = this.isCorrect();
                    return this.set({
                        confirmed: !0,
                        checked: this.is("checked") && e,
                        guess: this.getSolutionString(),
                        penciled: !1,
                        revealed: !e
                    })
                }, check() {
                    if (this.isLocked() || this.isBlank()) return;
                    const e = this.isCorrect();
                    return this.set({
                        confirmed: e,
                        checked: !e || this.is("checked"),
                        penciled: !e && this.is("penciled"),
                        modified: !1
                    })
                }, erase() {
                    if (!this.isBlank()) return this.update("")
                }, reset() {
                    if (!this.is("immutable")) return this.set({
                        penciled: !1,
                        revealed: !1,
                        checked: !1,
                        confirmed: !1,
                        modified: !1,
                        guess: "",
                        timestamp: Date.unix()
                    })
                }, fillOthers() {
                    this.collection.filter((e => e !== this && !e.is("immutable"))).forEach((e => e.fillAnswer()))
                }, isBlank() {
                    return "" === this.get("guess")
                }, wasBlank() {
                    return "" === this.previous("guess")
                }, isCorrect() {
                    return this.is("immutable") || this.guessMatchesSolution(this.get("guess"))
                }, wasCorrect() {
                    return this.is("immutable") || this.guessMatchesSolution(this.previous("guess"))
                }, isCheckedIncorrectAndUnmodified() {
                    return this.is("checked") && !this.is("confirmed") && !this.is("modified")
                }, guessMatchesSolution(e) {
                    const t = this.get("solution");
                    return "string" == typeof t ? t === e : t.includes(e)
                }, getSolutionString() {
                    const e = this.get("solution");
                    return "string" == typeof e ? e : e[0]
                }, isLocked() {
                    return !(!this.is("confirmed") && !this.is("immutable"))
                }, isPristine() {
                    return 0 === this.get("timestamp")
                }, getRowCol() {
                    const e = this.collection.width || 27, t = this.collection.indexOf(this), s = t % e;
                    return {row: Math.floor(t / e), col: s}
                }, getPosition() {
                    const e = this.collection.width || 27, {row: t} = this.getRowCol(), {col: s} = this.getRowCol();
                    let i = !0, n = !0;
                    return s > e / 2 && (n = !1), t * e > this.collection.length / 2 && (i = !1), {upper: i, left: n}
                }, shouldBeSkipped() {
                    const e = o.puzzleState.settings.get("skipFilled"), t = o.puzzleState.settings.get("skipPenciled");
                    return !(!e || this.isBlank() || this.isCheckedIncorrectAndUnmodified() || !t && this.is("penciled"))
                }, toggleActiveState(e, t) {
                    this.set("active", t === this)
                }, reflectWordSelection(e, t) {
                    this.set("focused", t)
                }
            }), p = u.extend({
                model: h, exportState() {
                    return this.map((e => e.exportPersistantData()))
                }
            }), m = o.Model.extend({
                initialize() {
                    const e = this;
                    this.letters = new p, this.letters.on("add", (t => {
                        t.listenTo(e, "change:selected", t.reflectWordSelection)
                    })), this.defineLetterOrder(), this.listenTo(o.puzzleState, "change:activeSquare", this.reflectLetterActiveState)
                }, defaults: {selected: !1}, defineLetterOrder() {
                    this.letters.comparator = "number"
                }, reflectContainerFocus(e, t) {
                    const s = o.puzzleState.get("activeSquare"), i = this.contains(s);
                    this.updateSelection(i && t)
                }, reflectLetterActiveState(e, t) {
                    const s = this.contains(t), i = o.puzzleState.get("focusedContainer"), n = this.container === i;
                    this.updateSelection(s && n)
                }, reflectLetterHoverState(e, t) {
                    this.set("hovered", t)
                }, updateSelection(e) {
                    this.set("selected", e)
                }, contains(e) {
                    return this.letters.contains(e)
                }, select() {
                    o.puzzleState.set("activeSquare", this.letters.first())
                }
            }), g = u.extend({model: m}), f = o.Model.extend({
                initialize() {
                    const e = o.puzzleState;
                    this.words = new g, this.letters = new p, this.words.on("add", (e => {
                        e.container = this, e.listenTo(this, "change:focused", e.reflectContainerFocus), this.letters.add(e.letters.models)
                    })), this.on("change:focused", ((t, s) => {
                        if (s) {
                            const t = e.get("activeSquare");
                            e.unset("activeSquare", {silent: !0}), e.set({focusedContainer: this, activeSquare: t})
                        }
                    }))
                }, focus() {
                    return (o.puzzleState.get("focusedContainer") || this).set("focused", !1), this.set("focused", !0)
                }, cycle(e) {
                    e ? this.next().focus() : this.prev().focus()
                }, move(e) {
                    const t = o.puzzleState.get("activeSquare");
                    switch (e) {
                        case"forward":
                        default:
                            return this.moveForwardFrom(t);
                        case"backward":
                            return this.moveBackwardFrom(t);
                        case"up":
                            return this.moveUpFrom(t);
                        case"down":
                            return this.moveDownFrom(t)
                    }
                }, moveForwardFrom(e) {
                    return this.moveFromBy(e, 1)
                }, moveBackwardFrom(e) {
                    return this.moveFromBy(e, -1)
                }, moveFromBy(e, t, s) {
                    const i = this.letters.indexOf(e), n = this.letters.length;
                    let r, a = t;
                    do {
                        if (r = this.letters.at(i + a), !(r.is("immutable") || s && r.shouldBeSkipped())) {
                            o.puzzleState.set("activeSquare", r);
                            break
                        }
                        a += t
                    } while (Math.abs(a) < n);
                    return this
                }, moveAndSkip(e) {
                    return this.moveFromBy(e, 1, !0)
                }, moveUpFrom() {
                    return this.jumpWord(!1)
                }, moveDownFrom() {
                    return this.jumpWord(!0)
                }, jumpWord(e) {
                    const t = o.puzzleState.get("activeSquare"), s = this.findWordWithLetter(t);
                    return e ? this.words.next(s).select() : this.words.prev(s).select(), this
                }, findWordWithLetter(e) {
                    return this.words.find((t => t.contains(e)))
                }
            }), v = m.extend({
                defineLetterOrder() {
                    this.letters.comparator = "position"
                }, includes(e) {
                    return this.get("letter") === e.get("clue")
                }
            }), b = f.extend({
                moveUpFrom(e) {
                    return this.moveFromBy(e, -this.get("width"))
                }, moveDownFrom(e) {
                    return this.moveFromBy(e, this.get("width"))
                }
            }), w = m.extend({
                containerId: "author-title", defineLetterOrder() {
                    this.letters.comparator = "clue"
                }
            }), y = o.Model.extend({
                hydrate() {
                    this.squares = new p(this.get("grid")), this.addTrailingSquares();
                    const e = this.hydrateClues("clue-bar"), t = this.hydrateClues("clue-list"), s = this.hydrateGrid(),
                        i = this.hydrateAuthorTitle();
                    return this.linkContainers(e, t, s, i), this.set({clueBar: e, clueList: t, grid: s, authorTitle: i})
                }, addTrailingSquares() {
                    for (let e = this.get("height") * this.get("width") - this.squares.length; e > 0; e -= 1) this.squares.add(new h({
                        immutable: !0,
                        solution: ""
                    }))
                }, hydrateClues(e) {
                    const t = new f({containerId: e}), s = this.get("clues").map((e => new v(e)));
                    return this.squares.where({immutable: !1}).forEach((e => {
                        s.find((t => t.includes(e))).letters.add(e)
                    })), t.words.add(s), t
                }, hydrateGrid() {
                    const e = new b({
                        containerId: "grid",
                        height: this.get("height"),
                        width: this.get("width"),
                        text: this.get("quote").text,
                        author: this.get("quote").author,
                        title: this.get("quote").title
                    });
                    let t = new m;
                    const s = e.words, i = this.squares.length - 1;
                    return this.squares.each(((n, o) => {
                        n.is("immutable") ? (t.letters.length > 0 && (s.add(t), t = new m), e.letters.add(n)) : (t.letters.add(n), o === i && s.add(t))
                    })), e
                }, hydrateAuthorTitle() {
                    const e = this.squares.where({position: 0}), t = new w, s = new f({containerId: "author-title"});
                    return e.forEach((e => {
                        t.letters.add(e)
                    })), s.words.add(t), s
                }, linkContainers(e, t, s, i) {
                    const n = () => 0 === o.puzzleState.get("activeSquare").get("position"),
                        r = () => o.puzzleState.settings.get("showClues");
                    e.next = () => s, e.prev = () => {
                        let e;
                        return e = r() ? t : n() ? i : s, e
                    }, s.next = () => {
                        let s;
                        return s = n() ? i : r() ? t : e, s
                    }, i.next = () => r() ? t : e, i.prev = () => s, t.prev = () => n() ? i : s, t.next = () => e
                }, countIncorrect() {
                    const e = this;
                    let t = 0, s = 0;
                    this.squares.each((i => {
                        i.is("immutable") || (e.listenTo(i, "change:guess", e.updateIncorrectCount), e.listenTo(i, "change:guess", e.updateBlankCount), i.isCorrect() || (t += 1), i.isBlank() && (s += 1))
                    })), e.set("incorrectCount", t), e.set("blankCount", s)
                }, updateIncorrectCount(e) {
                    e.isCorrect() !== e.wasCorrect() && (e.isCorrect() ? this.decrement("incorrectCount") : this.increment("incorrectCount"))
                }, updateBlankCount(e) {
                    e.isBlank() !== e.wasBlank() && (e.isBlank() ? this.increment("blankCount") : this.decrement("blankCount"))
                }
            }), S = s(9526), k = (s(3961), s(2924));
            const z = new k.y((e => {
                if ("undefined" == typeof window) return void e.error("Cannot fetch user info on the server.");
                const t = window.userQueryXHR;
                if (!t) return void e.error("The UserQuery XHR was not initialized.");
                if (4 === t.readyState) {
                    try {
                        const s = JSON.parse(t.responseText);
                        e.next(s.data)
                    } catch (e) {
                    } finally {
                        e.complete()
                    }
                    return
                }
                const s = {once: !0};
                t.addEventListener("timeout", e.error, s), t.addEventListener("error", e.error, s), t.addEventListener("load", (() => {
                    const s = JSON.parse(t.responseText);
                    e.next(s.data), e.complete()
                }), s)
            }));
            new k.y((e => {
                if ("undefined" == typeof window) return void e.error("Cannot fetch anon entitlements on the server.");
                const t = window.anonEntitlementXHR;
                if (!t) return void e.error("The anon entitlement XHR was not initialized.");
                if (4 === t.readyState) {
                    try {
                        (0, d.Fg)("User Query", {
                            responseText: t.responseText || "none",
                            status: t.status,
                            statusText: t.statusText
                        });
                        const s = JSON.parse(t.responseText);
                        e.next(s)
                    } catch (e) {
                        (0, d.lY)(new Error("Failed to fetch entitlements"), {
                            api: "games-ecomm",
                            category: "entitlements"
                        })
                    } finally {
                        e.complete()
                    }
                    return
                }
                const s = {once: !0};
                t.addEventListener("timeout", e.error, s), t.addEventListener("error", e.error, s), t.addEventListener("load", (() => {
                    const s = JSON.parse(t.responseText);
                    e.next(s), e.complete()
                }), s)
            })), (0, S.createContext)({
                userType: {
                    isLoggedIn: !1,
                    hasXwd: !1,
                    hasDigi: !1,
                    hasHd: !1,
                    entitlement: "anon",
                    regiId: "",
                    inShortzMode: !1,
                    nytsCookie: ""
                }, updateUserType: () => {
                }, hasLoaded: !1
            });
            var C = o.Model.extend({
                initialize(e, t) {
                    this.timer = t.timer, this.grid = t.grid, n.bindAll(this, "sync", "recordChanges", "storeLocally", "saveQuietly", "applyProgressAndStartListening", "applyProgress", "startListening", "resetTimer", "updatePendingCommits", "bindSaveOnUnload"), this.throttledStore = n.throttle(this.storeLocally, 1e3), this.throttledSave = n.throttle(this.saveQuietly, 3e5, {leading: !1});
                    try {
                        this.deviceId = window.localStorage.getItem("nytXwdDeviceId") || "".concat(this.generateRandomId(), "-web"), /-web/.test(this.deviceId) || (this.deviceId = "".concat(this.generateRandomId(), "-web")), window.localStorage.setItem("nytXwdDeviceId", this.deviceId)
                    } catch (e) {
                        window.noLS = !0, window.console.error("Failed to store locally! localStorage not available."), this.deviceId = "".concat(this.generateRandomId(), "-web")
                    }
                },
                defaults: {lastUpdateTime: 0, pendingCommits: [], timeElapsed: 0},
                firsts: ["firstOpened", "firstChecked", "firstRevealed", "firstCleared", "firstTimerReset", "firstSolved"],
                recordChanges() {
                    this.throttledStore(), this.throttledSave()
                },
                failureCount: 0,
                saveQuietly() {
                    const e = this;
                    if (!(e.failureCount >= 3)) return e.sync({
                        onError() {
                            e.timeElapsedAtLastCommit = e.get("timeElapsed"), n.delay(e.saveQuietly, 1e4), e.failureCount += 1
                        }
                    })
                },
                storeLocally() {
                    if (window.noLS) return !1;
                    const e = JSON.stringify(this.toJSON());
                    window.localStorage.setItem(this.id, a.compressToUTF16(e))
                },
                getFromLocalStorage() {
                    let e = window.localStorage.getItem(this.id);
                    try {
                        return e = a.decompressFromUTF16(e), JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                },
                load() {
                    const e = this.getFromLocalStorage();
                    return e ? (this.set(e), this.timeElapsedAtLastCommit = this.get("timeElapsed"), this.on("change", this.recordChanges), this.bindSaveOnUnload()) : this.once("change:squares", (() => {
                        this.on("change", this.recordChanges), this.bindSaveOnUnload()
                    })), e ? this.sync() : this.fetch()
                },
                applyProgressAndStartListening() {
                    this.listening || (this.applyProgress(), this.startListening())
                },
                applyProgress() {
                    const e = this.get("squares");
                    this.timer.set("seconds", this.get("timeElapsed")), this.grid.each(((t, s) => t.is("immutable") || t.set(e[s]))), this.setToNowIfNotSet("firstOpened")
                },
                startListening() {
                    this.listenTo(this.grid, {"change:timestamp": this.updateGridState}).listenTo(this.timer, {
                        "change:seconds": this.updateTime,
                        "change:ticking": this.saveOnPause
                    }).listenTo(o.puzzleState, {
                        "change:solved": this.changeSolveState,
                        check: this.markChecked,
                        reveal: this.markRevealed,
                        erase: this.markCleared
                    }), this.listening = !0
                },
                saveOnPause(e, t) {
                    t || this.saveQuietly()
                },
                bindSaveOnUnload() {
                    i(window).on("beforeunload.save", n.bind((() => {
                        this.is("solved") || this.sync()
                    }), this))
                },
                markChecked() {
                    this.setToNowIfNotSet("firstChecked")
                },
                markRevealed() {
                    this.setToNowIfNotSet("firstRevealed")
                },
                markCleared(e) {
                    "puzzle" !== e && "all" !== e || (this.setToNowIfNotSet("firstCleared"), "all" === e && (this.setToNowIfNotSet("firstTimerReset"), o.puzzleState.set("inCompetitiveMode", !1)))
                },
                changeSolveState(e, t) {
                    t ? this.markSolved() : this.resetTimer()
                },
                markSolved() {
                    this.setToNowIfNotSet("firstSolved")
                },
                resetTimer() {
                    this.updatePendingCommits(!0), this.timeElapsedAtLastCommit = 0
                },
                generateRandomId() {
                    return Math.random().toString(36).slice(2, 8)
                },
                updatePendingCommits(e) {
                    const t = {id: this.generateRandomId(), timestamp: Date.unix()};
                    if (e) t.resetTimer = !0; else if (t.timerDiff = this.get("timeElapsed") - (this.timeElapsedAtLastCommit || 0), !t.timerDiff) return;
                    this.get("pendingCommits").push(t)
                },
                updateGridState() {
                    this.set("squares", this.grid.exportState())
                },
                updateTime(e, t) {
                    return this.set("timeElapsed", t)
                },
                fetch() {
                    return this.sync({method: "get", path: "game/".concat(this.get("puzzleId"), ".json"), data: void 0})
                },
                sync() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const {method: t = "put", path: s = "game.json", data: i = this.marshallData(), onError: n} = e;
                    return d.Be[t]("https://www.nytimes.com/svc/crosswords/v2/".concat(s), i).then((e => {
                        this.set(this.parse(e)), this.applyProgressAndStartListening()
                    })).catch((e => {
                        if (!n) throw e;
                        n(e)
                    }))
                },
                parse(e) {
                    const t = e.results, s = {
                        lastUpdateTime: t.lastUpdateTime || 0,
                        pendingCommits: [],
                        timeElapsed: t.timeElapsed || 0
                    };
                    return this.timeElapsedAtLastCommit = t.timeElapsed, t.unmerged || n.extend(s, {
                        squares: t.epoch > 0 ? this.unmarshallBoard(t.board, t.epoch) : this.grid.exportState(),
                        solved: t.solved
                    }), n.each(this.firsts, n.bind((e => {
                        this.setMin(e, t[e])
                    }), this)), s
                },
                marshallData() {
                    const e = this.get("squares"), t = Date.unix(), s = n.without(n.pluck(e, "timestamp"), 0, void 0),
                        i = s.length ? n.min(s) - 1 : null, o = n.extend({
                            id: this.id,
                            lastUpdateTime: this.get("lastUpdateTime"),
                            deviceId: this.deviceId,
                            commits: this.get("pendingCommits"),
                            epoch: i || t,
                            now: t,
                            printDate: this.get("printDate"),
                            board: this.marshallBoard(e, i),
                            solved: this.grid.models.every((e => e.isCorrect()))
                        }, n.pick(this.attributes, this.firsts));
                    return this.updatePendingCommits(), o
                },
                marshallBoard(e, t) {
                    const s = this.persistantStates;
                    return n.map(e, (e => "number" != typeof e.timestamp ? "" : t ? [e.guess, n.reduce(s, ((t, s, i) => e[s] ? t + 2 ** i : t), 0), e.timestamp ? e.timestamp - t : 0].join("|") : "|0|0"))
                },
                unmarshallBoard(e, t) {
                    const s = this.persistantStates;
                    return n.map(e, (e => {
                        const i = e.split("|"), o = i[0], r = Number(i[1]), a = Number(i[2]), l = {};
                        return e && (n.extend(l, {
                            guess: o,
                            timestamp: 0 === a ? a : a + t
                        }), a > 0 && n.each(s, ((e, t) => {
                            l[e] = !!(r & 2 ** t)
                        }))), l
                    }))
                }
            });

            function O(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(s), !0).forEach((function (t) {
                        _(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : O(Object(s)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function _(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            const T = (e, t) => (e.classList.add(t), e);

            function E(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function P(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            const j = (e => {
                const t = "pzm", s = "".concat(t, "-system"), i = "".concat(t, "-modals-wrapper"),
                    n = "".concat(t, "-submodal"), o = "".concat(t, "-modal"), r = "".concat(o, "-content"),
                    a = "".concat(o, "-ex"), l = "".concat(t, "-active"), c = () => {
                    }, d = (e, t) => (e.classList.add(t), e), u = (e, t) => (e.classList.remove(t), e),
                    h = x({root: document.body, onOpen: c, onClose: c, modals: []}, e), p = {}, m = d(h.root, s),
                    g = d(document.createElement("div"), n), f = d(document.createElement("div"), i);
                let v, b, w, y, S;
                f.setAttribute("tabindex", "0");
                const k = e => {
                    e.target === f && v.close()
                }, z = e => {
                    "Escape" === e.key && (e.preventDefault(), v.close())
                }, C = e => {
                    if (!p[e]) throw new Error("unknown modal ".concat(e, "\n\nchoose one of\n\t").concat(Object.keys(p).join("\n\t"), "\n"));
                    return p[e]
                }, O = e => {
                    let {root: t, subRoot: s, name: i, meta: n, viewTime: o, viewCount: r} = e;
                    return {
                        root: t,
                        subRoot: s,
                        name: i,
                        meta: n,
                        viewTime: o,
                        viewCount: r,
                        openTrigger: w,
                        closeTrigger: y
                    }
                }, _ = (e, t, s) => {
                    const i = O(t), n = s && O(s);
                    h[e] && h[e](i, n), t[e] && t[e](i, n)
                }, T = e => {
                    var s;
                    if (!e.name || p[e.name]) throw new Error("modals need a unique name");
                    const i = x(x({
                        meta: {},
                        create: c,
                        id: "".concat(t, "-").concat(e.name),
                        className: "",
                        onOpen: c,
                        onClose: c,
                        closeByEx: !0,
                        closeByBgClick: !0,
                        viewTime: 0,
                        viewCount: 0,
                        subModalContent: void 0
                    }, e), {}, {root: d(document.createElement("div"), r), wrap: d(document.createElement("div"), o)});
                    i.wrap.setAttribute("id", i.id), i.closeByEx && (i.ex = d(document.createElement("div"), a), i.ex.innerHTML = "×", i.ex.setAttribute("role", "button"), i.ex.setAttribute("tabindex", "0"), i.ex.addEventListener("click", v.close), i.ex.addEventListener("keydown", (e => {
                        "Enter" !== e.key && "NumpadEnter" !== e.key || (e.preventDefault(), e.stopPropagation(), v.close())
                    })), i.wrap.appendChild(i.ex)), null !== (s = i.subModalContent) && void 0 !== s && s.name && (i.subRoot = d(document.createElement("div"), "".concat(t, "-submodal-content-").concat(e.name)), g.appendChild(i.subRoot), d(i.wrap, "".concat(t, "-with-").concat(i.subModalContent.name))), i.wrap.appendChild(i.root), i.className && d(i.wrap, i.className), f.appendChild(i.wrap), Object.assign(i, i.create(O(i), v)), p[i.name] = i
                }, E = (e, t) => {
                    if ((e => e === (b && b.name))(e)) return;
                    const s = C(e);
                    w = t, s.viewCount += 1, S = Date.now(), d(s.wrap, l), s.subRoot && d(s.subRoot, l), f.focus(), s.closeByBgClick && f.addEventListener("click", k), (s.closeByBgClick || s.closeByEx) && document.body.addEventListener("keydown", z), _("onOpen", s, b), b = s
                }, P = e => {
                    if (!b) return;
                    y = "string" == typeof e ? e : void 0, b.viewTime += Date.now() - S, u(b.wrap, l), b.subRoot && u(b.subRoot, l), b.closeByBgClick && f.removeEventListener("click", k), (b.closeByBgClick || b.closeByEx) && document.body.removeEventListener("keydown", z);
                    const t = b;
                    b = void 0, _("onClose", t)
                };
                return v = {
                    add(e) {
                        T(e)
                    }, get(e) {
                        return O(C(e))
                    }, getAll() {
                        return Object.keys(p).map((e => this.get(e)))
                    }, open(e, t) {
                        b ? (P(), E(e, t)) : (d(m, l), E(e, t))
                    }, close() {
                        u(m, l), P()
                    }, getContent() {
                        return f
                    }, setScrimColor(e) {
                        f.style.background = e
                    }
                }, m.appendChild(f), h.modals.forEach(T), f.appendChild(g), v
            })({
                root: document.getElementById("portal-game-modals"),
                modals: [{
                    name: "pause",
                    className: "narrow",
                    closeByEx: !1
                }, {name: "almost-there"}, {name: "congrats"}, {name: "settings", closeByBgClick: !1}],
                onOpen() {
                    o.puzzleState.trigger("pause:timer")
                },
                onClose() {
                    o.puzzleState.is("solved") || o.puzzleState.trigger("resume:timer")
                }
            });
            window.Stickyfill.add(j.getContent()), (e => {
                let t, s, i, n, o;
                e.add({
                    name: "confirm", create(r) {
                        let {root: a} = r;
                        t = T(document.createElement("div"), "pzm-modal__content"), s = T(document.createElement("button"), "pzm-modal__button"), i = T(document.createElement("button"), "pzm-modal__button");
                        const l = T(document.createElement("div"), "pzm-modal__buttons");
                        T(i, "primary"), s.addEventListener("click", (() => {
                            e.close(), n && n()
                        })), i.addEventListener("click", (t => {
                            e.close(), t.stopPropagation(), o && o()
                        })), t.innerHTML = "Are you sure?", s.innerHTML = "Never mind", i.innerHTML = "OK", l.appendChild(s), l.appendChild(i), a.appendChild(t), a.appendChild(l)
                    }
                });
                const r = (r, a, l) => {
                    const c = "string" == typeof r ? {message: r} : r;
                    c.message && (t.innerHTML = c.message), c.cancelText && (s.innerHTML = c.cancelText), c.confirmText && (i.innerHTML = c.confirmText), o = a, n = l, e.open("confirm")
                };
                e.confirm = r
            })(j);
            const {confirm: I} = j;
            var L = o.View.extend({
                    className: "modal-wrapper", initialize() {
                        return this.modal = j.get(this.name), this.setElement(this.modal.root), this
                    }, events() {
                        return function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? E(Object(s), !0).forEach((function (t) {
                                    P(e, t, s[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : E(Object(s)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                                }))
                            }
                            return e
                        }({"click .modal-close": "hide", keydown: "intercept", keypress: "intercept"}, this.modalEvents)
                    }, preventFocusLoss(e) {
                        this.refocus(), e.stopPropagation()
                    }, refocus() {
                        this.$focalPoint.focus()
                    }, show(e) {
                        this.onOpen(), this.$el.html(this.template(this.data())), this.$focalPoint = this.$(".focal-point, button").last(), j.open(this.name, e), this.refocus()
                    }, hide() {
                        j.close(), this.onClose()
                    }, intercept(e) {
                        27 === e.which && this.hide(e, !0), e.stopPropagation()
                    }, data() {
                        return {}
                    }, onOpen() {
                    }, onClose() {
                    }
                }), B = s(6547), D = s.n(B), M = L.extend({
                    name: "congrats", template: D(), modalEvents: {"click .review-button": "hide"}, data() {
                        if (!o.puzzleState.settings.is("showClock")) return {};
                        const [e] = i("#timer").text().trim().match(/[1-9].*/);
                        return {time: e.includes(":") ? e : "".concat(e, " seconds")}
                    }, onOpen() {
                        o.puzzleState.trigger("track:action", "action", "game-page", "game-complete"), o.puzzleState.settings.is("soundOn") && document.getElementById("strut").play()
                    }, onClose() {
                    }
                }), q = s(7582), N = s.n(q),
                A = L.extend({name: "almost-there", template: N(), modalEvents: {"click .ok-button": "hide"}});
            const R = ["skipFilled", "skipPenciled", "showClock", "showNumbers", "showClues", "soundOn"];
            var F = o.Model.extend({
                initialize() {
                    this.set(this.retrieve()), this.on("change", this.persist)
                },
                defaults: {
                    skipFilled: !1,
                    skipPenciled: !1,
                    showClock: !0,
                    showClues: !0,
                    showNumbers: !0,
                    soundOn: !0
                },
                persist() {
                    const e = JSON.stringify(this.toJSON());
                    try {
                        window.localStorage.setItem(this.id, e)
                    } catch (e) {
                        window.console.error(e.message)
                    }
                    o.puzzleState.trigger("track:action", "update", "settings", e)
                },
                retrieve() {
                    try {
                        const e = window.localStorage.getItem(this.id), t = JSON.parse(e);
                        return this.set(t), t
                    } catch (e) {
                        return !1
                    }
                },
                getBitmask() {
                    return this.packBitmask(this.toJSON())
                },
                packBitmask: e => R.reduce(((t, s, i) => {
                    let n = t;
                    return ("object" == typeof s ? e[s.name] === s.onValue : e[s]) && (n += 2 ** i), n
                }), 0),
                unpackBitmask: e => R.reduce(((t, s, i) => {
                    const n = e & 2 ** i,
                        o = "object" == typeof s ? {[s.name]: n ? s.onValue : s.offValue} : {[s]: !!n};
                    return Object.assign(t, o)
                }), {})
            }), U = o.Model.extend({
                initialize() {
                    this.listenTo(o.puzzleState, {
                        "change:solved": this.pauseIfSolved,
                        "erase:all": this.reset,
                        "pause:timer": this.pause,
                        "resume:timer": this.start
                    }), this.listenTo(this, "change:ticking", this.update)
                }, defaults: {seconds: 0, ticking: !1}, update(e, t) {
                    t ? this._setInterval() : this._clearInterval()
                }, _setInterval() {
                    this.interval = window.setInterval(this.tick.bind(this), 1e3)
                }, reset() {
                    this.set("seconds", 0), this.start()
                }, _clearInterval() {
                    window.clearInterval(this.interval)
                }, start() {
                    this.set("ticking", !0)
                }, pause() {
                    this.set("ticking", !1)
                }, pauseIfSolved(e, t) {
                    t && this.pause()
                }, tick() {
                    this.increment("seconds")
                }
            }), H = s(4658), W = e => {
                if (e.ctrlKey || e.metaKey || e.altKey) return;
                const {activeSquare: t, focusedContainer: s} = o.puzzleState.attributes;
                ((e, t, s) => {
                    const i = e.which;
                    let n;
                    if (o.puzzleState.unset("hoveredSquare"), !(e.ctrlKey || e.metaKey || e.altKey)) {
                        switch (i) {
                            case 9:
                                return s.cycle(!e.shiftKey), void e.preventDefault();
                            case 13:
                                return s.jumpWord(!e.shiftKey), void e.preventDefault();
                            case 37:
                                n = "backward";
                                break;
                            case 39:
                                n = "forward";
                                break;
                            case 38:
                                n = "up";
                                break;
                            case 40:
                                n = "down";
                                break;
                            case 8:
                                return t.isBlank() || t.isLocked() ? (s.move("backward"), o.puzzleState.get("activeSquare").update("")) : t.update(""), void e.preventDefault();
                            case 32:
                                if (window.IS_TOUCH_ENABLED) return s.cycle(!e.shiftKey), void e.preventDefault();
                                t.update(""), n = "forward";
                                break;
                            case 46:
                                return t.update(""), void e.preventDefault();
                            default:
                                return
                        }
                        s.move(n), e.preventDefault()
                    }
                })(e, t, s);
                const i = String.fromCharCode(e.which).toUpperCase(), n = t, r = s;
                if (!/[A-Z0-9]/.test(i)) return !1;
                n.isBlank() ? r.moveAndSkip(n) : r.move("forward"), n.update(i), e.preventDefault()
            };
            const V = () => {
                const e = (document && document.documentElement).clientHeight, t = window.innerHeight;
                return e < t ? t : e
            }, K = "scrollBehavior" in document.documentElement.style ? (e, t) => window.scroll({
                top: t,
                left: e,
                behavior: "smooth"
            }) : (e, t) => window.scroll(e, t);
            var G = o.View.extend({
                    tagName: "input",
                    attributes: {
                        id: "focus-trap",
                        autocomplete: "off",
                        autocorrect: "off",
                        maxlength: 1,
                        autocapitalize: "characters",
                        spellcheck: "false"
                    },
                    repositionTriggers: ["change:activeSquare", "change:inPencilMode", "erase", "reveal", "check"],
                    events: {
                        input: e => {
                            const {data: t} = e.originalEvent;
                            e.which = t.charCodeAt(t.length - 1), e.target.value = "", W(e)
                        }
                    },
                    initialize() {
                        this.listenTo(o.puzzleState, this.repositionTriggers.join(" "), this.reposition), document.body.appendChild(this.el), H.tq && document.body.addEventListener("resize", this.reposition.bind(this))
                    },
                    elementNeedsRepositioning(e) {
                        const t = V() * (H.tq ? .2 : .05), s = V() * (H.tq ? .6 : .95), i = e.getBoundingClientRect();
                        return i.bottom > s || i.top < t
                    },
                    scrollInputToTopQuarterOfViewport(e) {
                        const t = window.scrollX, s = e - V() / 4;
                        K(t, s)
                    },
                    reposition() {
                        const {activeSquare: e, focusedContainer: t, solved: s} = o.puzzleState.attributes;
                        if (!e || s) return;
                        const {$el: i} = e.getSquareViewByContainer(t);
                        if (H.tq) {
                            const t = window.scrollX, s = window.scrollY, {top: n, left: o} = i.offset();
                            this.$el.val(e.get("guess") || ""), this.$el.css({
                                top: n,
                                left: o,
                                width: i.outerWidth(),
                                height: i.outerHeight(),
                                fontSize: i.css("fontSize"),
                                lineHeight: i.outerHeight()
                            }).focus(), K(t, s)
                        }
                        this.elementNeedsRepositioning(i[0]) && setTimeout((() => this.scrollInputToTopQuarterOfViewport(i.offset().top)), 50)
                    }
                }), J = s(2978), Q = s.n(J), Z = L.extend({
                    name: "settings",
                    template: Q(),
                    data() {
                        return this.model.toJSON()
                    },
                    modalEvents: {
                        "click #restore-defaults-button": "restoreDefaults",
                        "change input": "updateSetting",
                        "click #ok-button": "hide",
                        "change #skipFilled": function (e) {
                            this.updateDependentBoxes(e.target.checked)
                        }
                    },
                    updateDependentBoxes(e) {
                        this.$("#skipPenciled")[0].checked ? this.$("#skipPenciled").click().prop("disabled", !0) : this.$("#skipPenciled").prop("disabled", !e)
                    },
                    onOpen() {
                        this.original = this.data()
                    },
                    onClose() {
                        const e = this.model.getBitmask();
                        e !== this.model.packBitmask(this.original) && o.puzzleState.trigger("track:action", "update", "settings", e)
                    },
                    restoreDefaults() {
                        const {model: e} = this;
                        Object.entries(e.defaults).forEach((t => {
                            let [s, i] = t;
                            e.get(s) !== i && (e.set(s, i), "boolean" == typeof i ? this.$("[name=".concat(s, "]")).prop("checked", i) : this.$("[name=".concat(s, "][value=").concat(i, "]")).prop("checked", !0))
                        })), this.updateDependentBoxes(this.$("#skipFilled")[0].checked)
                    },
                    updateSetting(e) {
                        const t = e.target, s = t.name, i = "checkbox" === t.type ? t.checked : t.value;
                        this.model.set(s, i)
                    }
                }), Y = s(3869), X = s.n(Y), ee = s(2589), te = s.n(ee),
                se = L.extend({name: "pause", template: te(), modalEvents: {"click button": "hide"}}),
                ie = o.View.extend({
                    initialize() {
                        this.listenTo(this.model, {"change:seconds": this.updateClock}), this.listenTo(o.puzzleState, {"change:solved": this.toggleClock}), this.listenTo(o.puzzleState.settings, "change:showClock", this.displayClock), this.pauseModal = new se
                    }, render() {
                        return this.$el.html(X()()), this.$clock = this.$(".timer-count"), o.puzzleState.settings.is("showClock") || this.$el.css("visibility", "hidden"), this.model.start(), this
                    }, events: {"click #timer": "openPauseModal"}, formatTime(e) {
                        const t = Math.floor(e / 3600), s = Math.floor(e % 3600 / 60), i = e % 60;
                        return [t, s < 10 ? "0".concat(s) : s, i < 10 ? "0".concat(i) : i].join(":")
                    }, updateClock(e, t) {
                        this.$clock.html(this.formatTime(t)), 0 === t && this.toggleClock()
                    }, toggleClock(e, t) {
                        this.$("#timer").prop("disabled", t)
                    }, displayClock() {
                        o.puzzleState.settings.is("showClock") ? this.$el.css("visibility", "visible") : this.$el.css("visibility", "hidden")
                    }, openPauseModal() {
                        this.pauseModal.show()
                    }
                }), ne = s(2545), oe = s.n(ne), re = o.View.extend({
                    className: "acrostic-tools",
                    initialize(e) {
                        Object.assign(this, e), this.listenTo(o.puzzleState, {"change:solved": this.toggleButtons}), this.settingsModal = new Z({model: o.puzzleState.settings})
                    },
                    render() {
                        return this.$el.html(oe()()), new ie({
                            el: this.$("#timer-container")[0],
                            model: this.model
                        }).render(), this.$menus = this.$(".toolbar-menu-wrapper ul"), this.$buttons = this.$(".toolbar-menu-wrapper button"), this
                    },
                    events: {
                        "click #show-grid-toggle": "toggleShowGrid",
                        "click button.pencil-mode-toggle": "togglePencilMode",
                        "click .toolbar-menu-wrapper button": "toggleMenu",
                        "click li": "handleMenuItemClick",
                        "click #solving-settings": "showSettingsModal"
                    },
                    showSettingsModal() {
                        this.settingsModal.show(), o.puzzleState.trigger("track:action", "click", "game-toolbar", "settings")
                    },
                    hideAllMenus() {
                        this.$menus.removeClass("active"), this.$buttons.removeClass("active")
                    },
                    toggleMenu(e) {
                        const t = i(e.target).hasClass("active");
                        this.hideAllMenus(), t || (i(e.target).addClass("active"), i(e.target).next().addClass("active"), i("body").one("click", (() => this.hideAllMenus()))), e.stopPropagation()
                    },
                    handleMenuItemClick(e) {
                        const t = i(e.currentTarget), s = t.data("scope"),
                            n = t.parent().removeClass("active").data("action");
                        let r, a, l;
                        "all" === s ? (l = !0, r = "Are you sure you want to reset the puzzle?", a = "Reset") : "puzzle" === s && ("erase" === n && (r = "Are you sure you want to clear the grid?", a = "Clear"), "reveal" === n && (r = "Are you sure you want to reveal the entire solution?", a = "Reveal")), r ? I({
                            message: r,
                            confirmText: a
                        }, (() => {
                            l && o.puzzleState.trigger("erase:all"), o.puzzleState.trigger(n, s)
                        })) : o.puzzleState.trigger(n, s)
                    },
                    toggleButtons(e, t) {
                        t ? this.lockButtons() : this.restoreButtons()
                    },
                    togglePencilMode() {
                        o.puzzleState.toggle("inPencilMode"), this.$(".pencil-mode-toggle").toggleClass("pencil")
                    },
                    lockButtons() {
                        this.$(".clear-menu").on("click.reset", (e => {
                            e.stopImmediatePropagation(), o.puzzleState.trigger("erase:all"), o.puzzleState.trigger("erase", "all")
                        })), this.$(".reveal-menu, .check-menu").prop("disabled", !0), this.$el.addClass("toolbar-complete")
                    },
                    restoreButtons() {
                        this.$("button").prop("disabled", !1).off("click.reset"), this.$el.removeClass("toolbar-complete")
                    },
                    toggleShowGrid() {
                        return i("#acrostic-game").toggleClass("complete").addClass("clues-on"), this
                    }
                }), ae = s(7961), le = s.n(ae), ce = o.View.extend({
                    tagName: "header", className: "acrostic-subhead", render() {
                        return this.$el.html(le()({containerKey: H.tq ? "Spacebar" : "Tab"})), this
                    }
                }), de = o.View.extend({
                    initialize() {
                        this.listenTo(this.model, "change:focused", this.reflectModelFocus), this.$el.addClass("container")
                    }, events: {click: "focusModel"}, focusModel() {
                        this.model.focus()
                    }, reflectModelFocus(e, t) {
                        this.$el.toggleClass("focused", t)
                    }
                }), ue = o.View.extend({
                    tagName: "td",
                    className: "ax-grid__cell",
                    initialize(e) {
                        this.model.is("immutable") && !this.model.get("solution") && this.$el.addClass("black-square"), this.model.persistantStates.concat(this.model.ephemeralStates).forEach((e => this.listenTo(this.model, "change:".concat(e), ((t, s) => this.updateStateClass(e, s))))), this.listenTo(this.model, {"change:guess": this.updateGuess}), this.listenTo(o.puzzleState, "change:hoveredSquare", this.reflectHoverState), this.template = e.template
                    },
                    render() {
                        return this.$el.html(this.template(this.model.attributes)), this.updateGuess(this.model, this.model.get("guess")), this.model.persistantStates.forEach((e => this.updateStateClass(e, this.model.is(e)))), this
                    },
                    events: {
                        contextmenu: "showContextMenu",
                        click: "setActive",
                        mouseover: "onHoverIn",
                        mouseout: "onHoverOut"
                    },
                    updateGuess(e, t) {
                        this.$(".ax-grid__guess").text(t)
                    },
                    updateStateClass(e, t) {
                        return this.$el.toggleClass(e, t), this
                    },
                    setActive() {
                        this.model.is("immutable") || o.puzzleState.set("activeSquare", this.model, {silent: !0})
                    },
                    onHoverIn() {
                        this.model.is("immutable") || window.IS_TOUCH_ENABLED || o.puzzleState.set("hoveredSquare", this.model)
                    },
                    onHoverOut() {
                        this.model.is("immutable") || window.IS_TOUCH_ENABLED || o.puzzleState.unset("hoveredSquare")
                    },
                    reflectHoverState(e, t) {
                        this.$el.toggleClass("hovered-over", this.model === t)
                    },
                    showContextMenu() {
                    }
                }), he = o.View.extend({
                    tagName: "tr", className: "ax-grid__row", initialize(e) {
                        Object.assign(this, e)
                    }, render() {
                        const {$el: e, collection: t, containerId: s, template: i} = this;
                        return t.forEach((t => {
                            const n = new ue({model: t, template: i});
                            t.containerViewMap[s] = n, e.append(n.render().el)
                        })), this
                    }
                }), pe = s(849), me = s.n(pe), ge = s(8005), fe = s.n(ge), ve = de.extend({
                    className: "game-grid", render() {
                        const e = this.model, t = this.$el.html(me()(e.attributes)).find(".ax-grid__body"),
                            s = e.get("height"), i = e.get("width"), n = fe();
                        for (let o, r, a = 0; a < s; a += 1) {
                            o = a * i, r = o + i;
                            const s = new p(e.letters.slice(o, r)),
                                l = new he({collection: s, containerId: e.get("containerId"), template: n});
                            t.append(l.render().el)
                        }
                        return this
                    }
                }), be = s(8585), we = s.n(be), ye = de.extend({
                    className: "author-title", render() {
                        return this.$el.html(we()()).find("table").html(new he({
                            collection: this.model.letters,
                            template: fe(),
                            containerId: this.model.get("containerId")
                        }).render().el), this
                    }
                }), Se = s(8910), ke = s.n(Se), ze = o.View.extend({
                    tagName: "li", className: "clue", initialize(e) {
                        Object.assign(this, e), this.listenTo(o.puzzleState, {
                            "change:activeSquare": this.reflectSelection,
                            "change:hoveredSquare": this.reflectLetterHoverState
                        })
                    }, render() {
                        return this.$el.html(ke()(this.model.attributes)).find("table").html(new he({
                            collection: this.model.letters,
                            containerId: this.containerId,
                            template: this.squareTemplate
                        }).render().el), this
                    }, reflectSelection(e, t) {
                        this.$el.toggleClass("selected", this.model.contains(t))
                    }, reflectLetterHoverState(e, t) {
                        t ? this.$el.toggleClass("selected", this.model.contains(t)) : this.reflectSelection(o.puzzleState, o.puzzleState.get("activeSquare"))
                    }
                }), Ce = de.extend({
                    className: "ax-clue-bar", render() {
                        const e = $("<ol>").appendTo(this.$el);
                        return this.model.words.each((t => {
                            e.append(new ze({
                                containerId: this.model.get("containerId"),
                                model: t,
                                squareTemplate: fe()
                            }).render().el)
                        })), this
                    }
                }), Oe = s(5672), xe = s.n(Oe), _e = de.extend({
                    tagName: "ol", className: "clue-list", render() {
                        return this.model.words.forEach((e => {
                            this.$el.append(new ze({
                                containerId: this.model.get("containerId"),
                                model: e,
                                squareTemplate: xe()
                            }).render().el)
                        })), this
                    }
                });

            function Te(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Te(Object(s), !0).forEach((function (t) {
                        Pe(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Te(Object(s)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function Pe(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            var je = o.View.extend({
                initialize() {
                    this.$wrapper = i("#acrostic-game"), this.model.hydrate(), this.grid = this.model.squares, this.timer = new U, this.setUpModelListeners(), this.setUpKeyListeners(), this.fetchProgressAndRenderPuzzle(), this.congratsModal = new M, this.filledModal = new A
                }, setUpModelListeners() {
                    this.listenTo(this.model, "change:incorrectCount", this.monitorIncorrectCount), this.listenTo(this.model, "change:blankCount", this.monitorBlankCount)
                }, setUpKeyListeners() {
                    document.body.addEventListener("keydown", W), document.body.addEventListener("textInput", (e => {
                        " " === e.data && W(Ee(Ee({}, e), {}, {which: e.data.charCodeAt(0)}))
                    }))
                }, fetchProgressAndRenderPuzzle() {
                    const e = this;
                    z.subscribe({
                        next(t) {
                            const s = function (e) {
                                var t, s, i, n;
                                const o = null == e || null === (t = e.user) || void 0 === t || null === (s = t.userInfo) || void 0 === s ? void 0 : s.regiId;
                                -1 !== document.cookie.indexOf("NYT-S") && null === o && console.error("Samizdat error: invalid user request");
                                const r = !!o;
                                let a = (null == e || null === (i = e.user) || void 0 === i || null === (n = i.userInfo) || void 0 === n ? void 0 : n.subscriptions) || [];
                                a = a.map((e => e.toLowerCase()));
                                const l = !!a.find((e => "mm" === e || "msd" === e || "mtd" === e)),
                                    c = !!a.find((e => "xwd" === e)), u = !!a.find((e => "hd" === e)),
                                    h = function (e, t, s) {
                                        return e ? t && s ? "sub,cr" : t ? "sub" : s ? "cr" : "reg" : "anon"
                                    }(r, l, c);
                                return {
                                    entitlement: h,
                                    hasDigi: l,
                                    hasHd: u,
                                    hasXwd: c,
                                    inShortzMode: !1,
                                    isLoggedIn: r,
                                    nytsCookie: d.Rt,
                                    regiId: o
                                }
                            }(t), i = () => {
                                e.model.countIncorrect(), 0 === e.model.get("incorrectCount") && e.markComplete()
                            };
                            o.puzzleState.settings = new F({id: "".concat(s.regiId, "-acrostic-settings")}), e.render(), new C({
                                id: "".concat(s.regiId, "-").concat(e.model.id),
                                puzzleId: e.model.id,
                                squares: e.grid.exportState(),
                                printDate: e.model.get("publicationDate")
                            }, {grid: e.grid, timer: e.timer}).load().then(i).catch((e => {
                                console.error(e), i()
                            }))
                        }, error(e) {
                            console.error("There was an error in the userQueryObservable: ".concat(e))
                        }, complete() {
                        }
                    })
                }, render() {
                    const {clueBar: e, clueList: t, grid: s, authorTitle: n} = this.model.attributes, o = new ce,
                        r = new re({model: this.timer}), a = new Ce({model: e}), l = new _e({model: t}),
                        c = new ve({model: s}), d = new ye({model: n});
                    return this.configureLayout(), i("#portal-game-toolbar").append(r.render().el), this.$el.append(o.render().el).append(a.render().el).append(c.render().el).append(d.render().el).append(l.render().el), this.model.get("clueBar").focus().words.first().select(), new G, this
                }, configureLayout() {
                    const {settings: e} = o.puzzleState;
                    this.listenTo(e, {
                        "change:showNumbers": this.toggleGridNumbers,
                        "change:showClues": this.toggleClueList
                    }), this.toggleGridNumbers(null, e.get("showNumbers")), this.toggleClueList(null, e.get("showClues"))
                }, toggleGridNumbers(e, t) {
                    this.$wrapper.toggleClass("numbers-on", !!t)
                }, toggleClueList(e, t) {
                    this.$wrapper.toggleClass("clues-on", !!t)
                }, monitorIncorrectCount(e, t) {
                    0 === t ? (this.markComplete(), this.congratsModal.show()) : this.$wrapper.removeClass("complete")
                }, monitorBlankCount(e, t) {
                    0 === t && 0 !== this.model.get("incorrectCount") && this.filledModal.show()
                }, markComplete() {
                    o.puzzleState.set("solved", !0), this.$wrapper.addClass("complete")
                }
            }), Ie = s(9156), Le = s.n(Ie);
            i("#debug-solve").click((() => o.puzzleState.get("activeSquare").fillOthers())), i("body").one("touchstart", (() => {
                window.IS_TOUCH_ENABLED = !0
            }));
            const Be = i("#game-container");
            try {
                const e = window.unescape(window.atob((0, d.kw)())), t = (e => {
                    const t = e.puzzle_meta, s = e.puzzle_data.split("\n").filter(Boolean), i = s[0], n = t.height || 8,
                        o = t.width || 27, r = i.length / 3, a = (e, t) => i.substring(e, t).split(""), l = a(0, r),
                        c = a(r, 2 * r), d = a(2 * r).map((e => e.charCodeAt(0) - 65)),
                        u = s[1].split("|").filter(Boolean), h = s[6] ? s[6].split("|") : [], p = u.map(((e, t) => ({
                            letter: String.fromCharCode(t + 65),
                            text: e.convertQuotesAndDashes(),
                            solution: h[t]
                        })));
                    let m = 0;
                    const g = l.map(((e, t) => {
                        const s = !/[A-Z0-9]/.test(e), i = {immutable: s, solution: e.trim() ? e : void 0};
                        return s ? i : (m += 1, Object.assign(i, {
                            clue: c[t],
                            number: m,
                            position: d[t],
                            guess: "",
                            timestamp: 0
                        }))
                    }));
                    return {
                        id: e.puzzle_id,
                        format: t.formatType,
                        type: t.publishType,
                        title: t.title ? t.title.convertQuotesAndDashes() : "",
                        publicationDate: t.publicationDate,
                        publicationDay: t.publicationDay,
                        author: t.author || e.authors.prettyJoin(),
                        editor: t.editor || "",
                        notes: [{txt: "Answer the clues to discover the quotation. Use Enter/Return to jump between words and Tab to toggle between the clues, grid and author/title row."}],
                        incorrectCount: 0,
                        grid: g,
                        height: n,
                        width: o,
                        clues: p,
                        quote: {text: s[3].convertQuotesAndDashes(), author: s[4] || "", title: s[5] || ""}
                    }
                })(JSON.parse(e));
                new je({model: new y(t), el: Be})
            } catch (e) {
                Be.replaceWith(Le()()), console.error(e.message), console.error(e.stack)
            }
        }, 8087: function (e, t, s) {
            "use strict";
            s.d(t, {
                $f: function () {
                    return w
                }, B8: function () {
                    return c
                }, El: function () {
                    return h
                }, K4: function () {
                    return d
                }, MQ: function () {
                    return g
                }, Nj: function () {
                    return p
                }, SK: function () {
                    return i
                }, TW: function () {
                    return u
                }, W9: function () {
                    return f
                }, Wz: function () {
                    return v
                }, jM: function () {
                    return n
                }, k2: function () {
                    return m
                }, l7: function () {
                    return a
                }, pi: function () {
                    return o
                }, sU: function () {
                    return l
                }, v9: function () {
                    return r
                }, w_: function () {
                    return y
                }, yw: function () {
                    return b
                }
            });
            const i = "The Crossword", n = "The Mini", o = "Gameplay Stories", r = "Spelling Bee", a = "Wordle",
                l = "Letter Boxed", c = "Tiles", d = "Sudoku", u = "Vertex", h = "All Games", p = "Statistics",
                m = "Crossword Archives", g = "How to Solve The New York Times Crossword", f = "Featured Article",
                v = "download-app", b = "monthly-bonus", w = "variety-puzzles",
                y = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }, 5489: function (e, t, s) {
            "use strict";
            s.d(t, {
                Be: function () {
                    return f.B
                }, Fg: function () {
                    return p.Fg
                }, Rt: function () {
                    return n.Rt
                }, kw: function () {
                    return v
                }, lY: function () {
                    return p.lY
                }, ob: function () {
                    return d.ob
                }
            });
            var i = s(4395), n = s(2042), o = s(6303), r = s(1069), a = s(3649), l = s(7006), c = s(7719), d = s(1586),
                u = s(8198), h = s(3104), p = s(7904), m = s(7644), g = s(2287), f = s(3251);
            (0, m.Z)(), (0, d.U9)(), (0, p.ZP)(u.p_.sentryConfig), (0, i.Z)(), u.p_.isHybridWebView || "wordle" === u.p_.pageName || (l.E.initialize(), c.U.initialize()), (0, a.ku)(), (0, r.IX)(), (0, c.q)(), (null === l.A || void 0 === l.A ? void 0 : l.A.inShortzMode) && n.G7 ? u.p_.dataLayer = [] : ((0, o.I5)(), u.p_.addEventListener("load", (() => {
                (0, h.Z)(), (0, o.YY)(u.p_.adUnitPath || "default", g.F.getTests()), (0, d.Sv)()
            })));
            const v = () => u.p_.gameData
        }, 9385: function (e, t, s) {
            "use strict";
            s.d(t, {
                N$: function () {
                    return f
                }, OD: function () {
                    return l
                }, kU: function () {
                    return o
                }, m$: function () {
                    return c
                }, yL: function () {
                    return p
                }
            });
            const i = "sendAnalytic", n = "setPullToRefreshEnabled", o = "gamesAuthenticateUser", r = "gamesBackToHub",
                a = "gamesCacheRefresh", l = "gamesGetUserDetails", c = "gamesInitializeState", d = "gamesSendEmail",
                u = "share", h = "gamesSetNativeColorTheme", p = [i, n, o, r, a, l, c, d, u, h];
            let m, g;
            !function (e) {
                e.SUGGESTION = "suggest", e.FEEDBACK = "feedback", e.LETTERBOXED = "feedback-letterboxed", e.SUDOKU = "feedback-sudoku", e.TILES = "feedback-tiles", e.WORDLE = "feedback-wordle"
            }(m || (m = {})), function (e) {
                e.LIGHT = "light", e.DARK = "dark"
            }(g || (g = {}));
            const f = e => ({
                [i]: (t, s) => e(i, {eventName: t, options: s || {}}),
                [n]: t => e(n, {value: t}),
                [o]: t => e(o, {type: t}),
                [r]: () => e(r),
                [a]: () => e(a),
                [l]: () => e(l),
                [c]: () => e(c),
                [d]: t => {
                    let {type: s, debugInfo: i} = t;
                    return e(d, {type: s, debugInfo: i})
                },
                [u]: (t, s, i) => e(u, {url: t, text: s, title: i}),
                [h]: t => e(h, {theme: t})
            })
        }, 7644: function (e, t, s) {
            "use strict";
            var i = s(3886), n = s(329), o = s(8229);
            s(9385), t.Z = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if ((0, n.HP)()) (0, n.ZP)(e); else if ((0, i.m5)()) {
                    (0, o.Z)("Initializing native bridge");
                    try {
                        (0, i.ZP)(e)
                    } catch (e) {
                        (0, o.Z)("Failed to initialize native bridge", [e])
                    }
                } else (0, o.Z)("Neither mock nor native bridge initialized")
            }
        }, 1586: function (e, t, s) {
            "use strict";
            s.d(t, {
                Sv: function () {
                    return w
                }, U9: function () {
                    return k
                }, hX: function () {
                    return f
                }, j: function () {
                    return g
                }, ob: function () {
                    return y
                }
            });
            var i = s(6633), n = s(2042), o = s(2058), r = s(431), a = s(8198), l = s(3251), c = s(7904);

            function d(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function u(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            const h = "games-crosswords";
            a.p_.dataLayer = a.p_.dataLayer || [], window.isHybridWebView || a.p_.dataLayer.push({
                event: "gtm.js",
                "gtm.start": (0, n.zO)()
            });
            const p = (0, r.R2)("link[rel=canonical]"), m = p ? p.href : a.JU.location.href, g = (e, t) => {
                if (void 0 !== typeof window) if (window.isHybridWebView && window.NativeBridge) {
                    const s = "moduleInteraction" === e ? "interaction" : e;
                    if ("heartbeat" === s) return;
                    window.NativeBridge.sendAnalytic(s, t)
                } else a.p_.dataLayer.push(function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(s), !0).forEach((function (t) {
                            u(e, t, s[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                        }))
                    }
                    return e
                }({event: e}, t))
            };
            window.foundationTrack = g;
            const f = (e, t, s, i) => {
                g("impression", {module: {name: e, context: i, region: t || "", label: s || void 0}})
            }, v = (0, n.y5)((() => {
                if (window.isHybridWebView) return null;
                const e = (0, n.B2)({sourceApp: h, referrer: a.JU.referrer, assetUrl: m, caller_id: h}),
                    t = "".concat(n.OB.tagx, "/svc/nyt/data-layer").concat(e);
                return l.B.get(t, {withCookie: !1})
            })), b = () => {
                if (window.isHybridWebView) return;
                if (window.gamesAppPlatform || window.newsreaderAppPlatform || window.isMobileDevice) return;
                let e = 0;
                try {
                    const t = () => {
                        0 === e && (0, c.lY)(new Error("Tracking events are not being sent to Event Tracker"))
                    };
                    new PerformanceObserver((t => {
                        t.getEntries().forEach((t => {
                            t.name.includes("https://a.et") && (e += 1)
                        }))
                    })).observe({type: "resource", buffered: !0}), setTimeout(t, 6e4)
                } catch (e) {
                }
            }, w = () => {
                v.initialize();
                const e = e => {
                    e && g("userDataReady", e), g("pageDataReady", {
                        application: {name: h, environment: n.OB.name},
                        asset: {url: m},
                        pageview: {id: o.Z.current}
                    }), (() => {
                        const e = (0, n.zO)();
                        setInterval((() => {
                            a.JU.hasFocus() && g("heartbeat", {
                                pageview: {
                                    heartbeat: {
                                        timeSincePageDataReady: (0, n.zO)() - e,
                                        heartbeatInterval: 5e3
                                    }
                                }
                            })
                        }), 5e3)
                    })(), setTimeout(b)
                };
                v.get().then(e).catch((() => e()))
            }, y = e => {
                let {
                    name: t,
                    label: s,
                    context: i,
                    element: n = null,
                    useBeacon: o = !1,
                    medium: r = null,
                    source: a = null,
                    region: l = null
                } = e;
                "undefined" != typeof window && g("moduleInteraction", {
                    eventData: {
                        pagetype: "game",
                        trigger: "module",
                        type: o ? "ob_click" : "click"
                    },
                    module: {
                        type: "click",
                        element: n || {name: t, label: s},
                        context: i,
                        label: s,
                        medium: r,
                        source: a,
                        region: l
                    }
                })
            }, S = e => {
                let {name: t, delta: s, id: i} = e;
                const n = {
                    eventAction: "Web Vitals",
                    eventLabel: i,
                    pageview: {performance: {[t.toLowerCase()]: Math.round("CLS" === t ? 1e3 * s : s)}}
                };
                g("performance", n)
            }, k = () => {
                (0, i.mw)(S), (0, i.Fu)(S), (0, i.NO)(S), (0, i.Yn)(S)
            }
        }, 8585: function (e) {
            e.exports = function (e) {
                return "<div class='explanation'>Author and title of the work from which the quote above is derived.</div><div class='answer-sleeve'><table class=\"ax-grid fixed-size\"></table></div>"
            }
        }, 5672: function (e) {
            e.exports = function (e) {
                var t;
                return "" + "<div class='ax-grid__square clue-blank'><div class='ax-grid__guess guess'>" + (null == (t = e.guess) ? "" : t) + "</div><div class='ax-grid__blank-number'>" + (null == (t = e.number) ? "" : t) + "</div></div>"
            }
        }, 8910: function (e) {
            e.exports = function (e) {
                var t;
                return "" + "<div class='clue-wrapper'><span class='clue-letter'>" + (null == (t = e.letter) ? "" : t) + ".</span><div class='clue-content'><span class='clue-text'>" + (null == (t = e.text) ? "" : t) + "</span><div class='answer-sleeve'><table class='ax-grid fixed-size'></table><div class='clue-answer answer'>" + (null == (t = e.solution) ? "" : t) + "</div></div></div></div>"
            }
        }, 9156: function (e) {
            e.exports = function (e) {
                return "<div class='load-failure'><h2>Sorry</h2><p>There was a problem loading the puzzle.</p><button onclick='window.location.reload();'>Retry</button></div>"
            }
        }, 849: function (e) {
            e.exports = function (e) {
                var t, s = "";
                return Array.prototype.join, s += "<div class='answer-sleeve'><div class=\"ax-grid__wrap\"><table class=\"ax-grid\"><tbody class=\"ax-grid__body\"></tbody></table></div><div class='answer'><div class='grid-answer'>" + (null == (t = e.text) ? "" : t) + "</div><div class='work-info'> &mdash; ", e.author && (s += " <span class='work-author'>" + (null == (t = e.author) ? "" : t) + ",</span> "), s + " &ldquo;<span class='work-title'>" + (null == (t = e.title) ? "" : t) + "</span>&rdquo; </div></div></div>"
            }
        }, 7961: function (e) {
            e.exports = function (e) {
                var t;
                return "" + '<p class="acrostic-subhead__note"> Answer the clues to discover the quotation. Use Enter/Return to jump between words and ' + (null == (t = e.containerKey) ? "" : t) + " to toggle between the clues, grid and author/title row.</p>"
            }
        }, 6547: function (e) {
            e.exports = function (e) {
                var t, s = "";
                return Array.prototype.join, s += '<div class="pzm-modal__image blue-star"></div><h2 class="pzm-modal__title">Congratulations</h2><div class="pzm-modal__content"> ', e.time ? s += " <div>You solved the puzzle in <em>" + (null == (t = e.time) ? "" : t) + "</em>.</div> " : s += " <div>You solved the puzzle!</div> ", s + "</div><div class=\"pzm-modal__buttons\"><button class='pzm-modal__button review-button'> Review Puzzle </button><a class='pzm-modal__button primary' href=\"/crosswords\"> Back to hub </a></div>"
            }
        }, 7582: function (e) {
            e.exports = function (e) {
                return '<h5 class="pzm-modal__title">Almost there</h5><div class="pzm-modal__content"> The puzzle is filled,<br/> but at least one square’s amiss. Oh,&nbsp;crumbs!</div><div class="pzm-modal__buttons"><button class=\'pzm-modal__button primary ok-button\'> KEEP TRYING </button></div>'
            }
        }, 2589: function (e) {
            e.exports = function (e) {
                return '<div class="pzm-modal__content"> Your game has been paused.</div><div class="pzm-modal__buttons"><button class=\'pzm-modal__button primary review-button\'> RESUME </button></div>'
            }
        }, 2978: function (e) {
            e.exports = function (e) {
                var t = "";
                return Array.prototype.join, t += '<h2 class="pzm-modal__title">Settings</h2><div class="pzm-modal__content"><div class="settings-modal-form"><h6 class="settings-modal-form__title">Within a word</h6><div class="settings-modal-form__block"><label><input type=\'checkbox\' id=\'skipFilled\' name=\'skipFilled\' ', e.skipFilled && (t += " checked "), t += " /><span>Skip over filled squares</span></label><label><input class='indented' type='checkbox' id='skipPenciled' name='skipPenciled' ", e.skipFilled || (t += " disabled "), t += " ", e.skipPenciled && (t += " checked "), t += " /><span>Even penciled-in squares</span></label></div><h6 class=\"settings-modal-form__title\">Appearance</h6><div class=\"settings-modal-form__block\"><label><input type='checkbox' name='showClock' class='focal-point' ", e.showClock && (t += " checked "), t += " /><span>Show clock</span></label><label><input type='checkbox' name='showClues' ", e.showClues && (t += " checked "), t += " /><span>Show clue list</span></label><label><input type='checkbox' name='showNumbers' ", e.showNumbers && (t += " checked "), t += " /><span>Show numbers</span></label><label><input type='checkbox' name='soundOn' ", e.soundOn && (t += " checked "), t + ' /><span>Play sound on solve</span></label></div></div></div><div class="pzm-modal__buttons"><button class=\'pzm-modal__button\' id="restore-defaults-button"> Restore Defaults </button><button class=\'pzm-modal__button primary\' id="ok-button"> OK </button></div>'
            }
        }, 8005: function (e) {
            e.exports = function (e) {
                var t, s = "";
                return Array.prototype.join, e.immutable ? (s += " ", e.solution ? s += " <div class='ax-grid__square'><div class='ax-grid__guess'>" + (null == (t = "-" === e.solution ? "–" : e.solution) ? "" : t) + "</div></div> " : s += " <div class='ax-grid__square'></div> ", s += "") : s += " <div class='ax-grid__square'><div class='ax-grid__number'>" + (null == (t = e.number) ? "" : t) + "</div><div class='ax-grid__cheat-flag'></div><div class='ax-grid__clue-letter'>" + (null == (t = e.clue) ? "" : t) + "</div><div class='ax-grid__guess'>" + (null == (t = e.guess) ? "" : t) + "</div></div>", s + ""
            }
        }, 3869: function (e) {
            e.exports = function (e) {
                return "<span class=\"acrostic-tool acrostic-tool__timer\" id='timer'><span class='timer-count'>0:00:00</span><span class='pause-button'></span></span>"
            }
        }, 2545: function (e) {
            e.exports = function (e) {
                return ' <div class="acrostic-tools__section"><button class="acrostic-tool acrostic-tool__icon acrostic-tool__settings" id="solving-settings">&nbsp;</button></div><div class="acrostic-tools__section" id="timer-container"></div><div class="acrostic-tools__section"><button class="acrostic-tool grid-toggle" id="show-grid-toggle"><span class="button-text">See</span></button><div class="toolbar-menu-wrapper"><button class="acrostic-tool clear-menu" data-action="Clear"></button><ul data-action="erase" class="toolbar-menu"><li data-scope="letter"><span>Square</span></li><li data-scope="word"><span>Word</span></li><li data-scope="puzzle"><span>Puzzle</span></li><li data-scope="all" data-disqualifier="Resetting the timer"><span>Puzzle & Timer</span></li></ul></div><div class="toolbar-menu-wrapper"><button class="acrostic-tool reveal-menu disable-when-locked hide-on-solve" data-action="Reveal" data-disqualifier="Using Reveal"></button><ul data-action="reveal" class="toolbar-menu"><li data-scope="letter"><span>Square</span></li><li data-scope="word"><span>Word</span></li><li data-scope="puzzle"><span>Puzzle</span></li></ul></div><div class="toolbar-menu-wrapper"><button class="acrostic-tool check-menu disable-when-locked hide-on-solve" data-action="Check" data-disqualifier="Using Check"></button><ul data-action="check" class="toolbar-menu"><li data-scope="letter"><span>Square</span></li><li data-scope="word"><span>Word</span></li><li data-scope="puzzle"><span>Puzzle</span></li></ul></div><button class="acrostic-tool acrostic-tool__icon acrostic-tool__pencil pencil-mode-toggle"></button></div>'
            }
        }
    }, s = {};

    function i(e) {
        var n = s[e];
        if (void 0 !== n) return n.exports;
        var o = s[e] = {id: e, loaded: !1, exports: {}};
        return t[e](o, o.exports, i), o.loaded = !0, o.exports
    }

    i.m = t, e = [], i.O = function (t, s, n, o) {
        if (!s) {
            var r = 1 / 0;
            for (d = 0; d < e.length; d++) {
                s = e[d][0], n = e[d][1], o = e[d][2];
                for (var a = !0, l = 0; l < s.length; l++) (!1 & o || r >= o) && Object.keys(i.O).every((function (e) {
                    return i.O[e](s[l])
                })) ? s.splice(l--, 1) : (a = !1, o < r && (r = o));
                if (a) {
                    e.splice(d--, 1);
                    var c = n();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        o = o || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
        e[d] = [s, n, o]
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, {a: t}), t
    }, i.d = function (e, t) {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {enumerable: !0, get: t[s]})
    }, i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.hmd = function (e) {
        return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function () {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, function () {
        var e = {6415: 0, 542: 0};
        i.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, s) {
            var n, o, r = s[0], a = s[1], l = s[2], c = 0;
            if (r.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (n in a) i.o(a, n) && (i.m[n] = a[n]);
                if (l) var d = l(i)
            }
            for (t && t(s); c < r.length; c++) o = r[c], i.o(e, o) && e[o] && e[o][0](), e[o] = 0;
            return i.O(d)
        }, s = self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || [];
        s.forEach(t.bind(null, 0)), s.push = t.bind(null, s.push.bind(s))
    }();
    var n = i.O(void 0, [9699, 2924, 3961, 2248, 542, 7932, 7202], (function () {
        return i(8827)
    }));
    n = i.O(n)
}();
//# sourceMappingURL=acrostic.feac3b429f95d3d88bee.js.map
