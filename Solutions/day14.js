// Error Handling

try {
  let firstname = 'Hari';
  //let lastname = 'Mahat';
  let fullName = firstname + lastname;
} catch (err) {
  console.log('customized error');
} finally {
  console.log('In any case I will be executed');
}
