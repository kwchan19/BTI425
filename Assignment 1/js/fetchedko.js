$(function () {
    ajaxReq(
      {
        url: 'https://lit-coast-73093.herokuapp.com/projects',
        type: 'GET'
      },
      res => {
        model = res
        load({ myvm: { model } }) 
      },
      err => console.log(err)
    )
})
  
 self.save = function(project) {
    ajaxReq(
      {
        url: `https://lit-coast-73093.herokuapp.com/project/${project._id}`,
        type: 'PUT',
        data: JSON.stringify(project),
        contentType: 'application/json' 
    },
    () => console.log('Project updated'),
    () => console.log('Unable to update the project')
  )
}