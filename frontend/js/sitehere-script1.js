new Chartist.Line('.chart1', {
  labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
  series: [
    [12, 9, 3, 8, 4],
    [2, 1, 4.7, 5.5, 8]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});