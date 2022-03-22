import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactForm() {

  const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
      subject: ""
      });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(() => {
        return {
          [name]: value
        };
      });
  }

  function makeVisible(){
      let element = document.getElementById("submitText");
      element.classList.remove("invisible");
    
    }

  function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm("service_lyxdm5a", "template_0ku1x0p", e.target, "user_JmyFU7LsCDhH5vpHThW4P")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setForm({
          name: "",
          email: "",
          message: "",
          subject: "",
      });
      makeVisible();
  }
    return (
        <>
        <div className='text-left'>
                <div className="mb-2 bg-indigo-700 dark:bg-violet-900 rounded-t-lg py-7">
                    <p className="text-white text-center font-bold uppercase">Get in contact!</p>
                </div>

        <form onSubmit={sendEmail}>
                <div>
          <div>
            <label className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">Full Name
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              required
              value={form.name} 
              name="name"
              id="name"
              onChange={handleChange} 
              /></label>

          </div>
  
          <div className="mt-4">
            <label className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">E-Mail Address
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={form.email} 
              required
              onChange={handleChange}
              id="email"
              type="email" 
              name="email"
              /></label>

          </div>
          <div className="mt-4">
            <label className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">Subject
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={form.subject} 
              required
              onChange={handleChange}
              id="subject"
              type="text" 
              name="subject"
              />
              </label>

          </div>
          <div className="mt-4">
            <label className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">Message
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              value={form.message} 
              onChange={handleChange} 
              id="message"
              as="textarea" 
              name="message"
    /></label>
          </div>
          <div className="mt-4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-700 dark:bg-violet-900 hover:bg-indigo-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit"
              >
              Send Message
            </button>
            <p id="submitText" className="text-green-700 invisible">Thank You! We'll get back to you shortly.</p>
          </div>
          </div>

        </form>

        </div>
        </>
    )
}