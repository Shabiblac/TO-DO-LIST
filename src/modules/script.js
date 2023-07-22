const todoContainer = document.querySelector('.to-do');

const chores = [
  {
    id: 0,
    task: 'Take a nap',
  },
  {
    id: 1,
    task: 'Cook',
  },
  {
    id: 2,
    task: 'Workout',
  },
  {
    id: 3,
    task: 'Study',
  },
];

const displayList = (list) => {
  const displayTask = list.map((item) => `
  <div class="list">
        <div class="list-container">
            <input class="checkbox" type="checkbox" id="">
            <input type="text" id="" value="${item.task}">
        </div>
        <i class='bx bx-dots-vertical'></i>
    </div>`);

  todoContainer.innerHTML = displayTask;
};

export default displayList(chores);