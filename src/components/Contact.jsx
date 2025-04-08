import React from 'react'

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "85b47293-eebb-4ecb-8683-f715288fe04e");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("");
            alert("Form Submitted Successfully")
            event.target.reset();
          } else {
            console.log("Error", data);
            alert(data.message)
            setResult(data.message);
          }
        };
      
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='text-blue-500'>US</span></h1> 
        <p className='text-lg md:text-xl text-gray-600 mb-12 text-center'>Ready for quality services ? contact us</p> 
      
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Name' required />
            </div>
        </div>
        <div className='my-6 text-left'>
            Message 
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result?result:"send message"}</button>
      </form>
    </div>
  )
}

export default Contact
