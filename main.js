$(function () {
  $('#btn').click(function () {
    let content = $('#input').val();
    let input;
    let pywal;
    let bootique = '';
    try {
      input = JSON.parse(content);
      // if ()
      pywal = {
        special: {
          background: input.background,
          foreground: input.foreground,
          cursor: input.color[7],
        },
        colors: {},
      };
      for (let i = 0; i < input.color.length; i++) {
        pywal.colors['color' + i] = input.color[i];
      }
      bootique += `background: ${input.background}\n`;
      bootique += `foreground: ${input.foreground}\n`;
      bootique += `cursor: ${input.color[7]}\n`;
      for (let i = 0; i < input.color.length; i++) {
        bootique += `color${i}: ${input.color[i]}\n`;
      }
    }
    catch (e) {
      $('#pywal').val('Please enter a valid color JSON :(');
      $('#bootique').val('Please enter a valid color JSON :(');
      return;
    }
    $('#pywal').val(JSON.stringify(pywal));
    $('#bootique').val(bootique);
  });
});