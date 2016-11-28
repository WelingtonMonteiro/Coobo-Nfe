 $(document).on('ready', function() {
    
    // ANIMATE CADASTER/LOGIN
    $('.cadaster').on('click', function() {
        $('#login').fadeOut(500, function() {
            $('#signup').fadeIn(500);
        })
    });
    $('.login').on('click', function() {
        $('#signup').fadeOut(500, function() {
            $('#login').fadeIn(500);
        })
    });

    //HEIGHT NAV
    var hDoc = $(document).height();

    $('nav#main').height(hDoc - 93);

    //HAMBURGUER ACTION
    $('#hamb').on('click', function(e) {
        $('nav#main').toggleClass('open');
        e.stopPropagation();
    });

     $('#main').on('click', function(e) {
        e.stopPropagation();
    });

    //SUBMENU
    $('a.submenu').on('click', function(e) {
        e.preventDefault();

        var sbNav = $(this).parent().find('ul');

        $(sbNav).toggleClass('opened');
    });

    //ACTIONS
    $('.bt-edit').on('click', function(e) {
        e.preventDefault();

        $(this).parent().parent().parent().find('.fput').focus();
    });

    $('#upload').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $('.ap').removeClass('ap');
        $('.box-upload').addClass('ap');
    });

     $('#add').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $('.ap').removeClass('ap');
        $('.box-add').addClass('ap');
    });

    //BT TOP
    $('.bt-apps').on('click', function(e) {
        $('.ap').removeClass('ap');
        $('.box-apps').addClass('ap');

        e.stopPropagation();
    });

    $('.bt-perfil').on('click', function(e) {
        $('.ap').removeClass('ap');
        $('.box-perfil').addClass('ap');

        e.stopPropagation();
    });

    $(document).on('click', function() {
        $('.ap').removeClass('ap')
        $('#main').removeAttr('class')
    });

    $('.littlebox').on('click', function(e) {
        e.stopPropagation();
    });

    //SELECT INPUT
    $('.table .tbody select').parent().append('<div class="arw"></div>');
    $('select').parent().append('<div class="arw"></div>');

    //OPEN VIDEO
    $('.bt-video').on('click', function(e) {
        e.preventDefault();

        $('.over').fadeIn(500, function() {
            $('.cont').fadeIn(500);
        });

        $('.close, .over').on('click', function() {
            $('.cont').fadeOut(500, function() {
                $('.over').fadeOut(500);
            });
            $('#tuts')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
    });

    //SLIDE TUTORIAL
    // setInterval(function() {

    //     var cur = $('ul.telas li.current');
    //     var nex = $(cur).next();

    //     if($(cur).is())
    //     $(nex).addClass('current');
    //     $(cur).removeClass('current');
    // },10000);

});













