$(document).ready(function () {

    $('.sidenav').sidenav();

    $('.collapsible').collapsible();

    $('select').formSelect();

    $('.datepicker').datepicker({
        format: "dd mmmm yyyy",
        yearRange: 40,
        showClearBtn: true
    });

    $("#edit_due_date").datepicker("setDate", new Date($("#edit_due_date").val()), {
        format: 'dd/mmm/yyyy'
    });
});