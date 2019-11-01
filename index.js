function formatDate(format, date) {
	const YYYY = date.year;
	const YY = date.year.split('20')[1];
	const MM = date.month;
	const DD = date.day;
	switch (format) {
		case 'YYYY.MM.DD': return `${YYYY}.${MM}.${DD}`;
		case 'MM/DD/YYYY': return `${MM}/${DD}/${YYYY}`;
		case 'DD.MM.YYYY': return `${DD}.${MM}.${YYYY}`;
		case 'MM/DD/YY': return `${MM}/${DD}/${YY}`;
		case 'DD.MM.YY': return `${DD}.${MM}.${YY}`;
	}
}
$(() => {
	$('#martian date').text(formatDate('YYYY.MM.DD', {
		year: '2017', month: '08', day: '23'
	}));
	$('#claymation date').text(formatDate('YYYY.MM.DD', {
		year: '2019', month: '01', day: '10'
	}));
});
