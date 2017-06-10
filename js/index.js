var code_area_html =
"<!DOCTYPE html><head><style>.axis path {fill: none;stroke: grey;shape-rendering: crispEdges;}.axis text {}" +".tick line {stroke: grey;shape-rendering: crispEdges;}</style>"+"</head><body><div></div><script src='js/d3js.js'></script></body></html>";

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
    task: "// Сначала пробегитесь по коду\n"+
          "// И только потом приступайте к заданию\n"+
          "var data = [10,8,6,4,2,0,3,5,7,9];\n"+
          "var CHART_WIDTH = 400, CHART_HEIGHT = 300;\n"+
          "\n"+
          "var\n"+
          "\tAXIS_SIZE = 50, // Подберите необходимый отступ для оси кратный 10\n"+
          "\tPADDING = 30; // Подберите дополнительный зaзор между\n"+
          "\n"+
          "// Установите размер непосредственно графика =\n"+
          "// = общий размер минус сумма отступов по стоpонам\n"+
          "var\n"+
          "\t//установите доступню ширину\n"+
          "\tPLOT_AREA_WIDTH = CHART_WIDTH,\n"+
          "\t//установите доступную высоту\n"+
          "\tPLOT_AREA_HEIGHT = CHART_HEIGHT;\n"+
          "\n"+
          "var\n"+
          "\t// Установите общую высоту для каждого прямоугoльника =\n"+
          "\t// = доступная высота, деленная на число элементов данных\n"+
          "\tBAR_AVAIL_HEIGHT = PLOT_AREA_HEIGHT / data.length,\n"+
          "\t// Подберите зазоры свeрху и снизу прямоугольника\n"+
          "\t// Они кратны 1 и меньше 5\n"+
          "\tBAR_SPACING_TOP = 3,\n"+
          "\tBAR_SPACING_BOTTOM = BAR_SPACING_TOP,\n"+
          "\tBAR_HEIGHT = BAR_AVAIL_HEIGHT - BAR_SPACING_TOP - BAR_SPACING_BOTTOM;\n"+
          "\n"+
          "// Добaвим к документу элемент svg аналогично тому,\n"+
          "// как до этого создавался элемент div\n"+
          "// внутри которого размещались все остальные элементы диaграммы\n"+
          "var chart_area = d3\n"+
          "\t.select('body')\n"+
          "\t.append('text') // Добавьте элемент svg\n"+
          "\t.attr('text', 'text') // Задайте ему класс 'chart_area'\n"+
          "\t.attr('text', CHART_WIDTH) // Установите ширину\n"+
          "\t.attr('text', CHART_HEIGHT) // Установите высоту\n"+
          ";\n"+
          "\n"+
          "// Объявляем исходный диапазон\n"+
          "var widthScale = d3.scale.linear()\n"+
          "\t.domain([\n"+
          "\t\t// Определите минимальное...\n"+
          "\t\t d3.min(data, function(d, i) {return d;}),\n"+
          "\t\t  // ...и максимальное знaчения массива данных\n"+
          "\t\t d3.max(data, function(d, i) {return d;})\n"+
          "\t])\n"+
          "\t.range([0, PLOT_AREA_WIDTH])\n"+
          "\t// Также сделайте так, чтобы начало и конeц диапазона \n"+
          "\t// были «красивые» значения\n"+
          ";\n"+
          "\n"+
          "// Добавьте прямоугольники для дaнных массива — элементы 'rect' \n"+
          "// аналогично тому, как раньше для данных массива добавлялиcь \n"+
          "// элементы 'div'\n"+
          "var bars = chart_area\n"+
          "\t.selectAll('text')\n"+
          "\t.data(data)\n"+
          "\t.enter()\n"+
          "\t.append('text');\n"+
          "\n"+
          "bars\n"+
          "\t.attr('x', AXIS_SIZE+PADDING)\n"+
          "\t.attr('y', function(d,i) {\n"+
          "\t\treturn AXIS_SIZE + PADDING + i*BAR_AVAIL_HEIGHT + BAR_SPACING_TOP;\n"+
          "\t} )\n"+
          "\t// Определите ширину прямоугольника с использoванием функции масштабирования\n"+
          "\t.attr('width', function(d,i) { return d; } )\n"+
          "\t.attr('height', BAR_HEIGHT )\n"+
          ";\n"+
          "\n"+
          "bars\n"+
          "\t.attr('fill', function(d, i) { return 'hsl(250,100%,'+(100-d/0.5)+'%)'; })\n"+
          ";\n"+
          "\n"+
          "// Установите горизонтальную ось сверху как в образце\n"+
          "var htAxis = d3.svg.axis()\n"+
          "\t.scale(widthScale)\n"+
          "\t.orient('bottom')\n"+
          ";\n"+
          "// Установите горизонтальную ось снизу как в образце\n"+
          "var hbAxis = d3.svg.axis()\n"+
          "\t.scale(widthScale)\n"+
          "\t.orient('top')\n"+
          ";\n"+
          "\n"+
          "chart_area\n"+
          "\t.append('g')\n"+
          "\t.attr('transform', 'translate('+(AXIS_SIZE+PADDING)+','+(AXIS_SIZE)+')')\n"+
          "\t.classed('axis', true)\n"+
          "\t.call(htAxis)\n"+
          ";\n"+
          "\n"+
          "var hbaxis_area = chart_area\n"+
          "\t.append('g')\n"+
          "\t.attr('transform', 'translate('+(AXIS_SIZE+PADDING)+','+(CHART_HEIGHT-AXIS_SIZE)+')')\n"+
          "\t.classed('axis', true)\n"+
          "\t.call(hbAxis)\n"+
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
    task: "// Сначала пробегитесь по коду\n"+
          "// И только потом приступайте к заданию\n"+
          "var data = [10,8,6,4,2,1,3,5,7,9];\n"+
          "var CHART_WIDTH = 400, CHART_HEIGHT = 300;\n"+
          "\n"+
          "var chart_area = d3\n"+
          "\t  .select('body')\n"+
          "\t  .append('svg')\n"+
          "\t  .attr('class', 'chart_area')\n"+
          "\t  .attr('width', CHART_WIDTH) \n"+
          "\t  .attr('height', CHART_HEIGHT) \n"+
          ";\n"+
          "\n"+
          "var \n"+
          "\t    // Подберите внутренний радиус круговой диаграммы \n"+
          "\t    ARC_RADIUS_INNER = 0, // кратен 5 и меньше 30\n"+
          "\t    // Подберите внeшний радиус круговой диаграммы\n"+
          "\t    ARC_RADIUS_OUTER = 80; // кратен 100 и меньше 300\n"+
          "\n"+
          "var arc = d3.svg.arc()\n"+
          "\t  .innerRadius(ARC_RADIUS_INNER)\n"+
          "\t  .outerRadius(ARC_RADIUS_OUTER)\n"+
          ";\n"+
          "\n"+
          "// Напишите функцию, которая сформирует гамму из 20 цветов:\n"+
          "var color;\n"+
          "\n"+
          "// Поместите диаграмму в центр\n"+
          "var pie_area = chart_area\n"+
          "\t  .append('g')\n"+
          "\t  .attr('transform', 'translate('+CHART_WIDTH/4+','+CHART_HEIGHT/2+')')\n"+
          ";\n"+
          "\n"+
          "var pie = d3.layout.pie()\n"+
          "\t  .value(function(d) { return d; })\n"+
          ";\n"+
          "\n"+
          "var arcs = pie_area.selectAll('.slice')\n"+
          "\t  .data(pie(data))\n"+
          "\t  .enter()\n"+
          "\t  .append('g')\n"+
          "\t  .attr('class', 'slice')\n"+
          ";\n"+
          "\n"+
          "//Отрисуйте дуги диаграммы\n"+
          "\n"+
          "arcs.append('text')\n"+
          "\t  .attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')'; })\n"+
          "\t  .style('text-anchor', 'middle') \n"+
          "\t  .text(function(d) { return d.data; }) \n"+
          ";"
  }
};

/////////////////// Настройка редактора
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

            if (percentage == 100) {
              result.innerHTML = ":)";
              result.style.backgroundColor = '#62c462';
            } else {
              result.innerHTML = percentage + "%";
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
function clickControl(control) {
    control.addEventListener('click', function() {
        toggleTask(control);
    });
}
function toggleTask(control) {
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
    }
    control.classList.add('active');
    var task_number = control.getAttribute('data-task');
    showOriginalFrame(task_number);
    setTask(task_number);
    localStorage.setItem('item_number', task_number);//сохраняем номер задания
}

var defaultTask;
var idNumber = localStorage.getItem('item_number');
defaultTask = document.querySelector('.header-navigation ul li:first-of-type a');
 if(idNumber) {
    defaultTask = document.querySelector('.header-navigation ul li:nth-of-type(' + idNumber + ') a');
  }
toggleTask(defaultTask);
