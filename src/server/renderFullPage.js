export const renderFullPage = (body, helmet) => `
  <!DOCTYPE html>
  <html lang='es'>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/favicon.svg' rel='icon' data-head-react='true'/>
      <link rel='stylesheet' href='/assets/app.css' type='text/css'>
      ${helmet.title.toString()}
    </head>
    <body>
      <div id='root'>${body}</div>
      <script src='/assets/app.js' type='text/javascript'></script>
    </body>
  </html>
`;
