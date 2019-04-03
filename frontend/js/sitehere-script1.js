new Chartist.Line('.chart1', {
  labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  series: [
    [12, 9, 3, 8, 4, 10, 12],
    [2, 2, 9, 7, 8, 1, 12],
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});