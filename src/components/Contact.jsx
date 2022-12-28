import React from 'react'

export default function Contact() {
  return (
   <>
   <div className="container my-4 w-50">
   <h1 className="my-4">Contact Us</h1>
   <form>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" autoComplete="on" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" autoComplete="on" id="exampleInputPassword1"/>
  </div>
  <div className="col-lg-12 ">
  <label htmlFor="floatingTextarea ">Comments</label>
  <textarea className="form-control my-3 h-50" placeholder="Leave a comment here" rows="10" cols="30"></textarea>
</div>
  <div className="mb-3 form-check ">
    <input type="checkbox" className="form-check-input"  autoComplete="on" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
   </>
  )
}
