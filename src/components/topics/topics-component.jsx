import React from 'react';

const TopicsComponent = ({ topics, onTopicCreate }) => {
  const topicsList = topics.map((topic, ind) => <p key={ind}>{topic}</p>);
  return (
    <div>
      <h3>Topics</h3>
      <hr />
      <button type="submit" onClick={onTopicCreate}>
        Create topic
      </button>
      <div>{topicsList}</div>
    </div>
  );
};

export default TopicsComponent;
