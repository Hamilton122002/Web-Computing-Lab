import {useRef} from 'react'
  const Form_2 = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', nameRef.current.value);
    console.log('email:', emailRef.current.value);
    console.log('message:', messageRef.current.value);
  }
  return (
    <div clasName="form2" style={{height: "73vh"}}>
      <h1>Uncontrolled form</h1>
      <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: "25px"}}>
    <label htmlFor="name" style={{display: "block"}}>Name</label>
    <input id="name" type="text" ref={nameRef}/>
    </div>
    <div style={{ marginBottom: "25px"}}>
    <label htmlFor="email" style={{display:"block"}}>Email</label>
    <input id="email" type="email" ref={emailRef}/>
    </div>
    <div style={{ marginBottom: "25px"}}>
    <label htmlFor="message" style={{display: "block"}}>Message</label>
    <textarea id="message" ref={messageRef}/>
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default Form_2;
