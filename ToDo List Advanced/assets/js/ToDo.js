//  check off by clicking
$("ul").on("click", "li", (function(){
	$(this).toggleClass("completed");	
}));

$("ul").on("click", "span", (function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropogation();
}));

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		// grabbing new todo text
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'> </i> </span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})