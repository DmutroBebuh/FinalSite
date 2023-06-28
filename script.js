console.log(jQuery().jquery);



// Submit subscription form using Ajax
$('#subcriptionForm').on('submit', function (e) {
  e.preventDefault();
  var $form = $(this);
  $.ajax({
    type: 'POST',
    url: 'subscriptionAjax.php',
    data: $form.serialize()
  }).done(function () {
    $form[0].reset()
    alert('Thank you for the subscription!')
  }).fail(function () {
alert('Something went wrong')
  });
});
