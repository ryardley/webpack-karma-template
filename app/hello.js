'use strict';
function Hello(){
  this.msg= 'Hello Foo Bar';
}

Hello.prototype.talk = function(){
  return this.msg;
}
module.exports = Hello;
