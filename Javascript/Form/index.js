const detail=(event)=>{
    event.preventDefault()
    const name=document.querySelector('.name').value
    console.log(name);
    const email=document.querySelector('.email').value
    console.log(email);
    const mobile=document.querySelector('.mobile-no').value
    console.log(mobile);
    const password=document.querySelector('.password').value
    console.log(mobile);

  const userData={
    name:name,
    email:email,
    mobile:mobile,
    password:password
  }
  localStorage.setItem("studentList",JSON.stringify(userData))

    document.querySelector('.name').value=""
    document.querySelector('.email').value=""
    document.querySelector('.mobile-no').value=""
    document.querySelector('.password').value=""
}