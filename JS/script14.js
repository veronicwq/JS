// ✅ Завдання 1


const calculateTotalBalance = users => {
 
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log('Загальна сума балансу:', calculateTotalBalance(users)); 




// ✅ Завдання 2


const getUsersWithFriend = (users, friendName) => {

  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log('Друзі Briana Decker:', getUsersWithFriend(users, 'Briana Decker')); 

console.log('Друзі Goldie Gentry:', getUsersWithFriend(users, 'Goldie Gentry')); 




// ✅ Завдання 3


const getNamesSortedByFriendsCount = users => {
  
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log('Імена, відсортовані за кількістю друзів:', getNamesSortedByFriendsCount(users));

// ✅ Завдання 4

const getSortedUniqueSkills = users => {
  
  return users
    .flatMap(user => user.skills)
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort();
};

console.log('Унікальні навички користувачів:', getSortedUniqueSkills(users));