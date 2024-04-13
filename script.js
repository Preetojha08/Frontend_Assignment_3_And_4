document.addEventListener('DOMContentLoaded', function () {
    // Get canvas and context
    var canvas = document.getElementById('main');
    var context = canvas.getContext('2d');
  
    // Set initial brush color
    var currentColor = '#000000'; // black
    context.strokeStyle = currentColor;
  
    // Set initial brush size
    var brushSize = 5;
    context.lineWidth = brushSize;
  
    // Set initial drawing state
    var isDrawing = false;
  
    // Mouse down event
    canvas.addEventListener('mousedown', function (e) {
      isDrawing = true;
      draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
    });
  
    // Mouse move event
    canvas.addEventListener('mousemove', function (e) {
      if (isDrawing) {
        draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      }
    });
  
    // Mouse up event
    canvas.addEventListener('mouseup', function () {
      isDrawing = false;
      context.beginPath();
    });
  
    // Mouse leave event
    canvas.addEventListener('mouseleave', function () {
      isDrawing = false;
      context.beginPath();
    });
  
    // Draw function
    function draw(x, y, isDragging) {
      context.lineTo(x, y);
      context.stroke();
  
      if (!isDragging) {
        context.beginPath();
        context.arc(x, y, brushSize / 2, 0, Math.PI * 2);
        context.fillStyle = currentColor;
        context.fill();
        context.beginPath();
        context.moveTo(x, y);
      }
    }
  
    // Erase button
    document.getElementById('erase').addEventListener('click', function () {
      currentColor = '#ffffff'; // white 
      context.strokeStyle = currentColor;
    });
  
    // Color buttons
    document.getElementById('black').addEventListener('click', function () {
      currentColor = '#000000'; // black
      context.strokeStyle = currentColor;
    });
  
    document.getElementById('pink').addEventListener('click', function () {
      currentColor = '#F50057'; // pink
      context.strokeStyle = currentColor;
    });
  
    document.getElementById('blue').addEventListener('click', function () {
      currentColor = '#2979FF'; // blue
      context.strokeStyle = currentColor;
    });
  
    document.getElementById('yellow').addEventListener('click', function () {
      currentColor = '#FFD600'; // yellow
      context.strokeStyle = currentColor;
    });
  
    // Brush size slider
    var slider = document.getElementById('slider');
    var brushSizeSpan = document.getElementById('brushSize');
  
    slider.addEventListener('input', function () {
      brushSize = this.value;
      context.lineWidth = brushSize;
      brushSizeSpan.textContent = brushSize;
    });
  
    // Clear button
    document.getElementById('new').addEventListener('click', function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  });