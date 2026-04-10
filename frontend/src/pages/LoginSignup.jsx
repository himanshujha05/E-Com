import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './LoginSignup.css';

const LoginSignup = () => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register } = useShop();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'login') {
        await login(formData.email, formData.password);
      } else {
        if (!formData.name.trim()) {
          setError('Name is required');
          setLoading(false);
          return;
        }
        await register(formData.name, formData.email, formData.password);
      }
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>

        {error && <p className='loginsignup-error'>{error}</p>}

        <form onSubmit={handleSubmit} className='loginsignup-fields'>
          {mode === 'signup' && (
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />

          <button type='submit' disabled={loading}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Continue'}
          </button>
        </form>

        {mode === 'login' ? (
          <p className='loginsignup-login'>
            Don't have an account?{' '}
            <span onClick={() => setMode('signup')}>Sign Up here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Already have an account?{' '}
            <span onClick={() => setMode('login')}>Login here</span>
          </p>
        )}

        {mode === 'signup' && (
          <div className='loginsignup-agree'>
            <input type='checkbox' required />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
