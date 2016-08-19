function initEB() {
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	} else {
		startAd();
	}
}

function startAd() {


	TweenMax.set("figure", {
		visibility: 'visible'
	});
	TweenMax.to(".bg", 20, {
		delay: 0,
		x: 150,
	});
	TweenMax.from("#birdAnimation img", 1.8, {
		y: -4250,
		ease: SteppedEase.config(17),
		repeat: 0
	});
	TweenMax.from("h1", .5, {
		delay: 1.7,
		scale: 0,
		ease: Elastic.easeOut.config(1, 0.5),
	});
	TweenMax.to("h1", 1, {
		delay: 3.2,
		opacity: 0,
		ease: Elastic.easeOut.config(1, 0.5),
	});
	TweenMax.from("h2", .5, {
		delay: 3.5,
		scale: 0,
		ease: Elastic.easeOut.config(1, 0.5),
	});
	TweenMax.to("h2", 1, {
		delay: 4.9,
		opacity: 0,
		ease: Elastic.easeOut.config(1, 0.5),
	});
	TweenMax.from("h3", 1, {
		delay: 5.2,
		scale: 0,
		ease: Elastic.easeOut.config(1, 0.5),
	});
	TweenMax.to("h3", .2, {
		delay: 8.3,
		opacity: 0,
	});
	TweenMax.to(".stork", .8, {
		delay: 5,
		rotation: -2,
		repeat: 30,
		yoyo: true,
		repeatDelay: 0,
		ease: Sine.easeInOut
	});
	TweenMax.from(".stork", 3, {
		delay: 5.9,
		y: 250,
		
	});
	TweenMax.to(".stork", .5, {
		delay: 8.3,
		scale: 4,
		rotation: 1,
		y: -488,
		ease: Power1.easeOut
	});
	TweenMax.to(".logo", .5, {
		delay: 8.3,
		y: 20
	});
	TweenMax.to(".bg", .1, {
		delay: 8.3,
		opacity: 0,
	});
	TweenMax.from("button", .5, {
		delay: 9.4,
		scale: 0,
		ease: Elastic.easeOut.config(1, 0.5),
		ease: Power1.easeIn,
		force3D: true,
		onComplete: shineBTN
	});
	TweenMax.from("h4", .5, {
		delay: 9,
		scale: 0,
		ease: Elastic.easeOut.config(1, 0.5),
	});

	TweenMax.from(".legal", .5, {
		delay: 9,
		opacity: 0,
	});
	TweenMax.from(".legal2", .5, {
		delay: 9,
		opacity: 0,
	});
	TweenMax.from(".peeps", .5, {
		delay: 9,
		x: 200
	});

	function shineBTN() {
		TweenMax.set('button', {
			backgroundColor: "#ed1d24",
			boxShadow: "1px 3px 0px 0px #9a1217",
		});
		TweenMax.set('btnArrow', {
			y: 0
		});
		TweenMax.to('button', .5, {
			backgroundColor: "#ff8200",
			boxShadow: "0px 0px 0px 0px #b55d01",
			y: 3,
			yoyo: true,
			repeat: 1,
			force3D: true,
		});


	}

	function handleBannerClick() {
		EB.clickthrough();
	}

	var clickthru = document.querySelector('figcaption');

	clickthru.addEventListener("click", handleBannerClick);

	setTimeout(function () {
		clickthru.addEventListener('mouseenter', shineBTN);

	}, 8000)

}