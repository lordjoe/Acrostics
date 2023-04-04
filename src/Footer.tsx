


function Scripts() {
    return (
        <div></div>

        /*
             <script type="text/javascript">window.pageName = "acrostic"</script>
            <script type="text/javascript">window.userType ={
                "isLoggedIn": true,
                "hasXwd": true,
                "hasDigi": true,
                "hasHd": false,
                "isErsatzShortz": false,
                "inShortzMode": false,
                "entitlement": "sub,cr",
                "regiId": 60869263
            }</script>
            <script type="text/javascript">window.env ={
                "version": "v2302231346",
                "api": "https:\u002F\u002Fedge.games.nyti.nyt.net",
                "tagx": "https:\u002F\u002Fa.nytimes.com",
                "gtm": "https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id=GTM-P528B3&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130&gtm_cookies_win=x",
                "hostname": "https:\u002F\u002Fwww.nytimes.com",
                "edge": "https:\u002F\u002Fwww.nytimes.com",
                "account": "https:\u002F\u002Fmyaccount.nytimes.com",
                "name": "prod"
            }</script>

            <script type="text/javascript">window.adUnitPath = "acrostic"</script>

            <script type="text/javascript">window.featureFlags ={"testFeatureFlag": false}</script>
            <script type="text/javascript">window.isPlayTab = false</script>
            <script type="text/javascript">window.sentryConfig = {
                "dsn": "https:\u002F\u002Fb15f0ccff04b4466b8d941c594953d95@o82024.ingest.sentry.io\u002F5839863",
                "release": "50d88253f9830a26738262175de416e01491555b",
                "sampleRate": "0.005",
                "environment": "prod"
            }</script>

            <div id="ratio-hook"></div>
            <div id="width-hook"></div>
            <script defer="defer" type="text/javascript" src=" files/9699.4c224fab126dbc1f18cb.js"></script>
            <script defer="defer" type="text/javascript" src=" files/2924.5c44bc34d00fe7d409c3.js"></script>
            <script defer="defer" type="text/javascript" src=" files/3961.b8371addb7f3ba18ebf2.js"></script>
            <script defer="defer" type="text/javascript" src=" files/4931.b1cc273f453299bdb77b.js"></script>
            <script defer="defer" type="text/javascript" src=" files/7932.8cf0a2c1276563066873.js"></script>
            <script defer="defer" type="text/javascript" src=" files/7202.2f717f166218e3b8bd25.js"></script>
            <script defer="defer" type="text/javascript"
                    src=" files/acrostic.daa58b16c66809ab5b35.js"></script>

            <script type="text/javascript">window.isHybridWebView = false</script>
            <script type="text/javascript">window.newsreaderAppPlatform = ""</script>
            <script type="text/javascript">window.gamesAppPlatform = ""</script>
            <script defer="defer" type="text/javascript" src=" files/cookie-notice-v2.1.2.min.js"></script>
            <script type="text/javascript" src=" files/gtm_002.js"></script>

            <script type="text/javascript" id="" src=" files/comscore-streaming.js"></script>
            <script type="text/javascript" id="">(function (b) {
                function f() {
                    if ("MozAppearance" in document.documentElement.style) {
                        var a = indexedDB.open("test");
                        a.onerror = c;
                        a.onsuccess = d;
                        return !0
                    }
                }

                function e(a) {
                b.nyt_et && nyt_et({subject: "page_update", isIncognito: a})
            }

                var c, d;
                b.nyt_et && function (a, g) {
                c = a || function () {
            };
                d = g || function () {
            };
                b.webkitRequestFileSystem ? (b.webkitRequestFileSystem(b.TEMPORARY, 1, d, c), a = !0) : a = void 0;
                if (!(a = a || f())) a:if (0 < Object.prototype.toString.call(b.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!b.safari ||
                safari.pushNotification).toString() || b.localStorage && /Safari/.test(b.navigator.userAgent)) {
                try {
                b.openDatabase(null, null, null, null)
            } catch (h) {
                c();
                a = !0;
                break a
            }
                try {
                localStorage.length || (localStorage.x = 1, localStorage.removeItem("x")), d()
            } catch (h) {
                navigator.cookieEnabled ? c() : d()
            }
                a = !0
            } else a = void 0;
                a || (b.indexedDB || !b.PointerEvent && !b.MSPointerEvent ? a = void 0 : (c(), a = !0));
                a || d()
            }(function () {
                e(!0)
            }, function () {
                e(!1)
            })
            })
                (window);</script>
            <script type="text/javascript" id="" src=" files/nyt.js"></script>
            <script type="text/javascript" async="true" src=" files/65568.js"></script>
            <iframe src=" files/container_002.html" style="visibility: hidden; display: none;"></iframe>
 */

    );
}

function Footer() {
    return (
        <div>
        <footer className="pz-footer">
        </footer>
        <Scripts />
        </div>
)

}

export default Footer;
