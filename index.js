var s   = 1000
  , min = s * 60
  , h   = min * 60
  , d   = h * 24
  , m   = d * 30
  , y   = d * 365.25;

var timestamp = function (time) {
  return time ? new Date(time).getTime() : new Date().getTime()
}

var pt = function (time) {

  var t = timestamp() - timestamp(time)
    , year   = t / y
    , month  = t / m
    , week   = t / (7 * d)
    , day    = t / d
    , hour   = t / h
    , minute = t / min;

  if (year >= 1) {
    return parseInt(year) + '年前';
  } else if (month >= 1) {
    return parseInt(month) + '月前';
  } else if (week >= 1) {
    return parseInt(week) + '周前';
  } else if (day >= 1) {
    return parseInt(day) + '天前';
  } else if (hour >= 1) {
    return parseInt(hour) + '小时前';
  } else if (minute >= 1) {
    return parseInt(minute) + '分钟前';
  } else {
    return '刚刚';
  }
}

module.exports = pt;