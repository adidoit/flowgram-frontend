
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
     
	$('#btn-explain').on('click',function(){
		$('#user').velocity({
			scale: 1.3,
			color:'#00F'
		},1000);
		$('#user').popover('show');
		$('#user').velocity({
			scale: 1,
			color: '#000'
		},1000);
		setTimeout(function(){$('#user').popover('hide');},3000);

	})

    new Taggle('taggle', {
    tags: ['web', 'e-commerce', 'database', 'paypal','facebook']
});



   // $('i').popover('show');
});


