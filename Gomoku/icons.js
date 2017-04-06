var is_visible = false;
var is_o_visible = false;

function main(){
	$('.x_btn').on('click', e => {
	  if(!is_visible){
	   $('#x path')[0].setAttribute('class', 'animate_x');
	  }
	  else{
	    $('#x path')[0].setAttribute('class', '');
	  }
	  is_visible = !is_visible;

	});

	$('.o_btn').on('click', e => {
	  console.log("hereee");
	  if(!is_o_visible){
	   $('#o circle')[0].setAttribute('class', 'animate_o');
	  }
	  else{
	    $('#o circle')[0].setAttribute('class', '');
	  }
	  is_o_visible = !is_o_visible;

	});
}

$(document).ready(main);
