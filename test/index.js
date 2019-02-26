var expect = require('chai').expect;
var pt = require('../');


describe('pt(time) // 刚刚', function () {
  it('时间间隔（1分钟）以内的测试', function () {
    var time = new Date().getTime();
    expect(pt(time)).to.be.equal('刚刚');
  })
});


describe('pt(time) // **分钟前', function () {
  it('时间间隔（1小时）以内的测试', function () {
    var time = new Date().getTime()
      , s   = 1000
      , min = s * 60;
    t = time - min;
    expect(pt(t)).to.match(/分钟前/);
  })
});

describe('pt(time) // **小时前', function () {
  it('时间间隔（1天）以内的测试', function () {
    var time = new Date().getTime()
      , s   = 1000
      , min = s * 60
      , h   = min * 60;
    t = time - h;
    expect(pt(t)).to.match(/小时前/);
  })
});

describe('pt(time) // **天前', function () {
  it('时间间隔（1周）以内的测试', function () {
    var time = new Date().getTime()
      , s   = 1000
      , min = s * 60
      , h   = min * 60
      , d   = h * 24;
    t = time - d;
    expect(pt(t)).to.match(/天前/);
  })
});

describe('pt(time) // **周前', function () {
  it('时间间隔（1月）以内的测试', function () {
    var time = new Date().getTime()
      , s   = 1000
      , min = s * 60
      , h   = min * 60
      , d   = h * 24 * 7;
    t = time - d;
    expect(pt(t)).to.match(/周前/);
  })
});

describe('pt(time) // **月前', function () {
  it('时间间隔（1年）以内的测试', function () {
    var time = new Date().getTime()
      , s   = 1000
      , min = s * 60
      , h   = min * 60
      , d   = h * 24
      , m   = d * 30;
    t = time - m;
    expect(pt(t)).to.match(/月前/);
  })
});