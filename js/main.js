
var s = Snap("#svg");

Snap.load("svg/facebook.svg",onSVGLoaded);

Snap.load("svg/loadbalancer.svg",onSVGLoaded);

function onSVGLoaded(data){
	s.append(data);
}

var facebook = Snap("#facebook");

var loadbalancer = Snap("#loadbalancer");

facebook.attr({
	x: 60%,
	y: 70%
});

loadbalancer.attr({
	x: 10%.
	y: 10%
});