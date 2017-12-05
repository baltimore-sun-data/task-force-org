var dataproject = {
	init: function(){
		//dataproject.share();
		dataproject.orgChart();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = ""; //Tweet text
			var url = ""; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = ""; //Picture URL
			var title = ""; //Post title
			var description = ""; //Post description
			var url = ""; //Interactive URL
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
		$('.profile').on('click',function() {
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
