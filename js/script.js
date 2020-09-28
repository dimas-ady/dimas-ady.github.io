function darkMode(){
	var button = $("#button-theme");
	var background = $("body");
	var content = $('.card');
	var nav = $(".navbar");
	button.html("Dark");
	nav.removeClass("bg-primary");
	nav.toggleClass("bg-dark");
	background.removeClass("bg-light");
	background.toggleClass("bg-darkmode");
	content.removeClass("bg-light text-black");
	content.toggleClass("bg-darkmode-content text-white");
}

function lightMode(){
	var button = $("#button-theme");
	var background = $("body");
	var content = $('.card');
	var nav = $(".navbar");
	button.html("Light");
	nav.removeClass("bg-dark");
	nav.toggleClass("bg-primary");
	background.removeClass("bg-darkmode");
	background.toggleClass("bg-light");
	content.removeClass("bg-darkmode-content text-white");
	content.toggleClass("bg-light text-black");
}

function onloaded(){
	if(window.localStorage.getItem("theme") === "darkmode"){
		darkMode();
	}
}

function switch_theme(){
	var button = $("#button-theme");
	var background = $("body");
	var content = $('.card');
	var nav = $(".navbar");
	if(button.text() === "Light"){
		window.localStorage.setItem("theme", "darkmode");
		darkMode();
	} else {
		window.localStorage.setItem("theme", "lightmode");
		lightMode();
	}
}

$("document").ready(onloaded());
