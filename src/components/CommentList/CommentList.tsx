import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="comments">
      <h3>
        Comments:
      </h3>
      {comments.map((comment) => (
        <div className="comments__body" key={comment.id}>
          <CommentInfo comment={comment} />
        </div>
      ))}
    </div>
  );
};