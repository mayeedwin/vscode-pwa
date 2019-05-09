

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.addEventListener('waiting', (event) => {
    const prompt = createUIPrompt({
      onAccept: async () => {
        wb.addEventListener('controlling', (event) => {
          window.location.reload();
        });
        wb.messageSW({type: 'SKIP_WAITING'});
      },
      onReject: () => {
        prompt.dismiss();
      }
    });
  });

  wb.register();
}