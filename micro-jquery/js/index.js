$(function () {
  // Add new todo
  $('#addBtn').click(function () {
    var todoText = $('#todoInput').val();
    if (todoText !== '') {
      $('#todoList').append('<li>' + todoText + '</li>');
      $('#todoInput').val('');
    } else {
      alert('Please enter a todo!');
    }
  });

  // Remove todo when clicked
  $(document).on('click', 'li', function () {
    $(this).remove();
  });
});
