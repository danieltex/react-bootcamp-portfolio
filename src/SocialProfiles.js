import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const { title, link, image} = this.props.profile;
        return (
            <span>
                <a href={link}>
                    <img src={image} alt={title} style={{ width: '35px', height: '35px', margin: '10px'}} />
                </a>
            </span>
        );
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(profile => <SocialProfile key={profile.id} profile={profile} />)
                    }
                </div>
            </div>
        );
    }
}

export default SocialProfiles;