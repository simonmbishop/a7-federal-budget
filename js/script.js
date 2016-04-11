$(function() {

  // your js goes in betwen these two things

	var cut = 0;

	//select all divs that have class of button
	$(".button").click(function(){
		var p = $(this).parent();
		var amountString = p.attr("data-amount-cut");
		var amount = parseFloat(amountString);
		var half = $(this).hasClass("half");

		if (half == true){
			amount = amount/2; 
			
		}

		cut = cut + amount;
		$("#cut-so-far").text(cut);

		if (cut >= 2000){
			$(".cap").show();
		}




	});

	

  


}); // don't delete this