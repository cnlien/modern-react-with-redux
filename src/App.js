import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

import faker from 'faker'


const App = () => {

  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          <p>Are you Sure?</p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="John"
          date="Today at 6:00 PM"
          text="Nice Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Bill"
          date="Today at 6:15 PM"
          text="Cool"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
