app.transparentMarkerOpacity = 0.5;

app.quickSubmit = {
	enable: true,
	links: {
		m01: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+1:+The+Atlantic+Wall&entry.859563308=',
		m02: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+2:+Occupied+Residence&entry.859563308=',
		m03: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+3:+Spy+Academy&entry.859563308=',
		m04: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+4:+War+Factory&entry.859563308=',
		m05: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+5:+Festung+Guernsey&entry.859563308=',
		m06: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+6:+Lib%C3%A9ration&entry.859563308=',
		m07: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+7:+Secret+Weapons&entry.859563308=',
		m08: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+8:+Rubble+And+Ruin&entry.859563308='
	}
};

app.maps = {
	m01: 'm01-the-atlantic-wall',
	m02: 'm02-occupied-residence',
	m03: 'm03-spy-academy',
	m04: 'm04-war-factory',
	m05: 'm05-festung-guernsey',
	m06: 'm06-liberation',
	m07: 'm07-secret-weapon',
	m08: 'm08-rubble-and-ruin',
};

app.markerGroups = [
	{name: 'letter-from-home'},
	{name: 'letter-to-home'},
	{name: 'last-letter'},
	{name: 'misc-document'},
	{name: 'duty-roster'},
	{name: 'sniper-report'},
	
	{name: 'objective-primary'},
	{name: 'objective-optional'},
	{name: 'deadeye-target'},
	
	{name: 'generator'},
	{name: 'other', icon: 'pin'},
];

app.iconTypes = {
	'letter-from-home': {size: [48, 48]},
	'letter-to-home': {size: [48, 48]},
	'last-letter': {size: [48, 48]},
	'misc-document': {size: [48, 48]},
	'duty-roster': {size: [48, 48]},
	'sniper-report': {size: [48, 48]},
	
	'objective-primary': {size: [48, 48]},
	'objective-optional': {size: [48, 48]},
	'objective-exit': {size: [48, 48]},
	'deadeye-target': {size: [48, 48]},
	'generator': {size: [48, 48]},
	
	'car-civilian': {size: [32, 32]},
	'car-transport': {size: [32, 32]},
	'car-tank': {size: [32, 32]},
	'car-tank-big': {size: [32, 32]},
	'turret-pillbox': {size: [32, 32]},
	'turret-panther': {size: [32, 32]},
	'rail': {size: [32, 32]},
	'boat': {size: [32, 32]},
	'plane': {size: [32, 32]},
	'pin': {size: [32, 32]},
	'loot-crate': {size: [32, 32]},
};

app.creditsText = `
	<h3>Contributors</h3>
	<p>
		Sniper Elite 5 map is a rewrite by
		<a href="https://github.com/AtomCrafty" target="_blank">AtomCrafty</a>
		and other
		<a href="https://github.com/lordfiSh/sniperelite5maps/graphs/contributors">contributors</a>,
		based on the
		<a href="https://github.com/witcher3map/witcher3map">witcher3map</a>
		project by
		<a href="https://github.com/untamed0" target="_blank">untamed0</a>,
		<a href="https://github.com/mcarver" target="_blank">mcarver</a>
		and the help of
		<a href="https://github.com/witcher3map/witcher3map/graphs/contributors" target="_blank">many more</a>.
	</p>
	
	<h3>Sniper Elite 5 assets</h3>
	<p>Sniper Elite 5 logo, icons, map &amp; text are the property of <a href="http://www.rebellion.co.uk/" target="_blank">Rebellion</a> and used without their permission. </p>
	
	<h3>Javascript libraries used</h3>
	<ul>
		<li><a href="http://jquery.com" target="_blank">jQuery</a> (MIT)</li>
		<li><a href="http://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>
		<li><a href="http://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>
		<li><a href="http://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>
		<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>
		<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>
		<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>
		<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>
	</ul>
`;

console.log("Configuration loaded");
