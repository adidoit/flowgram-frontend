
var s = Snap("#svg");

Snap.load("svg/facebook.svg",onSVGLoaded);

Snap.load("svg/loadbalancer.svg",onSVGLoaded);

function onSVGLoaded(data){
	s.append(data);
}


swal({   title: 'Error!',   text: 'Do you want to continue',   type: 'error',   confirmButtonText: 'Cool' });