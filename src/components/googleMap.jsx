import React from 'react'

const googleMap = () => {
  return (
      <iframe className='w-full hidden w-[600px] h-[500px] xl:block'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6763.488306869276!2d35.88243931531908!3d32.049115892881595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9f003b6d7115%3A0x116dcb8734a08995!2zRGVudGFsIGNsaW5pYyAtIERyLiBOYWJpbCBBcWVsICwg2LnZitin2K_ZhyDYp9iz2YbYp9mGIC0g2KfZhNiv2YPYqtmI2LEg2YbYqNmK2YQg2LnZgtmE!5e0!3m2!1sen!2sjo!4v1739201362237!5m2!1sen!2sjo"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
}

export default googleMap