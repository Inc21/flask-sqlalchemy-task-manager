document.addEventListener("DOMContentLoaded", function () {
	// sidenav initialization
	let sidenav = document.querySelectorAll(".sidenav");
	M.Sidenav.init(sidenav);

	// datepicker initialization
	let datepicker = document.querySelectorAll(".datepicker");
	M.Datepicker.init(datepicker, {
		format: "dd mmmm, yyyy",
		i18n: {done: "Select"},
		firstDay: 1
	});

	// select initialization
	let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

	// collapsible initialization
	let collectibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collectibles);
});
