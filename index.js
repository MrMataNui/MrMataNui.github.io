$(() => {
	$('#show-nav').click(() => {
		if ($('#myLinks').css('display') === 'block') {
			$('#myLinks').css({ 'display': 'none' });
		} else {
			$('#myLinks').css({ 'display': 'block' });
		}
  });

	const martianDate = { year: '2017', month: '08', day: '23' };
	const claymationDate = { year: '2019', month: '01', day: '10' };

	const formatType = 'YYYY.MM.DD';
	const formatDate = (date) => formatType
		.replace(/YYYY/, date.year)
		.replace(/YY/, date.year.split('20')[1])
		.replace(/MM/, date.month)
		.replace(/DD/, date.day);

	$('#martian date').text(formatDate(martianDate));
	$('#claymation date').text(formatDate(claymationDate));
});
