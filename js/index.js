var code_area_html = '<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">' +
    '\n    <title>d3</title>\n<style>\nbody {font-size: 14px;}</style>\n</head>' +
    '\n<body>\n</body>\n</html>';


var editor = ace.edit("editor");
editor.setTheme("ace/theme/Dreamweaver");
editor.getSession().setMode("ace/mode/javascript");

var iframe = document.getElementById("frame_result");
var doc = iframe.contentDocument ||
          iframe.contentWindow.document;


editor.getSession().on('change', function() {
    doc.open();
    doc.write(code_area_html+ "<script>" + editor.getValue() + "<\/script>");
    doc.close();
});
