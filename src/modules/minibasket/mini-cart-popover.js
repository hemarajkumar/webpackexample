import 'bootstrap/js/dist/popover';

var bindMiniCart = function() {
	document.getElementById("load-minibasket-popover").addEventListener("click", function(){
		$('#load-minibasket-popover').popover('show');	
	})
	$('#load-minibasket-popover').on('shown.bs.popover', function() {
		const popoverData = document.querySelector('#basketData');
		const popoverContainer = document.querySelector('.popover-body');
		popoverContainer.innerHTML = popoverData.innerHTML;
	});
	$(function () {
		$('[data-toggle="popover"]').popover();
	});
	
};

bindMiniCart();