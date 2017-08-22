Router.route('/', {
    name: 'home'
});

Router.route('/dashboard');

Router.route('/addEvents');

Router.route('/learn');

Router.route('/event/peopleAttending/:_id', {
    name: 'peopleAttending'
});

Router.route('/learn/:tag', function() {
    this.render('taggedEvents')
});

Router.route('/profile')

Router.route('/profileSettings');

Router.route('/settings');

Router.route('/event/:_id', {
    name: 'event'
});

Router.route('/event/:_id/peopleAttending', {
    name: 'eventPeople'
});

Router.route('/event/:_id/info', {
    name: 'eventInfo'
});

Router.route('/singleresourcepage', {
    name: 'testsingleResourcePage'
});

Router.route('/singleresourcepage/info', {
    name: 'testeventInfo'
});

Router.route('license', {
  name: 'licenseQuestions'
});

Router.route('event/:_id/', function() {
    this.render('likes')
});
