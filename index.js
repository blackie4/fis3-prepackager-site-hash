
var reg = /('|")__siteHash__\1/mg;

module.exports = function (ret, pack, settings, opt) {
  fis.util.map(ret.src, function (subpath, file) {
    var content = file.getContent();
    if (content.replace) {
      content = content.replace(reg, function (str, quote) {
        var hash = getSiteHash(ret);
        return quote + hash + quote;
      })
      file.setContent(content);
    }
  });
};

function getSiteHash(ret) {
  var str = '';
  fis.util.map(ret.src, function(subpath, file){
      str += file.getContent();
  });
  return fis.util.md5(str) || '';
}
