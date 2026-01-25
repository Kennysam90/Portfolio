import  { useState } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = '/api/contact/';

const ContactModal = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const mutation = useMutation({
    mutationFn: async (data) => await axios.post(API_BASE, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']); // optional
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div
      className="modal fade"
      id="contact-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="portfolio-modal"
    >
      <div className="modal-dialog modal-center" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-title">
              <h1><span className="point">Let's work together</span></h1>
            </div>
            <div className="modal-description">
              <p>
                Are you working on something great? I would love to help make it
                happen! Drop me a letter and start your project right now! Just do it.
              </p>
            </div>

            <div className="modal-form">
              <form className="js-modal-form" onSubmit={handleSubmit}>
                <div className="row form-wrapper">

                  <div className="col-lg-5 col-md-5">
                    <div className="form-group">
                      <input
                        className="form-field js-field-name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-field js-field-email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-7">
                    <div className="form-group">
                      <textarea
                        className="form-field js-field-message"
                        name="message"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="submit-holder">
                      <input
                        className="site-btn js-submit-contact"
                        type="submit"
                        value="Send message"
                      />
                      <a
                        href="#"
                        className="site-btn gray-btn"
                        data-dismiss="modal"
                      >
                        Back to cv
                      </a>
                    </div>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
