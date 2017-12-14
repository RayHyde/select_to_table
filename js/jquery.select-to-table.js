/* ----------------------------------------------------------------------
* File name:		jquery.select-to-table.js
* Description:	xxx
* Website:			generic jQuery plugin
* Version:			1.0
* Date:					7-9-1017
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

(function ($) {
	$.fn.selectToTable = function (options) {

		// default settings
		var settings = $.extend({
			divider: ' • '
		}, options);


		/*** ON STARTUP ***/
		// create variables from old select box
		var $select = this.hide(), // hide the old select
			$oo = $select.find('option'),
			selectedText = $select.find('option:selected').text(),
			selectedIdx = $select.find('option:selected').index(),
			speed = 300;

		//create elements for new select box
		$select.after('<div class="new-select"><div class="new-selectbox"><i class="fa fa-caret-down pull-right"></i><span></span></div><div class="new-options-bg"></div><div class="new-options"><table width="100%" cellpadding="0" cellspacing="0"></table></div></div>');

		// create variables from new select box
		var $newSelect = $('.new-select'),
			$nb = $newSelect.find('.new-selectbox span'),
			$no = $newSelect.find('.new-options table');

		// fill the new box header
		$nb.append(selectedText);

		// create new dropdown as table
		for (var i = 0; i < $oo.length; i++) {
			var ff = $oo.eq(i).text().split(' • ');
			var line$ = '<tr>';
			for (var j = 0; j < ff.length; j++) {
				line$ += '<td>' + ff[j] + '</td>';
			}
			line$ += '<tr>';
			$no.append(line$);
		}

		// set new dropdown option to selected, same as old one
		$no.find('tr').eq(selectedIdx).addClass('selected');

		/*** EVENTS ***/

		// when clicking on the new select box, show new dropdown
		$nb.on('click', function () {
			$(this).closest('.new-select').find('.new-options').slideToggle(speed);
			$('.new-options-bg').toggleClass('active');
		});

		// when selecting an option from the new dropdown
		$no.on('click', 'td', function () {
			// get index of new dropdown selected option
			selectedIdx = $(this).closest('tr').index();

			// make sure the original select box gets proper value
			ff = $select.find('option').eq(selectedIdx).prop('selected', true);

			$select.trigger('change');

			// get the selected option text from original select box
			// and put it in the header of the new one, this saves us
			// parsing the new option tr>td back to piping " | "
			$nb.text(ff.text());

			// create visual selected in new dropdown, then close it
			$(this).closest('tr').addClass('selected')
				.siblings().removeClass('selected')
				.closest('.new-options').slideToggle(speed);
			$('.new-options-bg').toggleClass('active');

			// test if original select box has new value
			console.info('originele waarde: ' + $select.val());
		});

		// when clicking beside the dropdown, close the dropdown:
		$('.new-options-bg').click(function () {
			$(this).closest('.new-select').find('.new-options').slideUp(speed);
			$(this).removeClass('active');
		});
	}
}(jQuery));
