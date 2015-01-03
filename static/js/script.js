(function () {
  var ie = !!(window.attachEvent && !window.opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
  var fn = [];
  var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
  var d = document;
  d.ready = function (f) {
    if (!ie && !wk && d.addEventListener)
      return d.addEventListener('DOMContentLoaded', f, false);
    if (fn.push(f) > 1) return;
    if (ie)
      (function () {
        try { d.documentElement.doScroll('left'); run(); }
        catch (err) { setTimeout(arguments.callee, 0); }
      })();
    else if (wk)
      var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState))
          clearInterval(t), run();
      }, 0);
  };
})();

document.ready(function(){
	var product = $('#产品信息');
	var sample1 = $('#产品样张一');
	var sample2 = $('#产品样张二');
	var sample3 = $('#产品样张三');
	if(product !== null) {
		product.setAttribute('id','product');
		product.nextSibling.setAttribute('id','product-desc');
	}
	if(sample1 !== null) {
		sample1.setAttribute('id','sample1');
	}
	if(sample2 !== null) {
		sample2.setAttribute('id','sample2');
	}
	if(sample3 !== null) {
		sample3.setAttribute('id','sample3');
	}

	var menu = $('#side-menu');
	var menu_bg = $('#side-menu-bg');	
	$('#side-menu-btn').addEventListener('click',function(){
		addClass(menu,'show');
		addClass(menu_bg,'show');
	});
	$('#side-menu').addEventListener('click',function(){
		removeClass(this,'show');
		removeClass(menu_bg,'show');
	});
	$('#side-menu-bg').addEventListener('click',function(){
		removeClass(menu,'show');
		removeClass(this,'show');
	});	
});

function $(ele){
	return document.querySelector(ele);
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}