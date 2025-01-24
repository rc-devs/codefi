
//subscribe toggle
function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  // Toggle button state based on the current text
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

// like toggle
let likeCount = 0;

function toggleLike() {
  const button = document.querySelector('.js-like-button');
  const countElement = document.querySelector('.js-like-count');

  if (button.classList.contains('liked')) {
    button.classList.remove('liked');
    button.innerHTML = 'Like';
    likeCount--;
  } else {
    button.classList.add('liked');
    button.innerHTML = 'Liked';
    likeCount++;
  }

  countElement.textContent = likeCount;
}

//notification toggle
function toggleNotifications() {
  const notificationButton = document.querySelector('.js-notifications-button');

    if (notificationButton.innerText === 'Enable Notifications') {
      notificationButton.innerHTML = "Notifications Enabled";
      notificationButton.classList.add ("notifications-enabled");
    } else {
      notificationButton.innerHTML = "Enable Notifications";
      notificationButton.classList.remove("notifications-enabled");
    }
  }

//shipping calculator
function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

//shopping cart
let cartCount = 0;

function toggleCart() {
  const button = document.querySelector('.js-cart-button');
  const badge = document.querySelector('.js-cart-badge');

  if (button.classList.contains('in-cart')) {
    button.classList.remove('in-cart');
    button.innerHTML = 'Add to Cart';
    cartCount--;
  } else {
    button.classList.add('in-cart');
    button.innerHTML = 'Remove from Cart';
    cartCount++;
  }

  badge.innerHTML = cartCount;
}

document.querySelector('.js-cart-button').addEventListener('click', toggleCart);

//toggle darkmode; was able to make the toggle button, but had to look at solution to figure out how to affect whole page
function toggleDarkMode() {
  const body = document.body;
  const toggleDark = document.querySelector(".js-dark-mode");

  if (body.classList.contains("dark-mode")) {
    body.classList.add("light-mode") ;
    body.classList.remove("dark-mode");
    toggleDark.innerHTML = "Enable Dark Mode";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleDark.innerHTML = "Enable Light Mode";
  }  
}

document.querySelector('.js-dark-mode').addEventListener('click', toggleDarkMode);

