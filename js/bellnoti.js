        const notificationBell = document.getElementById('notificationBell');
        const notificationCount = document.getElementById('notificationCount');
        const notificationList = document.getElementById('notificationList');
        const notificationListUl = notificationList.querySelector('ul');

        function updateNotificationCount(count) {
            notificationCount.textContent = count;
            notificationCount.style.display = count > 0 ? 'block' : 'none';
        }

        function displayNotifications() {
            notificationListUl.innerHTML = '';
            notifications.forEach((notification, index) => {
                const li = document.createElement('li');
                li.textContent = notification;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'x';
                deleteButton.classList.add('delete-notification');
                deleteButton.addEventListener('click', () => deleteNotification(index));
                li.appendChild(deleteButton);
                notificationListUl.appendChild(li);
            });
        }

        function deleteNotification(index) {
            notifications.splice(index, 1);
            localStorage.setItem('notifications', JSON.stringify(notifications));
            updateNotificationCount(notifications.length);
            displayNotifications();
        }

        let notifications = JSON.parse(localStorage.getItem('notifications')) || [];
        updateNotificationCount(notifications.length);

        notificationBell.addEventListener('click', () => {
            if (notificationList.style.display === 'block') {
                notificationList.style.display = 'none';
            } else {
                notificationList.style.display = 'block';
                displayNotifications();
            }
        });