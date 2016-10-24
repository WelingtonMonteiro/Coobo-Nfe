(function (window, document, $) {
    $('#form-login').submit(onSubmitLogin);
    $('#form-signup').submit(onSubmitSignup);
    $('#form-recovery').submit(onSubmitRecovery);

    function onSubmitRecovery(e){
        e.preventDefault();
        
        window.location.replace('/');
    }
    function onSubmitLogin(e) {
        window.Api.Login.login(onSuccessLogin, onErrorLogin);
        e.preventDefault();
    }

    function onSubmitSignup(e) {
        window.Api.Login.signin(onSuccessLogin, onErrorLogin);
        e.preventDefault();
    }

    function onSuccessLogin(sucess) {
        // alert("Logado com Suecesso\n\nTOKEN de acesso:\n\n"+sucess.access_token);
        window.localStorage.setItem('userToken', sucess.access_token);
        $(location).attr('href','views/initial.html');

    }

    function onErrorLogin(error) {
        // alert("Erro: \n" + error.responseJSON.message);
        // $(location).attr('href','index.html');
        $(location).attr('href','views/initial.html');
    }

})(window, document, $);



$('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if( $this.val() === '' ) {
            label.removeClass('highlight');
        }
        else if( $this.val() !== '' ) {
            label.addClass('highlight');
        }
    }

});

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});


// append row to the HTML table
function appendRow() {
    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }
}
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

// append column to the HTML table
function appendColumn() {
    var tbl = document.getElementById('my-table'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}

// delete table rows with index greater then 0
function deleteRows() {
    var tbl = document.getElementById('my-table'), // table reference
        lastRow = tbl.rows.length - 1,             // set the last row index
        i;
    // delete rows with index greater then 0
    for (i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}

// delete table columns with index greater then 0
function deleteColumns() {
    var tbl = document.getElementById('my-table'), // table reference
        lastCol = tbl.rows[0].cells.length - 1,    // set the last column index
        i, j;
    // delete cells with index greater then 0 (for each row)
    for (i = 0; i < tbl.rows.length; i++) {
        for (j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}
