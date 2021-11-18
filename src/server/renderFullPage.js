export const renderFullPage = (body, helmet, manifest) => {
  const styles = manifest ? manifest['main.css'] : './assets/app.css';
  const build = manifest ? manifest['main.js'] : './assets/app.js';
  const vendors = manifest ? manifest['vendors.js'] : './assets/vendor.js';

  return `
    <!DOCTYPE html>
    <html lang='es'>
      <head>
        <base href="/">
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/favicon.svg' rel='icon' data-head-react='true'/>
        <link rel='stylesheet' href='${styles}' type='text/css'>
        ${helmet.title.toString()}
      </head>
      <body>
        <div id='root'>${body}</div>
        <script src='${build}' type='text/javascript'></script>
        <script src='${vendors}' type='text/javascript'></script>
      </body>
    </html>
  `;
};
