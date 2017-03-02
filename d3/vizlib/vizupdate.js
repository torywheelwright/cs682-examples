

var vizupdate = (function() {

  /****************************************************************************
   *  private variables
   ****************************************************************************/
  // queue of functions to update the canvas
  var _q = [];
  var _intervalID = null;


  /****************************************************************************
   *  private methods
   ****************************************************************************/

  /**
   * Execute the next function on the queue.
   * @param {Object} viz - The visualization object for a specific algorithm.
   * @param {number} dur - Duration of the function's execution in milliseconds.
   */
  function next(viz, dur) {
    console.log("val of dur: " + dur);
    var f = _q.shift();
    console.log("var f = " + f);
    if ( f ) { f(); }
    draw(viz, dur);
    if (_q.length <= 0) {
      clearInterval(_intervalID);
    }
  }

  /**
   * Update the svg canvas.
   * @param {Object} viz - The visualization object for a specific algorithm.
   * @param {number} dur - Num. of milliseconds to spend updating the canvas.
   */
  function draw(viz, dur) {

    // draw all rectangles
    var rects = d3.select("#g_rects")
      .selectAll('rect')
      .data(viz.getRects());

    rects.transition().duration(dur)
      .attr('x', function(d) { return d.pos.x; })
      .attr('y', function(d) { return d.pos.y; })
      .attr('width', function(d) { return d.width; })
      .attr('height', function(d) { return d.height; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; });

    rects.enter()
      .append('rect')
      .attr('x', function(d) { return d.sp.x; })
      .attr('y', function(d) { return d.sp.y; })
      .attr('width', function(d) { return d.width; })
      .attr('height', function(d) { return d.height; })
      .attr('fill', function(d) { return d.fill; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .transition().duration(dur)
      .attr('fill', function(d) { return d.fill; })
      .attr('width', function(d) { return d.width; })
      .attr('height', function(d) { return d.height; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; })
      .attr('x', function(d) { return d.pos.x; })
      .attr('y', function(d) { return d.pos.y; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; });

    // draw all circles
    var circles = d3.select("#g_circles")
      .selectAll('circle')
      .data(viz.getCircles());

    circles.transition().duration(dur)
      .attr('cx', function(d) { return d.pos.cx; })
      .attr('cy', function(d) { return d.pos.cy; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .attr('r', function(d) { return d.r; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; });

    circles.enter()
      .append('circle')
      .attr('cx', function(d) { return d.sp.cx; })
      .attr('cy', function(d) { return d.sp.cy; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .attr('r', function(d) { return d.r; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; })
      .transition().duration(dur)
      .attr('cx', function(d) { return d.pos.cx; })
      .attr('cy', function(d) { return d.pos.cy; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .attr('r', function(d) { return d.r; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; });

    // draw all lines
    var lines = d3.select("#g_lines")
      .selectAll('line')
      .data(viz.getLines());

    lines.transition().duration(dur)
      .attr('x1', function(d) { return d.pos.x1; })
      .attr('y1', function(d) { return d.pos.y1; })
      .attr('x2', function(d) { return d.pos.x2; })
      .attr('y2', function(d) { return d.pos.y2; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; });

    lines.enter()
      .append('line')
      .attr('x1', function(d) { return d.sp.x1; })
      .attr('y1', function(d) { return d.sp.y1; })
      .attr('x2', function(d) { return d.sp.x2; })
      .attr('y2', function(d) { return d.sp.y2; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; })
      .transition().duration(dur)
      .attr('x1', function(d) { return d.pos.x1; })
      .attr('y1', function(d) { return d.pos.y1; })
      .attr('x2', function(d) { return d.pos.x2; })
      .attr('y2', function(d) { return d.pos.y2; })
      .attr('stroke', function(d) { return d.stroke; })
      .attr('stroke-width', function(d) { return d.stroke_width; })
      .attr('stroke-opacity', function(d) { return d.stroke_opacity; });

    // draw all text elements
    var text = d3.select("#g_text")
      .selectAll('text')
      .data(viz.getText());

    text.text(function(d) { return d.val; })
      .transition().duration(dur)
      .attr('x', function(d) { return d.pos.x; })
      .attr('y', function(d) { return d.pos.y; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .attr('font', function(d) { return d.font; })
      .attr('font-size', function(d) { return d.font_size; })
      .attr('text-anchor', function(d) { return d.text_anchor; });

    text.enter()
      .append('text')
      .text(function(d) { return d.val; })
      .attr('x', function(d) { return d.sp.x; })
      .attr('y', function(d) { return d.sp.y; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .attr('font', function(d) { return d.font; })
      .attr('font-size', function(d) { return d.font_size; })
      .attr('text-anchor', function(d) { return d.text_anchor; })
      .transition().duration(dur)
      .text(function(d) { return d.val; })
      .attr('x', function(d) { return d.pos.x; })
      .attr('y', function(d) { return d.pos.y; })
      .attr('fill', function(d) { return d.fill; })
      .attr('fill-opacity', function(d) { return d.fill_opacity; })
      .attr('font', function(d) { return d.font; })
      .attr('font-size', function(d) { return d.font_size; })
      .attr('text-anchor', function(d) { return d.text_anchor; });

  }


  /****************************************************************************
   *  public methods
   ****************************************************************************/

  /**
   * Public method to execute all functions currently in the queue and then
   * update the svg canvas.
   * @param {Object} viz - The visualization object for a specific algorithm.
   * @param {number} dur - Duration of the entire redraw in milliseconds.
   */
  function redraw(viz, dur) {
    // TODO: Revisit how to allocate time per redraw component.
    if ( _q.length ) {
      var durPerFunction = dur / _q.length;
      _intervalID = setInterval(next,
                               durPerFunction,
                               viz,               // next arg 1
                               durPerFunction);   // next arg 2
    } else {
      draw(viz, dur);
    }
  }

  /**
   * Add a function to the queue. Any changes this function makes to the
   * visualization's elements will be reflected the next time redraw() is
   * called.
   * @param {Object} operation - A function object to be added to the queue.
   */
  function addOperation(operation) {
    _q.push(operation);
  }

  /**
   * Initialize the visualization layout by appending group elements to the
   * svg canvas for each type of element (rect, circle, line, text).
   */
  function initialize() {
    // append group element for rectangles
    d3.select("#svgcanvas")
        .append('g')
        .attr('id','g_rects');

    // append group element for circles
    d3.select("#svgcanvas")
        .append('g')
        .attr('id','g_circles');

    // append group element for lines
    d3.select("#svgcanvas")
        .append('g')
        .attr('id','g_lines');

    // append group element for text elements
    d3.select("#svgcanvas")
      .append('g')
      .attr('id','g_text');
  }


  /****************************************************************************
   *  return public methods
   ****************************************************************************/
  return {
    redraw:redraw,
    addOperation:addOperation,
    initialize:initialize
  };

})();
