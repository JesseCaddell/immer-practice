import React from 'react';
import { useImmer } from 'immer';

const UserProfile = () => {
    //state init
    const [userProfile, setUserProfile] = useImmer({
        name: '',
        email: '',
        contactDetails: {
            phone: '',
            address: ''
        },
        preferences: {
            newsletter: false,
            notifications: true
        }
    });

    //function to update
    const updateContactDetails = (newPhone, newAddress) => {
        setUserProfile(draft => {
            draft.contactDetails.phone = newPhone;
            draft.contactDetails.address = newAddress;
        });
    };

    //toggle newsletter
    const toggleNewsSub = () => {
        setUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });
    };

    return (
        <div>
            <h2>User Profile</h2>
            {/* Input fields to update contact details */}
            <div>
                <input
                type="text"
                placeholder="Enter phone number"
                onChange={(e) => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
                />
            </div>
            {/* Button to toggle newsletter subscription */}
            <button onClick={toggleNewsSub}>
                {userProfile.preference.newsletter ? 'Unsubscribe' : 'Subscribe'} to Newsletter
            </button>

            {/* Display current user profile */}
            <div>
                <h3>Current Profile</h3>
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
                <p>Contact Details:</p>
                <p>Phone: {userProfile.contactDetails.phone}</p>
                <p>Address: {userProfile.contactDetails.address}</p>
                <p>Newsletter Subscription: {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
            </div>
        </div>
            
    );
};

export default UserProfile;