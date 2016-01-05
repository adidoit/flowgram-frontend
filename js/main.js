
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
		explainUser();
	})


	function explainUser(){
		$('#user').addClass('faa-pulse animated')
		$('#user').popover('show');

		setTimeout(function(){
			$('#user').popover('hide');
			$('#user').removeClass('faa-pulse animated');
			explainCloud();
		},4000);
	}
	function explainCloud(){
		$('#cloud').addClass('faa-pulse animated')
		$('#cloud').popover('show');

		setTimeout(function(){
			$('#cloud').popover('hide');
			$('#cloud').removeClass('faa-pulse animated');
		},4000);
	}

	/*$('i').on.('mouseenter',function(){
		$(this).addClass('faa-pulse animated');
	})
	$('i').on.('mouseleave',function(){
		$(this).removeClass('faa-pulse animated');
	})*/

    new Taggle('taggle', {
    tags: ['web', 'e-commerce', 'database', 'paypal','facebook']
});



   // $('i').popover('show');
});


