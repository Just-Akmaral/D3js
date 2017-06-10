var code_area_html =
"<!DOCTYPE html><head><style>.axis path {fill: none;stroke: grey;shape-rendering: crispEdges;}.axis text {}" +
".tick line {stroke: grey;shape-rendering: crispEdges;}</style>"+
"</head><body><div></div><script src='js/d3js.js'></script></body></html>";

var variants = {
  1:{
    originalCode: "var data = [10,8,6,4,2,1,3,5,7,9];d3.select('body').selectAll('p').data(data).enter().append('p').text(function(d) { return d; }).style('color', function(d) {if (d > 5) {return 'red';} else {  return 'black';}});",
    task: "var data = [];//добавьте необходимые данные\n"+
          "d3.select('body')\n"+
          "// Сделайте выборку всех дочерних элементов <p> из текущей выбoрки\n"+
          "// Потом свяжите выборку с мaссивом данных data\n"+
          "// Из всего множества элементов выделите подмнoжество добавляемых элементов 'enter'\n"+
          "// Добавьте новые элементы <p> </p>\n"+
          ".text(function(d) { return d; })\n"+
          "//Далее напишите функцию, которая делает цвет красным, если текущее значение превышает 5, иначе цвет оставьте черным\n"+
          ";"
    },
  2:{
    originalCode: "var chart_area =d3.select('body') .append('div').classed('chart_area', true);"+
                  "var data = [10,8,6,4,2,1,3,5,7,9];"+
                  "chart_area.selectAll('div').data(data).enter().append('div').classed('bar_area', true)"+
                  "	.style('background-color',function(d, i) { return 'hsl(250,100%,'+(100-d/0.5)+'%)'; })"+
                  "	.style('height', '20px').style('margin', '2px 0px').style('width', function(d,i) { return d*40 + 'px'; } ).text(function(d) { return d; });",
    task: "var data = [10,8,6,4,2,1,3,5,7,9];\n"+
          "var chart_area =\n"+
          "\td3\n"+
          "\t.select('body') \n"+
          "\t.append('div')    \n"+
          "\t.classed('chart_area', true); \n"+
          "\n"+
          "chart_area\n"+
          "//В следующих 3х строках затесалась ошибка - попробуйте найти.\n"+
          "\t.select('div')\n"+
          "\t.data(data)\n"+
          "\t.enter().append('div').classed('bar_area', true)\n"+
          "//Цвета выглядят бледно - добавьте интенсивности. Подсказка: знаменатель кратен 0.5\n"+
          "\t.style('background-color',function(d, i) { return 'hsl(250,100%,'+(100-d/2)+'%)'; })\n"+
          "\t.style('height', '20px')\n"+
          "\t.style('margin', '2px 0px')\n"+
          "//Подберите необходимую длину прямоугольников(она кратна 10)\n"+
          "\t.style('width', function(d,i) { return d + 'px'; } )\n"+
          "\t.text(String);"
  },
  3:{
    originalCode: "var data = [10,8,6,4,2,1,3,5,7,9];"+
                  "var CHART_WIDTH = 400, CHART_HEIGHT = 300;"+
                  "var AXIS_SIZE = 50, PADDING = 0;"+
                  "var PLOT_AREA_WIDTH = CHART_WIDTH - 2*(AXIS_SIZE + PADDING), PLOT_AREA_HEIGHT = CHART_HEIGHT - 2*(AXIS_SIZE + PADDING);"+
                  "var BAR_AVAIL_HEIGHT = PLOT_AREA_HEIGHT / data.length, BAR_SPACING_TOP = 1, BAR_SPACING_BOTTOM = BAR_SPACING_TOP,BAR_HEIGHT = BAR_AVAIL_HEIGHT - BAR_SPACING_TOP - BAR_SPACING_BOTTOM;"+
                  "var chart_area = d3.select('body').append('svg').attr('class', 'chart_area').attr('width', CHART_WIDTH).attr('height', CHART_HEIGHT);"+
                  "var widthScale = d3.scale.linear().domain([d3.min(data, function(d,i) { return d; }), d3.max(data, function(d,i) { return d; })]).range([0,  PLOT_AREA_WIDTH]).nice();"+
                  "var bars = chart_area.selectAll('rect').data(data).enter().append('rect');"+
                  "bars.attr('x', AXIS_SIZE+PADDING).attr('y', function(d,i) {return AXIS_SIZE + PADDING + i*BAR_AVAIL_HEIGHT + BAR_SPACING_TOP;} ).attr('width', function(d,i) { return widthScale(d); } ).attr('height', BAR_HEIGHT );"+
                  "bars.attr('fill', function(d, i) { return 'hsl(250,100%,'+(100-d/0.5)+'%)'; });"+
                  "var htAxis = d3.svg.axis().scale(widthScale).orient('top');"+
                  "var hbAxis = d3.svg.axis().scale(widthScale).orient('bottom');"+
                  "chart_area.append('g').attr('transform', 'translate('+(AXIS_SIZE+PADDING)+','+(AXIS_SIZE)+')').classed('axis', true).call(htAxis);"+
                  "var hbaxis_area = chart_area.append('g').attr('transform', 'translate('+(AXIS_SIZE+PADDING)+','+(CHART_HEIGHT-AXIS_SIZE)+')').classed('axis', true).call(hbAxis);",
    task:"var chart_area =\n" +
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
    ";"
  },
  4:{
    originalCode: "var data = [10,8,6,4,2,1,3,5,7,9];"+
                  "var CHART_WIDTH = 400, CHART_HEIGHT = 300;"+
                  "var chart_area = d3.select('body').append('svg').attr('class', 'chart_area').attr('width', CHART_WIDTH).attr('height', CHART_HEIGHT) ;"+
                  "var ARC_RADIUS_INNER = 25, ARC_RADIUS_OUTER = 100;"+
                  "var arc = d3.svg.arc().innerRadius(ARC_RADIUS_INNER).outerRadius(ARC_RADIUS_OUTER);"+
                  "var color = d3.scale.category20c();"+
                  "var pie_area = chart_area.append('g').attr('transform', 'translate('+CHART_WIDTH/2+','+CHART_HEIGHT/2+')');"+
                  "var pie = d3.layout.pie().value(function(d) { return d; });"+
                  "var arcs = pie_area.selectAll('.slice').data(pie(data)).enter().append('g').attr('class', 'slice');"+
                  "arcs.append('path').attr('fill', function(d, i) { return color(i); } ).attr('d', arc);"+
                  "arcs.append('text').attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')'; }).style('text-anchor', 'middle') .text(function(d) { return d.data; });",
    task:"4 task"
  }
};

///////////////////Настройка
var editor = ace.edit("editor");
editor.setTheme("ace/theme/Dreamweaver");
editor.getSession().setMode("ace/mode/javascript");

function setTask(i){
  editor.setValue(variants[i].task);
}

var iframeBrowser = document.getElementById("frame_browser");
var browserDoc = iframeBrowser.contentDocument || iframeBrowser.contentWindow.document;

var iframeOriginal = document.getElementById("frame_original");
var originalDoc = iframeOriginal.contentDocument || iframeOriginal.contentWindow.document;


//////////////////////////////Добавление в редактор нужного кода
browserDoc.open();
browserDoc.write(code_area_html+ "<script>" + editor.getValue() + "</script>");
browserDoc.close();

editor.getSession().on("change", function() {
    browserDoc.open();
    browserDoc.write(code_area_html+ '<script>' + editor.getValue() + "</script>");
    browserDoc.close();
});


////////////////////////////Отображаем образец
function showOriginalFrame(i){
  originalDoc.open();
  originalDoc.write(code_area_html+ "<script>" + variants[i].originalCode + "</script>");
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
            if (percentage == 100) {
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
      div_overlay.style.display = "block";
    };
    this.toHideTheory = function() {
      theory_article.style.display = "none";
      div_overlay.style.display = "none";
    };
    this.toCheckScreen = function() {
      toCheckScreen();
    };
    var self = this;
    var theory_article = document.getElementById("theory_article");
    var div_overlay = document.getElementsByClassName("overlay")[0];
    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute("data-action");
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
    setTask(action);
}
function clickControl(control) {
    control.addEventListener('click', function() {
        toggleTask(control);
    });
}
var defaultTask = document.querySelector('.header-navigation ul li:first-of-type a');
toggleTask(defaultTask);
