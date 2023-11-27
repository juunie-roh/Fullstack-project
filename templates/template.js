const listFn = (filelist) => {
  let list = '<ul';
  filelist.forEach(file => {
    list += `<li>${file}<li>`
  });
  list += '</ul>';

  return list;
}

const htmlPage = (title, list, body, control)=>{
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
          <h1>${title}</h1>
          ${listFn(list)}
          ${control}
          ${body}
      </body>
      </html>
  `
}


module.exports = { htmlPage, listFn }