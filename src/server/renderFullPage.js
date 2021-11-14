export const renderFullPage = (body) => `
  <!DOCTYPE html>
  <html lang='es'>
    <head>
      <meta charset='UTF-8' />
      <title>MeLi products app SSR</title>
    </head>
    <body>
      <div id='root'>${body}</div>
      <script src='app.js' type='text/javascript'></script>
    </body>
  </html>
`;
