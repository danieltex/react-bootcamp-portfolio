import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const { title, link, image} = props.profile;
    return (
        <span>
            <a href={link}>
                <img src={image} alt={title} style={{ width: '35px', height: '35px', margin: '10px'}} />
            </a>
        </span>
    );    
}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(profile => <SocialProfile key={profile.id} profile={profile} />)
            }
        </div>
    </div>
)

export default SocialProfiles;