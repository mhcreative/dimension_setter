function DOMget(el) {
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

function heightReturn(el) {
  var DOMelement = this.DOMget(el);
  return window.getComputedStyle(DOMelement, null).getPropertyValue('height');
}

function heightAssign(el) {
  var DOMelement = this.DOMget(el);
  const heightValue = this.heightReturn(DOMelement);
  DOMelement.style.height = heightValue;
}
