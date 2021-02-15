import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Are you sure you want to continue?</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4 PM" text="yabadabadoo" image={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2 AM" text="ka;ksdmas;d" image={faker.image.image()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jack" timeAgo="Today at 2 PM" text="woooga" image={faker.image.image()} />
            </ApprovalCard>


        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));