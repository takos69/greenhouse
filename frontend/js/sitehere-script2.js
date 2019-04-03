new Chartist.Line('.chart1', {
  labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  series: [
    [12, 9, 3, 2, 4, 8, 7]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});