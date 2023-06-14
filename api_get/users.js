const users = [
    { name: 'Aditya Rana', email: 'Aditya@gmail.com' },
    { name: 'Saurav Singh Rawat', email: 'Saurav@gmail.com' },
    { name: 'Vishal Nain', email: 'vishal@gmail.com' }
  ];
  
  module.exports = {
    getUsers: () => {
      return users;
    }
  }