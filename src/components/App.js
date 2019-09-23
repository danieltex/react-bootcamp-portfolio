import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

import profileImage from '../assets/profile.jpg';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render () {
        const bio = this.state.displayBio ?  (
            <div>
                <p>I live in blablabla</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Posuere lorem ipsum dolor sit amet consectetur. Ligula ullamcorper malesuada proin libero nunc. Sodales neque sodales ut etiam sit amet nisl. Metus aliquam eleifend mi in nulla. Tellus molestie nunc non blandit. Ultricies tristique nulla aliquet enim. Neque viverra justo nec ultrices dui sapien eget mi proin. At tempor commodo ullamcorper a lacus vestibulum. Euismod elementum nisi quis eleifend quam. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet..</p>
                <button onClick={ this.toggleDisplayBio }>Show less</button>
            </div>
        ) : (
            <div>
                <button onClick={  this.toggleDisplayBio }>Read more</button>
            </div>
        );

        return (
            <div>
                <img src={profileImage} alt='profile' className='profile-image' />
                <h1>Hello!</h1>
                <p>My name is Daniel Santos.</p>
                <Title />
                <p>Mauris sit amet massa vitae tortor condimentum lacinia. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Sit amet venenatis urna cursus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Nibh sit amet commodo nulla facilisi. Nibh sit amet commodo nulla facilisi nullam vehicula. Suspendisse potenti nullam ac tortor vitae. Sit amet mauris commodo quis imperdiet massa tincidunt. Scelerisque viverra mauris in aliquam sem fringilla ut. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Tellus mauris a diam maecenas.</p>
                {bio}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;
