// angular.module('meetupsapp', [])
app.controller('meetupsController',['$scope', '$resource',
	function($scope, $resource) {
		var Meetup = $resource('/api/meetups');
		var meetupsCtrl = this;
		
		Meetup.query(function(results) {
			meetupsCtrl.meetups = results;
		})

		meetupsCtrl.meetups = [];

		meetupsCtrl.createMeetup = function() {
			// this.meetups.push({name: this.meetupName});
			var meetup = new Meetup();
			meetup.name = this.meetupName;
			meetup.$save(function(result) {
				meetupsCtrl.meetups.push(result);
			});			
			this.meetupName = '';
		}
}]);