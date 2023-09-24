// Sample JavaScript code for populating notifications
document.addEventListener("DOMContentLoaded", function () {
  // Simulated data for notifications (replace with actual data from your server)
  const notifications = [
    {
      id: 1,
      category: "all",
      title: "Notification 1",
      message: "HUGE SAVING This week with 50% off Breakfast Deals.",
    },
    {
      id: 2,
      category: "unread",
      title: "Notification 2",
      message:
        "Can you say no to a Free Omelette? Today,Buy 1 Mushroom Omelette, Get 1 Free Get the Deal here: LUNCH T&C aplly.",
    },
    { id: 3, category: "unseen", title: "Notification 3", message: "N/A" },
    // Add more notifications here
  ];

  // Function to populate the notification lists
  function populateNotifications(category) {
    const list = document.querySelector(`#${category} ul.notification-list`);
    list.innerHTML = ""; // Clear existing notifications

    const categoryNotifications = notifications.filter(
      (n) => n.category === category
    );
    categoryNotifications.forEach((notification) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h3>${notification.title}</h3>
                <p>${notification.message}</p>
            `;
      list.appendChild(li);
    });
  }

  // Populate notifications on page load
  populateNotifications("all");
  populateNotifications("unread");
  populateNotifications("unseen");

  // Add event listeners for navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.getAttribute("href").substr(1);
      populateNotifications(category);
    });
  });

  // Sample event listener for the "Mark as Read" button (replace with actual functionality)
  const markAsReadButton = document.getElementById("markAsRead");
  markAsReadButton.addEventListener("click", function () {
    // Add your code to mark notifications as read here
    alert("Marking notifications as read...");
  });

  // Sample event listener for the "Delete" button (replace with actual functionality)
  const deleteButton = document.getElementById("delete");
  deleteButton.addEventListener("click", function () {
    // Add your code to delete notifications here
    alert("Deleting notifications...");
  });

  // Sample event listener for the "More Info" button (replace with actual functionality)
  const moreInfoButton = document.getElementById("moreInfo");
  moreInfoButton.addEventListener("click", function () {
    // Add your code to show more info for the selected notification here
    alert("Showing more info...");
  });
});
