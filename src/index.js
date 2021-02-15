import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4 PM" text="yabadabadoo" image={faker.image.image()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2 AM" text="ka;ksdmas;d" image={faker.image.image()}/>
            <CommentDetail author="Jack" timeAgo="Today at 2 PM" text="woooga" image={faker.image.image()}/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));