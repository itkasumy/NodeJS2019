const fs = require('fs')

const wenjianjia = []
fs.readdir('./tmp', (err, files) => {
  if (err) throw err;

  (function iterator(i) {
    if (i == files.length) {
      console.log(wenjianjia);
      return
    }

    fs.stat(`./tmp/${files[i]}`, (err, stat) => {
      if (err) return;
      if (stat.isDirectory()) wenjianjia.push(files[i]);
      iterator(i + 1);
    });

  })(0);
});

// console.log(wenjianjia);
