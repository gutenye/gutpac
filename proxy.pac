var proxy = "PROXY PROXY_ADDRESS;", direct = "DIRECT;";
var domains = {
  // Google
  "google.com": 1,
  "google.com.hk": 1,
  "google.co.jp": 1,
  "google.org": 1,
  "googleapis.com": 1,
  "googlehosted.com": 1,
  "googlezip.net": 1,
  "youtube.com": 1,
  "youtu.be": 1,
  "youtube-nocookie.com": 1,
  "ytimg.com": 1,
  "googlevideo.com": 1,
  "googledrive.com": 1,
  "appspot.com": 1,
  "googleusercontent.com": 1,
  "ggpht.com": 1,
  "gstatic.com": 1,
  "gwtproject.org": 1,
  "googlesource.com": 1,
  "blogger.com": 1,
  "blogspot.com": 1,
  "chromium.org": 1,
  "android.com": 1,
  "googlecode.com": 1,
  "keyhole.com": 1,
  "chrome.com": 1,
  "googlesyndication.com": 1,
  "googlelabs.com": 1,
  "g.co": 1,
  "gmail.com": 1,
  "goo.gl": 1,
  "googlemail.com": 1,
  "google-analytics.com": 1,
  "googleadservices.com": 1,
  "panoramio.com": 1,
  "webmproject.org": 1,
  "golang.org": 1,
  "feedburner.com": 1,
  "androidify.com": 1,
  "gmodules.com": 1,
  "withgoogle.com": 1,
  "polymer-project.org": 1,
  // Facebook
  "facebook.com": 1,
  "facebook.net": 1,
  "fb.com": 1,
  "fb.me": 1,
  "fbcdn.net": 1,
  "thefacebook.com": 1,
  "tfbnw.net": 1,
  "instagram.com": 1,
  "cdninstagram.com": 1,
  // Twitter
  "twitter.com": 1,
  "t.co": 1,
  "tweetdeck.com": 1,
  "twimg.com": 1,
  // Start
  "dropbox.com": 1,
  "dropboxusercontent.com": 1,
  "dropboxforum.com": 1,
  "dropboxstatic.com": 1,
  "amazonaws.com": 1,
  "cloudfront.net": 1,
  "wordpress.com": 1,
  "wordpress.org": 1,
  "wp.com": 1,
  "gravatar.com": 1,
  "nytimes.com": 1,
  "nyt.com": 1,
  "medium.com": 1,
  "paulgraham.com": 1,
};
function FindProxyForURL(url, host) {
  var pos;
  do {
    if (domains.hasOwnProperty(host)) {
      return domains[host] ? proxy : direct;
    }
    pos = host.indexOf(".") + 1;
    host = host.slice(pos);
  } while(pos>1)
  return direct;
}
