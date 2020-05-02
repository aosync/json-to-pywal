$(function () {
  $('#btn').click(function () {
    let content = $('#input').val();
    let input;
    let output;
    try {
      input = JSON.parse(content);
      output = {
        special: {
          background: input.background,
          foreground: input.foreground,
          cursor: input.color[7],
        },
        colors: {},
      };
      for (let i = 0; i < input.color.length; i++) {
        output.colors['color' + i] = input.color[i];
      }
    }
    catch (e) {
      $('#output').val('Please enter a valid color JSON :(');
      return;
    }
    $('#output').val(JSON.stringify(output));
  });
});