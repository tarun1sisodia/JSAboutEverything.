# DOM, Event Listeners, and Advanced Event Handling

# Document Object Model (DOM)

## Introduction to DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; this way, programming languages can interact with the page.

## DOM Structure

The DOM is organized in a tree-like structure, often referred to as the DOM tree. Each element in an HTML document is represented as a node in this tree.

```jsx
// Basic DOM navigation
document.getElementById('myElement');
document.getElementsByClassName('myClass');
document.getElementsByTagName('div');
document.querySelector('.myClass'); // Returns first matching element
document.querySelectorAll('p'); // Returns all matching elements

```

## DOM Manipulation

### Creating Elements

```jsx
// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'Hello World';
newElement.className = 'new-class';

// Append to the DOM
document.body.appendChild(newElement);

```

### Modifying Elements

```jsx
// Changing properties
element.textContent = 'New text';
element.innerHTML = '<span>HTML content</span>';
element.setAttribute('data-custom', 'value');
element.style.color = 'red';

// Removing elements
element.remove();
// OR
element.parentNode.removeChild(element);

```

# Event Listeners and Handling

## Basic Event Handling

Event listeners allow you to execute code when specific events occur, such as clicks, keypresses, or mouse movements.

```jsx
// Adding event listeners
element.addEventListener('click', function(event) {
  console.log('Element clicked!');
});

// Removing event listeners
function handleClick(event) {
  console.log('Clicked!');
}
element.addEventListener('click', handleClick);
element.removeEventListener('click', handleClick);

```

## Common Events

| **Event** | **Description** |
| --- | --- |
| click | Occurs when an element is clicked |
| dblclick | Occurs when an element is double-clicked |
| mousedown | Occurs when mouse button is pressed on an element |
| mouseup | Occurs when mouse button is released over an element |
| mouseover | Occurs when mouse pointer moves onto an element |
| mouseout | Occurs when mouse pointer moves out of an element |
| keydown | Occurs when a key is pressed |
| keyup | Occurs when a key is released |
| submit | Occurs when a form is submitted |
| change | Occurs when the value of an input element changes |
| input | Occurs when the value of an input/textarea changes |
| load | Occurs when a page or image has finished loading |
| resize | Occurs when the browser window is resized |
| scroll | Occurs when the document is scrolled |

# Advanced Event Concepts

## Event Propagation Phases

DOM events propagate in three phases:

### 1. Capture Phase

The event starts from the window and travels down to the target element. This phase is rarely used but can be powerful for certain scenarios.

### 2. Target Phase

The event reaches the target element.

### 3. Bubbling Phase

The event bubbles up from the target element back to the window. This is the default phase that most event handlers use.

```jsx
// Default (Bubbling phase)
element.addEventListener('click', function(event) {
  console.log('Bubbling phase');
});

// Capture phase (third parameter set to true)
element.addEventListener('click', function(event) {
  console.log('Capture phase');
}, true);

```

Here's a visual representation of event propagation:

```html
<div id="outer">
  <div id="middle">
    <div id="inner">Click me!</div>
  </div>
</div>

```

```jsx
// Capture phase
document.getElementById('outer').addEventListener('click', function() {
  console.log('Outer - Capture phase');
}, true);
document.getElementById('middle').addEventListener('click', function() {
  console.log('Middle - Capture phase');
}, true);
document.getElementById('inner').addEventListener('click', function() {
  console.log('Inner - Capture phase');
}, true);

// Bubbling phase
document.getElementById('inner').addEventListener('click', function() {
  console.log('Inner - Bubbling phase');
});
document.getElementById('middle').addEventListener('click', function() {
  console.log('Middle - Bubbling phase');
});
document.getElementById('outer').addEventListener('click', function() {
  console.log('Outer - Bubbling phase');
});

// When clicking on the inner div, the log order will be:
// 1. "Outer - Capture phase"
// 2. "Middle - Capture phase"
// 3. "Inner - Capture phase"
// 4. "Inner - Bubbling phase"
// 5. "Middle - Bubbling phase"
// 6. "Outer - Bubbling phase"

```

## Event Delegation

Event delegation is a technique that leverages event bubbling to handle events at a higher level in the DOM than the element on which the event originated.

```jsx
// Instead of adding click handlers to each button
// document.querySelectorAll('button').forEach(button => {
//   button.addEventListener('click', handleClick);
// });

// Use event delegation
document.getElementById('button-container').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});

```

### Benefits of Event Delegation

- Memory efficiency: fewer event listeners
- Works for dynamically added elements
- Less code maintenance

## Stopping Event Propagation

### stopPropagation()

Prevents the event from bubbling up to parent elements but allows other event handlers on the current element to execute.

```jsx
element.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('This will run, but the event will not bubble up');
});

```

### stopImmediatePropagation()

Prevents the event from bubbling up AND prevents other event handlers on the same element from executing.

```jsx
element.addEventListener('click', function(event) {
  event.stopImmediatePropagation();
  console.log('This will run');
});

element.addEventListener('click', function(event) {
  console.log('This will NOT run if stopImmediatePropagation was called');
});

```

### preventDefault()

Prevents the default browser behavior associated with the event, but doesn't stop propagation.

```jsx
// Prevent form submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submission prevented');
});

// Prevent link navigation
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Link navigation prevented');
});

```

## Passive Event Listeners

Passive event listeners improve scrolling performance by telling the browser that the event handler will not call preventDefault().

```jsx
// Traditional way (browser has to wait to see if preventDefault is called)
document.addEventListener('touchstart', function(event) {
  // Handler code
});

// Passive listener (browser knows preventDefault won't be called)
document.addEventListener('touchstart', function(event) {
  // Handler code
}, { passive: true });

```

## Once Option

The 'once' option automatically removes the event listener after it fires once.

```jsx
element.addEventListener('click', function(event) {
  console.log('This will only run once');
}, { once: true });

```

## Custom Events

You can create and dispatch custom events for component communication.

```jsx
// Create a custom event
const customEvent = new CustomEvent('userLogin', {
  detail: {
    username: 'john_doe',
    timestamp: new Date()
  },
  bubbles: true,
  cancelable: true
});

// Dispatch the custom event
document.dispatchEvent(customEvent);

// Listen for the custom event
document.addEventListener('userLogin', function(event) {
  console.log(`User ${event.detail.username} logged in at ${event.detail.timestamp}`);
});

```

## Event Objects

Event handlers receive an event object with information about the event.

```jsx
document.addEventListener('click', function(event) {
  console.log(event.type); // "click"
  console.log(event.target); // The element that was clicked
  console.log(event.currentTarget); // The element the event listener is attached to
  console.log(event.clientX, event.clientY); // Mouse coordinates
  console.log(event.timeStamp); // Time the event occurred
});

// For keyboard events
document.addEventListener('keydown', function(event) {
  console.log(event.key); // The key that was pressed
  console.log(event.code); // Physical key code
  console.log(event.shiftKey); // Whether Shift was pressed
  console.log(event.ctrlKey); // Whether Ctrl was pressed
  console.log(event.altKey); // Whether Alt was pressed
  console.log(event.metaKey); // Whether Meta (Command on Mac) was pressed
});

```

## Event Capturing vs Bubbling: Practical Use Cases

### When to Use Capturing

- **Logging/Analytics:** Capturing phase is useful when you need to log all events before they're potentially stopped by other handlers.
- **Security Checks:** Validate user permissions before allowing events to reach their targets.
- **Debugging:** Capture events at the highest level to understand the flow of events in complex UIs.

```jsx
// Security example
document.addEventListener('click', function(event) {
  if (userIsNotAuthenticated && event.target.classList.contains('secured-action')) {
    event.stopPropagation();
    showLoginPrompt();
  }
}, true); // Capture phase ensures check happens before element's own handlers

```

### When to Use Bubbling

- **Event Delegation:** Most common use case, handling multiple elements with a single listener.
- **Component Communication:** Child components can trigger events that parent components handle.
- **Default Behavior:** It's the most commonly used and understood phase.

## Focus and Blur Events

Unlike most events, focus and blur do NOT bubble up the DOM tree. However, their counterparts focusin and focusout do bubble.

```jsx
// This won't work for nested elements due to non-bubbling
document.getElementById('form').addEventListener('focus', function(event) {
  console.log('An element was focused'); // This won't catch focus on child inputs
});

// This will work for all child elements due to bubbling
document.getElementById('form').addEventListener('focusin', function(event) {
  console.log('An element was focused:', event.target.id);
});

```

## Intersection Observer API

While not strictly an event listener, the Intersection Observer API provides a modern way to observe when elements enter or exit the viewport, replacing older scroll event techniques.

```jsx
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible in the viewport');
      entry.target.classList.add('visible');
    } else {
      console.log('Element is not visible in the viewport');
      entry.target.classList.remove('visible');
    }
  });
}, {
  root: null, // viewport
  threshold: 0.1 // 10% visibility
});

// Start observing an element
observer.observe(document.querySelector('.my-element'));

// Stop observing
observer.unobserve(document.querySelector('.my-element'));

```

## Resize Observer API

Another modern API that replaces certain uses of window resize events, the Resize Observer API can detect when an element's size changes.

```jsx
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    console.log('Element size changed:', entry.contentRect);
  }
});

// Start observing
resizeObserver.observe(document.querySelector('.resizable-element'));

```

## AbortController and Signal

The AbortController interface allows you to abort event listeners when they're no longer needed.

```jsx
const controller = new AbortController();
const { signal } = controller;

// Add event listener with signal
document.addEventListener('mousemove', e => {
  console.log(e.clientX, e.clientY);
}, { signal });

// Later, when you want to remove all event listeners associated with this controller:
controller.abort();

```

## Performance Considerations

### Debouncing Events

Limit how often an event handler fires, especially for frequent events like scroll, resize, or input.

```jsx
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const debouncedHandleResize = debounce(function() {
  console.log('Resize event handled');
}, 250);

window.addEventListener('resize', debouncedHandleResize);

```

### Throttling Events

Similar to debouncing, but guarantees the function is called at regular intervals.

```jsx
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
const throttledHandleScroll = throttle(function() {
  console.log('Scroll event handled');
}, 300);

window.addEventListener('scroll', throttledHandleScroll);

```

# Conclusion

Understanding the DOM and event handling in depth is crucial for building performant and responsive web applications. While the event bubbling phase is used most commonly in everyday development, being aware of the capture phase and other advanced event concepts gives you more tools to solve complex UI challenges.

The key takeaway is that events in JavaScript follow a predictable lifecycle through capturing, target, and bubbling phases, and understanding this flow allows you to control exactly when and how your code responds to user interactions.