exports.DOMget = function(el) {
  var DOMelement;
  if( el && typeof el === 'string' || typeof el === 'object') {
    if(typeof el === 'string') {
      DOMelement = document.querySelector(el);
    } else {
      DOMelement = el;
    }
    return DOMelement;
  } else {
    console.log("el is undefined");
    return;
  }
}

exports.returnHeight = function(el) {
return window.getComputedStyle(el, null).getPropertyValue('height');
}

exports.heightReturn = function(el) {
  var DOMelement = this.DOMget(el);
  return this.returnHeight(DOMelement);
}

exports.heightAssign = function(el) {
  var DOMelement = this.DOMget(el);
  const heightValue = this.returnHeight(DOMelement);
  DOMelement.style.height = heightValue;
}
