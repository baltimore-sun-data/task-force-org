var dataproject = {
	init: function(){
		dataproject.share();
		dataproject.orgChart();
	},
	share: function(){
		$(".fa-twitter").on("click", function(){
			var tweet = "Keep up-to-date with this overview of the Baltimore police racketeering cases."; //Tweet text
			var url = "http://data.baltimoresun.com/news/gun-trace-overview/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".fa-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/news/gun-trace-overview/images/thumb.jpg"; //Picture URL
			var title = "Gun Trace Task Force Overview"; //Post title
			var description = "Keep up-to-date with this overview of the Baltimore police racketeering cases."; //Post description
			var url = "http://data.baltimoresun.com/news/gun-trace-overview/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	orgChart: function() {
		var prev;
		var pos;
		var containerPos;
		getContainerPos();
		window.addEventListener('resize', function() {
			getContainerPos();
		});
		$('.profile, .overlay').one('click',function() {
			$('.overlay').fadeOut();
			console.log('trigger');
		});
		$('.profile, overlay').on('click',function() {
			if($(this).hasClass('active')) {
				$('.profile.active .profile__content').css('left', 0);
				$('.profile.active').removeClass('active');
			} else {
				$('.profile.active .profile__content').css('left', 0);
				$('.profile.active').removeClass('active');
				$(this).addClass('active');
				pos = $(this).position();
				$('.profile.active .profile__content').css('left', (pos.left - containerPos) * -1);
			}
		});
		function getContainerPos() {
			if ($(window).width() < 700) {
				containerPos = 0;
			} else {
				containerPos = $('.orgChart').position().left;
			};
		};
	}
}
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
