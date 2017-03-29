var editor_js = ace.edit("editor_js");
editor_js.setTheme("ace/theme/Dreamweaver");
editor_js.getSession().setMode("ace/mode/javascript");
editor_js.setValue("var x = 'write js here';"); // or session.setValuы
editor_js.setReadOnly(true);

var editor_html = ace.edit("editor_html");
editor_html.setTheme("ace/theme/Dreamweaver");
editor_html.getSession().setMode("ace/mode/html");
editor_html.setValue("<p>write html here</p>"); // or session.setValuы
