var code_area_html =
"<!DOCTYPE html><head><style>.axis path {fill: none;stroke: grey;shape-rendering: crispEdges;}.axis text {}" +
".tick line {stroke: grey;shape-rendering: crispEdges;}</style>"+
"</head><body><div></div><script src='js/d3js.js'></script></body></html>";

var code_area_js =
"var chart_area =\n" +
  "d3.select('body').append('div').classed('chart_area', true); \n" +
  "\n" +
"var data = []; \n" +
"//добавьте в data необходимые данные любым путем\n"+
"//подберите масштаб\n"+
"var CHART_WIDTH, CHART_HEIGHT;\n"+
"\n" +
"var widthScale = d3.scale.linear()\n" +
  "\t.domain([d3.min(data, function(d, i) {return d;}),\n" +
  "d3.max(data, function(d, i) {return d;})])\n" +
  "\t.range([0, CHART_WIDTH])\n" +
  "\t.nice();\n"+
"\n" +
"var hAxis_area =\n" +
  "d3\n" +
  "\t.select('body')\n" +
  "\t.append('div')\n" +
  "\t.style('position', 'absolute');\n" +
  "\n" +
"var ticks = widthScale.ticks(10);\n" +
"hAxis_area\n" +
"\t.selectAll('span')\n" +
"\t.data(ticks)\n" +
"\t.enter()\n" +
"\t.append('span')\n" +
"\t.style('position', 'absolute')\n" +
"\t.style('left', function(d,i) { return widthScale(d) + 'px'; } )\n" +
"\t.text(String);\n" +
"\n" +
"chart_area\n" +
"\t.selectAll('div')\n" +
"\t.data(data)\n" +
"\t.enter().append('div').classed('bar_area', true)\n" +
"\t.style('background-color',function(d, i) { return 'hsl(250,100%,'+(100-d/0.5)+'%)'; })\n"+
"\t//добавьте высоту прямоугольникам равную 20px\n"+
"\t//также margin с параметрами (2px 0px)\n"+
"\t//добавьте ширину по аналогии с добавлением координат в коде выше\n"+
"\t//а также заполните прямоугольники значениями\n"+
";";

var editor = ace.edit("editor");
editor.setTheme("ace/theme/Dreamweaver");
editor.getSession().setMode("ace/mode/javascript");
editor.setValue(code_area_js);

var iframeBrowser = document.getElementById("frame_browser");
var browserDoc = iframeBrowser.contentDocument || iframeBrowser.contentWindow.document;

var iframeOriginal = document.getElementById("frame_original");
var originalDoc = iframeOriginal.contentDocument || iframeOriginal.contentWindow.document;

var variants = {
  1:{
    originalCode: "var chart_area =d3.select('body').append('div').classed('chart_area', true); "+
"var data = []; for (var i=0; i<10; i++){data.push(i);}"+
"var CHART_WIDTH = 400, CHART_HEIGHT = 300;"+
"var widthScale = d3.scale.linear().domain([d3.min(data, function(d, i) {return d;}),"+
"d3.max(data, function(d, i) {return d;})]).range([0, CHART_WIDTH]).nice();"+
"var hAxis_area =d3.select('body').append('div').style('position', 'absolute');"+
"var ticks = widthScale.ticks(10);"+
"hAxis_area.selectAll('span').data(ticks).enter().append('span').style('position', 'absolute').style('left', function(d,i) { return widthScale(d) + 'px'; } ).text(String);"+
"chart_area.selectAll('div').data(data).enter().append('div').classed('bar_area', true).style('background-color',function(d, i) { return 'hsl(250,100%,'+(100-d/0.5)+'%)'; }).style('height', '20px').style('margin', '2px 0px').style('width', function(d,i) { return widthScale(d) + 'px'; } ).text(function(d) { return d; });"
  },
  2:{
    originalCode:"var data = [1, 2, 3, 4];d3.select('body').selectAll('p').data(data).enter().append('p').text(function(d) { return d; });"
  }
};


//////////////////////////////Добавление в редактор нужного кода
browserDoc.open();
browserDoc.write(code_area_html+ "<script>" + editor.getValue() + "<\/script>");
browserDoc.close();

editor.getSession().on("change", function() {
    browserDoc.open();
    browserDoc.write(code_area_html+ '<script>' + editor.getValue() + "<\/script>");
    browserDoc.close();
});


////////////////////////////Отображаем образец
function showOriginalFrame(i){
  originalDoc.open();
  originalDoc.write(code_area_html+ "<script>" + variants[i].originalCode + "<\/script>");
  originalDoc.close();
}

//////////////////////Сравнение картинок
function toCheckScreen(){
  var imgCheck,imgTrue;
  html2canvas(browserDoc.body, {
    onrendered: function(canvasCheck) {
      imgCheck = canvasCheck.toDataURL("image/png")
      //делаем скрин тру
      html2canvas(originalDoc.body, {
        onrendered: function(canvasTrue) {
        imgTrue = canvasTrue.toDataURL("image/png")
        //проводим сравнение
        resemble(imgTrue).compareTo(imgCheck).onComplete(function (data) {
            var percentage = 100 - Math.ceil(data.rawMisMatchPercentage);
            var result = document.getElementById('result');
            result.innerHTML = percentage + "%";
            if (percentage >= 80) {
              result.style.backgroundColor = '#62c462';
            }else {
              result.style.backgroundColor = '#ee5f5b';
            }
         });
        }
      });
    }
  });
}


//////////////////////Переключение теории
function clickInTask(elem) {
    this.toShowTheory = function() {
      theory_article.style.display = "block";
    };
    this.toHideTheory = function() {
      theory_article.style.display = "none";
    };
    this.toCheckScreen = function() {
      toCheckScreen();
    };
    var self = this;
    var theory_article = document.getElementById("theory_article");
    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('data-action');
      if (action) {
        self[action]();
      }
    };
  }
  new clickInTask(task);

///////////////////////Переключение активного меню
var controls = document.querySelectorAll('.header-navigation ul li a');
for (var i = 0; i < controls.length; i++) {
    clickControl(controls[i]);
}
function toggleTask(control) {
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
    }
    control.classList.add('active');
    var action = control.getAttribute('data-task');
    showOriginalFrame(action);
}
function clickControl(control) {
    control.addEventListener('click', function() {
        toggleTask(control);
    });
}
var defaultTask = document.querySelector('.header-navigation ul li:first-of-type a');
toggleTask(defaultTask);
