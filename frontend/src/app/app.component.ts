import { Component } from '@angular/core';
import { Arena } from './arena';
import { VisitedPipe } from './visited.pipe';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'NHL Arenas Map';
	lat: number = 42.7870988;
	lng: number = -96.4611001;
	zoom: number = 4;
	disableDefaultUI: boolean = false;
	zoomControl: boolean = true;
	show_visited: string = 'all';
	arenas = [
		new Arena( 'Anaheim Ducks', 'assets/img/logos/anaheim-ducks.svg', false, 33.8078363, -117.8786819 ),
		new Arena( 'Arizona Coyotes', 'assets/img/logos/arizona-coyotes.svg', true, 33.532237, -112.263445 ),
		new Arena( 'Boston Bruins', 'assets/img/logos/boston-bruins.svg', false, 42.3661881, -71.0643422 ),
		new Arena( 'Buffalo Sabres', 'assets/img/logos/buffalo-sabres.svg', false, 42.8749968, -78.8761674 ),
		new Arena( 'Calgary Flames', 'assets/img/logos/calgary-flames.svg', false, 51.0373732, -114.054265 ),
		new Arena( 'Carolina Hurricanes', 'assets/img/logos/carolina-hurricanes.svg', false, 35.8033394,-78.7217946 ),
		new Arena( 'Chicago Blackhawks', 'assets/img/logos/chicago-blackhawks.svg', false, 41.8806991,-87.6762708 ),
		new Arena( 'Colorado Avalanche', 'assets/img/logos/colorado-avalanche.svg', true, 39.7486565,-105.0097968 ),
		new Arena( 'Columbus Blue Jackets', 'assets/img/logos/columbus-blue-jackets.svg', false, 39.9694406,-83.0086341 ),
		new Arena( 'Dallas Stars', 'assets/img/logos/dallas-stars.svg', false, 33.0188211,-96.8412506 ),
		new Arena( 'Detroit Red Wings', 'assets/img/logos/detroit-red-wings.svg', false, 42.3251899,-83.1213998 ),
		new Arena( 'Edmonton Oilers', 'assets/img/logos/edmonton-oilers.svg', false, 53.5469485,-113.4982859 ),
		new Arena( 'Florida Panthers', 'assets/img/logos/florida-panthers.svg', false, 26.1584427,-80.3278089 ),
		new Arena( 'Los Angeles Kings', 'assets/img/logos/los-angeles-kings.svg', true, 34.0430175,-118.2694481 ),
		new Arena( 'Minnesota Wild', 'assets/img/logos/minnesota-wild.svg', false, 44.944906,-93.103343 ),
		new Arena( 'Nashville Predators', 'assets/img/logos/nashville-predators.svg', false, 36.1595351,-86.7810777 ),
		new Arena( 'New Jersey Devils', 'assets/img/logos/new-jersey-devils.svg', false, 40.7336167,-74.17115 ),
		new Arena( 'New York Rangers', 'assets/img/logos/new-york-rangers.svg', false, 40.7505045,-73.9956327 ),
		new Arena( 'Ottowa Senators', 'assets/img/logos/ottowa-senators.svg', false, 45.3348021,-75.9184263 ),
		new Arena( 'Philidelphia Flyers', 'assets/img/logos/philidelphia-flyers.svg', false, 39.9011809,-75.1742469 ),
		new Arena( 'Pittsburgh Penguins', 'assets/img/logos/pittsburgh-penguins.svg', true, 40.4395148,-79.9915569 ),
		new Arena( 'San Jose Sharks', 'assets/img/logos/san-jose-sharks.svg', true, 37.3260746,-121.900262 ),
		new Arena( 'St Louis Blues', 'assets/img/logos/st-louis-blues.svg', false, 38.6265853,-90.2051319 ),
		new Arena( 'Tampa Bay Lightning', 'assets/img/logos/tampa-bay-lightning.svg', true, 27.9835375,-82.4843154 ),
		new Arena( 'Vancouver Canucks', 'assets/img/logos/vancouver-canucks.svg', false, 49.2778449,-123.1109512 ),
		new Arena( 'Washington Capitals', 'assets/img/logos/washington-capitals.svg', false, 38.8884197,-77.1006833 ),
		new Arena( 'Winnipeg Jets', 'assets/img/logos/winnipeg-jets.svg', false, 49.8926174,-97.1437393 ),
	]
}
