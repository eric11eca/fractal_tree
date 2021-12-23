const canvas = document.querySelector('canvas');
const generateButton = document.querySelector('#random-tree');
const customButton = document.querySelector('#custom-tree');
const downloadButton = document.querySelector('#download-tree')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let curve = 10;
let curve2 = 0;
let heightBuffer = 0;

document.body.style.zoom = "90%" 

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.lineWidth = branchWidth;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'black';
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI / 180);
  ctx.moveTo(0, 0);

  if (angle > 0) {
    ctx.bezierCurveTo(curve2, -len / 2, curve2, -len / 2, 0, -len);
  } else {
    ctx.bezierCurveTo(curve2, -len / 2, -curve2, -len / 2, 0, -len);
  }

  ctx.stroke();

  if (len < 10) {
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  curve = (Math.random() * 10) + 10;

  drawTree(0, -len, len * 0.77, angle + curve, branchWidth * 0.6);
  drawTree(0, -len, len * 0.77, angle - curve, branchWidth * 0.6);

  ctx.restore();
}

drawTree(canvas.width / 2, canvas.height - heightBuffer, 180, 0, 25, 'brown', 'pink');

let framesPerSecond = 1;
let branch_width = (Math.random() * 80) + 1;
let tree_angle = 0;
let length = Math.floor((Math.random() * 20) + 170);
let branch_color = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
let leaf_color = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';

function generateRandomTree() {
  //setTimeout(function () {
    //requestAnimationFrame(generateRandomTree);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var centerPointX = canvas.width / 2;
    length = Math.floor((Math.random() * 20) + 180);
    tree_angle = 0;
    branch_width = (Math.random() * 80) + 1;
    branch_color = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    leaf_color = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    
    curve = (Math.random() * 25) + 3;
    curve2 = (Math.random() * 10) + 3;
    drawTree(centerPointX, canvas.height - heightBuffer, 
      length, tree_angle, branch_width, 
      branch_color, leaf_color);

  //}, 1000 / framesPerSecond);
}

//window.requestAnimationFrame(generateRandomTree);

function download() {
  var link = document.createElement('a');
  link.download = `fractal_tree.png`;
  link.href = document.getElementById('fractal_tree').toDataURL()
  link.click();
}

function custom_tree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var centerPointX = canvas.width / 2;

  var custom_color1 = document.getElementById('color1').value;
  var custom_color2 = document.getElementById('color2').value;
  var custom_len = document.getElementById('length').value;
  var custom_bwidth = document.getElementById('width').value;

  length = Math.floor((custom_len * 20) + 180);
  tree_angle = 0;
  branch_width = (custom_bwidth * 80) + 1;
  console.log(branch_width);
  branch_color = custom_color1
  leaf_color = custom_color2
  curve = (Math.random() * 25) + 3;
  curve2 = (Math.random() * 10) + 3;
  drawTree(centerPointX, canvas.height - heightBuffer, 
    length, tree_angle, branch_width, 
    branch_color, leaf_color);
}

downloadButton.addEventListener('click', download);
generateButton.addEventListener('click', generateRandomTree);
customButton.addEventListener('click', custom_tree);


window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

Coloris({
  el: '.coloris',
  parent: '.square',
  wrap: true,
  formatToggle: false,
  format: 'rgb',
  margin: 2,
  alpha: true,
  focusInput: true,
  clearButton: {
    show: true,
    label: 'Clear' 
  },

  a11y: {
    open: 'Open color picker',
    close: 'Close color picker',
    marker: 'Saturation: {s}. Brightness: {v}.',
    hueSlider: 'Hue slider',
    alphaSlider: 'Opacity slider',
    input: 'Color value field',
    swatch: 'Color swatch',
    instruction: 'Saturation and brightness selector. Use up, down, left and right arrow keys to select.' 
  }
});
