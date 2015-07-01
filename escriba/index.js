var markdown = require('markdown').markdown
  , fs = require('fs')
  , PATH = {
    escriba: 'escriba',
    views: 'escriba/views'
  };

// DAMN YOU CALLBACK HELL!

fs.readFile(`${PATH.escriba}/template.html`, 'utf-8', function(er, template) {
  fs.readdir(`${PATH.escriba}/views`, function(err, files) {
    files.forEach(function(fileName) {
      fs.readFile(`${PATH.views}/${fileName}`, 'utf-8', function(er, data) {
        var viewData = template.replace('{{ view }}', markdown.toHTML(data));
        viewFileName = fileName.split('.')[0];
        fs.writeFileSync(`views/${viewFileName}.html`, viewData);
      });
    });
  });
});
