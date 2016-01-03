
var s = Snap("#svg");

Snap.load("svg/facebook.svg",onSVGLoaded);

function onSVGLoaded(data){
	s.append(data);
}