const news = document.getElementById("news");
const gallery = document.getElementById("gallery");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

function resetNav(){
	news.classList.remove('navTitleClick');
	news.classList.add('navTitle');
	gallery.classList.remove('navTitleClick');
	gallery.classList.add('navTitle');
	about.classList.remove('navTitleClick');
	about.classList.add('navTitle');
	contact.classList.remove('navTitleClick');
	contact.classList.add('navTitle');
}

news.addEventListener('click',function(){
	resetNav();
	news.classList.add('navTitleClick');
	news.classList.remove('navTitle');
	console.log("News");
});

gallery.addEventListener('click',function(){
	resetNav();
	gallery.classList.add('navTitleClick');
	gallery.classList.remove('navTitle');
	console.log("News")
});

about.addEventListener('click',function(){
	resetNav();
	about.classList.add('navTitleClick');
	about.classList.remove('navTitle');
	console.log("News");
});

contact.addEventListener('click',function(){
	resetNav();
	contact.classList.add('navTitleClick');
	contact.classList.remove('navTitle');
	console.log("News");
});