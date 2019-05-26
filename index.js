//MESSAGE FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('registrar');
  const input = form.querySelector('input');

  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('message');

  const div = document.createElement('div');

  mainDiv.insertBefore(div, ul);

  //Create elements uniting
  function createLI(text) {
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName)
      element[property] = value;
      return element;
    }

    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }


    //Creating list item element
    const li = document.createElement('li');

    //Creating Span (for turning text element into HTML element)
    appendToLI('span', 'textContent', text);

    return li;
  }

  //For submitting messages
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = createLI(text);
    ul.appendChild(li);

  });

});




///////////////////////////////////////////////////////////////
//DRAG & DROP 
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}

