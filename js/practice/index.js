// const getUserData = () => {
//   const response = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

// getUserData();

const getUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    getUserList(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Completed");
  }
};

const getUserList = (userList) => {
  const userListDOM = document.querySelector(".user-list");
  let userItem = "";

  userList.forEach((user) => {
    userItem += `<li class="user-card">
        <img
          src="https://i.pravatar.cc/150?img=${user.id}"
          alt="${user.name}"
          class="user-image"
        />
        <div class="user-info">
          <h3 class="user-name">${user.name}</h3>
          <p class="user-username">${user.username}</p>
          <p class="user-email">${user.username}@example.com</p>
          <p class="user-website">${user.username}.com</p>
          <p class="user-userId">UserID: ${user.id}</p>
        </div>
      </li>`;
  });
  userListDOM.innerHTML = userItem;
};

getUserData();
