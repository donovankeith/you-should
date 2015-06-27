var activitiesData = [
    {
        title: 'See a Show at UCB',
        url: 'https://franklin.ucbtheatre.com/',
        icon: 'noun_theater_501.png',
    },
    {
        title: 'Watch a Documentary on Netflix',
        url: 'http://www.netflix.com/browse/genre/6839',
        icon: 'noun_television_15555.png',
    },
    {
        title: 'Learn Meteor.js',
        url: 'http://themeteorbook.com',
        icon: 'noun_mortar-board_32463.png',
    },
    {
        title: 'Go for a hike',
        url: 'https://www.google.com/webhp?hl=en#hl=en&q=hiking+trails+near+me&rflfq=1&tbm=lcl',
        icon: 'noun_boot_35776.png',
    },
    {
        title: 'Ride Your Bike',
        url: 'http://www.traillink.com/trailsearch.aspx?zipcode=90027',
        icon: 'noun_bike_143283.png',
    },
    {
        title: 'Go for a Walk',
        url: 'http://www.wikihow.com/Take-a-Walk',
        icon: 'noun_walk_3516.png',
    },
    {
        title: 'Grab a Drink with a Friend',
        url: 'http://www.yelp.com/search?find_desc=happy+hour&find_loc=Los+Angeles%2C+CA',
        icon: 'noun_bar_21.png',
    },
    {
        title: 'Go to Late Night Happy Hour at MessHall',
        url: 'http://www.yelp.com/biz/messhall-los-angeles-2',
        icon: 'noun_cocktail-calendar_62322.png',
    },
    {
        title: 'Cook a Meal',
        url: 'http://www.chow.com/',
        icon: 'noun_chef-hat_32675.png',
    },
    {
        title: 'Grab Coffee with a Friend',
        url: 'http://www.yelp.com/search?find_desc=happy+hour&find_loc=Los+Angeles%2C+CA#find_desc=Coffee+%26+Tea',
        icon: 'noun_coffee_4020.png',
    },
    {
        title: 'Workout',
        url: 'https://www.youtube.com/watch?v=zwSRF3QkG7Q',
        icon: 'noun_dumbbell_22292.png',
    }
];

function shuffle(array) {
    // Shuffles array in place.
    // Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

Template.activities_list.helpers(
    {
        // Return a randomly sorted list of activities.
        activities: shuffle(activitiesData)
    }
);