

        var search = $('#search-field');
        const picInfo = $('[data-sub-html]');
         const picture = $('.filter');

          $(search).on('keyup', function(){

            $( picture ).addClass('hidden');

          for (var i = 0; i < picInfo.length; i ++) {
            var re = new RegExp(search.val(), 'i');
            if ( String(picInfo[i].dataset.subHtml).match(re)){

              $(picture[i] ).removeClass('hidden');
            }
            };
          });

