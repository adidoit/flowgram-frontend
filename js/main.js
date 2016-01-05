
$( document ).ready(function() {
	console.log('in main.js');
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

	$(function () {
  		$('[data-toggle="popover"]').popover()
	})

	$('#btn-success').on('click',function(){
		swal({   title: 'Approved',   text: 'The flowgram has been approved',   type: 'success',   confirmButtonText: 'Close' });
		$('#btn-success').attr('disabled','disabled');
		$('#btn-danger').removeAttr('disabled');
	})


	$('#btn-danger').on('click',function(){
		swal({   title: 'Rejected',   text: 'The flowgram has been rejected',   type: 'error',   confirmButtonText: 'Close' });
		$('#btn-danger').attr('disabled','disabled');
		$('#btn-success').removeAttr('disabled');
	})

	$("#btn-warning").on('click',function(){
		$('#btn-success').removeAttr('disabled');
		$('#btn-danger').removeAttr('disabled');
	})
     
    new Taggle('taggle', {
    tags: ['web', 'e-commerce', 'database', 'paypal','facebook']
});
});


