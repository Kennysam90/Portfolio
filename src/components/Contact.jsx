
import Zigzag from './Zigzag';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = '/api/contact/';

/**
 * Contact Component
 * Renders the contact section with sidebar and form
 */
const Contact = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fetch all contact messages (optional, if you want to display them)
  const { data: messages = [] } = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => (await axios.get(API_BASE)).data,
  });

  // Mutation to send a new message
  const mutation = useMutation({
    mutationFn: async (data) => await axios.post(API_BASE, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
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
    <section id="contact" className="section">
      <div className="container">
        <div className="row wave-bg">
          <Zigzag />

          {/* Left sidebar */}
          <div className="col-md-4 wow slideInLeft">
            <div className="section-sidebar">
              <h2><span className="point">Contact</span></h2>
              <div className="opacity-box">
                <p>
                  Are you working on something great? I would love to help make it
                  happen! Drop me a letter and start your project right now! Just
                  do it.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="wow slideInRight js-footer-form" onSubmit={handleSubmit}>
            <div className="form-wrapper">

              <div className="col-md-3">
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

              <div className="col-md-5">
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

                <div className="submit-holder">
                  <input className="site-btn" type="submit" value="Send message" />
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
