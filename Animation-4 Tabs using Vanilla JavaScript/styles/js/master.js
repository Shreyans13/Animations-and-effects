var customIconBx = document.querySelectorAll('.customIconBx');
var customContentBx = document.querySelectorAll('.customContentBx');
for (var i = 0; i < customIconBx.length; i++) {
	customIconBx[i].addEventListener('mouseover',
	function(){
		for (var i = 0; i < customContentBx.length; i++) {
			customContentBx[i].className='customContentBx';
		}
		document.getElementById(this.dataset.id).className='customContentBx active';
		for (var i = 0; i < customIconBx.length; i++) {
			customIconBx[i].className = 'customIconBx';
		}
		this.className = 'customIconBx active';
	})
}