import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email_address: "",
    first_name: "",
    last_name: "",
    f_message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load Mautic SDK
    if (typeof window.MauticSDKLoaded === 'undefined') {
      window.MauticSDKLoaded = true;
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://mautic.skyocean.io/media/js/mautic-form.js?v16e95a41';
      script.onload = function() {
        window.MauticSDK.onLoad();
      };
      head.appendChild(script);
      window.MauticDomain = 'https://mautic.skyocean.io';
      window.MauticLang = {
        'submittingMessage': "Please wait..."
      };
    } else if (typeof window.MauticSDK !== 'undefined') {
      window.MauticSDK.onLoad();
    }
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // The form will be handled by Mautic's form handler
    setLoading(true);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Join Us.</h3>

        <div id="mauticform_wrapper_mvpsignup" className="mauticform_wrapper">
          <form 
            ref={formRef}
            autoComplete="false" 
            role="form" 
            method="post" 
            action="https://mautic.skyocean.io/form/submit?formId=1" 
            id="mauticform_mvpsignup" 
            data-mautic-form="mvpsignup" 
            encType="multipart/form-data"
            className="flex flex-col gap-8"
          >
            <div className="mauticform-error" id="mauticform_mvpsignup_error"></div>
            <div className="mauticform-message" id="mauticform_mvpsignup_message"></div>
            <div className="mauticform-innerform">
              <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                
                <div id="mauticform_mvpsignup_email_address" className="mauticform-row mauticform-email mauticform-field-1 mauticform-required flex flex-col" data-validate="email_address" data-validation-type="email">
                  <label id="mauticform_label_mvpsignup_email_address" htmlFor="mauticform_input_mvpsignup_email_address" className="mauticform-label text-white font-medium mb-4">Email Address</label>
                  <input 
                    type="email" 
                    name="mauticform[email_address]" 
                    id="mauticform_input_mvpsignup_email_address" 
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mauticform-input"
                    value={form.email_address}
                    onChange={(e) => setForm({...form, email_address: e.target.value})}
                    placeholder="What's your email address?"
                  />
                  <span className="mauticform-errormsg" style={{display: 'none'}}>This is required.</span>
                </div>
                
                <div id="mauticform_mvpsignup_first_name" className="mauticform-row mauticform-text mauticform-field-2 mauticform-required flex flex-col" data-validate="first_name" data-validation-type="text">
                  <label id="mauticform_label_mvpsignup_first_name" htmlFor="mauticform_input_mvpsignup_first_name" className="mauticform-label text-white font-medium mb-4">First Name</label>
                  <input 
                    type="text" 
                    name="mauticform[first_name]" 
                    id="mauticform_input_mvpsignup_first_name" 
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mauticform-input"
                    value={form.first_name}
                    onChange={(e) => setForm({...form, first_name: e.target.value})}
                    placeholder="What's your first name?"
                  />
                  <span className="mauticform-errormsg" style={{display: 'none'}}>This is required.</span>
                </div>
                
                <div id="mauticform_mvpsignup_last_name" className="mauticform-row mauticform-text mauticform-field-3 mauticform-required flex flex-col" data-validate="last_name" data-validation-type="text">
                  <label id="mauticform_label_mvpsignup_last_name" htmlFor="mauticform_input_mvpsignup_last_name" className="mauticform-label text-white font-medium mb-4">Last Name</label>
                  <input 
                    type="text" 
                    name="mauticform[last_name]" 
                    id="mauticform_input_mvpsignup_last_name" 
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mauticform-input"
                    value={form.last_name}
                    onChange={(e) => setForm({...form, last_name: e.target.value})}
                    placeholder="What's your last name?"
                  />
                  <span className="mauticform-errormsg" style={{display: 'none'}}>This is required.</span>
                </div>
                
                <div id="mauticform_mvpsignup_f_message" className="mauticform-row mauticform-text mauticform-field-4 flex flex-col">
                  <label id="mauticform_label_mvpsignup_f_message" htmlFor="mauticform_input_mvpsignup_f_message" className="mauticform-label text-white font-medium mb-4">Message</label>
                  <textarea 
                    name="mauticform[f_message]" 
                    id="mauticform_input_mvpsignup_f_message" 
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium mauticform-textarea"
                    rows={7}
                    value={form.f_message}
                    onChange={(e) => setForm({...form, f_message: e.target.value})}
                    placeholder="Your message"
                  ></textarea>
                  <span className="mauticform-errormsg" style={{display: 'none'}}></span>
                </div>
                
                <div id="mauticform_mvpsignup_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-5 mt-4">
                  <button 
                    type="submit"
                    name="mauticform[submit]" 
                    id="mauticform_input_mvpsignup_submit" 
                    value="1"
                    className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mauticform-button"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
            <input type="hidden" name="mauticform[formId]" id="mauticform_mvpsignup_id" value="1" />
            <input type="hidden" name="mauticform[return]" id="mauticform_mvpsignup_return" value="" />
            <input type="hidden" name="mauticform[formName]" id="mauticform_mvpsignup_name" value="mvpsignup" />
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
