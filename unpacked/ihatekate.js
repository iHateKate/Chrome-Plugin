$('.news_toggle [id^="comment_"]').each(function() {
	$(this).find('a').each(function() {
		if (this.href.indexOf('http://www.shortnews.de/visitenkarte.cfm?username=HateKate') == 0) {
			var comment = $(this).parent().parent().children().eq(1).children().eq(0);
			$(comment).text("Meine wahre Liebe: Der FC Bayern München!");
		}
	});
});