function hovers(par){
	var x = document.getElementsByClassName('img1')[0];
	var y = document.getElementsByClassName('img2')[0];
	var z = document.getElementsByClassName('img3')[0];
	if (par == 1) {
		window.setTimeout(function(){
			x.style.opacity = "1";
			y.style.opacity = "1";
			z.style.opacity = "1";
		},300);
		x.style.animation = "imgShows 0.3s ease 0.2s 1 normal";
		y.style.animation = "imgShows 0.3s ease 0.1s 1 normal";
		z.style.animation = "imgShows 0.3s ease 0s 1 normal";
		
	} else if (par == 2) {
		window.setTimeout(function(){
			x.style.opacity = "0";
			y.style.opacity = "0";
			z.style.opacity = "0";
		},300);
		z.style.animation = "imgHides 0.3s ease 0s 1 normal";
		y.style.animation = "imgHides 0.3s ease 0.1s 1 normal";
		x.style.animation = "imgHides 0.3s ease 0.2s 1 normal";
	}
}