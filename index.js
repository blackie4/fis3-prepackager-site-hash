
var reg = /('|")__siteHash__\1/mg;

module.exports = function (ret, pack, settings, opt) {
  var hash = getSiteHash(ret, settings);
  fis.util.map(ret.src, function (subpath, file) {
    var content = file.getContent();
    if (content.replace) {
      content = content.replace(reg, function (str, quote) {
        return quote + hash + quote;
      })
      file.setContent(content);
    }
  });
};

function getSiteHash(ret, settings) {
  var str = '';
  var len = 7;
  if (settings && settings.length && typeof settings.length === 'number') {
    len = settings.length;
  }
  fis.util.map(ret.src, function(subpath, file){
      str += file.getContent();
  });
  return fis.util.md5(str, len) || '';
}
