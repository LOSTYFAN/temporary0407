$(function () {
    $.ajax({
        url: '../data.json',
        async: false,
        success: function (data) {
            ipAddress = data.ip;
        }
    });
});