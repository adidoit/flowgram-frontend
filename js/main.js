
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

//------------------EXPLAIN CODE---------------------------------
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
			explainWebServer();
		},4000);
	}

	function explainWebServer(){
		$('#web-server').addClass('faa-pulse animated')
		$('#web-server').popover('show');

		setTimeout(function(){
			$('#web-server').popover('hide');
			$('#web-server').removeClass('faa-pulse animated');
			explainCache();
		},4000);
	}

	function explainCache(){
		$('#cache').addClass('faa-pulse animated')
		$('#cache').popover('show');

		setTimeout(function(){
			$('#cache').popover('hide');
			$('#cache').removeClass('faa-pulse animated');
			explainAppServer();
		},4000);
	}

	function explainAppServer(){
		$('#app-server').addClass('faa-pulse animated')
		$('#app-server').popover('show');

		setTimeout(function(){
			$('#app-server').popover('hide');
			$('#app-server').removeClass('faa-pulse animated');
			explainDatabase();
		},4000);
	}

	function explainDatabase(){
		$('#database').addClass('faa-pulse animated')
		$('#database').popover('show');

		setTimeout(function(){
			$('#database').popover('hide');
			$('#database').removeClass('faa-pulse animated');
			explainFacebookAPI()
		},4000);
	}

	function explainFacebookAPI(){
		$('#facebook').addClass('faa-pulse animated')
		$('#facebook').popover('show');

		setTimeout(function(){
			$('#facebook').popover('hide');
			$('#facebook').removeClass('faa-pulse animated');
			explainPaypalAPI();
		},4000);
	}

	function explainPaypalAPI(){
		$('#paypal').addClass('faa-pulse animated')
		$('#paypal').popover('show');

		setTimeout(function(){
			$('#paypal').popover('hide');
			$('#paypal').removeClass('faa-pulse animated');
		},4000);
	}

	//------------------END EXPLAIN CODE--------------------------
    new Taggle('taggle', {
    tags: ['web', 'e-commerce', 'database', 'paypal','facebook']
});



   // $('i').popover('show');
});


