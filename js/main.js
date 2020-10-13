document.addEventListener('DOMContentLoaded', function(){
  console.log('JS!!!');
});


function toggleProjects(id){
  var projects = document.getElementById(id);
  projects.style.display = projects.style.display == 'none' ? 'flex' : 'none';
}
