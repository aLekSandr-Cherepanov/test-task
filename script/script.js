//Счетчик
// Функция, которая обновляет счетчик каждую секунду
function updateCountdown() {
  var currentDate = new Date(); // Получаем текущую дату и время
  var midnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1); // Устанавливаем время на полночь следующего дня
  var timeLeft = midnight - currentDate; // Вычисляем разницу в миллисекундах между полночью и текущим временем
  var countdown = document.getElementById('countdown'); // Получаем элемент счетчика

  // Переводим разницу в миллисекундах в часы, минуты и секунды
  var hours = Math.floor(timeLeft / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Обновляем значения элементов счетчика
  countdown.getElementsByClassName('days')[0].textContent = hours;
  countdown.getElementsByClassName('hours')[0].textContent = minutes;
  countdown.getElementsByClassName('minutes')[0].textContent = seconds;

  // Вызываем функцию обновления счетчика каждую секунду
  setTimeout(updateCountdown, 1000);
}

// Вызываем функцию обновления счетчика в момент загрузки страницы
window.onload = updateCountdown;
//---------------------------------------------------------------------




//popup появление после увода курсора за пределы окна
// Получаем элемент с классом "popup"
const popup = document.querySelector('.popup');

// Функция для добавления класса "popup-see" к элементу с классом "popup"
function addPopupSee() {
  // Добавляем класс "popup-see" к элементу с классом "popup"
  popup.classList.add('popup-see');
}

// Функция для удаления класса "popup-see" у элемента с классом "popup"
function removePopupSee() {
  // Удаляем класс "popup-see" у элемента с классом "popup"
  popup.classList.remove('popup-see');
}

// Добавляем обработчик события на увод курсора с окна браузера
window.addEventListener('mouseout', function(event) {
  // Проверяем, уводит ли курсор за пределы окна браузера
  if (event.relatedTarget === null) {
    // Вызываем функцию для добавления класса "popup-see" к элементу с классом "popup"
    addPopupSee();
    
    // Удаляем обработчик события
    window.removeEventListener('mouseout', arguments.callee);
  }
});

// Добавляем обработчик события на возвращение курсора в окно браузера
window.addEventListener('mouseenter', function(event) {
  // Вызываем функцию для удаления класса "popup-see" у элемента с классом "popup"
  removePopupSee();
  
  // Удаляем обработчик события
  window.removeEventListener('mouseenter', arguments.callee);
});
//--------------------------------------------------------------------



//закрытие элемента при нажатии на крестик
// Получаем элементы с классами "block-img" и "popup"
const blockImg = document.querySelectorAll('.block-img');
const popupe = document.querySelector('.popup');

// Добавляем обработчик события на клик по элементу с классом "block-img"
blockImg.forEach(function(element) {
element.addEventListener('click', function() {
  // Удаляем класс "popup-see" у элемента с классом "popup"
  popup.classList.remove('popup-see');
});
});
//--------------------------------------------------------------------


//рандомное отображение уведомлений
// Переменная для хранения текущего класса с номером уведомления
let currentNotification = 1;

// Массив с классами уведомлений
const notificationClasses = ['notification1', 'notification2', 'notification3'];

// Функция для добавления класса notification
function addNotificationClass() {
  // Проверяем, если разрешение экрана меньше 660px, то выходим из функции
  if (window.innerWidth < 660) {
    return;
  }

  // Генерируем случайный номер уведомления
  const randomIndex = Math.floor(Math.random() * notificationClasses.length);

  // Получаем элемент с случайным классом уведомления
  const notification = document.querySelector("." + notificationClasses[randomIndex]);

  // Добавляем класс notification
  notification.classList.add('notification');

  // Устанавливаем таймер на удаление класса notification через 10 секунд
  setTimeout(() => {
    // Удаляем класс notification
    notification.classList.remove('notification');
  }, 10000);

  // Увеличиваем текущий номер уведомления
  currentNotification = currentNotification === notificationClasses.length ? 1 : currentNotification + 1;
}

// Функция для перезапуска цикла
function restartCycle() {
  // Проверяем, если разрешение экрана меньше 660px, то выходим из функции
  if (window.innerWidth < 660) {
    return;
  }

  // Останавливаем текущий цикл
  clearInterval(intervalId);

  // Переустанавливаем цикл с нуля
  intervalId = setInterval(addNotificationClass, 10000);
}

// Устанавливаем интервал для добавления класса notification каждые 10 секунд
let intervalId = setInterval(addNotificationClass, 10000);

// Добавляем обработчик события для перезапуска цикла
setTimeout(() => {
  restartCycle();
}, 20000);
//----------------------------------------------------------------------




//удаление уведомлений
// Получаем все элементы с классом "notification-cross"
const crosses = document.querySelectorAll(".notification-cross");

// Для каждого элемента добавляем обработчик события "click"
crosses.forEach(cross => {
cross.addEventListener("click", () => {
  const notifications = document.querySelectorAll(".notification");
  
  // Удаляем класс "notification" у всех элементов с классом "notification"
  notifications.forEach(notification => {
    notification.classList.remove("notification");
  });
});
});
//----------------------------------------------------------------------