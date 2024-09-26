import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { Button} from "antd";
import { GoogleCircleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/apiService';
import './AdminLogin.css';
import { Modal } from 'antd';
import { LOGIN_URL } from '../../constants/textConstants';

const AdminLogin = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();  

  const handleSuccess = async (data) => {
    try {
      const response = await apiService.post(`${LOGIN_URL}`, {
        name: data.name,
        email: data.email,
        email_verified: data.email_verified,
        role: 'admin',  // Assuming role is provided here
        ref_id: data.sub, // Assuming `sub` is the Google user ID which is used as ref_id
        
      });

      
      if (response.status === 200) {
        const { jwt, user } = response.data;
        console.log('JWT:', jwt);
        console.log('User Info:', user);
        navigate('/admindashboard')
        
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Show a pop-up if the admin is not registered
        Modal.error({
          title: 'Admin Not Registered',
          content: 'The admin account is not registered. Please contact support or try another account.',
        });
      } else {
        console.error('Error during authentication:', error);
      }
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserInfo(data);
        handleSuccess(data);  
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  return (
    <div>
      <div className="mt-[210px]">
        <h1>Sign up or Sign in</h1>
      </div>
      <div className="mt-[300px]">
        <Button className='supplierLogin-btn' onClick={() => login()}>
          <GoogleCircleFilled className='google-icon' />Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;