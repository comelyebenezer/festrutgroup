import { useState, useEffect } from 'react';
import { UilTimes, UilPlus, UilCheckCircle } from '@iconscout/react-unicons';
import Header from '../__public/__layouts/Header';
import Banner_otherpages from '../__public/__sections/_Banner_otherpages';
import bannerImg from '../../assets/images/otherpages/investor.jpg';

const BookInspection = (props) => {
  useEffect(() => {
    document.title = `${props.company} — Book Inspection`;
  }, [props.company]);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [allocationLetter, setAllocationLetter] = useState(null);
  const [tdp, setTdp] = useState(null);
  const [receipts, setReceipts] = useState([]);
  const [identification, setIdentification] = useState(null);

  const [sendSomeone, setSendSomeone] = useState(false);
  const [authLetter, setAuthLetter] = useState(null);
  const [senderId, setSenderId] = useState(null);
  const [personId, setPersonId] = useState(null);
  const [personName, setPersonName] = useState('');
  const [personPhone, setPersonPhone] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addReceipt = () => {
    setReceipts([...receipts, null]);
  };

  const removeReceipt = (index) => {
    setReceipts(receipts.filter((_, i) => i !== index));
  };

  const handleReceiptFile = (index, file) => {
    const updated = [...receipts];
    updated[index] = file;
    setReceipts(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('fullName', form.fullName);
    formData.append('email', form.email);
    formData.append('phone', form.phone);

    if (allocationLetter) formData.append('allocationLetter', allocationLetter);
    if (tdp) formData.append('tdp', tdp);
    if (identification) formData.append('identification', identification);
    receipts.forEach((r, i) => {
      if (r) formData.append(`receipt_${i}`, r);
    });

    if (sendSomeone) {
      formData.append('sendSomeone', 'true');
      formData.append('personName', personName);
      formData.append('personPhone', personPhone);
      if (authLetter) formData.append('authorizationLetter', authLetter);
      if (senderId) formData.append('senderId', senderId);
      if (personId) formData.append('personId', personId);
    }

    try {
      const response = await fetch('https://your-api-endpoint.com/book-inspection/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <Banner_otherpages title="Book Inspection" image={bannerImg} />
        <div className="sections">
          <div className="book-success">
            <UilCheckCircle size={60} color="#28a745" />
            <h2>Inspection Booked Successfully!</h2>
            <p>We have received your submission. Our team will contact you shortly to confirm your inspection appointment.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Banner_otherpages title="Book Inspection" image={bannerImg} />

      <div className="sections">
        <div className="book-inspection-intro">
          <h2>Schedule a Site Inspection</h2>
          <p>Fill out the form below to book an inspection at Festrut Kingdom Estate, Badna, Orozo. Upload the required documents so we can process your request.</p>
        </div>

        <form onSubmit={handleSubmit} className="book-inspection-form">
          <div className="book-section">
            <h3>Your Information</h3>
            <div className="book-row">
              <div className="book-field">
                <label>Full Name <span>*</span></label>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" required />
              </div>
            </div>
            <div className="book-row">
              <div className="book-field">
                <label>Email Address <span>*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
              <div className="book-field">
                <label>Phone Number <span>*</span></label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+234 800 000 0000" required />
              </div>
            </div>
          </div>

          <div className="book-section">
            <h3>Required Documents</h3>
            <p className="book-hint">Upload your documents one by one.</p>
            <div className="book-row">
              <div className="book-field">
                <label>Allocation Letter</label>
                <input type="file" accept="image/*,application/pdf" onChange={(e) => setAllocationLetter(e.target.files[0])} />
              </div>
              <div className="book-field">
                <label>TDP</label>
                <input type="file" accept="image/*,application/pdf" onChange={(e) => setTdp(e.target.files[0])} />
              </div>
            </div>
            <div className="book-row">
              <div className="book-field">
                <label>Means of Identification</label>
                <input type="file" accept="image/*,application/pdf" onChange={(e) => setIdentification(e.target.files[0])} />
              </div>
            </div>

            <div className="book-field">
              <label>Receipts <span>(You can upload multiple)</span></label>
              {receipts.map((_, i) => (
                <div key={i} className="book-receipt-row">
                  <input type="file" accept="image/*,application/pdf" onChange={(e) => handleReceiptFile(i, e.target.files[0])} />
                  <button type="button" className="book-remove-btn" onClick={() => removeReceipt(i)}><UilTimes /></button>
                </div>
              ))}
              <button type="button" className="book-add-btn" onClick={addReceipt}><UilPlus /> Add another receipt</button>
            </div>
          </div>

          <div className="book-section">
            <label className="book-checkbox">
              <input type="checkbox" checked={sendSomeone} onChange={(e) => setSendSomeone(e.target.checked)} />
              <span>Are you sending someone?</span>
            </label>

            {sendSomeone && (
              <div className="book-someone">
                <h4>Person's Information</h4>
                <div className="book-row">
                  <div className="book-field">
                    <label>Full Name of Person</label>
                    <input type="text" value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="Enter full name" />
                  </div>
                  <div className="book-field">
                    <label>Phone Number of Person</label>
                    <input type="tel" value={personPhone} onChange={(e) => setPersonPhone(e.target.value)} placeholder="+234 800 000 0000" />
                  </div>
                </div>

                <h4>Documents</h4>
                <div className="book-row">
                  <div className="book-field">
                    <label>Authorization Letter</label>
                    <input type="file" accept="image/*,application/pdf" onChange={(e) => setAuthLetter(e.target.files[0])} />
                  </div>
                  <div className="book-field">
                    <label>Your Means of Identification</label>
                    <input type="file" accept="image/*,application/pdf" onChange={(e) => setSenderId(e.target.files[0])} />
                  </div>
                </div>
                <div className="book-row">
                  <div className="book-field">
                    <label>Person's Means of Identification</label>
                    <input type="file" accept="image/*,application/pdf" onChange={(e) => setPersonId(e.target.files[0])} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? <span className="login-spinner"></span> : 'Submit Inspection Request'}
          </button>
        </form>
      </div>
    </>
  );
};

export default BookInspection;
