var canvas;
let particles = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    particles[i].findConnections();
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.color = color(random(340, 360), 100, 100, 100);
    this.connections = [];
    this.maxConnections = 5;
  }

  update() {
    this.position.add(this.velocity);
    this.edges();
  }

  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  findConnections() {
    this.connections = [];
    for (let i = 0; i < particles.length; i++) {
      let distance = dist(
        this.position.x,
        this.position.y,
        particles[i].position.x,
        particles[i].position.y
      );
      if (distance < 100 && this.connections.length < this.maxConnections) {
        this.connections.push(particles[i]);
      }
    }
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, 2);
    for (let i = 0; i < this.connections.length; i++) {
      let distance = dist(
        this.position.x,
        this.position.y,
        this.connections[i].position.x,
        this.connections[i].position.y
      );
      let opacity = map(distance, 0, 100, 100, 10);
      strokeWeight(1);
      stroke(340, 100, 100, opacity);
      line(
        this.position.x,
        this.position.y,
        this.connections[i].position.x,
        this.connections[i].position.y
      );
    }
  }
}
