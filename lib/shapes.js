class Shape {
    constructor() {
      this.color = "";
      this.textColor = "";
      this.text = "";
      
    }
    setColor(color) {
      this.color = color;
    }
    setTextColor(textColor) {
      this.textColor = textColor;
    }
    setText(text) {
      this.text = text;
    }
  }

  class Circle extends Shape {
    constructor() {
      super(); // Call the constructor of the base class
      this.radius = 50;
    }
    render() {
          return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="50" fill="${this.color}" />
      <text x="150" y="105" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>
    </svg>`;
    }
  }
  
  