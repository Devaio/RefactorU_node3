$(function(){

$('#signIn').on('submit', function(e){
	e.preventDefault() //prevents page refresh
	//post form data to '/'
	$.post('/', $(this).serialize(), function(data){
		console.log(data)

		if(data.error){
			$('#response').text(data.error)
		}
		if(data.success){
			$('#response').text(data.success)
		}

	})
})


});